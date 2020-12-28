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
      className="flex px-8 py-4 mt-8 bg-blue-100 border-l-8 border-blue-500 rounded shadow-lg"
      // className={
      //   className
      //     ? joinStrings(' ', styles, className)
      //     : styles
      // }
    >
      <i className="far fa-info-circle text-xl text-blue-900 mt-0.5"></i>
      <p className="ml-4 leading-relaxed tracking-wider text-blue-900">{children}</p>
    </div>
  )
}

export default Alert
