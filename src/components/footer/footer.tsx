import * as React from 'react'

import { OutboundLink } from 'gatsby-plugin-google-gtag'

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

const ICONANCHOR = formatClassList([
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

const MASTODON = formatClassList([
  ICON,
  'fa-mastodon'
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
            <OutboundLink
              href="https://github.com/lofi-bytes"
              aria-label="Connect with me on Github"
              title="Connect with me on Github"
              className={ICONANCHOR}
            >
              <i className={GITHUB} aria-hidden="true" />
            </OutboundLink>
          </div>
          <div className="ml-6">
            <OutboundLink
              href="https://hachyderm.io/web/@LofiBytes"
              aria-label="Connect with me on Mastodon"
              title="Connect with me on Mastodon"
              className={ICONANCHOR}
            >
              <i className={MASTODON} aria-hidden="true" />
            </OutboundLink>
          </div>
          <div className="ml-6">
            <OutboundLink
              href="https://twitter.com/LofiBytes/"
              aria-label="Connect with me on Twitter"
              title="Connect with me on Twitter"
              className={ICONANCHOR}
            >
              <i className={TWITTER} aria-hidden="true" />
            </OutboundLink>
          </div>
          <div className="ml-6">
            <OutboundLink
              href="https://codepen.io/LofiBytes"
              aria-label="Connect with me on CodePen"
              title="Connect with me on CodePen"
              className={ICONANCHOR}
            >
              <i className={CODE_PEN} aria-hidden="true" />
            </OutboundLink>
          </div>
          <div className="ml-6">
            <OutboundLink
              href="https://dev.to/lofibytes"
              aria-label="Connect with me on DEV Profile"
              title="Connect with me on DEV Profile"
              className={ICONANCHOR}
            >
              <i className={DEV} aria-hidden="true" />
            </OutboundLink>
          </div>
          <div className="ml-6">
            <OutboundLink
              href="https://www.linkedin.com/in/lofibytes/"
              aria-label="Connect with me on LinkedIn Profile"
              title="Connect with me on LinkedIn Profile"
              className={ICONANCHOR}
            >
              <i className={LINKEDIN} aria-hidden="true" />
            </OutboundLink>
          </div>
        </div>
        <p className={COPYRIGHT}>
          Material &amp; content copyright &copy; {new Date().getFullYear()} Jillian S. Estrella. All rights reserved.
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
