import React, { FC, ReactNode } from 'react'

import MobileNavigation from '../mobile-navigation'
import FooterNavigation from '../footer-navigation'



const Footer: FC<ReactNode> = ({}: ReactNode) => {
  return (
    <React.Fragment>
      <footer className="flex flex-col justify-center items-center bg-indigo-700 bg-opacity-70 w-full h-40 mb-8 sm:mb-0">
        <div className="flex justify-center items-center relative">
          <div>
            <a
              href="https://github.com/lofi-bytes"
              aria-label="Jillian's Github"
              title="Jillian's Github"
              className="text-3xl text-teal-100 hover:text-pink-200 focus:text-pink-200 active:text-pink-300 hover:cursor-pointer duration-200 focus:outline-none focus:ring focus:ring-teal-200 rounded py-1 px-2"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
          <div className="ml-6">
            <a
              href="https://twitter.com/LofiBytes/"
              aria-label="Jillian's Twitter"
              title="Jillian's Twitter"
              className="text-3xl text-teal-100 hover:text-pink-200 focus:text-pink-200 active:text-pink-300 hover:cursor-pointer duration-200 focus:outline-none focus:ring focus:ring-teal-200 rounded py-1 px-2"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <div className="ml-6">
            <a
              href="https://codepen.io/LofiBytes"
              aria-label="Jillian's CodePen"
              title="Jillian's CodePen"
              className="text-3xl text-teal-100 hover:text-pink-200 focus:text-pink-200 active:text-pink-300 hover:cursor-pointer duration-200 focus:outline-none focus:ring focus:ring-teal-200 rounded py-1 px-2"
            >
              <i className="fab fa-codepen"></i>
            </a>
          </div>
          <div className="ml-6">
            <a
              href="https://dev.to/lofibytes"
              aria-label="Jillian's DEV Profile"
              title="Jillian's DEV Profile"
              className="text-3xl text-teal-100 hover:text-pink-200 focus:text-pink-200 active:text-pink-300 hover:cursor-pointer duration-200 focus:outline-none focus:ring focus:ring-teal-200 rounded py-1 px-2"
            >
              <i className="fab fa-dev"></i>
            </a>
          </div>
        </div>
        <p className="text-teal-100 text-center text-sm sm:hidden pb-6 px-6 pt-4">
          Material &amp; content copyright &copy; {new Date().getFullYear()} Jillian Serenity. All rights reserved.
        </p>
        <FooterNavigation />
      </footer>
      <div className="w-full bg-indigo-700 bg-opacity-70 pb-2 hidden sm:block">
        <p className="text-teal-100 text-center text-sm">
          Material &amp; content copyright &copy; {new Date().getFullYear()} Jillian S. Estrella. All rights reserved.
        </p>
      </div>
      <MobileNavigation />
    </React.Fragment>
  )
}

export default Footer
