import React, { ReactNode } from 'react'


type AlertProps = {
  children: ReactNode,
  className?: string
}


const Alert = ({
  children,
  className
}: AlertProps) => {
  // const styles = formatClassList(STYLES)
  return (
    <div
      className="flex px-4 py-4 mt-8 bg-blue-100 border-l-8 border-blue-500 rounded shadow sm:px-8"
      // className={
      //   className
      //     ? joinStrings(' ', styles, className)
      //     : styles
      // }
    >
      <div className="hidden sm:inline-block">
        <i className="far fa-info-circle text-xl text-blue-900 mt-0.5"></i>
      </div>
      <p className="leading-relaxed tracking-wider text-blue-900 sm:ml-4">{children}</p>
    </div>
  )
}

export default Alert
