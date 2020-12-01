import React, { FC, ReactNode, useState, useEffect } from 'react'

import Footer from '../footer'
import Header from '../header'

import {
  removeElementsByClass,
  getWindowInnerHeight,
  getWindowInnerWidth
} from '../../utils/utils'

import {
  createSquaresSolid,
  createSquaresOutline,
  createTriangles,
  createBolts,
  createWave
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
  const [height, setHeight] = useState(getWindowInnerHeight)
  const [width, setWidth] = useState(getWindowInnerWidth)

  useEffect(() => {
    setTimeout(() => {
      // Initialize the solid squares
      for (let i = 0; i < 10; i++) {
        createSquaresSolid()
      }
      // Initialize the outline squares
      for (let i = 0; i < 7; i++) {
        createSquaresOutline()
      }
      // Initialize the triangles
      for (let i = 0; i < 7; i++) {
        createTriangles()
      }
      // Initialize the bolts
      for (let i = 0; i < 5; i++) {
        createBolts()
      }
      // Initialize the waves
      for (let i = 0; i < 20; i++) {
        createWave()
      }
    }, 350)

    const handleWindowResize = () => {
      setWidth(getWindowInnerWidth)
      setHeight(getWindowInnerHeight)
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
        createSquaresSolid()
      }
      // Re-draw the outline squares
      for (let i = 0; i < 7; i++) {
        createSquaresOutline()
      }
      // Re-draw the triangles
      for (let i = 0; i < 7; i++) {
        createTriangles()
      }
      // Re-draw the bolts
      for (let i = 0; i < 5; i++) {
        createBolts()
      }
      // Re-draw the waves
      for (let i = 0; i < 20; i++) {
        createWave()
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
