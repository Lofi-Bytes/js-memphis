import * as React from 'react'

import {
  formatClassList,
  joinStrings
} from '../../utils/utils'


type SectionProps = {
  background: 'opaque' | 'transparent',
  children: React.ReactNode,
  className?: string
}

const SECTION = formatClassList([
  'mx-auto',
  'py-8',
  'relative',
  'rounded-xl',
  'sm:mb-10',
  'sm:px-14',
  'sm:w-9/12',
  'w-11/12'
])

const Section = ({
  background,
  children,
  className
}: SectionProps) => {
  let section: string

  if (background === 'opaque') {
    section = joinStrings(' ', SECTION, 'bg-stone-100 shadow-xl px-4 sm:px-8')
  }

  if (background === 'transparent') {
    section = joinStrings(' ', SECTION, 'bg-transparent')
  }

  return (
    <article
      className={
        className
          ? joinStrings(' ', section, className)
          : section
      }
    >
      {children}
    </article>
  )
}

export default Section
