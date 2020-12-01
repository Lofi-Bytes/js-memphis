import React, { FC, ReactNode } from 'react'


const Footer: FC<ReactNode> = ({}) => {
  return (
    <React.Fragment>
      <footer className="bg-indigo-700 bg-opacity-70 w-full ">
        <div className="flex justify-center items-center relative h-40">
          <a
            href="https://twitter.com/LofiBytes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter text-pink-50 hover:text-pink-200 focus:text-pink-200 active:text-pink-400 text-3xl hover:cursor-pointer duration-200"></i>
          </a>
          <a
            href="https://github.com/JSNickerson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github text-pink-50 hover:text-pink-200 focus:text-pink-200 active:text-pink-400 text-3xl ml-6 hover:cursor-pointer duration-200"></i>
          </a>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer
