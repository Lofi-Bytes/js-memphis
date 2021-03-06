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
          className={
            color === 'violet'
              ? 'rounded-full bg-violet-50 shadow group-focus:bg-violet-100 transition ease-in-out w-max py-0.5 px-3 mr-3 mt-3'
              :
                color === 'rose'
                  ? 'rounded-full bg-rose-50 shadow group-focus:bg-rose-100 transition ease-in-out w-max py-0.5 px-3 mr-3 mt-3'
                  :
                    color === 'lightBlue'
                      ? 'rounded-full bg-lightBlue-50 shadow group-focus:bg-lightBlue-100 transition ease-in-out w-max py-0.5 px-3 mr-3 mt-3'
                      : null
          }
        >
          <p
            className={
              color === 'violet'
                ? 'text-xs tracking-wider text-violet-700 align-middle inline-block'
                :
                  color === 'rose'
                    ? 'text-xs tracking-wider text-rose-700 align-middle inline-block'
                    :
                      color === 'lightBlue'
                        ? 'text-xs tracking-wider text-lightBlue-700 align-middle inline-block'
                        : null
            }
          >
            {children}
          </p>
        </div>
      :
        <div
          className={
            color === 'violet'
              ? 'rounded-full bg-violet-200 shadow w-max py-0.5 px-3 mr-3 mt-3'
              :
                color === 'purple'
                  ? 'rounded-full bg-purple-200 shadow w-max py-0.5 px-3 mr-3 mt-3'
                  :
                    color === 'rose'
                      ? 'rounded-full bg-rose-200 shadow w-max py-0.5 px-3 mr-3 mt-3'
                      :
                        color === 'lightBlue'
                          ? 'rounded-full bg-lightBlue-200 shadow w-max py-0.5 px-3 mr-3 mt-3'
                          : null
          }
        >
          <p
            className={
              color === 'violet'
                ? 'text-xs tracking-wider text-violet-800 align-middle inline-block'
                :
                  color === 'purple'
                    ? 'text-xs tracking-wider text-purple-800 align-middle inline-block'
                    :
                      color === 'rose'
                        ? 'text-xs tracking-wider text-rose-800 align-middle inline-block'
                        :
                          color === 'lightBlue'
                            ? 'text-xs tracking-wider text-lightBlue-800 align-middle inline-block'
                            : null
            }
          >
            {children}
          </p>
        </div>
  )
}

export default Tag
