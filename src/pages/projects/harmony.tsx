import * as React from 'react'
import {
  useStaticQuery,
  graphql
} from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-gtag'

import { StaticImage } from 'gatsby-plugin-image'

import {
  formatClassList,
  formatDate
} from '../../utils/utils'

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


const ROW = formatClassList([
  'flex',
  'items-start',
  'justify-start',
  'relative',
  'mt-3'
])

const ICONANCHOR = formatClassList([
  'px-2',
  'py-1',
  'text-2xl',
  'text-stone-500',
  'duration-200',
  'rounded',
  'hover:text-sky-700',
  'focus:text-sky-700',
  'active:text-sky-700',
  'hover:cursor-pointer',
  'focus:outline-none',
  'focus:ring',
  'focus:ring-sky-700'
])


type PageProps = {
  location: Location
}

const HarmonyPage = ({
  location
}: PageProps) => {
  const projectData = useStaticQuery(graphql`
    query HarmonyQuery {
      allProjectsJson(
        filter: {
          title: {
            eq: "Harmony"
          }
        }
      ) {
        edges {
          node {
            date
            excerpt
            path
            tags
            title
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
        metaTitle="Harmony art sculpture"
        metaDescription={excerpt}
        canonicalUrl="https://jillian.dev/projects/harmony/"
      />
      <Jumbotron
        align="left"
        title={title}
        subtitle={
          <>
            <p className="mt-1 text-lg">
              har·mo·ny /ˈhärmənē/ -
            </p>
            <p className="mt-1 mb-4 text-lg">
              The combination of simultaneously sounded musical notes to produce chords and chord progressions having a pleasing effect.
            </p>
            <p className="font-serif italic mt-6 text-base">
              Jillian S. Estrella • Andy Taylor • Sierra B. Estrella • Jennifer McManus
            </p>
          </>
        }
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
            <i className="fa-solid fa-arrow-left" aria-hidden="true" />&nbsp;&nbsp;Back to project list
          </Button>

          <StaticImage
            alt="Render of Harmony"
            className="mt-10 rounded-xl"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/harmony/harmony02.png"
          />
          <P className="text-sm">Render of Harmony; designed by Jillian Estrella and Andy Taylor</P>

          {/* <P className="mt-6 text-lg">har·mo·ny /ˈhärmənē/ -</P>
          <P className="mt-4 mb-4 text-lg">The combination of simultaneously sounded musical notes to produce chords and chord progressions having a pleasing effect.</P> */}

          {/* <H3 className="mt-10">Follow us:</H3>
          <div
            className={ROW}
          >
            <div>
              <OutboundLink
                href="https://www.facebook.com/MegaloTorus"
                aria-label="MegaloTorus Facebook page"
                title="MegaloTorus Facebook page"
                className={ICONANCHOR}
              >
                <i className="fa-brands fa-facebook" aria-hidden="true" />
              </OutboundLink>
            </div>
          </div> */}

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
          <P className="mt-0.5">Date: June 9-11, 2023</P>

          <H3 className="mt-10">Philosophy</H3>

          <P className="mt-4">
            Harmony is a playful, immersive, interactive audio/visual experience and is designed for participants of all ages and abilities.
          </P>

          <H3 className="mt-10">Description</H3>

          <P className="mt-4">
            Harmomny is a beautifully constructed parametric structure with subtle waves rippling through its design. Arranged in a 210<sup>o</sup> semicircle, Harmony consists of a series of sixteen "Harmony Tubes". Sensing the motions of participants' hands beneath them, Harmony Tubes respond auditorily and visually.
          </P>

          <P className="mt-4">
            For gorgeous visual effect, the Harmony Tubes are loaded with 360o high density individually addressable RGB LEDs. Participant's motions give rise to beautiful colors, patterns, and pulsating gradients.
          </P>

          <P className="mt-4">
            For an immersive auditory experience, Harmony has quadraphonic sound raised above head height and pointed down at the participants; surrounding them on all sides. The quadraphonic sound allows for participants to sense nuance in direction and range. Subwoofers are embedded inside the structure to add feeling and depth to the low-end frequencies.
          </P>

          <P className="mt-4">
            Each Harmony Tube is tuned to a specific note. Together, the tubes are tuned to a given scale. These will be rotated at a given interval so that participants can experience a diversity of sounds. Individual notes and the scale will be displayed on small LCD screens, adding educational value.
          </P>

          <P className="mt-4">
            Harmony's sounds are synthesized from a modern Digital Audio Workstation (DAW) which can provide the highest quality and most modern sounding synthesizers available. Participants' motions will trigger the same deep, rich, edgy synthesizers that they hear in the latest cuts that they enjoy from their favorite EDM artists.
          </P>

          <P className="mt-4">
            The sixteen Harmony Tubes are evenly divided into two octaves. At any given time, each side can be split into two separate instruments. For example, participants will be able to play with a lead synth and a bass synth that are selected to sound fantastic together in a G minor key. Additional depth is added to the sound depending on the velocity of participants' movements and their distance from the time of flight (ToF) sensors.
          </P>

          <P className="mt-4">
            Harmony is a richly interactive experience, encouraging participation both individually or in groups. Harmony can be enjoyed actively or passively. For active enjoyment, participants can interact directly with the Harmony Tubes. For passive enjoyment, Harmony has seating arranged around the outside in the form of alternating wooden and net seating. For those who are enjoying Harmony passively – the built-in subwoofers will offer up a nice “speaker massage”.
          </P>

          <H3 className="mt-10">Art as a place</H3>

          <P className="mt-4">
            A common thread with our art is the concept of "art as a place". Our art is intended to be a destination. A place for people to gather. To nurture or find community. Or to find a quiet alcove alone or with a loved one to get grounded and ponder life's more challenging questions. Harmony adds to our collection of art places beautifully by creating a destination that fills the senses while one plays with friends or lies in our seating and enjoys staring up at the stars.
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

export default HarmonyPage
