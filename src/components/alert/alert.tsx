import * as React from 'react'
import {
  formatClassList,
  joinStrings
} from '../../utils/utils'


type AlertProps = {
  children: React.ReactNode,
  className?: string,
  color: 'blue' | 'red' | 'green',
  withIcon?: boolean
}

const ALERT_BOX = formatClassList([
  'border-l-8',
  'flex',
  'px-4',
  'py-4',
  'rounded',
  'shadow',
  'sm:px-8'
])

const ICON = formatClassList([
  'fa-regular',
  'mt-0.5',
  'text-xl'
])

const ALERT_ICON_BLUE = formatClassList([
  ICON,
  'fa-circle-info',
  'text-blue-900'
])

const ALERT_ICON_RED = formatClassList([
  ICON,
  'fa-circle-xmark',
  'text-red-900'
])

const ALERT_ICON_GREEN = formatClassList([
  ICON,
  'fa-circle-check',
  'text-green-900'
])

const ALERT_MESSAGE = formatClassList([
  'leading-relaxed',
  'tracking-wider'
])

const ALERT_MESSAGE_BLUE = formatClassList([
  ALERT_MESSAGE,
  'text-blue-900'
])

const ALERT_MESSAGE_RED = formatClassList([
  ALERT_MESSAGE,
  'text-red-900'
])

const ALERT_MESSAGE_GREEN = formatClassList([
  ALERT_MESSAGE,
  'text-green-900'
])

const ALERT_BOX_BLUE = formatClassList([
  ALERT_BOX,
  'bg-blue-100',
  'border-blue-500',
])

const ALERT_BOX_RED = formatClassList([
  ALERT_BOX,
  'bg-red-100',
  'border-red-500',
])

const ALERT_BOX_GREEN = formatClassList([
  ALERT_BOX,
  'bg-green-100',
  'border-green-500',
])

const ALERT_BOX_COLORS: Record<string, string> = {
  'blue': ALERT_BOX_BLUE,
  'red': ALERT_BOX_RED,
  'green': ALERT_BOX_GREEN,
}

const ALERT_MESSAGE_COLORS: Record<string, string> = {
  'blue': ALERT_MESSAGE_BLUE,
  'red': ALERT_MESSAGE_RED,
  'green': ALERT_MESSAGE_GREEN,
}

const ALERT_ICON_COLORS: Record<string, string> = {
  'blue': ALERT_ICON_BLUE,
  'red': ALERT_ICON_RED,
  'green': ALERT_ICON_GREEN
}

const Alert = ({
  children,
  className,
  color,
  withIcon=false
}: AlertProps) => {

  let formattedAlert: string
  let formattedIcon: string
  let formattedMessage: string

  if (ALERT_BOX_COLORS.hasOwnProperty(color)) {
    formattedAlert = ALERT_BOX_COLORS[color]
  }

  if (ALERT_ICON_COLORS.hasOwnProperty(color)) {
    formattedIcon = ALERT_ICON_COLORS[color]
  }

  if (ALERT_MESSAGE_COLORS.hasOwnProperty(color)) {
    formattedMessage = ALERT_MESSAGE_COLORS[color]
  }

  return (
    <div
      className={
        className
          ? joinStrings(' ', formattedAlert, className)
          : formattedAlert
      }
    >
      {withIcon
        ?
          <i className={formattedIcon} aria-hidden="true" />
        : null
      }
      <p
        className={
          withIcon
            ? joinStrings(' ', formattedMessage, 'ml-4')
            : formattedMessage
        }
      >
        {children}
      </p>
    </div>
  )
}

export default Alert
