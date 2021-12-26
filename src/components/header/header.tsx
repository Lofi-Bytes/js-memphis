import * as React from 'react'
import { Link } from 'gatsby'

import Navigation from '../navigation'

import {
  formatClassList,
  joinStrings
} from '../../utils/utils'


type HeaderProps = {
  className?: string,
  location: Location
}

const HEADER_WRAPPER = `
  bg-stone-900
  flex
  items-center
  justify-center
  opacity-75
  p-1
  w-full
`

const BLM_BANNER = `
  text-lg
  text-stone-50
`

const HEADER = `
  bg-indigo-700
  bg-opacity-30
  px-8
  py-6
  w-full
`

const NAVIGATION = `
  flex
  items-center
  justify-between
  m-auto
  max-w-screen-lg
  z-5
`

const JS = `
  active:text-pink-300
  duration-200
  focus:outline-none
  focus:ring
  focus:ring-teal-200
  focus:text-pink-200
  font-semibold
  hover:cursor-pointer
  hover:text-pink-200
  js
  pb-1
  pt-3
  px-2
  rounded
  text-4xl
  text-teal-100
`

const Header = ({
  className,
  location
}: HeaderProps) => {
  const formattedHeaderWrapper = formatClassList(HEADER_WRAPPER)
  const formattedClassList = className
                              ? joinStrings(' ', formattedHeaderWrapper, className)
                              : formattedHeaderWrapper
  const formattedBlmBanner = formatClassList(BLM_BANNER)
  const formattedHeader = formatClassList(HEADER)
  const formattedNavigation = formatClassList(NAVIGATION)
  const formattedJs = formatClassList(JS)

  return (
    <React.Fragment>
      <div className={formattedClassList}>
        <p className={formattedBlmBanner}><strong>All</strong> Black Lives Matter</p>
      </div>
      <header className={formattedHeader}>
        <div className={formattedNavigation}>
          <Link
            to="/"
            className={formattedJs}
          >
            JS
          </Link>
          <Navigation location={location} />
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header
