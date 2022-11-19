import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Button from '../button'
import NextButton from '../../components/next-button'
import PreviousButton from '../../components/previous-button'

import { joinStrings } from '../../utils/utils'


type NextPrevProps = {
  path: string,
  children?: React.ReactNode,
  className?: string
}

const NextPrev = ({
  path,
  children,
  className
}: NextPrevProps) => {
  const postData = useStaticQuery(graphql`
    query NextPrevQuery {
      allPostsJson(sort: {date: ASC}) {
        edges {
          node {
            path
          }
          next {
            subtitle
            path
            published
          }
          previous {
            subtitle
            path
            published
          }
        }
      }
    }
  `)

  return (
    <React.Fragment>
      {
        postData.allPostsJson.edges.map((edge, index) => {
          if(
              edge.node.path === path &&
              edge.next &&
              edge.next.published &&
              edge.previous &&
              edge.previous.published
          ) {
            return(
              <div
                key={`next-prev-${index}`}
                className={
                  className
                    ? joinStrings(' ', "flex items-center justify-between", className)
                    : "flex items-center justify-between"
                }
              >
                <PreviousButton
                  action="secondary"
                  path={path}
                >
                  Prev
                </PreviousButton>
                <NextButton
                  action="primary"
                  path={path}
                >
                  Next
                </NextButton>
              </div>
            )
          }
          if(
              edge.node.path === path &&
              edge.next &&
              !edge.previous
          ) {
            return(
              <div className={className} key={`next-prev-${index}`}>
                <NextButton
                  action="primary"
                  path={path}
                >
                  {children}
                </NextButton>
              </div>
            )
          }
          if(
              edge.node.path === path &&
              (!edge.next || (edge.next && !edge.next.published)) &&
              edge.previous
          ) {
            return(
              <div
                key={`next-prev-${index}`}
                className={
                  className
                    ? joinStrings(' ', "flex items-center justify-between", className)
                    : "flex items-center justify-between"
                }
              >
                <PreviousButton
                  action="secondary"
                  path={path}
                >
                  Prev
                </PreviousButton>
                <Button
                  action="primary"
                  disabled={false}
                  role="link"
                  title="Back to article list"
                  to="/writing"
                >
                  List&nbsp;&nbsp;<i className="fa-regular fa-chevron-right" />
                </Button>
              </div>
            )
          }
        })
      }
    </React.Fragment>
  )
}

export default NextPrev
