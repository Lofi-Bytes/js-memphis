import * as React from 'react'

import {
  formatClassList,
  joinStrings
} from '../../utils/utils'


type UnorderedListProps = {
  children: React.ReactNode,
  className?: string
}

const STYLES = `
  leading-relaxed
  list-inside
  pb-4
  sm:px-8
  text-stone-600
  tracking-wider
`

const UnorderedList = ({
  children,
  className
}: UnorderedListProps) => {
  let styles = formatClassList(STYLES)

  return (
    <ul
      className={
        className
          ? joinStrings(' ', styles, className)
          : styles
      }
    >
      {children}
    </ul>
  )
}

export default UnorderedList
