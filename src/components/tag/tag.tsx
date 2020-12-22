import React, { FC, ReactNode } from 'react'


type TagProps = {
  color: string,
  children: ReactNode
}

const Tag: FC<TagProps> = ({
  color,
  children
}: TagProps) => {
  return (
    <div
      className={`rounded-full bg-${color}-50 shadow group-focus:bg-${color}-100 transition ease-in-out w-max py-1 px-3 mr-3 mt-3`}
    >
      <p className={`text-sm tracking-widert text-${color}-700`}>
        {children}
      </p>
    </div>
  )
}

export default Tag
