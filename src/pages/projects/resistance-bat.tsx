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
            className="h-80 mt-10 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/resistance-flow-bats/resistance-flow-bats-logo.png"
          />
          <P className="text-sm">Logo design by Sierra Estrella</P>

          <H3 className="mt-10">Debut</H3>

          <P className="mt-0.5">Event:&nbsp;
            <TextLink
              to='https://apogaea.com/'
              title="Colorado Burning Man regional event"
              outbound={true}
            >
              Apogaea
            </TextLink>
          </P>
          <P className="mt-0.5">Date: June 9-11, 2022</P>

          <H3 className="mt-10">Description</H3>

          <P className="mt-4">
            {excerpt}
          </P>

          <StaticImage
            alt="Resistance and the FLow Bats logo"
            className="h-80 mt-10 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/resistance-flow-bats/IMG_1365.jpeg"
          />
          <P className="text-sm">LED and jigsaw work by Jillian Estrella</P>

          <StaticImage
            alt="Resistance and the FLow Bats logo"
            className="h-80 mt-10 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/resistance-flow-bats/IMG_1364.jpeg"
          />
          <P className="text-sm">LED and jigsaw work by Jillian Estrella</P>

          <StaticImage
            alt="Resistance and the FLow Bats logo"
            className="h-80 mt-10 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/resistance-flow-bats/IMG_1363.jpeg"
          />
          <P className="text-sm">LED and jigsaw work by Jillian Estrella</P>

          <div
            className="rounded-xl"
            style={{
              padding: "55% 0 0 0",
              position: "relative"
            }}
          >
            <iframe
              src="https://player.vimeo.com/video/715898512?h=a8da632fc0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="rounded-xl"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%"
              }}
              title="resistance-bat.mov"
            >
            </iframe>
          </div>
          <P className="text-sm">Video of the completed art piece.</P>
          <script src="https://player.vimeo.com/api/player.js"></script>

          <Banner color="rose" className="mt-16">
            Process
          </Banner>

          <H3 className="mt-10 mb-10">
            Illustration
          </H3>

          <P className="mt-4">
            Initial proof of concept was sketched using an iPad and an Apple Pencil in Pixelmator. The final vector-based Illustration was also done on an iPad in Vectornator.
          </P>

          <H3 className="mt-10 mb-10">
            Wood work
          </H3>

          <P className="mt-4">
            The sign was built from 3/4 inch ACX plywood. The design was transferred from computer onto the plywood with a projector. It was then meticulously cut by hand with a jigsaw.
          </P>

          <H3 className="mt-10">
            LEDs
          </H3>

          <P className="mt-4">
            Two separate strips of SK6812 LEDs light this piece. Each strip consists of about 85 LEDs. The LEDs are controlled by a Seeed XIAO RP2040 microcontroller and they were sequenced in <TextLink
                to="https://circuitpython.org/"
                title="CircuitPython - the easiest way to program microcontrollers."
                outbound={true}
              >CircuitPython</TextLink>. <TextLink
                to="https://docs.python.org/3/library/asyncio.html"
                title="asyncio — Asynchronous I/O — Python 3.10.4 documentation"
                outbound={true}
              >Asynchronous I/O</TextLink> was required to sequence both strips of lights simultaneously from the same microcontroller.
          </P>

          <P className="mt-4">
            The outer strip uses a standard rainbow fade. The inner strip uses recursion to mimic fire/candle light. The recursion is used to make a fractal of the brightness over time - which is what gives it the simulated flickering effect of fire.
          </P>

          <Banner color="rose" className="mt-16">
            Credits
          </Banner>

          <P className="text-lg mt-10">
            Sierra Estrella
          </P>
          <P className="text-sm">
            Project artist; illustration
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
