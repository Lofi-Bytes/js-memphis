import React, { FC, ReactNode } from 'react'

import Navigation from '../navigation'


const Header: FC<ReactNode> = ({}) => {
  return (
    <React.Fragment>
      <header className="bg-indigo-400 bg-opacity-30 w-full py-6 px-8">
        <div className="flex items-center justify-between max-w-screen-lg m-auto">
          <div className="logo z-5">
            <p className="js text-4xl text-teal-100 font-semibold">JS</p>
          </div>
          <Navigation />
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header
