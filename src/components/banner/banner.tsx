import * as React from 'react'

import {
  appendVariantClasses,
  formatClassList,
  joinStrings
} from '../../utils/utils'


export type BannerProps = {
  children: React.ReactNode,
  color: 'cyan' | 'rose' | 'purple' | 'yellow'
  pageType?: 'listPage' | 'page'
}

export type ClassListTypes = {
  formattedBanner: string,
  formattedHeading: string
}

const BANNER = formatClassList([
  '-ml-10',
  'max-w-xs',
  'px-10',
  'py-2',
  'rounded',
  'shadow-lg',
  'sm:-ml-24',
  'sm:max-w-none',
  'sm:px-24',
  'w-max'
])

const HEADING = formatClassList([
  'sm:text-2xl',
  'text-xl',
  'tracking-wide'
])

const BANNER_CYAN = formatClassList([
  BANNER,
  'bg-cyan-300',
  'shadow-cyan-600/50'
])

const HEADING_CYAN = formatClassList([
  HEADING,
  'text-cyan-900'
])

const BANNER_ROSE = formatClassList([
  BANNER,
  'bg-rose-300',
  'shadow-rose-600/50'
])

const HEADING_ROSE = formatClassList([
  HEADING,
  'text-rose-900'
])

const BANNER_PURPLE = formatClassList([
  BANNER,
  'bg-purple-300',
  'shadow-purple-600/50'
])

const HEADING_PURPLE = formatClassList([
  HEADING,
  'text-purple-900'
])

const BANNER_YELLOW = formatClassList([
  BANNER,
  'bg-yellow-300',
  'shadow-yellow-600/50'
])

const HEADING_YELLOW = formatClassList([
  HEADING,
  'text-yellow-900'
])

const LIST_PAGE_STYLE = formatClassList([
  'mb-10'
])

const BANNER_COLORS: Record<string, string> = {
  'cyan': BANNER_CYAN,
  'rose': BANNER_ROSE,
  'purple': BANNER_PURPLE,
  'yellow': BANNER_YELLOW
}

const HEADING_COLORS: Record<string, string> = {
  'cyan': HEADING_CYAN,
  'rose': HEADING_ROSE,
  'purple': HEADING_PURPLE,
  'yellow': HEADING_YELLOW
}

const Banner = ({
  children,
  color,
  pageType='page'
}: BannerProps) => {

  let formattedBanner: string
  let formattedHeading: string

  if (BANNER_COLORS.hasOwnProperty(color)) {
    formattedBanner = joinStrings(
      ' ',
      BANNER_COLORS[color],
      pageType === 'listPage' ? LIST_PAGE_STYLE : ''
    )
  }

  if (HEADING_COLORS.hasOwnProperty(color)) {
    formattedHeading = HEADING_COLORS[color]
  }

  return (
    <div className={formattedBanner}>
      <h2 className={formattedHeading}>
        {children}
      </h2>
    </div>
  )
}

export default Banner
