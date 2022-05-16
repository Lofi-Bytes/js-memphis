import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import {
  getImage,
  StaticImage
} from 'gatsby-plugin-image'

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
  const path = projectData.allProjectsJson.edges[0].node.path
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

          <StaticImage
            alt="MegaloTorus Logo"
            aspectRatio={16/9}
            className="h-64 mt-3 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/megalotorus/megalotorus-logo.jpeg"
          />

          <StaticImage
            alt="MegaloTorus Model 01"
            aspectRatio={16/9}
            className="h-64 mt-3 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/megalotorus/megalotorus-01.png"
          />

          <StaticImage
            alt="MegaloTorus Model 02"
            aspectRatio={16/9}
            className="h-64 mt-3 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/megalotorus/megalotorus-02.png"
          />

          <StaticImage
            alt="MegaloTorus Model 03"
            aspectRatio={16/9}
            className="h-64 mt-3 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/megalotorus/megalotorus-03.png"
          />

          {/* <video>
            <source src="" />
          </video> */}
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
