import * as React from 'react'

import { removeElementsByClass } from '../utils/utils'

import {
  squareSolid,
  squareOutline,
  heart,
  triangle,
  bolt,
  wave,
  createShapeElement
} from '../utils/memphis'


export default function usePopulateElements(height, width) {
  React.useEffect(() => {
    const removeElements = (populateElements) => {
      removeElementsByClass('outer-square-solid')
      removeElementsByClass('outer-square-outline')
      removeElementsByClass('outer-heart')
      removeElementsByClass('outer-triangle')
      removeElementsByClass('outer-bolt')
      removeElementsByClass('outer-wave')

      populateElements()
    }

    const populateElements = () => {
      // Re-draw the solid squares
      for (let i = 0; i < 5; i++) {
        createShapeElement(squareSolid)
      }
      // Re-draw the outline squares
      for (let i = 0; i < 7; i++) {
        createShapeElement(squareOutline)
      }
      // Initialize the outline hearts
      for (let i = 0; i < 10; i++) {
        createShapeElement(heart)
      }
      // Re-draw the triangles
      for (let i = 0; i < 7; i++) {
        createShapeElement(triangle)
      }
      // Re-draw the bolts
      for (let i = 0; i < 5; i++) {
        createShapeElement(bolt)
      }
      // Re-draw the waves
      for (let i = 0; i < 15; i++) {
        createShapeElement(wave)
      }
    }

    removeElements(populateElements)
  }, [width, height])
}
