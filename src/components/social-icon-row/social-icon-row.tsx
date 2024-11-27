import * as React from 'react'

import { OutboundLink } from 'gatsby-plugin-google-gtag'

import { formatClassList, joinStrings } from '../../utils/utils'

type SocialIconRowProps = {
  className?: string
}

const ROW = formatClassList([
  'flex',
  'items-start',
  'justify-start',
  'relative'
])

const ICONANCHOR = formatClassList([
  'px-2',
  'py-1',
  'text-2xl',
  'text-stone-500',
  'duration-200',
  'rounded',
  'hover:text-sky-700',
  'focus:text-sky-700',
  'active:text-sky-700',
  'hover:cursor-pointer',
  'focus:outline-none',
  'focus:ring',
  'focus:ring-sky-700'
])

const ICON = formatClassList(['fa-brands'])

const GITHUB = formatClassList([ICON, 'fa-github'])

const LINKEDIN = formatClassList([ICON, 'fa-linkedin'])

const BLUESKY = formatClassList([ICON, 'fa-bluesky'])

const MASTODON = formatClassList([ICON, 'fa-mastodon'])

// const TWITTER = formatClassList([ICON, 'fa-twitter'])

// const CODE_PEN = formatClassList([ICON, 'fa-codepen'])

// const DEV = formatClassList([ICON, 'fa-dev'])

const SocialIconRow = ({ className }: SocialIconRowProps) => {
  return (
    <div className={className ? joinStrings(' ', ROW, className) : ROW}>
      <div>
        <OutboundLink
          href="https://github.com/lofi-bytes"
          aria-label="Connect with me on Github"
          title="Connect with me on Github"
          className={ICONANCHOR}
        >
          <i
            className={GITHUB}
            aria-hidden="true"
          />
        </OutboundLink>
      </div>
      <div className="ml-2">
        <OutboundLink
          href="https://www.linkedin.com/in/lofibytes/"
          aria-label="Connect with me on LinkedIn Profile"
          title="Connect with me on LinkedIn Profile"
          className={ICONANCHOR}
        >
          <i
            className={LINKEDIN}
            aria-hidden="true"
          />
        </OutboundLink>
      </div>
      <div className="ml-2">
        <OutboundLink
          href="https://bsky.app/profile/lofibytes.bsky.social"
          aria-label="Connect with me on Bluesky"
          title="Connect with me on Bluesky"
          className={ICONANCHOR}
        >
          <i
            className={BLUESKY}
            aria-hidden="true"
          />
        </OutboundLink>
      </div>
      <div className="ml-2">
        <OutboundLink
          href="https://hachyderm.io/web/@LofiBytes"
          aria-label="Connect with me on Mastodon"
          title="Connect with me on Mastodon"
          className={ICONANCHOR}
        >
          <i
            className={MASTODON}
            aria-hidden="true"
          />
        </OutboundLink>
      </div>
      {/* <div className="ml-2">
        <OutboundLink
          href="https://twitter.com/LofiBytes/"
          aria-label="Connect with me on Twitter"
          title="Connect with me on Twitter"
          className={ICONANCHOR}
        >
          <i className={TWITTER} aria-hidden="true" />
        </OutboundLink>
      </div> */}
      {/* <div className="ml-2">
        <OutboundLink
          href="https://codepen.io/LofiBytes"
          aria-label="Connect with me on CodePen"
          title="Connect with me on CodePen"
          className={ICONANCHOR}
        >
          <i
            className={CODE_PEN}
            aria-hidden="true"
          />
        </OutboundLink>
      </div> */}
      {/* <div className="ml-2">
        <OutboundLink
          href="https://dev.to/lofibytes"
          aria-label="Connect with me on DEV Profile"
          title="Connect with me on DEV Profile"
          className={ICONANCHOR}
        >
          <i
            className={DEV}
            aria-hidden="true"
          />
        </OutboundLink>
      </div> */}
    </div>
  )
}

export default SocialIconRow
