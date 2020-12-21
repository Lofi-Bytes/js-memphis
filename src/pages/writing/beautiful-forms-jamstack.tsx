import React, { FC, ReactNode, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Banner from '../../components/banner'
import Layout from '../../components/layout'
import TextLink from '../../components/text-link'
import Section from '../../components/section'
import SEO from '../../components/seo'
import Main from '../../components/main'

import Prism from 'prismjs'


const code =
`export function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}`

const FirstPostTestPage: FC<ReactNode> = () => {
  const postData = useStaticQuery(graphql`
    query BeautifulFormsJamstackQuery {
      allPostsJson(
        filter: {
          title: {
            eq: "Beautiful Forms on the Jamstack"
          }
        }
      ) {
        edges {
          node {
            title
            subtitle
            date
            tags
          }
        }
      }
    }
  `)
  const title = postData.allPostsJson.edges[0].node.title
  const subtitle = postData.allPostsJson.edges[0].node.subtitle
  const date = postData.allPostsJson.edges[0].node.date
  const tags = postData.allPostsJson.edges[0].node.tags

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
        <Section className="-mt-12 mb-8">
          <div className="code-container">
            <pre className="line-numbers">
              <code className="language-javascript">{code}</code>
            </pre>
          </div>
        </Section>
      </Main>
    </Layout>
  )
}

export default FirstPostTestPage
