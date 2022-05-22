import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { StaticImage } from 'gatsby-plugin-image'

import { formatDate } from '../../utils/utils'

import Banner from '../../components/banner/banner'
import Button from '../../components/button'
import H3 from '../../components/content-heading'
import Jumbotron from '../../components/jumbotron'
import Layout from '../../components/layout'
import Main from '../../components/main'
import P from '../../components/paragraph'
import Section from '../../components/section'
import SEO from '../../components/seo'
import Tag from '../../components/tag'
import TextLink from '../../components/text-link'


type PageProps = {
  location: Location
}

const ResistanceBatPage = ({
  location
}: PageProps) => {
  const projectData = useStaticQuery(graphql`
    query ResistanceBatQuery {
      allProjectsJson(
        filter: {
          title: {
            eq: "Resistance Bat"
          }
        }
      ) {
        edges {
          node {
            title
            date
            excerpt
            tags
            path
          }
        }
      }
    }
  `)

  const title = projectData.allProjectsJson.edges[0].node.title
  const date = projectData.allProjectsJson.edges[0].node.date
  const excerpt = projectData.allProjectsJson.edges[0].node.excerpt
  // const path = projectData.allProjectsJson.edges[0].node.path
  const tags = projectData.allProjectsJson.edges[0].node.tags

  const formattedDate = formatDate(date)

  return (
    <Layout location={location}>
      <SEO
        metaTitle="Resistance Bat"
        metaDescription={excerpt}
        canonicalUrl="https://jillian.dev/projects/resistance-bat/"
      />
      <Jumbotron
        align="left"
        title={title}
        date={formattedDate}
      />
      <Main>
        <Section background="opaque" className="mb-8 -mt-12">
          <Banner color="rose">
            Project Summary
          </Banner>

          <Button
            action="tertiary"
            disabled={false}
            role="link"
            title="Back to article list"
            className="mt-10 w-max"
            to="/projects"
          >
            <i className="fas fa-arrow-left" />&nbsp;&nbsp;Back to project list
          </Button>

          <StaticImage
            alt="Resistance and the FLow Bats logo"
            aspectRatio={16/9}
            className="h-80 mt-10 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/resistance-flow-bats/resistance-flow-bats-logo.png"
          />

          <H3 className="mt-10">Debut</H3>

          <P className="mt-0.5">Event:&nbsp;
            <TextLink
              to='https://apogaea.com/'
              title="Colorado Burning Man regional event"
              external={true}
            >
              Apogaea
            </TextLink>
          </P>
          <P className="mt-0.5">Date: June 9-11, 2022</P>

          <H3 className="mt-10">Description</H3>

          <P className="mt-4">
            {excerpt}
          </P>

          <Banner color="rose" className="mt-16">
            Process
          </Banner>

          <H3 className="mt-10 mb-10">
            Illustration
          </H3>

          <P className="mt-4">
            Coming soon!
          </P>

          <H3 className="mt-10 mb-10">
            Wood work
          </H3>

          <P className="mt-4">
            Coming soon!
          </P>

          <H3 className="mt-10">
            LEDs
          </H3>

          <P className="mt-4">
            Coming soon!
          </P>

          <Banner color="rose" className="mt-16">
            Credits
          </Banner>

          <P className="text-lg mt-10">
            Sierra Estrella
          </P>
          <P className="text-sm">
            Project artist; illustration and physical design
          </P>

          <P className="text-lg mt-6">
            Jillian Estrella
          </P>
          <P className="text-sm mb-10">
            Project artist; LED and physical design
          </P>

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
                    tagColor="rose"
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

export default ResistanceBatPage
