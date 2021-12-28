import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import {
  formatClassList,
  joinStrings
} from '../../utils/utils'

type AvatarProps = {
  children: React.ReactNode,
  className?: string
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
  className
}: AvatarProps) => {
  return (
    <div
      className={
        className
          ? joinStrings(' ', AVATAR_OUTER, className)
          : AVATAR_OUTER
      }
    >
      <div className={AVATAR_INNER}>
        <StaticImage
          alt="Jillian's avatar."
          className="avatar"
          formats={["auto", "webp", "avif"]}
          layout="constrained"
          placeholder="blurred"
          src="../../images/bsfSBbsadfK.jpg"
          width={300}
        />
        <div className={AVATAR_RING}></div>
      </div>
    </div>
  )
}

export default Avatar
