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

const FOOTER = formatClassList([
  'bg-indigo-700',
  'bg-opacity-70',
  'flex',
  'flex-col',
  'h-72',
  'items-center',
  'justify-center',
  'sm:h-40',
  'w-full'
])

const SOCIAL_ROW = formatClassList([
  'flex',
  'items-center',
  'justifies-center',
  'relative'
])

const LINK = formatClassList([
  'active:text-pink-300',
  'duration-200',
  'focus:outline-none',
  'focus:ring',
  'focus:ring-teal-200',
  'focus:text-pink-200',
  'hover:cursor-pointer',
  'hover:text-pink-200',
  'px-2',
  'py-1',
  'rounded',
  'text-3xl',
  'text-teal-100'
])

const ICON = formatClassList([
  'fa-brands'
])

const GITHUB = formatClassList([
  ICON,
  'fa-github'
])

const TWITTER = formatClassList([
  ICON,
  'fa-twitter'
])

const CODE_PEN = formatClassList([
  ICON,
  'fa-codepen'
])

const DEV = formatClassList([
  ICON,
  'fa-dev'
])

const LINKEDIN = formatClassList([
  ICON,
  'fa-linkedin'
])

const COPYRIGHT = formatClassList([
  'pb-6',
  'pt-4',
  'px-6',
  'sm:hidden',
  'text-center',
  'text-sm',
  'text-teal-100'
])

const COPYRIGHT_MOBILE = formatClassList([
  'bg-indigo-700',
  'bg-opacity-70',
  'hidden',
  'pb-2',
  'sm:block',
  'w-full'
])

const COPYRIGHT_MOBILE_TEXT = formatClassList([
  'text-center',
  'text-sm',
  'text-teal-100'
])

const Footer = ({
  className,
  location
}: FooterProps) => {
  return (
    <React.Fragment>
      <footer
        className={
          className
            ? joinStrings(' ', FOOTER, className)
            : FOOTER
        }
      >
        <div className={SOCIAL_ROW}>
          <div>
            <a
              href="https://github.com/lofi-bytes"
              aria-label="Jillian's Github"
              title="Jillian's Github"
              className={LINK}
            >
              <i className={GITHUB}></i>
            </a>
          </div>
          <div className="ml-6">
            <a
              href="https://twitter.com/LofiBytes/"
              aria-label="Jillian's Twitter"
              title="Jillian's Twitter"
              className={LINK}
            >
              <i className={TWITTER}></i>
            </a>
          </div>
          <div className="ml-6">
            <a
              href="https://codepen.io/LofiBytes"
              aria-label="Jillian's CodePen"
              title="Jillian's CodePen"
              className={LINK}
            >
              <i className={CODE_PEN}></i>
            </a>
          </div>
          <div className="ml-6">
            <a
              href="https://dev.to/lofibytes"
              aria-label="Jillian's DEV Profile"
              title="Jillian's DEV Profile"
              className={LINK}
            >
              <i className={DEV}></i>
            </a>
          </div>
          <div className="ml-6">
            <a
              href="https://www.linkedin.com/in/jillianserenity/"
              aria-label="Jillian's LinkedIn Profile"
              title="Jillian's LinkedIn Profile"
              className={LINK}
            >
              <i className={LINKEDIN}></i>
            </a>
          </div>
        </div>
        <p className={COPYRIGHT}>
          Material &amp; content copyright &copy; {new Date().getFullYear()} Jillian Serenity. All rights reserved.
        </p>
        <FooterNavigation location={location} />
      </footer>
      <div className={COPYRIGHT_MOBILE}>
        <p className={COPYRIGHT_MOBILE_TEXT}>
          Material &amp; content copyright &copy; {new Date().getFullYear()} Jillian S. Estrella. All rights reserved.
        </p>
      </div>
      <MobileNavigation location={location} />
    </React.Fragment>
  )
}

export default Footer
