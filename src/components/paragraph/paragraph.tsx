import * as React from 'react'

import {
  formatClassList,
  joinStrings
} from '../../utils/utils'


type ParagraphProps = {
  children: React.ReactNode,
  className?: string
}

const STYLES = formatClassList([
  'leading-relaxed',
  'text-stone-600',
  'tracking-wider'
])

const Paragraph = ({
  children,
  className
}: ParagraphProps) => {
  return (
    <p
      className={
        className
          ? joinStrings(' ', STYLES, className)
          : STYLES
      }
    >
      {children}
    </p>
  )
}

export default Paragraph
