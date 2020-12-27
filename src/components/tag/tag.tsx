import React, { FC, ReactNode } from 'react'


type TagProps = {
  card: boolean,
  color: string,
  children: ReactNode
}

const Tag: FC<TagProps> = ({
  card,
  color,
  children
}: TagProps) => {
  return (
    card
      ?
        <div
          className={`rounded-full bg-${color}-50 shadow group-focus:bg-${color}-100 transition ease-in-out w-max py-0.5 px-3 mr-3 mt-3`}
        >
          <p className={`text-xs tracking-wider text-${color}-700 align-middle inline-block`}>
            {children}
          </p>
        </div>
      :
        <div
          className={`rounded-full bg-${color}-200 shadow w-max py-0.5 px-3 mr-3 mt-3`}
        >
          <p className={`text-xs tracking-wider text-${color}-800 align-middle inline-block`}>
            {children}
          </p>
        </div>
  )
}

export default Tag
