import React, { useEffect } from 'react'

import {
  getDocumentHeight,
  getWindowInnerWidth
} from '../utils/utils'

import {
  squareSolid,
  squareOutline,
  heart,
  triangle,
  bolt,
  wave,
  createShapeElement
} from '../utils/memphis'


export default function usePopulateElements(setHeight, setWidth) {
  useEffect(() => {
    setTimeout(() => {
      // Initialize the solid squares
      for (let i = 0; i < 5; i++) {
        createShapeElement(squareSolid)
      }
      // Initialize the outline squares
      for (let i = 0; i < 7; i++) {
        createShapeElement(squareOutline)
      }
      // Initialize the outline hearts
      for (let i = 0; i < 10; i++) {
        createShapeElement(heart)
      }
      // Initialize the triangles
      for (let i = 0; i < 7; i++) {
        createShapeElement(triangle)
      }
      // Initialize the bolts
      for (let i = 0; i < 5; i++) {
        createShapeElement(bolt)
      }
      // Initialize the waves
      for (let i = 0; i < 20; i++) {
        createShapeElement(wave)
      }
    }, 350)

    const handleWindowResize = () => {
      setWidth(getWindowInnerWidth)
      setHeight(getDocumentHeight)
    }

    typeof window !== `undefined`
      ? window.addEventListener("resize", handleWindowResize)
      : null

    return () => {
      typeof window !== `undefined`
        ? window.removeEventListener("resize", handleWindowResize)
        : null
    }
  }, [])
}
