import React, { FC, ReactNode } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Button from '../button'


type NextButtonProps = {
  action: 'primary' | 'secondary',
  children: ReactNode,
  path: string,
  className?: string
}

const NextButton: FC<NextButtonProps> = ({
  action,
  children,
  path,
  className
}: NextButtonProps) => {
  const postData = useStaticQuery(graphql`
    query NextQuery {
      allPostsJson(sort: {fields: date, order: ASC}) {
        edges {
          node {
            path
          }
          next {
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
          let nextPath
          if(edge.node.path === path && edge.next) {
            nextPath = edge.next.path
            return(
              <Button
                action={action}
                disabled={false}
                title=""
                to={nextPath}
                key={index}
              >
                {children}
              </Button>
            )
          }
          return(<></>)
        })
      }
    </>
  )
}

export default NextButton
