import React, { FC, ReactNode } from 'react'


const Banner: FC<ReactNode> = ({}) => {
  return (
    <React.Fragment>
      <div className="bg-indigo-400 bg-opacity-30 w-full">
        <div className="flex flex-col justify-center items-center max-w-screen-lg m-auto h-80 pb-20">
          <h1 className="text-gray-50 text-4xl font-light">
            {/* <span
              className="bg-gradient-to-r text-transparent bg-clip-text from-rose-300 via-lightBlue-300 to-teal-300"
              style={{color: 'transparent'}}
            > */}
              <i className="fal fa-narwhal text-rose-300"></i>&nbsp;Bit-Casting Technomancer&nbsp;<i className="fal fa-alien-monster text-teal-300"></i>
            {/* </span> */}
          </h1>
          <p className="text-gray-50 text-2xl font-light mt-3">Designer, Full Stack Developer, &amp; Tech Lead</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Banner
