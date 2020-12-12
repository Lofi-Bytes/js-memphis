import React, { FC, ReactNode } from 'react'

import {
  formatClassList,
  joinStrings
} from '../../utils/utils'


type SectionProps = {
  children: ReactNode,
  className?: string
}

const STYLES = `
  bg-gray-100
  rounded-xl
  p-8
  w-11/12
  md:w-3/4
  mx-auto
  sm:mb-10
  shadow-xl
  relative
`

const Section: FC<SectionProps> = ({
  children,
  className
}: SectionProps) => {
  const styles = formatClassList(STYLES)

  return (
    <section
      className={
        className
          ? joinStrings(' ', styles, className)
          : styles
      }
    >
      {children}
    </section>
  )
}

export default Section
