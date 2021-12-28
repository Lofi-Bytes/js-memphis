import * as React from 'react'

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

const SocialIconRow = ({
  className
}: SocialIconRowProps) => {
  return(
    <div
      className={
        className
          ? joinStrings(' ', ROW, className)
          : ROW
      }
    >
      <div>
        <a
          href="https://github.com/lofi-bytes"
          aria-label="Jillian's Github"
          title="Jillian's Github"
          className={ICONANCHOR}
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
      <div className="ml-2">
        <a
          href="https://twitter.com/LofiBytes/"
          aria-label="Jillian's Twitter"
          title="Jillian's Twitter"
          className={ICONANCHOR}
        >
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <div className="ml-2">
        <a
          href="https://codepen.io/LofiBytes"
          aria-label="Jillian's CodePen"
          title="Jillian's CodePen"
          className={ICONANCHOR}
        >
          <i className="fab fa-codepen"></i>
        </a>
      </div>
      <div className="ml-2">
        <a
          href="https://dev.to/lofibytes"
          aria-label="Jillian's DEV Profile"
          title="Jillian's DEV Profile"
          className={ICONANCHOR}
        >
          <i className="fab fa-dev"></i>
        </a>
      </div>
      <div className="ml-2">
        <a
          href="https://www.linkedin.com/in/jillianserenity/"
          aria-label="Jillian's LinkedIn Profile"
          title="Jillian's LinkedIn Profile"
          className={ICONANCHOR}
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  )
}

export default SocialIconRow
