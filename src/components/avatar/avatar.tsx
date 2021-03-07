import React, { FC, ReactNode } from 'react'
import { StaticImage } from 'gatsby-plugin-image'


const Avatar: FC<ReactNode> = ({}) => {
  return (
    <React.Fragment>
      <div className="absolute -top-16 left-1/2">
        <div className="relative flex flex-col items-center justify-between overflow-hidden bg-center bg-no-repeat bg-cover rounded-full shadow-xl w-28 h-28 -left-1/2">
          <StaticImage
            src="../../images/BIfVQUcG_400x400.jpg"
            placeholder="blurred"
            layout="constrained"
            width={300}
            formats={["auto", "webp", "avif"]}
            className="bg-cover"
            alt="Jillian's avatar."
          />
          <div className="absolute top-0 left-0 w-full h-full rounded-full ring-4 ring-purple-300 ring-opacity-30 ring-inset"></div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Avatar
