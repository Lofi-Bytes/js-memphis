import React, { FC, ReactNode } from 'react'
import { Link } from 'gatsby'

import {
  formatClassList,
  joinStrings
} from '../../utils/utils'


export type ButtonProps = {
  action: 'primary' | 'secondary',
  children: ReactNode,
  className?: string,
  disabled: boolean,
  title: string,
  to?: string,
  type?: 'button' | 'submit' | 'reset',
  [other:string]: unknown
}

const BTN: string = `
  outline-none
  focus:outline-none
  hover:outline-none
  active:outline-none

  overflow-hidden
  text-center
  tracking-wide
  transition

  block
`

const PRIMARY_BASE: string = `
  ${BTN}
  active:shadow-sm
  duration-200

  ring-1
  ring-offset-1

  focus:ring-1
  focus:ring-offset-1

  hover:ring-1
  hover:ring-offset-1

  active:ring-1
  active:ring-offset-1

  px-6
  py-2
  rounded-full
  shadow-lg
`

const SECONDARY_BASE: string = `
  ${BTN}
  active:shadow-sm
  duration-200

  ring-1
  ring-offset-1

  focus:ring-1
  focus:ring-offset-1

  hover:ring-1
  hover:ring-offset-1

  active:ring-1
  active:ring-offset-1

  px-6
  py-2
  rounded-full
  shadow-lg
`

const PRIMARY: string = `
  ${PRIMARY_BASE}
  bg-purple-300
  text-purple-900
  font-medium

  ring-offset-purple-300
  ring-purple-200
  ring-opacity-75

  focus:ring-offset-purple-700
  focus:ring-purple-200
  focus:ring-opacity-75

  hover:ring-offset-purple-700
  hover:ring-purple-200
  hover:ring-opacity-75

  active:ring-offset-purple-700
  active:ring-purple-200
  active:ring-opacity-75

  transform
  hover:-translate-y-0.5
  focus:-translate-y-0.5
  active:translate-y-0.5
  ease-in-out
`

const SECONDARY: string = `
  ${SECONDARY_BASE}
  bg-purple-50
  text-purple-600
  font-medium

  ring-offset-purple-300
  ring-purple-200
  ring-opacity-75

  focus:ring-offset-purple-700
  focus:ring-purple-200
  focus:ring-opacity-75

  hover:ring-offset-purple-700
  hover:ring-purple-200
  hover:ring-opacity-75

  active:ring-offset-purple-700
  active:ring-purple-200
  active:ring-opacity-75

  transform
  hover:-translate-y-0.5
  focus:-translate-y-0.5
  active:translate-y-0.5
  ease-in-out
`

const Button: FC<ButtonProps> = ({
  action,
  children,
  className,
  disabled,
  title,
  to,
  type,
  ...other
}: ButtonProps) => {

  const primary = formatClassList(PRIMARY)
  const secondary = formatClassList(SECONDARY)

  return (
    <React.Fragment>
      {
        to
          ?
            <Link
              className={
                action === 'primary'
                  ? joinStrings(' ', primary, className)
                  : action === 'secondary'
                    ? joinStrings(' ', secondary, className)
                    : className
              }
              role={type}
              title={title}
              to={to}
              {...other}
            >
              {children}
            </Link>
          :
            <button
              className={
                action === 'primary'
                  ? joinStrings(' ', primary, className)
                  : action === 'secondary'
                    ? joinStrings(' ', secondary, className)
                    : className
              }
              title={title}
              type={type}
              {...other}
            >
              {children}
            </button>
      }
    </React.Fragment>
  )
}

export default Button
