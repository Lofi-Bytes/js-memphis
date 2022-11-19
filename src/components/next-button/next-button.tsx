import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Button from '../button'


type NextButtonProps = {
  action: 'primary' | 'secondary',
  children: React.ReactNode,
  path: string,
  className?: string
}

const NextButton = ({
  action,
  children,
  className,
  path
}: NextButtonProps) => {
  const postData = useStaticQuery(graphql`
    query NextQuery {
      allPostsJson(sort: {date: ASC}) {
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
                role="link"
                to={nextPath}
                key={`next-${index}`}
              >
                {children}&nbsp;&nbsp;<i className="fa-regular fa-chevron-right" />
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
