import * as React from 'react'
import { Link } from 'gatsby'

import {
  formatClassList,
  formatDate,
  joinStrings
} from '../../utils/utils'


export type CardProps = {
  color: 'rose' | 'sky' | 'violet' | 'yellow',
  date: string,
  excerpt: string,
  external: boolean,
  published: boolean,
  tags: React.ReactNode,
  title: string,
  to: string
}

export type ClassListTypes = {
  formattedCard: string,
  formattedTitle: string,
  formattedDate: string,
  formattedExcerpt: string,
  formattedIcon: string,
  formattedComingSoonButton: string
  formattedComingSoonButtonText: string
}

const CARD = formatClassList([
  'block',
  'border-0',
  'border-l-8',
  'duration-200',
  'ease-in-out',
  'group',
  'overflow-hidden',
  'px-4',
  'py-6',
  'rounded-lg',
  'shadow-lg',
  'sm:px-8',
  'transform',
  'transition'
])

const CARD_PUBLISHED = formatClassList([
  'active:shadow-sm',
  'active:translate-y-0.5',
  'focus:-translate-y-0.5',
  'focus:outline-none',
  'focus:ring-4',
  'focus:ring-opacity-50',
  'focus:shadow-xl',
  'hover:-translate-y-0.5',
  'hover:shadow-xl'
])

const TITLE = formatClassList([
  'text-xl',
  'tracking-wider',
  'w-11/12'
])

const DATE = formatClassList([
  'font-serif',
  'italic',
  'text-sm',
  'tracking-wider'
])

const TAGS = formatClassList([
  'flex',
  'flex-wrap',
  'mt-2'
])

const EXCERPT = formatClassList([
  'mt-4',
  'text-base',
  'tracking-wider'
])

const ICON_ROW = formatClassList([
  'flex',
  'flex-row-reverse'
])

const ICON = formatClassList([
  'mt-2',
  'text-xl',
  'transition',
  'duration-150',
  'ease-in-out',
  'border-b-4',
  'rounded-sm',
  'fas',
  'fa-arrow-right',
  'pb-0.5'
])

const COMING_SOON_BUTTON = formatClassList([
  'mt-2',
  'px-3',
  'py-0.5',
  'rounded-lg',
  'shadow',
  'w-max'
])

const COMING_SOON_BUTTON_TEXT = formatClassList([
  'text-lg',
  'tracking-wider',
  'w-11/12'
])

const CARD_ROSE = formatClassList([
  'bg-rose-100',
  'border-rose-400',
  'shadow-rose-600/50',
  'hover:shadow-rose-600/50',
  'focus:shadow-rose-600/50'
])

const CARD_ROSE_PUBLISHED = formatClassList([
  'focus:bg-rose-50',
  'focus:border-rose-600',
  'focus:ring-rose-200',
  'hover:border-rose-500'
])

const TITLE_ROSE = formatClassList([
  'text-rose-900'
])

const DATE_ROSE = formatClassList([
  'text-rose-700'
])

const EXCERPT_ROSE = formatClassList([
  'text-rose-700'
])

const ICON_ROSE = formatClassList([
  'border-rose-100',
  'text-rose-400'
])

const ICON_ROSE_PUBLISHED = formatClassList([
  'group-focus:border-rose-600',
  'group-focus:text-rose-600',
  'group-hover:border-rose-500',
  'group-hover:text-rose-500'
])

const COMING_SOON_BUTTON_ROSE = formatClassList([
  'bg-rose-50'
])

const COMING_SOON_BUTTON_TEXT_ROSE = formatClassList([
  'text-rose-600'
])

const CARD_SKY = formatClassList([
  'bg-sky-100',
  'border-sky-400',
  'shadow-sky-600/50',
  'hover:shadow-sky-600/50',
  'focus:shadow-sky-600/50'
])

const CARD_SKY_PUBLISHED = formatClassList([
  'focus:bg-sky-50',
  'focus:border-sky-600',
  'focus:ring-sky-200',
  'hover:border-sky-500'
])

const TITLE_SKY = formatClassList([
  'text-sky-900'
])

const DATE_SKY = formatClassList([
  'text-sky-700'
])

const EXCERPT_SKY = formatClassList([
  'text-sky-700'
])

const ICON_SKY = formatClassList([
  'border-sky-100',
  'text-sky-400'
])

const ICON_SKY_PUBLISHED = formatClassList([
  'group-focus:border-sky-600',
  'group-focus:text-sky-600',
  'group-hover:border-sky-500',
  'group-hover:text-sky-500'
])

const COMING_SOON_BUTTON_SKY = formatClassList([
  'bg-sky-50'
])

const COMING_SOON_BUTTON_TEXT_SKY = formatClassList([
  'text-sky-600'
])

const CARD_VIOLET = formatClassList([
  'bg-violet-100',
  'border-violet-400',
  'shadow-violet-600/50',
  'hover:shadow-violet-600/50',
  'focus:shadow-violet-600/50'
])

const CARD_VIOLET_PUBLISHED = formatClassList([
  'focus:bg-violet-50',
  'focus:border-violet-600',
  'focus:ring-violet-200',
  'hover:border-violet-500'
])

const TITLE_VIOLET = formatClassList([
  'text-violet-900'
])

const DATE_VIOLET = formatClassList([
  'text-violet-700'
])

const EXCERPT_VIOLET = formatClassList([
  'text-violet-700'
])

const ICON_VIOLET = formatClassList([
  'border-violet-100',
  'text-violet-400'
])

const ICON_VIOLET_PUBLISHED = formatClassList([
  'group-focus:border-violet-600',
  'group-focus:text-violet-600',
  'group-hover:border-violet-500',
  'group-hover:text-violet-500'
])

const COMING_SOON_BUTTON_VIOLET = formatClassList([
  'bg-violet-50'
])


const COMING_SOON_BUTTON_TEXT_VIOLET = formatClassList([
  'text-violet-600'
])

const CARD_YELLOW = formatClassList([
  'bg-yellow-100',
  'border-yellow-500',
  'shadow-yellow-600/50',
  'hover:shadow-yellow-600/50',
  'focus:shadow-yellow-600/50'
])

const CARD_YELLOW_PUBLISHED = formatClassList([
  'focus:bg-yellow-50',
  'focus:border-yellow-600',
  'focus:ring-yellow-200',
  'hover:border-yellow-600'
])

const TITLE_YELLOW = formatClassList([
  'text-yellow-900'
])

const DATE_YELLOW = formatClassList([
  'text-yellow-700'
])

const EXCERPT_YELLOW = formatClassList([
  'text-yellow-700'
])

const ICON_YELLOW = formatClassList([
  'border-yellow-100',
  'text-yellow-500'
])

const ICON_YELLOW_PUBLISHED = formatClassList([
  'group-focus:border-yellow-600',
  'group-focus:text-yellow-600',
  'group-hover:border-yellow-600',
  'group-hover:text-yellow-600'
])

const COMING_SOON_BUTTON_YELLOW = formatClassList([
  'bg-yellow-50',
])

const COMING_SOON_BUTTON_TEXT_YELLOW = formatClassList([
  'text-yellow-700'
])

const Card = ({
  color,
  date,
  published,
  excerpt,
  external,
  tags,
  title,
  to
}: CardProps) => {

  const addStylesToFormattedClassLists = (
    cardStyles: string,
    cardPublishedStyles: string,
    titleStyles: string,
    dateStyles: string,
    excerptStyles: string,
    iconStyles: string,
    iconPublishedStyles: string,
    comingSoonButtonStyles: string,
    comingSoonButtonTextStyles: string
  ) => {
    let formattedCard: string
    let formattedTitle: string
    let formattedDate: string
    let formattedExcerpt: string
    let formattedIcon: string
    let formattedComingSoonButton: string
    let formattedComingSoonButtonText: string

    if (published) {
      formattedCard = joinStrings(
        ' ',
        CARD,
        cardStyles,
        cardPublishedStyles,
        CARD_PUBLISHED
      )
      formattedIcon = joinStrings(
        ' ',
        ICON,
        iconStyles,
        iconPublishedStyles
      )
    }

    if (!published) {
      formattedCard = joinStrings(
        ' ',
        CARD,
        cardStyles,
      )
      formattedComingSoonButton = joinStrings(
        ' ',
        COMING_SOON_BUTTON,
        comingSoonButtonStyles
      )
      formattedComingSoonButtonText = joinStrings(
        ' ',
        COMING_SOON_BUTTON_TEXT,
        comingSoonButtonTextStyles
      )
    }
    formattedTitle = joinStrings(
      ' ',
      TITLE,
      titleStyles
    )
    formattedDate = joinStrings(
      ' ',
      DATE,
      dateStyles
    )
    formattedExcerpt = joinStrings(
      ' ',
      EXCERPT,
      excerptStyles
    )

    return {
      formattedCard,
      formattedTitle,
      formattedDate,
      formattedExcerpt,
      formattedIcon,
      formattedComingSoonButton,
      formattedComingSoonButtonText
    }
  }

  let classList: ClassListTypes

  if (color === 'rose') {
    classList = addStylesToFormattedClassLists(
      CARD_ROSE,
      CARD_ROSE_PUBLISHED,
      TITLE_ROSE,
      DATE_ROSE,
      EXCERPT_ROSE,
      ICON_ROSE,
      ICON_ROSE_PUBLISHED,
      COMING_SOON_BUTTON_ROSE,
      COMING_SOON_BUTTON_TEXT_ROSE
    )
  }

  if (color === 'sky') {
    classList = addStylesToFormattedClassLists(
      CARD_SKY,
      CARD_SKY_PUBLISHED,
      TITLE_SKY,
      DATE_SKY,
      EXCERPT_SKY,
      ICON_SKY,
      ICON_SKY_PUBLISHED,
      COMING_SOON_BUTTON_SKY,
      COMING_SOON_BUTTON_TEXT_SKY
    )
  }

  if (color === 'violet') {
    classList = addStylesToFormattedClassLists(
      CARD_VIOLET,
      CARD_VIOLET_PUBLISHED,
      TITLE_VIOLET,
      DATE_VIOLET,
      EXCERPT_VIOLET,
      ICON_VIOLET,
      ICON_VIOLET_PUBLISHED,
      COMING_SOON_BUTTON_VIOLET,
      COMING_SOON_BUTTON_TEXT_VIOLET
    )
  }

  if (color === 'yellow') {
    classList = addStylesToFormattedClassLists(
      CARD_YELLOW,
      CARD_YELLOW_PUBLISHED,
      TITLE_YELLOW,
      DATE_YELLOW,
      EXCERPT_YELLOW,
      ICON_YELLOW,
      ICON_YELLOW_PUBLISHED,
      COMING_SOON_BUTTON_YELLOW,
      COMING_SOON_BUTTON_TEXT_YELLOW
    )
  }

  const formattedDate = formatDate(date)

  return (
    <React.Fragment>
      {
        external
          ?
            published
              ?
                <a
                  className={classList.formattedCard}
                  href={to}
                >
                  <h2 className={classList.formattedTitle}>
                    {title}
                  </h2>
                  <p className={classList.formattedDate}>
                    {formattedDate}
                  </p>
                  <div className={TAGS}>
                    {tags}
                  </div>
                  <p className={classList.formattedExcerpt}>
                    {excerpt}
                  </p>
                  <div className={ICON_ROW}>
                    <i className={classList.formattedIcon} />
                  </div>
                </a>
              :
                <div
                  className={classList.formattedCard}
                >
                  <h2 className={classList.formattedTitle}>
                    {title}
                  </h2>
                  <p className={classList.formattedDate}>
                    {formattedDate}
                  </p>
                  <div className={TAGS}>
                    {tags}
                  </div>
                  <p className={classList.formattedExcerpt}>
                    {excerpt}
                  </p>
                  <div className={ICON_ROW}>
                    <div className={classList.formattedComingSoonButton}>
                      <span className={classList.formattedComingSoonButtonText}>
                        Coming soon
                      </span>
                    </div>
                  </div>
                </div>
          :
            published
              ?
                <Link
                  className={classList.formattedCard}
                  to={to}
                >
                  <h2 className={classList.formattedTitle}>
                    {title}
                  </h2>
                  <p className={classList.formattedDate}>
                    {formattedDate}
                  </p>
                  <div className={TAGS}>
                    {tags}
                  </div>
                  <p className={classList.formattedExcerpt}>
                    {excerpt}
                  </p>
                  <div className={ICON_ROW}>
                    <i className={classList.formattedIcon} />
                  </div>
                </Link>
              :
                <div
                  className={classList.formattedCard}
                >
                  <h2 className={classList.formattedTitle}>
                    {title}
                  </h2>
                  <p className={classList.formattedDate}>
                    {formattedDate}
                  </p>
                  <div className={TAGS}>
                    {tags}
                  </div>
                  <p className={classList.formattedExcerpt}>
                    {excerpt}
                  </p>
                  <div className={ICON_ROW}>
                    <i className={classList.formattedIcon} />
                  </div>
                </div>
      }
    </React.Fragment>
  )
}

export default Card
