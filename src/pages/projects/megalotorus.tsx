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
        metaTitle="MegaloTorus LED art installation"
        metaDescription={excerpt}
        canonicalUrl="https://jillian.dev/projects/megalotorus/"
      />
      <Jumbotron
        align="left"
        title={title}
        subtitle={
          <>
            <p className="font-serif italic mt-6 text-base">
              Jillian S. Estrella • Sierra B. Estrella
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
            alt="MegaloTorus logo"
            aspectRatio={16/9}
            className="h-64 mt-10 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/megalotorus/megalotorus-logo.jpeg"
          />
          <P className="text-sm">MegaloTorus logo / concept art by Sierra Estrella.</P>

          <H3 className="mt-10">Follow us:</H3>
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
          </div>

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

          <H3 className="mt-10">Physical Description</H3>

          <P className="mt-4">
            Toroid-shaped immersive art structure. Animated by 1600 digitally addressable RGB LEDs.
          </P>

          <H3 className="mt-10">Philosophy</H3>

          <P className="mt-4">
            In many ancient cultures, the torus has been associated with the concept of infinity. These cultures often used the torus to symbolize the universe. We now understand that toroidal structures show up everywhere in nature - from the micro-atomic to the macro-galactic. In the study of cosmometry, it is believed that in its most balanced dynamic flow process, energy moves like a torus. From galaxies to ecosystems to the subatomic, there is a seamless exchange of energy and information (a.k.a consciousness) moving cyclically throughout the entire cosmic experience via the torus.
          </P>

          <H3 className="mt-10">Art as a place</H3>

          <P className="mt-4">
            A common thread with our art is the concept of “art as a place”. Our art is intended to be a destination. A place for people to gather. To nurture or find community. Or to find a quiet alcove alone or with a loved one to get grounded and ponder life's more challenging questions. MegaloTorus embodies this philosophy - it offers a gorgeous audio-visual experience while acting as a gathering place that nurturs community.
          </P>

          {/* <P className="mt-4">
            Within the torus exists two different types of portals. Many portals in nature - such as a connected channel between one universe and another - are formed from the vortex of a torus. Yet other portals are formed directly from the torus' membrane.
          </P> */}

          <P className="mt-4">
            MegaloTorus uses light and sound to explore the dynamic flow of energy and the infinite nature of the torus.
          </P>

          <Banner color="purple" className="mt-16">
            Build Process
          </Banner>

          <H3 className="mt-10">
            Structure
          </H3>

          <P className="mt-4">
            MegaloTorus is a toroidal-shaped structure made up of sixteen 30'-long arches.
          </P>

          <P className="mt-4">
            The center of the MegaloTorus is a hexadecagon with a radius of two feet. One end of each arch sits at one of the vertices of this hexadecagon.
          </P>

          <P className="mt-4">
            The outer is a hexadecagon of radius fourteen feet where the opposite end of each pole sits at a one of the vertices. However, the outer is rotated counter-clockwise (if above the structure looking down) by 3 vertices relative to the inner. Combined, this gives rise to the illusion of a spiral - or “twisting” of the center column.
          </P>

          <P className="mt-4">
            Three jigs were created to precicely place the ground anchors in the correct location and at the correct angles. The spines are made from rigid schedule 40 polyvinylchloride.
          </P>

          <P className="mt-4">
            The initial concept of the structure was modelled by Jillian Estrella using SketchUp and later revised in Rhinoceros 3D by Andy Taylor.
          </P>

          <StaticImage
            alt="MegaloTorus structure model side view; modeled by Andy Taylor."
            className="mt-3 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/megalotorus/megalotorus1.png"
          />
          <P className="text-sm">MegaloTorus structure model side view; modeled by Andy Taylor.</P>

          <StaticImage
            alt="MegaloTorus structure model top view; modeled by Andy Taylor."
            className="mt-3 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/megalotorus/megalotorus2.png"
          />
          <P className="text-sm">MegaloTorus structure model top view; modeled by Andy Taylor.</P>

          <StaticImage
            alt="Completed structure without the cover."
            className="mt-3 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/megalotorus/IMG_1258.jpeg"
          />
          <P className="text-sm">Completed structure without the cover.</P>

          <H3 className="mt-10">
            Cover (membrane)
          </H3>

          <P className="mt-4">
            The cover (membrane) design was modelled with CAD software. A templating and coordinate system were used to translate the designs onto six oz., 12 mil poly fabric. Twenty individual pieces were then joined together with flat felled stitching.
          </P>

          <StaticImage
            alt="MegaloTorus cover (membrane) miniature model; modeled by George O'Donnell."
            className="mt-3 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/megalotorus/cover-concept.jpg"
          />
          <P className="text-sm">MegaloTorus cover (membrane) miniature model; modeled by George O'Donnell.</P>

          <StaticImage
            alt="MegaloTorus cover (membrane) schematics; modeled by George O'Donnell."
            className="mt-3 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/megalotorus/cover-membrane-schematics.png"
          />
          <P className="text-sm">MegaloTorus cover (membrane) schematics; modeled by George O'Donnell.</P>

          <StaticImage
            alt="Sewing the cover (membrane) together."
            className="mt-3 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/megalotorus/IMG_0230.JPG"
          />
          <P className="text-sm">Sewing the cover (membrane) together.</P>

          <StaticImage
            alt="Sewing the cover (membrane) together."
            className="mt-3 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/megalotorus/IMG_1414.JPG"
          />
          <P className="text-sm">Sewing the cover (membrane) together.</P>

          <StaticImage
            alt="Completed structure with the cover."
            className="mt-3 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/megalotorus/IMG_1415.JPG"
          />
          <P className="text-sm">Completed structure with the cover interior.</P>

          <StaticImage
            alt="Completed structure with the cover."
            className="mt-3 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/megalotorus/IMG_0397.jpg"
          />
          <P className="text-sm">Completed structure with the cover exterior.</P>

          <H3 className="mt-10">
            Pixels
          </H3>

          <P className="mt-4">
            MegaloTorus uses 1600 ws2811 LEDs spaced approximately 3" apart along the entire length of each of the structure's "spines". The LEDs are controlled by an AlphaPix Flex controller. The LEDs were modeled and sequenced with xLights.
          </P>

          <StaticImage
            alt="MegaloTorus LED model side"
            className="mt-3 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/megalotorus/led-model-side.png"
          />
          <P className="text-sm">MegaloTorus LED model side view; modeled by Jillian Estrella</P>

          <StaticImage
            alt="MegaloTorus LED model top"
            className="mt-3 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/megalotorus/led-model-top.png"
          />
          <P className="text-sm">MegaloTorus LED model top view; modeled by Jillian Estrella</P>

          {/* <div
            style={{
              padding: "85.11% 0 0 0",
              position: "relative"
            }}
          >
            <iframe
              src="https://player.vimeo.com/video/717322211?h=2e6d16055a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
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
              title="Screen Recording 2022-06-05 at 2.33.36 PM.mov"
            >
            </iframe>
          </div>
          <P className="text-sm">MegaloTorus LED sequence example.</P>
          <script src="https://player.vimeo.com/api/player.js"></script> */}

          {/* <StaticImage
            alt="Screenshot of MegaloTorus light sequence"
            className="mt-3 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/megalotorus/light-sequence-01.png"
          />
          <P className="text-sm">Screenshot of MegaloTorus light sequence</P>

          <StaticImage
            alt="Screenshot of MegaloTorus light sequence"
            className="mt-3 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/megalotorus/light-sequence-02.png"
          />
          <P className="text-sm">Screenshot of MegaloTorus light sequence</P>

          <StaticImage
            alt="Screenshot of MegaloTorus light sequence"
            className="mt-3 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/megalotorus/light-sequence-03.png"
          />
          <P className="text-sm">Screenshot of MegaloTorus light sequence</P> */}

          {/* <H3 className="mt-10">
            Interior design
          </H3>

          <P className="mt-4">
            The interior is designed to foster community. Featured art is hung from the ceiling and there is a confortable place for people to gather. There is also space for dancing and doing flow arts such as Poi and other activities. At night, people can relax, visit, and enjoy the art and the LED sequences. Depending on the time of night, the LEDs are sequenced to either electronic dance music or quiet and relaxing music. There is also a DJ booth for live performances. During the day, the space is used to host a variety of workshops and yoga.
          </P>

          <StaticImage
            alt="Example of featured art that hangs from the ceiling. Featured artists: Sally Dunn and Kenton Remus."
            className="mt-3 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/megalotorus/IMG_1373.jpeg"
          />
          <P className="text-sm">Example of featured art that hangs from the ceiling.</P>
          <P className="text-sm">Featured artists: Sally Dunn and Kenton Remus.</P> */}

          <H3 className="mt-10">
            Gallery
          </H3>

          <div
            className="mt-4"
            style={{
              padding: "56.25% 0 0 0",
              position: "relative"
            }}
          >
            <iframe
              src="https://player.vimeo.com/video/772588179?h=abc4f7dd1a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="rounded-xl absolute top-0 left-0 w-full h-full"
              title="MegaloTorus@Elsewhence2022.mp4"
            />
          </div>
          <script src="https://player.vimeo.com/api/player.js" />

          <div
            className="mt-4"
            style={{
              padding: "100% 0 0 0",
              position: "relative"
            }}
          >
            <iframe
              src="https://player.vimeo.com/video/720533464?h=34f50d8a14&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="rounded-xl absolute top-0 left-0 w-full h-full"
              title="video-1655236611.mp4"
            />
          </div>
          <script src="https://player.vimeo.com/api/player.js" />

          <div
            className="mt-4"
            style={{
              padding: "56.25% 0 0 0",
              position: "relative"
            }}
          >
            <iframe
              src="https://player.vimeo.com/video/720532924?h=34c4674c3e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="rounded-xl absolute top-0 left-0 w-full h-full"
              title="video-1655236611.mp4"
            />
          </div>
          <script src="https://player.vimeo.com/api/player.js" />

          <div
            className="mt-4"
            style={{
              padding: "56.25% 0 0 0",
              position: "relative"
            }}
          >
            <iframe
              src="https://player.vimeo.com/video/720532206?h=4ae80ac5ca&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="rounded-xl absolute top-0 left-0 w-full h-full"
              title="video-1655236611.mp4"
            />
          </div>
          <script src="https://player.vimeo.com/api/player.js" />

          <StaticImage
            alt="MegaloTorus lit up at night exterior."
            className="mt-3 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/megalotorus/20220609_210413.jpg"
          />
          <P className="text-sm">MegaloTorus lit up at night exterior.</P>

          <StaticImage
            alt="MegaloTorus lit up at night interior."
            className="mt-3 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/megalotorus/Zimba-Zaleski_Apogaea2022_DSC02794.jpg"
          />
          <P className="text-sm">MegaloTorus lit up at night interior. Credit: Zimba Zaleski.</P>

          <StaticImage
            alt="MegaloTorus lit up at night interior."
            className="mt-3 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/megalotorus/Zimba-Zaleski_Apogaea2022_DSC02795.jpg"
          />
          <P className="text-sm">MegaloTorus lit up at night interior. Credit: Zimba Zaleski.</P>

          <StaticImage
            alt="MegaloTorus lit up at night interior."
            className="mt-3 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/megalotorus/IMG_1469_cropped.JPG"
          />
          <P className="text-sm">MegaloTorus lit up at night interior.</P>

          <StaticImage
            alt="MegaloTorus lit up at night interior."
            className="mt-3 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/megalotorus/284841326_1451763151931410_5305151865316733963_n.jpg"
          />
          <P className="text-sm">MegaloTorus lit up at night interior.</P>

          <StaticImage
            alt="MegaloTorus lit up at night interior."
            className="mt-3 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../../images/projects/megalotorus/20220611_041942_cropped.jpg"
          />
          <P className="text-sm">MegaloTorus lit up at night interior.</P>

          <Banner color="purple" className="mt-16">
            Credits
          </Banner>

          <P className="mt-10 text-xl">
            Thanks and gratitude to all the volunteers who helped create this art piece:
          </P>

          <P className="text-lg mt-6">
            Jillian Estrella
          </P>

          <P className="text-lg mt-4">
            Sierra Estrella
          </P>

          <P className="text-lg mt-4">
            Nathan Klein
          </P>

          <P className="text-lg mt-4">
            George O'Donnell
          </P>

          <P className="text-lg mt-4">
            <TextLink
              to='https://teachbuildplay.org/portfolio/'
              title="Teach Build Play: Andy Taylor Parkour Design"
              outbound={true}
            >
              Andy Taylor
            </TextLink>
          </P>

          <P className="text-lg mt-4">
            Abby Black
          </P>

          <P className="text-lg mt-4">
            Tiffany Chau
          </P>

          <P className="text-lg mt-4">
            Becca Elliott
          </P>

          <P className="text-lg mt-4">
            Zach Herman
          </P>

          <P className="text-lg mt-4">
            Preston Lancaster
          </P>

          <P className="text-lg mt-4">
            Bryan Lastrella
          </P>

          <P className="text-lg mt-4">
            Taylor Link
          </P>

          <P className="text-lg mt-4">
            Joseph Martinez
          </P>

          <P className="text-lg mt-4">
            Jenny McManus
          </P>

          <P className="text-lg mt-4">
            Martin Newmark
          </P>

          <P className="text-lg mt-4">
            Presley Peach
          </P>

          <P className="text-lg mt-4">
            Dara Rockwell
          </P>

          <P className="text-lg mt-4">
            Sean Shirley
          </P>

          <P className="text-lg mt-4">
            Sean Sidelko
          </P>

          <P className="text-lg mt-4">
            Brooke Sparling
          </P>

          <P className="text-lg mt-4">
            Lee Tal Hermon
          </P>

          <P className="text-lg mt-4">
            Daniel Tenenbaum
          </P>

          <P className="mt-8 mb-10">
            And a special shout-out to the incredibly talented folks in the <TextLink
                to="https://xlights.org/resources/"
                title="xLights resources"
                outbound={true}
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
