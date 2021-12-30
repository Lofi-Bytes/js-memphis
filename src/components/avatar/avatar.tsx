import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import {
  formatClassList,
  joinStrings
} from '../../utils/utils'

type AvatarProps = {
  alt: string,
  className?: string,
  src: any
}

const AVATAR_OUTER = formatClassList([
  '-top-16',
  'absolute',
  'left-1/2'
])

const AVATAR_INNER = formatClassList([
  '-left-1/2',
  'h-28',
  'overflow-hidden',
  'relative',
  'rounded-full',
  'shadow-xl',
  'w-28'
])

const AVATAR_RING = formatClassList([
  'absolute',
  'h-full',
  'left-0',
  'ring-4',
  'ring-inset',
  'ring-opacity-30',
  'ring-purple-300',
  'rounded-full',
  'top-0',
  'w-full'
])

const Avatar = ({
  alt,
  className,
  src
}: AvatarProps) => {
  console.log(src);

  return (
    <div
      className={
        className
          ? joinStrings(' ', AVATAR_OUTER, className)
          : AVATAR_OUTER
      }
    >
      <div className={AVATAR_INNER}>
        <GatsbyImage
          alt={alt}
          className="avatar"
          image={src}
        />
        <div className={AVATAR_RING}></div>
      </div>
    </div>
  )
}

export default Avatar
