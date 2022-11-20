import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { formatDate } from '../../utils/utils'

import Banner from '../../components/banner/banner'
import Button from '../../components/button'
import H3 from '../../components/content-heading'
import Jumbotron from '../../components/jumbotron'
import Layout from '../../components/layout'
import Main from '../../components/main'
import NextPrev from '../../components/next-prev'
import P from '../../components/paragraph'
import Section from '../../components/section'
import SEO from '../../components/seo'
import Tag from '../../components/tag'
import TextLink from '../../components/text-link'

import Prism from 'prismjs'


type PageProps = {
  location: Location
}

const WhatILookForADevelopersResumePage = ({
  location
}: PageProps) => {
  const postData = useStaticQuery(graphql`
    query WhatILookForInADevelopersResumeQuery {
      allPostsJson(
        filter: {
          title: {
            eq: "What I Look for in a Developer's Resume"
          },
          subtitle: {
            eq: ""
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
  const tags = postData.allPostsJson.edges[0].node.tags

  const formattedDate = formatDate(date)

  React.useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  })

  return (
    <Layout location={location}>
      <SEO
        metaTitle="What I Look for in a Developer's Resume"
        metaDescription=""
        canonicalUrl="https://jillian.dev/writing/what-i-look-for-in-a-developers-resume"
      />
      <Jumbotron
        align="left"
        title={title}
        subtitle={subtitle}
        date={formattedDate}
      />
      <Main>
        <Section background="opaque" className="mb-8 -mt-12">
          <Banner color="purple">
            ?
          </Banner>
          <Button
            action="tertiary"
            className="mt-10 w-max"
            role="link"
            disabled={false}
            title="Back to article list"
            to="/writing"
          >
            <i className="fa-solid fa-arrow-left" />&nbsp;&nbsp;Back to article list
          </Button>

          <H3 className="mt-10">Introduction</H3>
          <P className="mt-4">
            I regularly see questions about how to write a good developer's resume pop up on social media. As a hiring manager at a large fintech company, I review <strong>a lot</strong> of resumes. Here, I aim to provide folks with some insight into what I look for in a candidate's resume and what I find makes a candidate stand out from the crowd.
            {/* <TextLink
              to=""
              title=""
              outbound={true}
            ></TextLink> */}
          </P>

          <H3 className="mt-10">?</H3>
          <P className="mt-4">

          </P>

          <h4 className="mt-10 text-lg tracking-wide text-stone-600">?</h4>
          <P className="mt-4">

          </P>

          <H3 className="mt-10">Conclusion</H3>
          <P className="mt-4">

          </P>
          <NextPrev path={path} className="mt-10" />
        </Section>
        <Section background="opaque" className="mb-8">
          <H3>Tags</H3>
          <div className="flex flex-wrap mt-4">
            {
              tags.map((tag, index) => {
                return (
                  <Tag
                    card={false}
                    key={`item-${index}`}
                    tagColor="purple"
                  >
                    {tag}
                  </Tag>
                )
              })
            }
          </div>
        </Section>
      </Main>
    </Layout>
  )
}

export default WhatILookForADevelopersResumePage
