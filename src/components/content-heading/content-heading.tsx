import * as React from 'react'

import {
  formatClassList,
  joinStrings
} from '../../utils/utils'


type ContentHeadingProps = {
  children: React.ReactNode,
  className?: string
}

const STYLES = `
  text-stone-700
  text-xl
  tracking-wide
`

const ContentHeading = ({
  children,
  className
}: ContentHeadingProps) => {
  let styles = formatClassList(STYLES)

  return (
    <h3
      className={
        className
          ? joinStrings(' ', styles, className)
          : styles
      }
    >
      {children}
    </h3>
  )
}

export default ContentHeading
