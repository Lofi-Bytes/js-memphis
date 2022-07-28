import * as React from 'react'
import { Link } from 'gatsby'

import {
  formatClassList,
  joinStrings
} from '../../utils/utils'


export type TextLinkProps = {
  children: React.ReactNode,
  className?: string,
  external: boolean,
  title: string,
  to: string
  type?: string
}

const LINK = formatClassList([
  'focus:outline-none',
  'focus:ring-2',
  'focus:ring-sky-500',
  'rounded-sm'
])

const CONTENT = formatClassList([
  'border-b-2',
  'border-sky-500',
  'inline',
  'w-max'
])

const TextLink = ({
  children,
  className,
  external,
  title,
  to,
  type
}: TextLinkProps) => {
  const CustomTag = `${type}` as keyof JSX.IntrinsicElements

  const formattedClassname = joinStrings(' ', LINK, className)

  return (
    <React.Fragment>
      {
        external
          ?
            <a
              href={to}
              title={title}
              className={formattedClassname}
            >
              {
                type
                  ?
                    <CustomTag className={CONTENT}>
                      {children}
                    </CustomTag>
                  :
                    <span className={CONTENT}>
                      {children}
                    </span>
              }
            </a>
          :
            <Link
              to={to}
              className={formattedClassname}
            >
              {
                type
                  ?
                    <CustomTag className={CONTENT}>
                      {children}
                    </CustomTag>
                  :
                    <span className={CONTENT}>
                      {children}
                    </span>
              }
            </Link>
      }
    </React.Fragment>
  )
}

export default TextLink
