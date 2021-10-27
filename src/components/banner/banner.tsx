import React, { FC, ReactNode } from 'react'


export type BannerProps = {
  align?: string,
  title?: ReactNode,
  subtitle?: ReactNode,
  date?: string
  [other:string]: unknown
}

const Banner: FC<BannerProps> = ({
  align,
  title,
  subtitle,
  date
}: BannerProps) => {
  return (
    <React.Fragment>
      <div className="w-full bg-indigo-700 bg-opacity-30 z-5">
        <div className="flex flex-col items-center justify-center max-w-screen-md px-6 m-auto h-80 pb-14 sm:pb-28">
          {
            align === 'left'
            ?
              <>
                <h1 className="w-full text-3xl font-light text-teal-100 sm:text-4xl">
                  {title}
                </h1>
                <p className="w-full mt-3 text-xl font-medium tracking-wide text-teal-100 lg:text-2xl sm:font-light">{subtitle}</p>
                {
                  date
                    ?
                      <p className="w-full mt-2 font-serif text-sm italic text-stone-200 sm:text-base">{date}</p>
                    : null
                }
              </>
            :
              <>
                <h1 className="text-3xl font-light text-center text-teal-100 sm:text-4xl">
                  {title}
                </h1>
                <p className="mt-3 text-xl font-medium tracking-wide text-center text-teal-100 lg:text-2xl sm:font-light">{subtitle}</p>
              </>
          }
        </div>
      </div>
    </React.Fragment>
  )
}

export default Banner
