import React, { FC, ReactNode } from 'react'

import {
  formatClassList,
  joinStrings
} from '../../utils/utils'


type AlertProps = {
  children: ReactNode,
  className?: string
}

// const STYLES = ``

const Alert: FC<AlertProps> = ({
  children,
  className
}: AlertProps) => {
  // const styles = formatClassList(STYLES)
  return (
    <div
      className="flex border-l-4 bg-blue-100 border-blue-400 py-4 px-8 rounded shadow-lg mt-8"
      // className={
      //   className
      //     ? joinStrings(' ', styles, className)
      //     : styles
      // }
    >
      <i className="far fa-info-circle text-xl text-blue-900 mt-0.5"></i>
      <p className="text-blue-900 ml-4 tracking-wider leading-relaxed">{children}</p>
    </div>
  )
}

export default Alert
