import React from 'react'

import { formatClassList, joinStrings } from '../../utils/utils'


type SocialIconRowProps = {
  className?: string
}

const ROW: string = `
  flex
  items-start
  justify-start
  relative
`

const ICONANCHOR: string = `
  px-2
  py-1
  text-2xl
  text-gray-500
  duration-200
  rounded
  hover:text-lightBlue-700
  focus:text-lightBlue-700
  active:text-lightBlue-700
  hover:cursor-pointer
  focus:outline-none
  focus:ring
  focus:ring-lightBlue-700
`

const SocialIconRow = ({className}: SocialIconRowProps) => {
  const formattedRow: string = className
    ? joinStrings(' ', formatClassList(ROW), className)
    : formatClassList(ROW)
  const formattedIconAnchor: string = formatClassList(ICONANCHOR)

  return(
    <div className={formattedRow}>
      <div>
        <a
          href="https://github.com/lofi-bytes"
          aria-label="Jillian's Github"
          title="Jillian's Github"
          className={formattedIconAnchor}
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
      <div className="ml-2">
        <a
          href="https://twitter.com/LofiBytes/"
          aria-label="Jillian's Twitter"
          title="Jillian's Twitter"
          className={formattedIconAnchor}
        >
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <div className="ml-2">
        <a
          href="https://codepen.io/LofiBytes"
          aria-label="Jillian's CodePen"
          title="Jillian's CodePen"
          className={formattedIconAnchor}
        >
          <i className="fab fa-codepen"></i>
        </a>
      </div>
      <div className="ml-2">
        <a
          href="https://dev.to/lofibytes"
          aria-label="Jillian's DEV Profile"
          title="Jillian's DEV Profile"
          className={formattedIconAnchor}
        >
          <i className="fab fa-dev"></i>
        </a>
      </div>
      <div className="ml-2">
        <a
          href="https://www.linkedin.com/in/jillianserenity/"
          aria-label="Jillian's LinkedIn Profile"
          title="Jillian's LinkedIn Profile"
          className={formattedIconAnchor}
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  )
}

export default SocialIconRow
