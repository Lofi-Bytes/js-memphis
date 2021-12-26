import * as React from 'react'

import Footer from '../footer'
import Header from '../header'

import {
  formatClassList,
  getDocumentHeight,
  getWindowInnerWidth,
  joinStrings
} from '../../utils/utils'

import usePopulateElements from '../../hooks/usePopulateElements'
import useRepopulateElements from '../../hooks/useRepopulateElements'

import '@fortawesome/fontawesome-pro/css/all.min.css'
import '@fontsource/lora/400-italic.css'


type LayoutProps = {
  children: React.ReactNode,
  className?: string,
  location: Location
}

const LAYOUT = `
  flex
  flex-col
  justify-between
  relative
`

const Layout = ({
  children,
  className,
  location
}: LayoutProps) => {
  const [height, setHeight] = React.useState(getDocumentHeight)
  const [width, setWidth] = React.useState(getWindowInnerWidth)

  usePopulateElements(setHeight, setWidth)
  useRepopulateElements(height, width)

  const formattedLayout = formatClassList(LAYOUT)
  const formattedClassList = className
                              ? joinStrings(' ', formattedLayout, className)
                              : formattedLayout

  return (
    <div
      id="canvas"
      className={formattedClassList}
    >
      <div className="z-10">
        <Header location={location} />
          {children}
        <Footer location={location} />
      </div>
    </div>
  )
}

export default Layout
