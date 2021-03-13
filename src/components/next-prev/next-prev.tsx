import React, { FC, ReactNode } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Button from '../button'
import NextButton from '../../components/next-button'
import PreviousButton from '../../components/previous-button'

import { joinStrings } from '../../utils/utils'


type NextPrevProps = {
  path: string,
  children?: ReactNode,
  className?: string
}

const NextPrev: FC<NextPrevProps> = ({
  path,
  children,
  className
}: NextPrevProps) => {
  const postData = useStaticQuery(graphql`
    query NextPrevQuery {
      allPostsJson(sort: {fields: date, order: ASC}) {
        edges {
          node {
            path
          }
          next {
            subtitle
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
          if(edge.node.path === path && (edge.next && edge.previous)) {
            return(
              <div
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
          if(edge.node.path === path && (edge.next && !edge.previous)) {
            return(
              <div className={className}>
                <NextButton
                  action="primary"
                  path={path}
                >
                  {children}
                </NextButton>
              </div>
            )
          }
          if(edge.node.path === path && (!edge.next && edge.previous)) {
            return(
              <div
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
                  title="Back to article list"
                  to="/writing"
                >
                  List&nbsp;&nbsp;<i className="far fa-chevron-right" />
                </Button>
              </div>
            )
          }
        })
      }
    </>
  )
}

export default NextPrev
