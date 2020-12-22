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
  py-8
  px-8
  sm:px-14
  w-11/12
  sm:w-9/12
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
