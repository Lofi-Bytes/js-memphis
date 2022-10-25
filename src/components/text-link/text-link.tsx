import * as React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from "gatsby-plugin-google-analytics"

import {
  formatClassList,
  joinStrings
} from '../../utils/utils'


export type TextLinkProps = {
  children: React.ReactNode,
  className?: string,
  outbound: boolean,
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
  outbound,
  title,
  to,
  type
}: TextLinkProps) => {
  const CustomTag = `${type}` as keyof JSX.IntrinsicElements

  const formattedClassname = joinStrings(' ', LINK, className)

  return (
    <React.Fragment>
      {
        outbound
          ?
            <OutboundLink
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
            </OutboundLink>
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
