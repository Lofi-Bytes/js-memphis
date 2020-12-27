import React, { FC, ReactNode } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Button from '../button'


type PreviousButtonProps = {
  action: 'primary' | 'secondary',
  children: ReactNode,
  path: string,
  className?: string
}

const PreviousButton: FC<PreviousButtonProps> = ({
  action,
  children,
  path,
  className
}: PreviousButtonProps) => {
  const postData = useStaticQuery(graphql`
    query PreviousQuery {
      allPostsJson(sort: {fields: date, order: ASC}) {
        edges {
          node {
            path
          }
          previous {
            subtitle
            path
          }
        }
      }
    }
  `)

  return (
    <>
      {
        postData.allPostsJson.edges.map((edge, index) => {
          let previousPath
          if(edge.node.path === path && edge.previous) {
            previousPath = edge.previous.path
            return(
              <Button
                action={action}
                disabled={false}
                title=""
                to={previousPath}
                key={index}
              >
                <i className="far fa-chevron-left" />&nbsp;&nbsp;{children}
              </Button>
            )
          }
          return(<></>)
        })
      }
    </>
  )
}

export default PreviousButton
