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

const AVATAR_OUTER = `
  -top-16
  absolute
  left-1/2
`

const AVATAR_INNER = `
  -left-1/2
  h-28
  overflow-hidden
  relative
  rounded-full
  shadow-xl
  w-28
`

const AVATAR_RING = `
  absolute
  h-full
  left-0
  ring-4
  ring-inset
  ring-opacity-30
  ring-purple-300
  rounded-full
  top-0
  w-full
`

const Avatar = ({
  className
}: AvatarProps) => {
  const formattedAvatarOuter = formatClassList(AVATAR_OUTER)
  const formattedClassList = className
                              ? joinStrings(' ', formattedAvatarOuter, className)
                              : formattedAvatarOuter
  const formattedAvatarInner = formatClassList(AVATAR_INNER)
  const formattedAvatarRing = formatClassList(AVATAR_RING)

  return (
    <div className={formattedClassList}>
      <div className={formattedAvatarInner}>
        <StaticImage
          src="../../images/bsfSBbsadfK.jpg"
          placeholder="blurred"
          layout="constrained"
          width={300}
          formats={["auto", "webp", "avif"]}
          alt="Jillian's avatar."
        />
        <div className={formattedAvatarRing}></div>
      </div>
    </div>
  )
}

export default Avatar
