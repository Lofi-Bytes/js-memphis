import * as React from 'react'
import {
  formatClassList,
  joinStrings
} from '../../utils/utils'


type AlertProps = {
  children: React.ReactNode,
  className?: string
}

const ALERT_BOX = formatClassList([
  'bg-blue-100',
  'border-blue-500',
  'border-l-8',
  'flex',
  'px-4',
  'py-4',
  'rounded',
  'shadow',
  'sm:px-8'
])

const ICON_CONTAINER = formatClassList([
  'hidden',
  'sm:inline-block'
])

const ICON = formatClassList([
  'fa-info-circle',
  'far',
  'mt-0.5',
  'text-blue-900',
  'text-xl'
])

const ALERT_MESSAGE = formatClassList([
  'leading-relaxed',
  'sm:ml-4',
  'text-blue-900',
  'tracking-wider'
])

const Alert = ({
  children,
  className
}: AlertProps) => {
  return (
    <div
      className={
        className
          ? joinStrings(' ', ALERT_BOX, className)
          : ALERT_BOX
      }
    >
      <div className={ICON_CONTAINER}>
        <i className={ICON}></i>
      </div>
      <p className={ALERT_MESSAGE}>{children}</p>
    </div>
  )
}

export default Alert
