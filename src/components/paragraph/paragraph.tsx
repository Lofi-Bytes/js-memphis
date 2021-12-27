import * as React from 'react'

import {
  formatClassList,
  joinStrings
} from '../../utils/utils'


type ParagraphProps = {
  children: React.ReactNode,
  className?: string
}

const STYLES = `
  leading-relaxed
  text-stone-600
  tracking-wider
`

const Paragraph = ({
  children,
  className
}: ParagraphProps) => {
  let styles = formatClassList(STYLES)

  return (
    <p
      className={
        className
          ? joinStrings(' ', styles, className)
          : styles
      }
    >
      {children}
    </p>
  )
}

export default Paragraph
