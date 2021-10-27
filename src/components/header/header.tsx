import React, { FC, ReactNode } from 'react'
import { Link } from 'gatsby'

import Navigation from '../navigation'


type HeaderProps = {
  location: Location
}

const Header: FC<HeaderProps> = ({
  location
}: HeaderProps) => {
  return (
    <React.Fragment>
      <div className="flex items-center justify-center w-full p-1 bg-stone-900 opacity-75">
        <p className="text-lg text-stone-50"><strong>All</strong> Black Lives Matter</p>
      </div>
      <header className="w-full px-8 py-6 bg-indigo-700 bg-opacity-30">
        <div className="flex items-center justify-between max-w-screen-lg m-auto z-5">
          <Link
            to="/"
            className="px-2 pt-3 pb-1 text-4xl font-semibold text-teal-100 duration-200 rounded js hover:text-pink-200 focus:text-pink-200 active:text-pink-300 hover:cursor-pointer focus:outline-none focus:ring focus:ring-teal-200"
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
