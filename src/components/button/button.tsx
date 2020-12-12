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
  to: string,
  type: 'button' | 'submit' | 'reset',
  [other:string]: unknown
}

const BTN: string = `
  font-normal
  font-sans

  outline-none
  focus:outline-none
  hover:outline-none
  active:outline-none

  overflow-hidden
  text-center
  tracking-wide
  transition
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

// const SECONDARY_BASE: string = `
//   ${BTN}
//   active:border-b-2
//   active:rounded-none
//   active:transition-none
//   border-b-2
//   border-transparent
//   duration-100
//   focus:border-b-2
//   focus:duration-100
//   focus:rounded-none
//   focus:transition-all
//   hover:border-b-2
//   hover:duration-100
//   hover:rounded-none
//   hover:transition-all
//   px-1
//   py-1
//   transition-all
// `

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
  // hover:ring-offset-purple-600
  // hover:ring-purple-200
  // hover:ring-opacity-75
  // hover:bg-purple-200

// const SECONDARY: string = `
//   ${SECONDARY_BASE}
//   active:border-blue-1000
//   active:text-blue-1000
//   focus:border-blue-800
//   focus:text-blue-800
//   hover:border-blue-800
//   hover:text-blue-800
//   text-blue-800
// `

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
  // const secondary = formatClassList(SECONDARY)

  return (
    <React.Fragment>
      {
        to
          ?
            <Link
              className={
                action === 'primary'
                  ? joinStrings(' ', primary, className)
                  : primary
                  // : joinStrings(' ', secondary, className)
              }
              role="button"
              title={title}
              to={to}
              type={type}
              {...other}
            >
              {children}
            </Link>
          :
            <button
              className={
                action === 'primary'
                  ? joinStrings(' ', primary, className)
                  : primary
                  // : joinStrings(' ', secondary, className)
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
