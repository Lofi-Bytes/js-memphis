import React, { FC, ReactNode } from 'react'
import { Link } from 'gatsby'

import Navigation from '../navigation'


const Header: FC<ReactNode> = ({}: ReactNode) => {
  return (
    <React.Fragment>
      <header className="bg-indigo-400 bg-opacity-50 w-full py-6 px-8">
        <div className="flex items-center justify-between max-w-screen-lg m-auto">
          <div className="logo z-5">
            <Link
              to="/"
            >
              <p className="js text-4xl text-teal-100 font-semibold">JS</p>
            </Link>
          </div>
          <Navigation />
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header
