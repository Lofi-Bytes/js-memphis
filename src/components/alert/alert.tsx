import * as React from 'react'
import {
  formatClassList,
  joinStrings
} from '../../utils/utils'


type AlertProps = {
  children: React.ReactNode,
  className?: string
}

const ALERT_BOX = `
  bg-blue-100
  border-blue-500
  border-l-8
  flex
  mt-8
  px-4
  py-4
  rounded
  shadow
  sm:px-8
`

const ICON_CONTAINER = `
  hidden
  sm:inline-block
`

const ICON = `
  fa-info-circle
  far
  mt-0.5
  text-blue-900
  text-xl
`

const ALERT_MESSAGE = `
  leading-relaxed
  sm:ml-4
  text-blue-900
  tracking-wider
`

const Alert = ({
  children,
  className
}: AlertProps) => {
  const formattedAlertBox = formatClassList(ALERT_BOX)
  const formattedClassList = className
                              ? joinStrings(' ', formattedAlertBox, className)
                              : formattedAlertBox
  const formattedIconContainer = formatClassList(ICON_CONTAINER)
  const formattedIcon = formatClassList(ICON)
  const formattedAlertMessage = formatClassList(ALERT_MESSAGE)

  return (
    <div
      className={formattedClassList}
    >
      <div className={formattedIconContainer}>
        <i className={formattedIcon}></i>
      </div>
      <p className={formattedAlertMessage}>{children}</p>
    </div>
  )
}

export default Alert
