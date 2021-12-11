import React, { ReactNode } from 'react'

import {
  formatClassList,
  joinStrings
} from '../../utils/utils'


export type BannerProps = {
  children: ReactNode,
  color: 'cyan' | 'rose' | 'purple' | 'yellow'
  pageType?: 'listPage' | 'page'
}

export type ClassListTypes = {
  formattedBanner: string,
  formattedHeading: string
}

const BANNER: string = `
  -ml-10
  max-w-xs
  px-10
  py-2
  rounded
  shadow-lg
  sm:-ml-24
  sm:max-w-none
  sm:px-24
  w-max
`

const HEADING: string = `
  sm:text-2xl
  text-xl
  tracking-wide
`

const BANNER_CYAN: string = `
  bg-cyan-300
  shadow-cyan-600/50
`

const HEADING_CYAN: string = `
  text-cyan-900
`

const BANNER_ROSE: string = `
  bg-rose-300
  shadow-rose-600/50
`

const HEADING_ROSE: string = `
  text-rose-900
`

const BANNER_PURPLE: string = `
  bg-purple-300
  shadow-purple-600/50
`

const HEADING_PURPLE: string = `
  text-purple-900
`

const BANNER_YELLOW: string = `
  bg-yellow-300
  shadow-yellow-600/50
`

const HEADING_YELLOW: string = `
  text-yellow-900
`

const LIST_PAGE_STYLE: string = `
  mb-10
`

const Banner = ({
  children,
  color,
  pageType='page'
}: BannerProps) => {
  const addColorToFormattedClassLists = (
    bannerColor: string,
    headingColor: string
  ) => {
    let formattedBanner: string
    let formattedHeading: string

    formattedBanner = joinStrings(
      ' ',
      formatClassList(BANNER),
      formatClassList(bannerColor),
      pageType === 'listPage' ? LIST_PAGE_STYLE : ''
    )
    formattedHeading = joinStrings(
      ' ',
      formatClassList(HEADING),
      formatClassList(headingColor)
    )

    return {formattedBanner, formattedHeading}
  }

  let classList: ClassListTypes

  if (color === 'cyan') {
    classList = addColorToFormattedClassLists(
      BANNER_CYAN,
      HEADING_CYAN
    )
  }

  if (color === 'rose') {
    classList = addColorToFormattedClassLists(
      BANNER_ROSE,
      HEADING_ROSE
    )
  }

  if (color === 'purple') {
    classList = addColorToFormattedClassLists(
      BANNER_PURPLE,
      HEADING_PURPLE
    )
  }

  if (color === 'yellow') {
    classList = addColorToFormattedClassLists(
      BANNER_YELLOW,
      HEADING_YELLOW
    )
  }

  return (
    <div className={classList.formattedBanner}>
      <h2 className={classList.formattedHeading}>
        {children}
      </h2>
    </div>
  )
}

export default Banner
