import React, { FC, ReactNode, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Banner from '../../components/banner'
import Layout from '../../components/layout'
import TextLink from '../../components/text-link'
import Section from '../../components/section'
import SEO from '../../components/seo'
import Main from '../../components/main'
import NextButton from '../../components/next-button'
import PreviousButton from '../../components/previous-button'

import Prism from 'prismjs'

const BeautifulWebFormsJamstackReactHookFormPage: FC<ReactNode> = () => {
  const postData = useStaticQuery(graphql`
    query BeautifulWebFormsJamstackReactHookFormQuery {
      allPostsJson(
        filter: {
          title: {
            eq: "Beautiful Web Forms on the Jamstack"
          },
          subtitle: {
            eq: "With React Hook Form"
          }
        }
      ) {
        edges {
          node {
            title
            subtitle
            date
            tags
            path
          }
        }
      }
    }
  `)

  const title = postData.allPostsJson.edges[0].node.title
  const subtitle = postData.allPostsJson.edges[0].node.subtitle
  const date = postData.allPostsJson.edges[0].node.date
  const path = postData.allPostsJson.edges[0].node.path

  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  })

  return (
    <Layout>
      <SEO
        metaTitle=""
        metaDescription=""
        canonicalUrl=""
      />
      <Banner
        align="left"
        title={title}
        subtitle={subtitle}
        date={date}
      />
      <Main>
        <Section className="mb-8 -mt-12">
          <div className="max-w-xs px-10 py-2 -ml-10 rounded shadow-lg bg-cyan-300 w-max sm:px-24 sm:-ml-24 sm:max-w-none">
            <h2 className="text-xl tracking-wide text-gray-800 sm:text-2xl">React Hook Form</h2>
          </div>
          <h3 className="mt-10 text-xl tracking-wide text-gray-700">Introduction</h3>
          <p className="mt-3 leading-relaxed tracking-wider text-gray-600">
          </p>

          <div className="flex items-center justify-between mt-10">
            <PreviousButton
              action="secondary"
              path={path}
            >
              <i className="far fa-chevron-left"></i>&nbsp;&nbsp;Prev
            </PreviousButton>
            <NextButton
              action="primary"
              path={path}
            >
              Next&nbsp;&nbsp;<i className="far fa-chevron-right"></i>
            </NextButton>
          </div>

        </Section>
      </Main>
    </Layout>
  )
}

export default BeautifulWebFormsJamstackReactHookFormPage
