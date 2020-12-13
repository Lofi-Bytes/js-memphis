import React, { FC, ReactNode } from 'react'


export type TextLinkProps = {
  type?: string,
  children: ReactNode,
  external: boolean,
  href: string
}

const TextLink: FC<TextLinkProps> = ({
  type,
  children,
  external,
  href
}: TextLinkProps) => {
  const CustomTag = `${type}` as keyof JSX.IntrinsicElements

  return (
    <React.Fragment>
      <React.Fragment>
        {
          external
            ?
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lightBlue-700 focus:outline-none focus:ring-1 focus:ring-lightBlue-700 rounded"
              >
                {
                  type
                    ?
                      <CustomTag className="hover:border-b-2 border-lightBlue-700 hover:transition-all transition-all duration-75 w-max inline">
                        {children}&nbsp;<sup><i className="fas fa-external-link-alt external-link-icon" style={{ fontSize: '.60rem' }} /></sup>
                      </CustomTag>
                    :
                      <span className="hover:border-b-2 border-lightBlue-700 hover:transition-all transition-all duration-75 w-max inline">
                        {children}&nbsp;<sup><i className="fas fa-external-link-alt external-link-icon" style={{ fontSize: '.60rem' }} /></sup>
                      </span>
                }
              </a>
            :
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
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
        }
      </React.Fragment>
    </React.Fragment>
  )
}

export default TextLink
