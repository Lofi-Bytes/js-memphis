import React, { FC, ReactNode } from 'react'

import {
  formatClassList,
  joinStrings
} from '../../utils/utils'


type SectionProps = {
  background: 'opaque' | 'transparent',
  children: ReactNode,
  className?: string
}

const STYLES = `
  rounded-xl
  py-8
  sm:px-14
  w-11/12
  sm:w-9/12
  mx-auto
  sm:mb-10
  relative
`

const Section: FC<SectionProps> = ({
  background,
  children,
  className
}: SectionProps) => {
  let styles = formatClassList(STYLES)

  if (background === 'opaque') {
    styles = joinStrings(' ', styles, 'bg-gray-100 shadow-xl px-4 sm:px-8')
  }

  if (background === 'transparent') {
    styles = joinStrings(' ', styles, 'bg-transparent')
  }

  return (
    <article
      className={
        className
          ? joinStrings(' ', styles, className)
          : styles
      }
    >
      {children}
    </article>
  )
}

export default Section
