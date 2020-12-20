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
                className="text-lightBlue-700 focus:outline-none focus:ring-1 focus:ring-lightBlue-700 rounded"
              >
                {
                  type
                    ?
                      <CustomTag className="hover:border-b-2 border-lightBlue-700 hover:transition-all transition-all duration-75 w-max inline">
                        {children}
                      </CustomTag>
                    :
                      <span className="hover:border-b-2 border-lightBlue-700 hover:transition-all transition-all duration-75 w-max inline">
                        {children}
                      </span>
                }
              </a>
            :
              <Link
                to={to}
                className="text-lightBlue-700 focus:outline-none focus:ring-1 focus:ring-lightBlue-700 rounded"
              >
                {
                  type
                    ?
                      <CustomTag className="hover:border-b-2 border-lightBlue-700 hover:transition-all transition-all duration-75 w-max inline">
                        {children}
                      </CustomTag>
                    :
                      <span className="hover:border-b-2 border-lightBlue-700 hover:transition-all transition-all duration-75 w-max inline">
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
