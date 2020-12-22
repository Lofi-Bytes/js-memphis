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
      <div className="bg-indigo-700 bg-opacity-30 w-full z-5">
        <div className="flex flex-col justify-center items-center max-w-screen-md m-auto h-80 pb-14 sm:pb-28 px-6">
          {
            align === 'left'
            ?
              <>
                <h1 className="text-teal-100 text-3xl sm:text-4xl font-light w-full">
                  {title}
                </h1>
                <p className="text-teal-100 text-lg sm:text-xl lg:text-2xl font-medium sm:font-light mt-3 tracking-wide w-full">{subtitle}</p>
                {
                  date
                    ?
                      <p className="text-gray-200 font-serif italic w-full mt-2 text-sm sm:text-base">{date}</p>
                    : null
                }
              </>
            :
              <>
                <h1 className="text-teal-100 text-3xl sm:text-4xl font-light text-center">
                  {title}
                </h1>
                <p className="text-teal-100 text-lg sm:text-xl lg:text-2xl font-medium sm:font-light mt-3 tracking-wide text-center">{subtitle}</p>
              </>
          }
        </div>
      </div>
    </React.Fragment>
  )
}

export default Banner
