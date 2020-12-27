import React, { FC, ReactNode, useState, useEffect } from 'react'
import { Location } from '@reach/router'

import Footer from '../footer'
import Header from '../header'

import {
  removeElementsByClass,
  getDocumentHeight,
  getWindowInnerWidth
} from '../../utils/utils'

import {
  squareSolid,
  squareOutline,
  triangles,
  bolts,
  waves,
  createShapeElement
} from '../../utils/memphis'

import '@fortawesome/fontawesome-pro/css/all.min.css'
import 'typeface-lora'
import 'font-proxima-nova/style.css'


type LayoutProps = {
  children: ReactNode,
  location: Location
}

const Layout: FC<LayoutProps> = ({
  children
}: LayoutProps) => {
  const [height, setHeight] = useState(getDocumentHeight)
  const [width, setWidth] = useState(getWindowInnerWidth)

  useEffect(() => {
    setTimeout(() => {
      // Initialize the solid squares
      for (let i = 0; i < 10; i++) {
        createShapeElement(squareSolid)
      }
      // Initialize the outline squares
      for (let i = 0; i < 7; i++) {
        createShapeElement(squareOutline)
      }
      // Initialize the triangles
      for (let i = 0; i < 7; i++) {
        createShapeElement(triangles)
      }
      // Initialize the bolts
      for (let i = 0; i < 5; i++) {
        createShapeElement(bolts)
      }
      // Initialize the waves
      for (let i = 0; i < 20; i++) {
        createShapeElement(waves)
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

  useEffect(() => {
    const removeElements = (populateElements) => {
      removeElementsByClass('outer-square-solid')
      removeElementsByClass('outer-square-outline')
      removeElementsByClass('outer-triangle')
      removeElementsByClass('outer-bolt')
      removeElementsByClass('outer-wave')

      populateElements()
    }

    const populateElements = () => {
      // Re-draw the solid squares
      for (let i = 0; i < 10; i++) {
        createShapeElement(squareSolid)
      }
      // Re-draw the outline squares
      for (let i = 0; i < 7; i++) {
        createShapeElement(squareOutline)
      }
      // Re-draw the triangles
      for (let i = 0; i < 7; i++) {
        createShapeElement(triangles)
      }
      // Re-draw the bolts
      for (let i = 0; i < 5; i++) {
        createShapeElement(bolts)
      }
      // Re-draw the waves
      for (let i = 0; i < 20; i++) {
        createShapeElement(waves)
      }
    }

    removeElements(populateElements)
  }, [width, height])

  return (
    <React.Fragment>
      <div
        id="canvas"
        className="relative flex flex-col justify-between"
      >
        <div className="z-10">
          <Header location={location} />
            {children}
          <Footer location={location} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Layout
