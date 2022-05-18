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

const MegaloTorusPage = ({
  location
}: PageProps) => {
  const projectData = useStaticQuery(graphql`
    query MegaloTorusQuery {
      allProjectsJson(
        filter: {
          title: {
            eq: "☆*:.¨. MegaloTorus .*・｡ﾟ.*･｡ﾟ҉̛☆"
          }
        }
      ) {
        edges {
          node {
            title
            date
            tags
            path
          }
        }
      }
    }
  `)

  const title = projectData.allProjectsJson.edges[0].node.title
  const date = projectData.allProjectsJson.edges[0].node.date
  // const path = projectData.allProjectsJson.edges[0].node.path
  const tags = projectData.allProjectsJson.edges[0].node.tags

  const formattedDate = formatDate(date)

  return (
    <Layout location={location}>
      <SEO
        metaTitle="MegaloTorus LED art installation"
        metaDescription="MegaloTorus leverages light - mapped over its translucent, diffusive membrane - to explore the dynamic flow of energy, as well as the infinite nature of the torus."
        canonicalUrl="https://jillian.dev/projects/megalotorus/"
      />
      <Jumbotron
        align="left"
        title={title}
        date={formattedDate}
      />
      <Main>
        <Section background="opaque" className="mb-8 -mt-12">
          <Banner color="purple">
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
            alt="MegaloTorus logo"
            aspectRatio={16/9}
            className="h-64 mt-10 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/megalotorus/megalotorus-logo.jpeg"
          />

          <H3 className="mt-10">Physical Description</H3>

          <P className="mt-4">
            Toroid-shaped immersive art structure. Animated by 1600 digitally addressable RGB LEDs.
          </P>

          <H3 className="mt-10">Philosophy</H3>

          <P className="mt-4">
            In many ancient cultures, the torus has been associated with the concept of infinity. These cultures often used the torus to symbolize the universe. Through science, we now understand that toroidal structures show up everywhere in nature - from the micro-atomic to the macro-galactic. In the study of cosmometry, it is believed that in its most balanced dynamic flow process, energy moves like a torus. From galaxies to ecosystems to the subatomic, there is a seamless exchange of energy and information (a.k.a consciousness) moving cyclically throughout the entire cosmic experience via the torus.
          </P>

          <P className="mt-4">
            Within the torus exists two different types of portals. Many portals in nature - such as a connected channel between one universe and another - are formed from the vortex of a torus. Yet other portals are formed directly from the torus’ membrane.
          </P>

          <P className="mt-4">
            MegaloTorus leverages light - mapped over its translucent, diffusive membrane - to explore the dynamic flow of energy, as well as the infinite nature of the torus.
          </P>

          <Banner color="purple" className="mt-16">
            Build Process
          </Banner>

          <H3 className="mt-10 mb-10">
            Structure
          </H3>

          <StaticImage
            alt="MegaloTorus model side"
            aspectRatio={16/9}
            className="h-64 mt-3 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/megalotorus/megalotorus-02.png"
          />

          <StaticImage
            alt="MegaloTorus model top"
            aspectRatio={16/9}
            className="h-80 mt-3 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/megalotorus/megalotorus-03.png"
          />

          <H3 className="mt-10 mb-10">
            Cover
          </H3>

          {/* <P className="mt-4">
            Coming soon!
          </P> */}

          <StaticImage
            alt="MegaloTorus cover concept"
            aspectRatio={4/3}
            className="h-96 mt-3 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/megalotorus/cover-concept.jpg"
          />

          <H3 className="mt-10">
            LEDs
          </H3>

          {/* <P className="mt-4">
            MegaloTorus uses 1600 ws2811 LEDs spaced approximately 3" apart along the entire length of each of the structures "spines". The LEDs are controlled by an AlphaPix Flex controller and are powered by two 350 watt power supplies. The LEDs were modeled and sequenced in xLights.
          </P> */}

          <StaticImage
            alt="MegaloTorus LED model side"
            aspectRatio={16/9}
            className="h-80 mt-3 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/megalotorus/led-model-side.png"
          />

          <StaticImage
            alt="MegaloTorus LED model top"
            aspectRatio={16/9}
            className="h-80 mt-3 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/megalotorus/led-model-top.png"
          />
{/*
          <StaticImage
            alt="Screenshot of MegaloTorus light sequence"
            aspectRatio={16/9}
            className="h-80 mt-3 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/megalotorus/light-sequence-01.png"
          />

          <StaticImage
            alt="Screenshot of MegaloTorus light sequence"
            aspectRatio={16/9}
            className="h-80 mt-3 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/megalotorus/light-sequence-02.png"
          />

          <StaticImage
            alt="Screenshot of MegaloTorus light sequence"
            aspectRatio={16/9}
            className="h-80 mt-3 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/megalotorus/light-sequence-03.png"
          /> */}

          {/* <video>
            <source src="" />
          </video> */}

          <Banner color="purple" className="mt-16">
            Credits
          </Banner>

          <P className="mt-10 text-xl">
            Thanks and gratitude to all the volunteers who helped create this art piece:
          </P>

          <P className="text-lg mt-6">
            Jillian Estrella
          </P>
          <P className="text-sm">
            Project artist; LED and structure design
          </P>

          <P className="text-lg mt-4">
            Sierra Estrella
          </P>
          <P className="text-sm">
            Project artist; visual design
          </P>

          <P className="text-lg mt-4">
            George O'Donnell
          </P>
          <P className="text-sm">
            Cover design
          </P>

          <P className="text-lg mt-4">
            Nathan Klein
          </P>
          <P className="text-sm">
            Cover design
          </P>

          <P className="text-lg mt-4">
            Martin Newmark
          </P>
          <P className="text-sm">
            Structure design
          </P>

          <P className="text-lg mt-4">
            Dara Rockwell
          </P>
          <P className="text-sm">
            Cover design and cinematography
          </P>

          <P className="text-lg mt-4">
            Joseph Martinez
          </P>
          <P className="text-sm">
            Certified get shit done'r
          </P>

          <P className="text-lg mt-4">
            Sean Shirley
          </P>
          <P className="text-sm">
            Certified get shit done'r
          </P>

          <P className="text-lg mt-4">
            Preston Lancaster
          </P>
          <P className="text-sm">
            Certified get shit done'r
          </P>

          <P className="text-lg mt-4">
            Lee Tal Hermon
          </P>
          <P className="text-sm">
            Certified get shit done'r
          </P>

          <P className="mt-8 mb-10">
            And a special shout-out to the incredibly talented folks in the <TextLink
                to="https://xlights.org/resources/"
                title="xLights resources"
                external={true}
              >xLights Zoom and Facebook support groups!</TextLink>
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

export default MegaloTorusPage
