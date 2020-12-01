import React, { FC, ReactNode } from 'react'


const Header: FC<ReactNode> = ({}) => {
  return (
    <React.Fragment>
      <header className="bg-indigo-400 bg-opacity-30 w-full py-6 px-8">
        <div className="flex justify-center items-center justify-between max-w-screen-lg m-auto">
          <div className="logo z-5">
            <p className="js text-4xl text-gray-50 font-semibold">JS</p>
          </div>
          <div className="nav flex justify-center items-center justify-between text-gray-50">
            <p className="text-base tracking-wider">Writing</p>
            <p className="ml-6 text-base tracking-wider">Speaking</p>
            <p className="ml-6 text-base tracking-wider">Projects</p>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header
