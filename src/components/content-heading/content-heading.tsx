import * as React from 'react'

import {
  formatClassList,
  joinStrings
} from '../../utils/utils'


type ContentHeadingProps = {
  children: React.ReactNode,
  className?: string
}

const CONTENT_HEADING = formatClassList([
  'text-stone-700',
  'text-xl',
  'tracking-wide'
])

const ContentHeading = ({
  children,
  className
}: ContentHeadingProps) => {
  return (
    <h3
      className={
        className
          ? joinStrings(' ', CONTENT_HEADING, className)
          : CONTENT_HEADING
      }
    >
      {children}
    </h3>
  )
}

export default ContentHeading
