import * as React from 'react'

import { formatClassList, joinStrings } from '../../utils/utils'


const TAG_BASE = formatClassList([
  'mr-3',
  'mt-3',
  'px-3',
  'py-0.5',
  'rounded-lg',
  'shadow',
  'w-max'
])

const TAG_CARD = formatClassList([
  TAG_BASE,
  'ease-in-out',
  'transition'
])

const TAG = formatClassList([
  'align-middle',
  'inline-block',
  'text-xs',
  'tracking-widest'
])

const tagColorsCard = {
  violet: {
    tag: 'bg-violet-50 group-focus:bg-violet-100',
    children: 'text-violet-700'
  },
  purple: {
    tag: 'bg-purple-50 group-focus:bg-purple-100',
    children: 'text-purple-700'
  },
  rose: {
    tag: 'bg-rose-50 group-focus:bg-rose-100',
    children: 'text-rose-700'
  },
  sky: {
    tag: 'bg-sky-50 group-focus:bg-sky-100',
    children: 'text-sky-700'
  },
  yellow: {
    tag: 'bg-yellow-50 group-focus:bg-yellow-100',
    children: 'text-yellow-700'
  }
}

const tagColors = {
  violet: {
    tag: 'bg-violet-200',
    children: 'text-violet-800'
  },
  purple: {
    tag: 'bg-purple-200',
    children: 'text-purple-800'
  },
  rose: {
    tag: 'bg-rose-200',
    children: 'text-rose-800'
  },
  sky: {
    tag: 'bg-sky-200',
    children: 'text-sky-800'
  },
  yellow: {
    tag: 'bg-yellow-200',
    children: 'text-yellow-800'
  }
}

type TagProps = {
  card: boolean,
  tagColor: string,
  children: React.ReactNode
}

const Tag = ({
  card,
  tagColor,
  children
}: TagProps) => {
  let formattedTagBase: string
  let formattedTagCard: string
  let formattedChildren: string

  if (card) {
    for (const [key, value] of Object.entries(tagColorsCard)) {
      if (key === tagColor) {
        formattedTagCard = joinStrings(' ', TAG_CARD, value.tag)
        formattedChildren = joinStrings(' ', TAG, value.children)
      }

    }
  }

  if (!card) {
    for (const [key, value] of Object.entries(tagColors)) {
      if (key === tagColor) {
        formattedTagBase = joinStrings(' ', TAG_BASE, value.tag)
        formattedChildren = joinStrings(' ', TAG, value.children)
      }
    }
  }

  return (
    card
      ?
        <div className={TAG_CARD}>
          <p className={TAG}>
            {children}
          </p>
        </div>
      :
        <div className={TAG_BASE}>
          <p className={TAG}>
            {children}
          </p>
        </div>
  )
}

export default Tag
