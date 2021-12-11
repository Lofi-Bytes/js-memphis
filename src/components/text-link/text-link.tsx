import React, { Fragment, ReactNode } from 'react'
import { Link } from 'gatsby'

import { formatClassList } from '../../utils/utils'

export type TextLinkProps = {
  children: ReactNode,
  external: boolean,
  title: string,
  to: string
  type?: string,
}

const LINK: string = `
  focus:outline-none
  focus:ring-2
  focus:ring-sky-500
  rounded-sm
`

const CONTENT: string = `
  border-b-2
  border-sky-500
  inline
  w-max
`

const TextLink = ({
  children,
  external,
  title,
  to,
  type
}: TextLinkProps) => {
  let formattedLink = formatClassList(LINK)
  let formattedContent = formatClassList(CONTENT)

  const CustomTag = `${type}` as keyof JSX.IntrinsicElements

  return (
    <Fragment>
      {
        external
          ?
            <a
              href={to}
              title={title}
              className={formattedLink}
            >
              {
                type
                  ?
                    <CustomTag className={formattedContent}>
                      {children}
                    </CustomTag>
                  :
                    <span className={formattedContent}>
                      {children}
                    </span>
              }
            </a>
          :
            <Link
              to={to}
              className={formattedLink}
            >
              {
                type
                  ?
                    <CustomTag className={formattedContent}>
                      {children}
                    </CustomTag>
                  :
                    <span className={formattedContent}>
                      {children}
                    </span>
              }
            </Link>
      }
    </Fragment>
  )
}

export default TextLink
