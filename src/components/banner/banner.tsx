import React, { FC } from 'react'


const Banner: FC = ({}) => {
  return (
    <React.Fragment>
      <div className="bg-indigo-400 bg-opacity-30 w-full">
        <div className="flex flex-col justify-center items-center max-w-screen-lg m-auto h-80 pb-20">
          <h1 className="text-gray-50 text-4xl font-light">
            <i className="fal fa-narwhal"></i>&nbsp;Something Catchy&nbsp;<i className="fal fa-alien-monster"></i>
          </h1>
          <p className="text-gray-50 text-2xl font-light mt-3">Sub catchy headline</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Banner
