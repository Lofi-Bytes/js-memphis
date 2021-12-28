import * as React from 'react'
import { Link } from 'gatsby'

import {
  formatClassList,
  joinStrings
} from '../../utils/utils'


export type ButtonProps = {
  action: 'primary' | 'secondary' | 'tertiary',
  children: React.ReactNode,
  className?: string,
  disabled: boolean,
  title: string,
  to?: string,
  type?: string,
  role?: string,
  [other:string]: unknown
}

const BTN = formatClassList([
  'block',
  'cursor-pointer',
  'font-medium',

  'outline-none',
  'focus:outline-none',
  'hover:outline-none',
  'active:outline-none',

  'overflow-hidden',
  'text-center',
  'tracking-wide',
  'transition'
])

const PRIMARY_SECONDARY_BASE = formatClassList([
  BTN,
  'active:shadow-sm',
  'duration-200',

  'ring-1',
  'ring-offset-1',

  'focus:ring-1',
  'focus:ring-offset-1',

  'hover:ring-1',
  'hover:ring-offset-1',

  'active:ring-1',
  'active:ring-offset-1',

  'px-6',
  'py-2',
  'rounded-full',
  'shadow-lg',
  'shadow-purple-300/50',

  'transform',
  'hover:-translate-y-0.5',
  'focus:-translate-y-0.5',
  'active:translate-y-0.5',
  'ease-in-out',

  'active:ring-offset-purple-700',
  'active:ring-purple-200',
  'active:ring-opacity-75',

  'hover:ring-offset-purple-700',
  'hover:ring-purple-200',
  'hover:ring-opacity-75',

  'focus:ring-offset-purple-700',
  'focus:ring-purple-200',
  'focus:ring-opacity-75',

  'ring-offset-purple-300',
  'ring-purple-200',
  'ring-opacity-75'
])

const PRIMARY = formatClassList([
  PRIMARY_SECONDARY_BASE,
  'bg-purple-300',
  'text-purple-900'
])

const SECONDARY = formatClassList([
  PRIMARY_SECONDARY_BASE,
  'bg-purple-50',
  'text-purple-600'
])

const TERTIARY = formatClassList([
  BTN,

  'border-b-2',
  'border-transparent',

  'ease-in-out',
  'text-purple-700',
  'transform',

  'hover:border-purple-700',
  'focus:border-purple-700',
  'active:border-purple-700',
])

const Button = ({
  action,
  children,
  className,
  disabled,
  role,
  title,
  to,
  type,
  ...other
}: ButtonProps) => {

  let formattedClassName
  if (action === 'primary') {
    formattedClassName = joinStrings(' ', PRIMARY, className)
  }

  if (action === 'secondary') {
    formattedClassName = joinStrings(' ', SECONDARY, className)
  }

  if (action === 'tertiary') {
    formattedClassName = joinStrings(' ', TERTIARY, className)
  }

  if (to) {
    return (
      <Link
        className={formattedClassName}
        role={role}
        title={title}
        type={type}
        to={to}
        {...other}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      className={formattedClassName}
      role={role}
      title={title}
      type={type}
      {...other}
    >
      {children}
    </button>
  )
}

export default Button
