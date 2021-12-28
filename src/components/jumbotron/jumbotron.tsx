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
  date?: string,
  [other:string]: unknown
}

const JUMBOTRON_WRAPPER = formatClassList([
  'bg-indigo-700',
  'bg-opacity-30',
  'w-full',
  'z-5'
])

const JUMBOTRON_CONTAINER = formatClassList([
  'flex',
  'flex-col',
  'h-80',
  'items-center',
  'justify-center',
  'm-auto',
  'max-w-screen-md',
  'pb-14',
  'px-6',
  'sm:pb-28'
])

const TITLE = formatClassList([
  'font-light',
  'sm:text-4xl',
  'text-3xl',
  'text-teal-100'
])

const TITLE_LEFT = formatClassList([
  TITLE,
  'w-full'
])


const TITLE_CENTER = formatClassList([
  TITLE,
  'text-center'
])

const SUBTITLE = formatClassList([
  'font-medium',
  'lg:text-2xl',
  'mt-3',
  'sm:font-light',
  'text-teal-100',
  'text-xl',
  'tracking-wide'
])

const SUBTITLE_LEFT = formatClassList([
  SUBTITLE,
  'w-full'
])


const SUBTITLE_CENTER = formatClassList([
  SUBTITLE,
  'text-center'
])

const DATE = formatClassList([
  'font-serif',
  'italic',
  'mt-2',
  'sm:text-base',
  'text-sm',
  'text-stone-200',
  'w-full'
])

const Jumbotron = ({
  align,
  className,
  title,
  subtitle,
  date
}: JumbotronProps) => {
  return (
    <div
      className={
        className
          ? joinStrings(' ', JUMBOTRON_WRAPPER, className)
          : JUMBOTRON_WRAPPER
      }
    >
      <div className={JUMBOTRON_CONTAINER}>
        {
          align === 'left'
          ?
            <>
              <h1 className={TITLE_LEFT}>
                {title}
              </h1>
              <p className={SUBTITLE_LEFT}>{subtitle}</p>
              {
                date
                  ?
                    <p className={DATE}>{date}</p>
                  :
                    null
              }
            </>
          :
            <>
              <h1 className={TITLE_CENTER}>
                {title}
              </h1>
              <p className={SUBTITLE_CENTER}>{subtitle}</p>
            </>
        }
      </div>
    </div>
  )
}

export default Jumbotron
