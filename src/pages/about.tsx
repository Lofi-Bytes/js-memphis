import * as React from 'react'

import { graphql } from 'gatsby'
import {
  getImage,
  StaticImage
} from 'gatsby-plugin-image'

import Avatar from '../components/avatar'
import Banner from '../components/banner/banner'
import Button from '../components/button'
import ContactForm from '../components/contact-form'
import Jumbotron from '../components/jumbotron'
import Layout from '../components/layout'
import Main from '../components/main'
import P from '../components/paragraph'
import Section from '../components/section'
import SEO from '../components/seo'
import SocialIconRow from '../components/social-icon-row'
import TextLink from '../components/text-link'

type PageProps = {
  data: any,
  location: Location
}

const AboutPage = ({
  data,
  location
}: PageProps) => {
  const image = getImage(data.avatar)

  return (
    <Layout location={location}>
      <SEO
        metaTitle="About Jillian"
        metaDescription="I love building beautiful digital experiences and I am passionate about technology that advances social and environmental justice."
        canonicalUrl="https://jillian.dev/about"
      />
      <Jumbotron
        title={<span className="text-5xl leading-relaxed js md:text-6xl md:leading-loose lg:text-7xl lg:leading-relaxed">About Me</span>}
        // subtitle={}
      />
      <Main>
        <Section background="opaque" className="pb-12 mb-8 -mt-10">
          <Avatar
            alt="Jillian's avatar"
            src={image}
          />
          <i className="absolute text-6xl text-yellow-300 -rotate-90 fal fa-triangle -left-4 -top-8 sm:-left-8 sm:-top-10 sm:text-7xl lg:-left-8 lg:-top-14 lg:text-8xl transofrm transform-gpu" />
          <i className="absolute text-6xl fal fa-bolt text-emerald-300 -right-2 bottom-64 sm:-right-4 sm:bottom-48 sm:text-7xl lg:-right-4 lg:bottom-48 lg:text-8xl transofrm rotate-12 transform-gpu" />

          <h2 className="mt-10 text-2xl tracking-wide text-stone-700">Jillian S. Estrella <br className="sm:hidden" /><span className="text-xl text-stone-600">🏳️‍🌈 she/her 🏳️‍⚧️</span></h2>
          <P className="mt-1 text-xl">
            Design systems engineer
          </P>
          <SocialIconRow className="mt-3" />
          <Button
            action="tertiary"
            disabled={false}
            role="link"
            title="Return to homepage"
            className="mt-6 w-max"
            to="/"
          >
            <i className="fas fa-arrow-left" />&nbsp;&nbsp;Return to homepage
          </Button>

          <h2 className="mt-10 text-xl tracking-wide text-stone-700">Current Work</h2>
          <div className="items-center justify-between mt-3 uppercase border-b border-pink-400 border-dotted d-block sm:flex">
            <TextLink
              to="https://www.northwesternmutual.com/"
              title=""
              external={true}
              type="h3"
            >
              Northwestern Mutual
            </TextLink>
            <P className="hidden sm:block">
              2021 - Present
            </P>
          </div>
          <P className="mt-3">
            I’m soooo excited‼️ to share that starting in July I will be joining the design system team at Northwestern Mutual, where I will be leading the contributions and integrations branch for their design system, Luna.
          </P>
          <h2 className="mt-10 text-xl tracking-wide text-stone-700">Previous Work</h2>
          <div className="items-center justify-between mt-3 uppercase border-b border-pink-400 border-dotted d-block sm:flex">
            <TextLink
              to="https://bscs.org/"
              title=""
              external={true}
              type="h3"
            >
              BSCS Science Learning
            </TextLink>
            <P className="hidden sm:block">
              2015 - 2021
            </P>
          </div>
          <P className="mt-3">
            Previously, I worked for a nonprofit organization, <TextLink to="https://bscs.org/" title="" external={true}>BSCS Science Learning</TextLink>, whose mission is to transform science teaching and learning through research-driven innovation.
          </P>
          {/* <P className="mt-4">
            At BSCS Science Learning, we operate on federal and private grants. The nature of this work requires our small team to build many websites and web apps every year. To keep up with demaind, we must ensure that our infrastructure is agile enough to meet the needs of a diverse range of projects while staying within budget, meeting strict deadlines, and reducing both the cost of ongoing maintenance and technical debt.
          </P> */}
          <P className="mt-4">
            A critical part of my role within BSCS was to improve the experience for the developer, designer, and user. During my time with BSCS, I oversaw the adoption of innovative approaches to software and design such as <i className="text-pink-300 fas fa-heart" /> <TextLink to="https://www.invisionapp.com/inside-design/guide-to-design-systems/" title="" external={true}>design systems</TextLink>; <TextLink to="https://medium.com/omarelgabrys-blog/component-based-architecture-3c3c23c7e348" title="" external={true}>component based</TextLink>, <TextLink to="https://martinfowler.com/articles/serverless.html" title="" external={true}>serverless</TextLink>, <TextLink to="https://martinfowler.com/articles/microservices.html" title="" external={true}> and microservice</TextLink> architectures; and the beloved <i className="text-pink-300 fas fa-heart" /> <TextLink to="https://jamstack.org/" title="" external={true}>Jamstack</TextLink>.
          </P>
          <P className="mt-4">
            These innovations allowed my small team to keep pace with increasing demand. We were able to create BSCS's digital products with more efficiency and at a higher quality with lower product support costs.
          </P>
          <P className="mt-4">
            A typical day for me involved architecting solutions to complex problems, overseeing BSCS's digital products throughout their lifecycle, guiding and mentoring my team, and designing/building UI's and UI components.
          </P>
          <div className="items-center justify-between mt-8 uppercase border-b border-pink-400 border-dotted d-block sm:flex">
            {/* <TextLink
              to="https://umich.edu/"
              title=""
              external={true}
              type="h3"
            >
              Physics and Astronomy
            </TextLink> */}
            Astronomy and Physics
            <P className="hidden sm:block">
              2014 - 2015
            </P>
          </div>
          <P className="mt-3">
            Prior to my career in software development, I was an astronomy and physics instructor. My courses introduced students to the skills required to think critically about the physical world and offered students experience in solving real-world problems.
          </P>
          <P className="mt-4">
            In graduate school, I did research on the space environment of planets and comets. Colloquially known as “space weather,” my research investigated how the solar wind affects the magnetospheres, ionospheres, and upper atmospheres of these objects.
          </P>

          {/* <h2 className="mt-10 text-xl tracking-wide text-stone-700">Education</h2>
          <P className="mt-3">
            I hold an <TextLink to="https://en.wikipedia.org/wiki/Master_of_Science#United_States" title="" external={true}>M.S.</TextLink> in <TextLink to="https://clasp.engin.umich.edu/" title="" external={true}>Atmospheric and Space Science</TextLink> and a <TextLink to="https://en.wikipedia.org/wiki/Graduate_certificate#United_States" title="" external={true}>GradCert</TextLink> in <TextLink to="https://micde.umich.edu/" title="" external={true}>Computer Science and Engineering</TextLink> from <TextLink to="https://umich.edu/" title="" external={true}>The University of Michigan, Ann Arbor</TextLink>. I did my undergraduate studies at <TextLink to="https://www.colorado.edu/" title="" external={true}>The University of Colorado, Boulder</TextLink> where I earned a <TextLink to="https://en.wikipedia.org/wiki/Bachelor%27s_degree" title="" external={true}>B.A.</TextLink> in <TextLink to="https://www.colorado.edu/aps/" title="" external={true}>Astrophysical, Planetary, and Atmospheric Science</TextLink> and a <TextLink to="https://en.wikipedia.org/wiki/Bachelor%27s_degree" title="" external={true}>B.A.</TextLink> in <TextLink to="https://www.colorado.edu/physics/" title="" external={true}>Physics</TextLink>.
          </P> */}

          <h2 className="mt-10 text-xl tracking-wide text-stone-700">Education</h2>
          <div className="items-center justify-between mt-3 uppercase border-b border-pink-400 border-dotted d-block sm:flex">
            <TextLink
              to="https://umich.edu/"
              title=""
              external={true}
              type="h3"
            >
              University of Michigan
            </TextLink>
            <P className="hidden sm:block">
              Ann Arbor, MI
            </P>
          </div>
          <div className="flex items-start justify-between mt-4">
            <div>
              <P className="font-serif italic">
                <TextLink
                  to="https://en.wikipedia.org/wiki/Master_of_Science#United_States"
                  title=""
                  external={true}
                >M.S.</TextLink> <TextLink
                  to="https://clasp.engin.umich.edu/"
                  title=""
                  external={true}
                >Atmospheric and Space Science</TextLink>
              </P>
            </div>
            <P className="hidden sm:block">05/2014</P>
          </div>
          <P className="mx-6 mt-3">
            My studies focused on the theory of plasma physics, electromagnetism, fluid dynamics, atmospheric radiative transfer and their applications to solar physics and planetary science.
          </P>

          <div className="flex items-start justify-between mt-4">
            <div>
              <P className="font-serif italic">
                <TextLink
                  to="https://en.wikipedia.org/wiki/Graduate_certificate#United_States"
                  title=""
                  external={true}
                >GradCert</TextLink> <TextLink
                  to="https://micde.umich.edu/"
                  title=""
                  external={true}
                >Computational Discovery and Engineering</TextLink>
              </P>
            </div>
            <P className="hidden sm:block">07/2014</P>
          </div>
          <P className="mx-6 mt-3">
            Emphasis was placed on numerical analysis, algorithms, and computational techniques for solving and analyzing physics and engineering problems.
          </P>

          <div className="items-center justify-between mt-8 uppercase border-b border-pink-400 border-dotted d-block sm:flex">
            <TextLink
              to="https://www.colorado.edu/"
              title=""
              external={true}
              type="h3"
            >
              University of Colorado
            </TextLink>
            <P className="hidden sm:block">
              Boulder, CO
            </P>
          </div>

          <div className="flex items-start justify-between mt-4">
            <div>
              <P className="font-serif italic">
                <TextLink
                  to="https://en.wikipedia.org/wiki/Bachelor%27s_degree"
                  title=""
                  external={true}
                >B.A.</TextLink> <TextLink
                  to="https://www.colorado.edu/physics/"
                  title=""
                  external={true}
                >Physics</TextLink>
              </P>
            </div>
            <P className="hidden sm:block">08/2010</P>
          </div>
          <P className="mx-6 mt-3">
            I gained a strong foundation in classical mechanics, modern physics, electromagnetics, quantum mechanics, thermodynamics, condensed matter physics, nuclear & particle physics, plasma physics, circuit theory & design, and certified to design and machine custom parts for laboratory experiments in the physics department's state of the art machine shop.
          </P>

          <div className="flex items-start justify-between mt-4">
            <div>
              <P className="font-serif italic">
                <TextLink
                  to="https://en.wikipedia.org/wiki/Bachelor%27s_degree"
                  title=""
                  external={true}
                >B.A.</TextLink> <TextLink
                  to="https://www.colorado.edu/aps/"
                  title=""
                  external={true}
                >Astrophysical, Planetary, and Atmospheric Science</TextLink>
              </P>
            </div>
            <P className="hidden sm:block">08/2010</P>
          </div>
          <P className="mx-6 mt-3">
            I studied, in-depth, the current understanding of most astrophysical phenomena such as geophysics, atmospheric & planetary science, stellar structure & evolution, galaxies, neutron stars, and black holes.
          </P>

          <h2 className="mt-10 text-xl tracking-wide text-stone-700">Extracurricular Interests</h2>

          <StaticImage
            alt="Jillian's family."
            aspectRatio={16/9}
            className="h-64 mt-3 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../images/IMG_7135.JPG"
          />

          <P className="mt-3">
            In my free time I enjoy spending time with my beautiful family, adventuring in our van (<TextLink to="https://www.instagram.com/explore/tags/vanlife/?hl=en" title="" external={true}>#vanlife</TextLink>), practicing yoga, mountain biking, and I read a lot.
          </P>
          {/* <div
            className="w-full mx-auto mt-12 md:w-3/4"
          >
            <Button
              action="primary"
              className="w-full"
              disabled={false}
              role="link"
              title="See my resumé"
              to="/resume"
              type="button"
            >
              See my resumé
            </Button>
          </div> */}

          <Button
            action="secondary"
            disabled={false}
            role="link"
            title="Return to homepage"
            className="mt-16 w-max"
            to="/"
          >
            <i className="fas fa-chevron-left" />&nbsp;&nbsp;Return to homepage
          </Button>
        </Section>

        <Section background="opaque">
          <Banner color="cyan">
            Interested in collaborating?
          </Banner>
          <div className="mx-auto md:w-10/12">
            <ContactForm />
          </div>
        </Section>
      </Main>
    </Layout>
  );
}

export default AboutPage

export const pageQuery = graphql`
  query {
  avatar: file(relativePath: {eq: "bsfSBbsadfK.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        width: 300
        quality: 100
        placeholder: BLURRED
        formats: [AUTO, WEBP, AVIF]
      )
    }
  }
}
`
