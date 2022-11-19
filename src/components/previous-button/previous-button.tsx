import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Button from '../button'


type PreviousButtonProps = {
  action: 'primary' | 'secondary',
  children: React.ReactNode,
  path: string,
  className?: string
}

const PreviousButton = ({
  action,
  children,
  path,
  className
}: PreviousButtonProps) => {
  const postData = useStaticQuery(graphql`
    query PreviousQuery {
      allPostsJson(sort: {date: ASC}) {
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
    <React.Fragment>
      {
        postData.allPostsJson.edges.map((edge, index) => {
          let previousPath

          if(edge.node.path === path && edge.previous) {
            previousPath = edge.previous.path
            return(
              <Button
                action={action}
                disabled={false}
                role="link"
                title=""
                to={previousPath}
                key={`prev-${index}`}
              >
                <i className="fa-regular fa-chevron-left" />&nbsp;&nbsp;{children}
              </Button>
            )
          }
          return(<React.Fragment key={`next-prev-${index}`}></React.Fragment>)
        })
      }
    </React.Fragment>
  )
}

export default PreviousButton
