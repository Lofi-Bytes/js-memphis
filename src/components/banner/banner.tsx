import React, { FC, ReactNode } from 'react'


export type BannerProps = {
  title?: ReactNode,
  subTitle?: ReactNode,
  [other:string]: unknown
}

const Banner: FC<BannerProps> = ({
  title,
  subTitle
}: BannerProps) => {
  return (
    <React.Fragment>
      <div className="bg-indigo-700 bg-opacity-30 w-full z-5">
        <div className="flex flex-col justify-center items-center max-w-screen-lg m-auto h-80 pb-28 px-6">
          <h1 className="text-teal-100 text-3xl sm:text-4xl font-light text-center">
            {/* <span
              className="bg-gradient-to-r text-transparent bg-clip-text from-rose-300 via-lightBlue-300 to-teal-300"
              style={{color: 'transparent'}}
            > */}
            {title}
            {/* </span> */}
          </h1>
          <p className="text-teal-100 text-xl sm:text-2xl lg:text-3xl font-medium sm:font-light mt-3 tracking-wide text-center">{subTitle}</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Banner
