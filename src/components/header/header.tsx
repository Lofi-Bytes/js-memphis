import React, { FC, ReactNode } from 'react'
import { Link } from 'gatsby'

import Navigation from '../navigation'


const Header: FC<ReactNode> = ({}: ReactNode) => {
  return (
    <React.Fragment>
      <div className="flex items-center justify-center w-full bg-gray-900 p-1 opacity-75">
        <p className="text-gray-50 text-lg"><strong>All</strong> Black Lives Matter</p>
      </div>
      <header className="bg-indigo-700 bg-opacity-30 w-full py-6 px-8">
        <div className="flex items-center justify-between max-w-screen-lg m-auto z-5">
          <Link
            to="/"
            className="js text-4xl font-semibold text-teal-100 hover:text-pink-200 focus:text-pink-200 active:text-pink-300 hover:cursor-pointer duration-200 focus:outline-none focus:ring focus:ring-teal-200 rounded pt-3 px-2 pb-1"
          >
            JS
          </Link>
          <Navigation />
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header
