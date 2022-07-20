import * as React from 'react'

import {
  formatClassList,
  joinStrings
} from '../../utils/utils'


type UnorderedListProps = {
  children: React.ReactNode,
  className?: string
}

const UNORDERED_LIST = formatClassList([
  'leading-relaxed',
  'list-disc',
  'sm:px-8',
  'text-stone-600',
  'tracking-wider'
])

const UnorderedList = ({
  children,
  className
}: UnorderedListProps) => {
  return (
    <ul
      className={
        className
          ? joinStrings(' ', UNORDERED_LIST, className)
          : UNORDERED_LIST
      }
    >
      {children}
    </ul>
  )
}

export default UnorderedList
