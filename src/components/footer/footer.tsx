import * as React from 'react'

import MobileNavigation from '../mobile-navigation'
import FooterNavigation from '../footer-navigation'

import {
  formatClassList,
  joinStrings
} from '../../utils/utils'


type FooterProps = {
  className?: string,
  location: Location
}

const Footer = ({
  className,
  location
}: FooterProps) => {
  return (
    <React.Fragment>
      <footer className="flex flex-col items-center justify-center w-full bg-indigo-700 h-72 sm:h-40 bg-opacity-70">
        <div className="relative flex items-center justify-center">
          <div>
            <a
              href="https://github.com/lofi-bytes"
              aria-label="Jillian's Github"
              title="Jillian's Github"
              className="px-2 py-1 text-3xl text-teal-100 duration-200 rounded hover:text-pink-200 focus:text-pink-200 active:text-pink-300 hover:cursor-pointer focus:outline-none focus:ring focus:ring-teal-200"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
          <div className="ml-6">
            <a
              href="https://twitter.com/LofiBytes/"
              aria-label="Jillian's Twitter"
              title="Jillian's Twitter"
              className="px-2 py-1 text-3xl text-teal-100 duration-200 rounded hover:text-pink-200 focus:text-pink-200 active:text-pink-300 hover:cursor-pointer focus:outline-none focus:ring focus:ring-teal-200"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <div className="ml-6">
            <a
              href="https://codepen.io/LofiBytes"
              aria-label="Jillian's CodePen"
              title="Jillian's CodePen"
              className="px-2 py-1 text-3xl text-teal-100 duration-200 rounded hover:text-pink-200 focus:text-pink-200 active:text-pink-300 hover:cursor-pointer focus:outline-none focus:ring focus:ring-teal-200"
            >
              <i className="fab fa-codepen"></i>
            </a>
          </div>
          <div className="ml-6">
            <a
              href="https://dev.to/lofibytes"
              aria-label="Jillian's DEV Profile"
              title="Jillian's DEV Profile"
              className="px-2 py-1 text-3xl text-teal-100 duration-200 rounded hover:text-pink-200 focus:text-pink-200 active:text-pink-300 hover:cursor-pointer focus:outline-none focus:ring focus:ring-teal-200"
            >
              <i className="fab fa-dev"></i>
            </a>
          </div>
          <div className="ml-6">
            <a
              href="https://www.linkedin.com/in/jillianserenity/"
              aria-label="Jillian's LinkedIn Profile"
              title="Jillian's LinkedIn Profile"
              className="px-2 py-1 text-3xl text-teal-100 duration-200 rounded hover:text-pink-200 focus:text-pink-200 active:text-pink-300 hover:cursor-pointer focus:outline-none focus:ring focus:ring-teal-200"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <p className="px-6 pt-4 pb-6 text-sm text-center text-teal-100 sm:hidden">
          Material &amp; content copyright &copy; {new Date().getFullYear()} Jillian Serenity. All rights reserved.
        </p>
        <FooterNavigation />
      </footer>
      <div className="hidden w-full pb-2 bg-indigo-700 bg-opacity-70 sm:block">
        <p className="text-sm text-center text-teal-100">
          Material &amp; content copyright &copy; {new Date().getFullYear()} Jillian S. Estrella. All rights reserved.
        </p>
      </div>
      <MobileNavigation location={location} />
    </React.Fragment>
  )
}

export default Footer
