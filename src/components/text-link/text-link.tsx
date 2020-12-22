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
                className="focus:outline-none focus:ring-2 focus:ring-lightBlue-500 rounded-sm"
              >
                {
                  type
                    ?
                      <CustomTag className="border-b-2 border-lightBlue-500 w-max inline">
                        {children}
                      </CustomTag>
                    :
                      <span className="border-b-2 border-lightBlue-500 w-max inline">
                        {children}
                      </span>
                }
              </a>
            :
              <Link
                to={to}
                className="focus:outline-none focus:ring-2 focus:ring-lightBlue-500 rounded-sm"
              >
                {
                  type
                    ?
                      <CustomTag className="border-b-2 border-lightBlue-500 w-max inline">
                        {children}
                      </CustomTag>
                    :
                      <span className="border-b-2 border-lightBlue-500 w-max inline">
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
