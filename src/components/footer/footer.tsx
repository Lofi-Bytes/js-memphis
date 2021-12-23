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

const FOOTER = `
  bg-indigo-700
  bg-opacity-70
  flex
  flex-col
  h-72
  items-center
  justify-center
  sm:h-40
  w-full
`

const SOCIAL_ROW = `
  flex
  items-center
  justifies-center
  relative
`

const LINK = `
  active:text-pink-300
  duration-200
  focus:outline-none
  focus:ring
  focus:ring-teal-200
  focus:text-pink-200
  hover:cursor-pointer
  hover:text-pink-200
  px-2
  py-1
  rounded
  text-3xl
  text-teal-100
`

const ICON = `
  fab
`

const GITHUB = `
  ${ICON}
  fa-github
`

const TWITTER = `
  ${ICON}
  fa-twitter
`

const CODE_PEN = `
  ${ICON}
  fa-codepen
`

const DEV = `
  ${ICON}
  fa-dev
`

const LINKEDIN = `
  ${ICON}
  fa-linkedin
`

const COPYRIGHT = `
  pb-6
  pt-4
  px-6
  sm:hidden
  text-center
  text-sm
  text-teal-100
`

const COPYRIGHT_MOBILE = `
  bg-indigo-700
  bg-opacity-70
  hidden
  pb-2
  sm:block
  w-full
`

const COPYRIGHT_MOBILE_TEXT = `
  text-center
  text-sm
  text-teal-100
`

const Footer = ({
  className,
  location
}: FooterProps) => {
  const formattedFooter = formatClassList(FOOTER)
  const formattedClassList = className
                              ? joinStrings(' ', formattedFooter, className)
                              : formattedFooter
  const formattedLink = formatClassList(LINK)
  const formattedSocialRow = formatClassList(SOCIAL_ROW)
  const formattedGithub = formatClassList(GITHUB)
  const formattedTwitter = formatClassList(TWITTER)
  const formattedCodePen = formatClassList(CODE_PEN)
  const formattedDev = formatClassList(DEV)
  const formattedLinkedin = formatClassList(LINKEDIN)
  const formattedCopyright = formatClassList(COPYRIGHT)
  const formattedCopyrightMobile = formatClassList(COPYRIGHT_MOBILE)
  const formattedCopyrightMobileText = formatClassList(COPYRIGHT_MOBILE_TEXT)

  return (
    <React.Fragment>
      <footer className={formattedClassList}>
        <div className={formattedSocialRow}>
          <div>
            <a
              href="https://github.com/lofi-bytes"
              aria-label="Jillian's Github"
              title="Jillian's Github"
              className={formattedLink}
            >
              <i className={formattedGithub}></i>
            </a>
          </div>
          <div className="ml-6">
            <a
              href="https://twitter.com/LofiBytes/"
              aria-label="Jillian's Twitter"
              title="Jillian's Twitter"
              className={formattedLink}
            >
              <i className={formattedTwitter}></i>
            </a>
          </div>
          <div className="ml-6">
            <a
              href="https://codepen.io/LofiBytes"
              aria-label="Jillian's CodePen"
              title="Jillian's CodePen"
              className={formattedLink}
            >
              <i className={formattedCodePen}></i>
            </a>
          </div>
          <div className="ml-6">
            <a
              href="https://dev.to/lofibytes"
              aria-label="Jillian's DEV Profile"
              title="Jillian's DEV Profile"
              className={formattedLink}
            >
              <i className={formattedDev}></i>
            </a>
          </div>
          <div className="ml-6">
            <a
              href="https://www.linkedin.com/in/jillianserenity/"
              aria-label="Jillian's LinkedIn Profile"
              title="Jillian's LinkedIn Profile"
              className={formattedLink}
            >
              <i className={formattedLinkedin}></i>
            </a>
          </div>
        </div>
        <p className={formattedCopyright}>
          Material &amp; content copyright &copy; {new Date().getFullYear()} Jillian Serenity. All rights reserved.
        </p>
        <FooterNavigation location={location} />
      </footer>
      <div className={formattedCopyrightMobile}>
        <p className={formattedCopyrightMobileText}>
          Material &amp; content copyright &copy; {new Date().getFullYear()} Jillian S. Estrella. All rights reserved.
        </p>
      </div>
      <MobileNavigation location={location} />
    </React.Fragment>
  )
}

export default Footer
