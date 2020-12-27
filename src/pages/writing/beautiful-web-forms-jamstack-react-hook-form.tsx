import React, { FC, ReactNode, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Banner from '../../components/banner'
import Layout from '../../components/layout'
import TextLink from '../../components/text-link'
import Section from '../../components/section'
import SEO from '../../components/seo'
import Main from '../../components/main'
import NextPrev from '../../components/next-prev'

import Prism from 'prismjs'


type PageProps = {
  location: Location
}

const BeautifulWebFormsJamstackReactHookFormPage: FC<PageProps> = ({
  location
}: PageProps) => {
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
    <Layout location={location}>
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

          <NextPrev path={path} className="mt-10" />
        </Section>
      </Main>
    </Layout>
  )
}

export default BeautifulWebFormsJamstackReactHookFormPage
