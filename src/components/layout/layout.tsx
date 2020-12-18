import React, { FC, ReactNode, useState, useEffect } from 'react'

import Footer from '../footer'
import Header from '../header'

import {
  removeElementsByClass,
  getDocumentHeight,
  getWindowInnerWidth
} from '../../utils/utils'

import {
  // createSquaresSolid,
  createSquaresOutline,
  createTriangles,
  createBolts,
  createWave,
  createShapeElement
} from '../../utils/memphis'

import '@fortawesome/fontawesome-pro/css/all.min.css'
import 'typeface-lora'
import 'font-proxima-nova/style.css'


type LayoutProps = {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({
  children
}: LayoutProps) => {
  const [height, setHeight] = useState(getDocumentHeight)
  const [width, setWidth] = useState(getWindowInnerWidth)

  const squareSolid = {
    bordered: false,
    colors: [
      '#FB7185', // rose 400
      '#F472B6', // pink 400
      '#38BDF8' // lightBlue 400
    ],
    degrees: 90,
    icon: false,
    innerClassArray: ['inner-square-solid'],
    innerElementType: 'div',
    max: 220,
    min: 60,
    outerClassArray: ['outer-square-solid'],
    outerElementType: 'div'
  }

  const squareOutline = {
    bordered: true,
    colors: [
      '#5EEAD4', // teal 300
      '#FAFAF9' // warm gray 50
    ],
    icon: false,
    innerClassArray: ['inner-square-outline'],
    innerElementType: 'div',
    max: 120,
    min: 20,
    outerClassArray: ['outer-square-outline'],
    outerElementType: 'div'
  }

  const triangles = {
    bordered: true,
    colors: [
      '#A78BFA', // violet 400
      '#38BDF8', // lightBlue 400
    ],
    icon: true,
    innerClassArray: ['inner-triangle', `fal`, `fa-triangle`],
    innerElementType: 'i',
    max: 100,
    min: 40,
    outerClassArray: ['outer-triangle'],
    outerElementType: 'div'
  }

  const bolts = {
    bordered: true,
    colors: [
      '#FEF08A', // yellow 200
      '#67E8F9', // cyan 300
    ],
    icon: true,
    innerClassArray: ['inner-bolt', `fal`, `fa-bolt`],
    innerElementType: 'i',
    max: 80,
    min: 40,
    outerClassArray: ['outer-bolt'],
    outerElementType: 'div'
  }

  const waves = {
    bordered: true,
    colors: [
      '#1C1917' // warm gray 900
    ],
    icon: true,
    innerClassArray: ['inner-wave', `fal`, `fa-water`],
    innerElementType: 'i',
    max: 60,
    min: 20,
    outerClassArray: ['outer-wave'],
    outerElementType: 'div'
  }

  useEffect(() => {
    setTimeout(() => {
      // Initialize the solid squares
      for (let i = 0; i < 10; i++) {
        // createSquaresSolid()
        createShapeElement(squareSolid)
      }
      // Initialize the outline squares
      for (let i = 0; i < 7; i++) {
        // createSquaresOutline()
        createShapeElement(squareOutline)
      }
      // Initialize the triangles
      for (let i = 0; i < 7; i++) {
        // createTriangles()
        createShapeElement(triangles)
      }
      // Initialize the bolts
      for (let i = 0; i < 5; i++) {
        // createBolts()
        createShapeElement(bolts)
      }
      // Initialize the waves
      for (let i = 0; i < 20; i++) {
        // createWave()
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
        // createSquaresSolid()
        createShapeElement(squareSolid)
      }
      // Re-draw the outline squares
      for (let i = 0; i < 7; i++) {
        // createSquaresOutline()
        createShapeElement(squareOutline)
      }
      // Re-draw the triangles
      for (let i = 0; i < 7; i++) {
        // createTriangles()
        createShapeElement(triangles)
      }
      // Re-draw the bolts
      for (let i = 0; i < 5; i++) {
        // createBolts()
        createShapeElement(bolts)
      }
      // Re-draw the waves
      for (let i = 0; i < 20; i++) {
        // createWave()
        createShapeElement(waves)
      }
    }

    removeElements(populateElements)
  }, [width, height])

  return (
    <React.Fragment>
      <div
        id="canvas"
        className="flex flex-col justify-between relative"
      >
        <div className="z-10">
          <Header />
            {children}
          <Footer />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Layout
