import React, { ReactNode, useState } from 'react'

import Footer from '../footer'
import Header from '../header'

import {
  getDocumentHeight,
  getWindowInnerWidth
} from '../../utils/utils'

import usePopulateElements from '../../hooks/usePopulateElements'
import useRepopulateElements from '../../hooks/useRepopulateElements'

import '@fortawesome/fontawesome-pro/css/all.min.css'
import '@fontsource/lora/400-italic.css'


type LayoutProps = {
  children: ReactNode,
  location: Location
}

const Layout = ({
  children,
  location
}: LayoutProps) => {
  const [height, setHeight] = useState(getDocumentHeight)
  const [width, setWidth] = useState(getWindowInnerWidth)

  usePopulateElements(setHeight, setWidth)
  useRepopulateElements(height, width)

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
