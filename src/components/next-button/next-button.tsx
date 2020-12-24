import React, { FC, ReactNode } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Button from '../button'


type NextButtonProps = {
  children: ReactNode,
  path: string,
  className?: string
}

const NextButton: FC<NextButtonProps> = ({
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
  // console.log(path)
  // console.log(postData.allPostsJson)



  return (
    <>
      {
        postData.allPostsJson.edges.map((edge, index) => {
          let nextPath
          if(edge.node.path === path && edge.next) {
            nextPath = edge.next.path
            // console.log(edge.next.path)
            return(
              <Button
                action="primary"
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
