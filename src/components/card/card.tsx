import * as React from 'react'
import { Link } from 'gatsby'

import {
  formatClassList,
  formatDate,
  joinStrings
} from '../../utils/utils'


export type CardProps = {
  className?: string,
  color: 'rose' | 'sky' | 'violet' | 'yellow',
  date: string,
  excerpt: string,
  external: boolean,
  published: boolean,
  tags: React.ReactNode,
  title: string,
  to: string
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
  CARD,
  'bg-rose-100',
  'border-rose-400',
  'shadow-rose-600/50',
  'hover:shadow-rose-600/50',
  'focus:shadow-rose-600/50'
])

const CARD_PUBLISHED_ROSE = formatClassList([
  CARD_PUBLISHED,
  CARD_ROSE,
  'focus:bg-rose-50',
  'focus:border-rose-600',
  'focus:ring-rose-200',
  'hover:border-rose-500'
])

const TITLE_ROSE = formatClassList([
  TITLE,
  'text-rose-900'
])

const DATE_ROSE = formatClassList([
  DATE,
  'text-rose-700'
])

const EXCERPT_ROSE = formatClassList([
  EXCERPT,
  'text-rose-700'
])

const ICON_ROSE = formatClassList([
  ICON,
  'border-rose-100',
  'text-rose-400',
  'group-focus:border-rose-600',
  'group-focus:text-rose-600',
  'group-hover:border-rose-500',
  'group-hover:text-rose-500'
])

const COMING_SOON_BUTTON_ROSE = formatClassList([
  COMING_SOON_BUTTON,
  'bg-rose-50'
])

const COMING_SOON_BUTTON_TEXT_ROSE = formatClassList([
  COMING_SOON_BUTTON_TEXT,
  'text-rose-600'
])

const CARD_SKY = formatClassList([
  CARD,
  'bg-sky-100',
  'border-sky-400',
  'shadow-sky-600/50',
  'hover:shadow-sky-600/50',
  'focus:shadow-sky-600/50'
])

const CARD_PUBLISHED_SKY = formatClassList([
  CARD_PUBLISHED,
  CARD_SKY,
  'focus:bg-sky-50',
  'focus:border-sky-600',
  'focus:ring-sky-200',
  'hover:border-sky-500'
])

const TITLE_SKY = formatClassList([
  TITLE,
  'text-sky-900'
])

const DATE_SKY = formatClassList([
  DATE,
  'text-sky-700'
])

const EXCERPT_SKY = formatClassList([
  EXCERPT,
  'text-sky-700'
])

const ICON_SKY = formatClassList([
  ICON,
  'border-sky-100',
  'text-sky-400',
  'group-focus:border-sky-600',
  'group-focus:text-sky-600',
  'group-hover:border-sky-500',
  'group-hover:text-sky-500'
])

const COMING_SOON_BUTTON_SKY = formatClassList([
  COMING_SOON_BUTTON,
  'bg-sky-50'
])

const COMING_SOON_BUTTON_TEXT_SKY = formatClassList([
  COMING_SOON_BUTTON_TEXT,
  'text-sky-600'
])

const CARD_VIOLET = formatClassList([
  CARD,
  'bg-violet-100',
  'border-violet-400',
  'shadow-violet-600/50',
  'hover:shadow-violet-600/50',
  'focus:shadow-violet-600/50'
])

const CARD_PUBLISHED_VIOLET = formatClassList([
  CARD_PUBLISHED,
  CARD_VIOLET,
  'focus:bg-violet-50',
  'focus:border-violet-600',
  'focus:ring-violet-200',
  'hover:border-violet-500'
])

const TITLE_VIOLET = formatClassList([
  TITLE,
  'text-violet-900'
])

const DATE_VIOLET = formatClassList([
  DATE,
  'text-violet-700'
])

const EXCERPT_VIOLET = formatClassList([
  EXCERPT,
  'text-violet-700'
])

const ICON_VIOLET = formatClassList([
  ICON,
  'border-violet-100',
  'text-violet-400',
  'group-focus:border-violet-600',
  'group-focus:text-violet-600',
  'group-hover:border-violet-500',
  'group-hover:text-violet-500'
])

const COMING_SOON_BUTTON_VIOLET = formatClassList([
  COMING_SOON_BUTTON,
  'bg-violet-50'
])


const COMING_SOON_BUTTON_TEXT_VIOLET = formatClassList([
  COMING_SOON_BUTTON_TEXT,
  'text-violet-600'
])

const CARD_YELLOW = formatClassList([
  CARD,
  'bg-yellow-100',
  'border-yellow-500',
  'shadow-yellow-600/50',
  'hover:shadow-yellow-600/50',
  'focus:shadow-yellow-600/50'
])

const CARD_PUBLISHED_YELLOW = formatClassList([
  CARD_PUBLISHED,
  CARD_YELLOW,
  'focus:bg-yellow-50',
  'focus:border-yellow-600',
  'focus:ring-yellow-200',
  'hover:border-yellow-600'
])

const TITLE_YELLOW = formatClassList([
  TITLE,
  'text-yellow-900'
])

const DATE_YELLOW = formatClassList([
  DATE,
  'text-yellow-700'
])

const EXCERPT_YELLOW = formatClassList([
  'text-yellow-700'
])

const ICON_YELLOW = formatClassList([
  ICON,
  'border-yellow-100',
  'text-yellow-500',
  'group-focus:border-yellow-600',
  'group-focus:text-yellow-600',
  'group-hover:border-yellow-600',
  'group-hover:text-yellow-600'
])

const COMING_SOON_BUTTON_YELLOW = formatClassList([
  COMING_SOON_BUTTON,
  'bg-yellow-50',
])

const COMING_SOON_BUTTON_TEXT_YELLOW = formatClassList([
  COMING_SOON_BUTTON_TEXT,
  'text-yellow-700'
])

const CARD_COLORS: Record<string, string> = {
  'rose': CARD_ROSE,
  'sky': CARD_SKY,
  'violet': CARD_VIOLET,
  'yellow': CARD_YELLOW
}

const CARD_PUBLISHED_COLORS: Record<string, string> = {
  'rose': CARD_PUBLISHED_ROSE,
  'sky': CARD_PUBLISHED_SKY,
  'violet': CARD_PUBLISHED_VIOLET,
  'yellow': CARD_PUBLISHED_YELLOW
}

const TITLE_COLORS: Record<string, string> = {
  'rose': TITLE_ROSE,
  'sky': TITLE_SKY,
  'violet': TITLE_VIOLET,
  'yellow': TITLE_YELLOW
}

const DATE_COLORS: Record<string, string> = {
  'rose': DATE_ROSE,
  'sky': DATE_SKY,
  'violet': DATE_VIOLET,
  'yellow': DATE_YELLOW
}

const EXCERPT_COLORS: Record<string, string> = {
  'rose': EXCERPT_ROSE,
  'sky': EXCERPT_SKY,
  'violet': EXCERPT_VIOLET,
  'yellow': EXCERPT_YELLOW
}

const ICON_COLORS: Record<string, string> = {
  'rose': ICON_ROSE,
  'sky': ICON_SKY,
  'violet': ICON_VIOLET,
  'yellow': ICON_YELLOW
}

const COMING_SOON_BUTTON_COLORS: Record<string, string> = {
  'rose': COMING_SOON_BUTTON_ROSE,
  'sky': COMING_SOON_BUTTON_SKY,
  'violet': COMING_SOON_BUTTON_VIOLET,
  'yellow': COMING_SOON_BUTTON_YELLOW
}

const COMING_SOON_BUTTON_TEXT_COLORS: Record<string, string> = {
  'rose': COMING_SOON_BUTTON_TEXT_ROSE,
  'sky': COMING_SOON_BUTTON_TEXT_SKY,
  'violet': COMING_SOON_BUTTON_TEXT_VIOLET,
  'yellow': COMING_SOON_BUTTON_TEXT_YELLOW
}

const Card = ({
  className,
  color,
  date,
  published,
  excerpt,
  external,
  tags,
  title,
  to
}: CardProps) => {

  let formattedCard: string
  let formattedTitle: string
  let formattedDateStyles: string
  let formattedExcerpt: string
  let formattedIcon: string
  let formattedComingSoonButton: string
  let formattedComingSoonButtonText: string

  if (TITLE_COLORS.hasOwnProperty(color)) {
    formattedTitle = TITLE_COLORS[color]
  }

  if (DATE_COLORS.hasOwnProperty(color)) {
    formattedDateStyles = DATE_COLORS[color]
  }

  if (EXCERPT_COLORS.hasOwnProperty(color)) {
    formattedExcerpt = EXCERPT_COLORS[color]
  }

  if (published) {
    if (CARD_COLORS.hasOwnProperty(color)) {
      formattedCard = CARD_PUBLISHED_COLORS[color]
    }

    if (ICON_COLORS.hasOwnProperty(color)) {
      formattedIcon = ICON_COLORS[color]
    }
  }

  if (!published) {
    if (CARD_COLORS.hasOwnProperty(color)) {
      formattedCard = CARD_COLORS[color]
    }

    if (COMING_SOON_BUTTON_COLORS.hasOwnProperty(color)) {
      formattedComingSoonButton = COMING_SOON_BUTTON_COLORS[color]
    }

    if (COMING_SOON_BUTTON_TEXT_COLORS.hasOwnProperty(color)) {
      formattedComingSoonButtonText = COMING_SOON_BUTTON_TEXT_COLORS[color]
    }
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
                  className={
                    className
                      ? joinStrings(' ', formattedCard, className)
                      : formattedCard
                  }
                  href={to}
                >
                  <h2 className={formattedTitle}>
                    {title}
                  </h2>
                  <p className={formattedDateStyles}>
                    {formattedDate}
                  </p>
                  <div className={TAGS}>
                    {tags}
                  </div>
                  <p className={formattedExcerpt}>
                    {excerpt}
                  </p>
                  <div className={ICON_ROW}>
                    <i className={formattedIcon} />
                  </div>
                </a>
              :
                <div
                  className={
                    className
                      ? joinStrings(' ', formattedCard, className)
                      : formattedCard
                  }
                >
                  <h2 className={formattedTitle}>
                    {title}
                  </h2>
                  <p className={formattedDateStyles}>
                    {formattedDate}
                  </p>
                  <div className={TAGS}>
                    {tags}
                  </div>
                  <p className={formattedExcerpt}>
                    {excerpt}
                  </p>
                  <div className={ICON_ROW}>
                    <div className={formattedComingSoonButton}>
                      <span className={formattedComingSoonButtonText}>
                        Coming soon
                      </span>
                    </div>
                  </div>
                </div>
          :
            published
              ?
                <Link
                  className={
                    className
                      ? joinStrings(' ', formattedCard, className)
                      : formattedCard
                  }
                  to={to}
                >
                  <h2 className={formattedTitle}>
                    {title}
                  </h2>
                  <p className={formattedDateStyles}>
                    {formattedDate}
                  </p>
                  <div className={TAGS}>
                    {tags}
                  </div>
                  <p className={formattedExcerpt}>
                    {excerpt}
                  </p>
                  <div className={ICON_ROW}>
                    <i className={formattedIcon} />
                  </div>
                </Link>
              :
                <div
                  className={
                    className
                      ? joinStrings(' ', formattedCard, className)
                      : formattedCard
                  }
                >
                  <h2 className={formattedTitle}>
                    {title}
                  </h2>
                  <p className={formattedDateStyles}>
                    {formattedDate}
                  </p>
                  <div className={TAGS}>
                    {tags}
                  </div>
                  <p className={formattedExcerpt}>
                    {excerpt}
                  </p>
                  <div className={ICON_ROW}>
                    <i className={formattedIcon} />
                  </div>
                </div>
      }
    </React.Fragment>
  )
}

export default Card
