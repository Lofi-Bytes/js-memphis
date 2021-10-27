import React, { FC, ReactNode } from 'react'
import { Link } from 'gatsby'


export type TextLinkProps = {
  type?: string,
  children: ReactNode,
  external: boolean,
  to: string
}

const TextLink: FC<TextLinkProps> = ({
  type,
  children,
  external,
  to
}: TextLinkProps) => {
  const CustomTag = `${type}` as keyof JSX.IntrinsicElements

  return (
    <React.Fragment>
      <React.Fragment>
        {
          external
            ?
              <a
                href={to}
                className="rounded-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                {
                  type
                    ?
                      <CustomTag className="inline border-b-2 border-sky-500 w-max">
                        {children}
                      </CustomTag>
                    :
                      <span className="inline border-b-2 border-sky-500 w-max">
                        {children}
                      </span>
                }
              </a>
            :
              <Link
                to={to}
                className="rounded-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                {
                  type
                    ?
                      <CustomTag className="inline border-b-2 border-sky-500 w-max">
                        {children}
                      </CustomTag>
                    :
                      <span className="inline border-b-2 border-sky-500 w-max">
                        {children}
                      </span>
                }
              </Link>
        }
      </React.Fragment>
    </React.Fragment>
  )
}

export default TextLink
