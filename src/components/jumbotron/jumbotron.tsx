import * as React from 'react'

import {
  formatClassList,
  joinStrings
} from '../../utils/utils'


export type JumbotronProps = {
  align?: string,
  className?: string,
  title?: React.ReactNode,
  subtitle?: React.ReactNode,
  date?: string
  [other:string]: unknown
}

const JUMBOTRON_WRAPPER = `
  bg-indigo-700
  bg-opacity-30
  w-full
  z-5
`

const JUMBOTRON_CONTAINER = `
  flex
  flex-col
  h-80
  items-center
  justify-center
  m-auto
  max-w-screen-md
  pb-14
  px-6
  sm:pb-28
`

const TITLE = `
  font-light
  sm:text-4xl
  text-3xl
  text-teal-100
`

const TITLE_LEFT = `
  ${TITLE}
  w-full
`


const TITLE_CENTER = `
  ${TITLE}
  text-center
`

const SUBTITLE = `
  font-medium
  lg:text-2xl
  mt-3
  sm:font-light
  text-teal-100
  text-xl
  tracking-wide
`

const SUBTITLE_LEFT = `
  ${SUBTITLE}
  w-full
`


const SUBTITLE_CENTER = `
  ${SUBTITLE}
  text-center
`

const DATE = `
  font-serif
  italic
  mt-2
  sm:text-base
  text-sm
  text-stone-200
  w-full
`

const Jumbotron = ({
  align,
  className,
  title,
  subtitle,
  date
}: JumbotronProps) => {
  const formattedJumbotronWrapper = formatClassList(JUMBOTRON_WRAPPER)
  const formattedClassList = className
                              ? joinStrings(' ', formattedJumbotronWrapper, className)
                              : formattedJumbotronWrapper
  const formattedJumbotronContainer = formatClassList(JUMBOTRON_CONTAINER)
  const formattedTitleLeft = formatClassList(TITLE_LEFT)
  const formattedTitleCenter = formatClassList(TITLE_CENTER)
  const formattedSubtitleLeft = formatClassList(SUBTITLE_LEFT)
  const formattedSubtitleCenter = formatClassList(SUBTITLE_CENTER)
  const formattedDate = formatClassList(DATE)

  return (
    <div className={formattedClassList}>
      <div className={formattedJumbotronContainer}>
        {
          align === 'left'
          ?
            <>
              <h1 className={formattedTitleLeft}>
                {title}
              </h1>
              <p className={formattedSubtitleLeft}>{subtitle}</p>
              {
                date
                  ?
                    <p className={formattedDate}>{date}</p>
                  :
                    null
              }
            </>
          :
            <>
              <h1 className={formattedTitleCenter}>
                {title}
              </h1>
              <p className={formattedSubtitleCenter}>{subtitle}</p>
            </>
        }
      </div>
    </div>
  )
}

export default Jumbotron
