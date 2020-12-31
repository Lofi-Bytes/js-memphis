import React, { FC } from 'react'

import Avatar from '../components/avatar'
import Banner from '../components/banner'
import ContactForm from '../components/contact-form'
import Layout from '../components/layout'
import TextLink from '../components/text-link'
import Section from '../components/section'
import SEO from '../components/seo'
import Main from '../components/main'


type PageProps = {
  location: Location
}

const AboutPage: FC<PageProps> = ({
  location
}: PageProps) => {
  return (
    <Layout location={location}>
      <SEO
        metaTitle=""
        metaDescription=""
        canonicalUrl="https://jillian.dev/about"
      />
      <Banner
        title={<span className="text-5xl leading-relaxed js md:text-6xl md:leading-loose lg:text-7xl lg:leading-relaxed">About Me</span>}
        // subtitle={}
      />
      <Main>
        <Section className="pb-12 mb-8 -mt-10">
          <Avatar />
          <i className="absolute text-6xl text-yellow-300 -rotate-90 fal fa-triangle -left-4 -top-8 sm:-left-8 sm:-top-10 sm:text-7xl lg:-left-8 lg:-top-14 lg:text-8xl transofrm transform-gpu" />
          <i className="absolute text-6xl fal fa-bolt text-emerald-300 -right-2 bottom-64 sm:-right-4 sm:bottom-48 sm:text-7xl lg:-right-4 lg:bottom-48 lg:text-8xl transofrm rotate-12 transform-gpu" />
          <h2 className="mt-10 text-xl tracking-wide text-gray-700">Current Work</h2>
          <p className="mt-3 leading-relaxed tracking-wider text-gray-600">
            I work for a nonprofit organization, <TextLink to="https://bscs.org/" external={true}>BSCS Science Learning</TextLink>, whose mission is to transform science teaching and learning through research-driven innovation.
          </p>
          {/* <p className="mt-4 leading-relaxed tracking-wider text-gray-600">
            At BSCS Science Learning, we operate on federal and private grants. The nature of this work requires our small team to build many websites and web apps every year. To keep up with demaind, we must ensure that our infrastructure is agile enough to meet the needs of a diverse range of projects while staying within budget, meeting strict deadlines, and reducing both the cost of ongoing maintenance and technical debt.
          </p> */}
          <p className="mt-4 leading-relaxed tracking-wider text-gray-600">
            A critical part of my role within the organization is to continually improve developer experience, designer experience, <em>and</em> <TextLink to="https://medium.com/s/user-friendly/why-im-done-saying-user-user-experience-and-ux-in-2019-4fdfc6b7de23" external={true}>audience</TextLink> experience. During my time with BSCS, I have overseen the adoption of innovative approaches to software and design such as <i className="text-pink-300 fas fa-heart" /> <TextLink to="https://www.invisionapp.com/inside-design/guide-to-design-systems/" external={true}>design systems</TextLink>, <TextLink to="https://medium.com/omarelgabrys-blog/component-based-architecture-3c3c23c7e348" external={true}>component based</TextLink>, <TextLink to="https://martinfowler.com/articles/serverless.html" external={true}>serverless</TextLink>, <TextLink to="https://martinfowler.com/articles/microservices.html" external={true}> and microservice</TextLink> architectures, and the beloved <i className="text-pink-300 fas fa-heart" /> <TextLink to="https://jamstack.org/" external={true}>Jamstack</TextLink>.
          </p>

          {/* <p className="mt-4 leading-relaxed tracking-wider text-gray-600">
            Having built BSCS's web development team from the ground up, the adoption of these technologies has allowed our small team to
          </p> */}

          <h2 className="mt-10 text-xl tracking-wide text-gray-700">Previous Work</h2>
          <p className="mt-3 leading-relaxed tracking-wider text-gray-600">
            Prior to my career as a software developer, I was an astronomy and physics instructor. My courses introduced students to the skills required to think critically about the physical world and offered students experience in solving real-world problems.
          </p>
          <p className="mt-4 leading-relaxed tracking-wider text-gray-600">
            In graduate school, I did research on the space environment of planets and comets. Colloquially known as “space weather,” my research investigated how the solar wind affects the magnetospheres, ionospheres, and upper atmospheres of these objects.
          </p>

          {/* <h2 className="mt-10 text-xl tracking-wide text-gray-700">Education</h2>
          <p className="mt-3 leading-relaxed tracking-wider text-gray-600">
            I hold an <TextLink to="https://en.wikipedia.org/wiki/Master_of_Science#United_States" external={true}>M.S.</TextLink> in <TextLink to="https://clasp.engin.umich.edu/" external={true}>Atmospheric and Space Science</TextLink> and a <TextLink to="https://en.wikipedia.org/wiki/Graduate_certificate#United_States" external={true}>GradCert</TextLink> in <TextLink to="https://micde.umich.edu/" external={true}>Computer Science and Engineering</TextLink> from <TextLink to="https://umich.edu/" external={true}>The University of Michigan, Ann Arbor</TextLink>. I did my undergraduate studies at <TextLink to="https://www.colorado.edu/" external={true}>The University of Colorado, Boulder</TextLink> where I earned a <TextLink to="https://en.wikipedia.org/wiki/Bachelor%27s_degree" external={true}>B.A.</TextLink> in <TextLink to="https://www.colorado.edu/aps/" external={true}>Astrophysical, Planetary, and Atmospheric Science</TextLink> and a <TextLink to="https://en.wikipedia.org/wiki/Bachelor%27s_degree" external={true}>B.A.</TextLink> in <TextLink to="https://www.colorado.edu/physics/" external={true}>Physics</TextLink>.
          </p> */}

          <h2 className="mt-10 text-xl tracking-wide text-gray-700">Education</h2>
          <div className="items-center justify-between mt-3 uppercase border-b border-pink-400 border-dotted d-block sm:flex">
            <TextLink
              to="https://umich.edu/"
              external={true}
              type="h3"
            >
              University of Michigan
            </TextLink>
            <p className="hidden leading-relaxed tracking-wider text-gray-600 sm:block">
              Ann Arbor, MI
            </p>
          </div>
          <div className="flex items-start justify-between mt-4">
            <div>
              <p className="font-serif italic leading-relaxed tracking-wider text-gray-600">
                <TextLink
                  to="https://en.wikipedia.org/wiki/Master_of_Science#United_States"
                  external={true}
                >M.S.</TextLink> <TextLink
                  to="https://clasp.engin.umich.edu/"
                  external={true}
                >Atmospheric and Space Science</TextLink>
              </p>
            </div>
            <p className="hidden leading-relaxed tracking-wider text-gray-500 sm:block">05/2014</p>
          </div>
          <p className="mx-6 mt-3 leading-relaxed tracking-wider text-gray-600">
            My studies focused on the theory of plasma physics, electromagnetism, fluid dynamics, atmospheric radiative transfer and their applications to solar physics and planetary science.
          </p>

          <div className="flex items-start justify-between mt-4">
            <div>
              <p className="font-serif italic leading-relaxed tracking-wider text-gray-600">
                <TextLink
                  to="https://en.wikipedia.org/wiki/Graduate_certificate#United_States"
                  external={true}
                >GradCert</TextLink> <TextLink
                  to="https://micde.umich.edu/"
                  external={true}
                >Computational Discovery and Engineering</TextLink>
              </p>
            </div>
            <p className="hidden leading-relaxed tracking-wider text-gray-500 sm:block">07/2014</p>
          </div>
          <p className="mx-6 mt-3 leading-relaxed tracking-wider text-gray-600">
            Emphasis was placed on numerical analysis, algorithms, and computational techniques for solving and analyzing physics and engineering problems.
          </p>

          <div className="items-center justify-between mt-8 uppercase border-b border-pink-400 border-dotted d-block sm:flex">
            <TextLink
              to="https://www.colorado.edu/"
              external={true}
              type="h3"
            >
              University of Colorado
            </TextLink>
            <p className="hidden leading-relaxed tracking-wider text-gray-600 sm:block">
              Boulder, CO
            </p>
          </div>

          <div className="flex items-start justify-between mt-4">
            <div>
              <p className="font-serif italic leading-relaxed tracking-wider text-gray-600">
                <TextLink
                  to="https://en.wikipedia.org/wiki/Bachelor%27s_degree"
                  external={true}
                >B.A.</TextLink> <TextLink
                  to="https://www.colorado.edu/physics/"
                  external={true}
                >Physics</TextLink>
              </p>
            </div>
            <p className="hidden leading-relaxed tracking-wider text-gray-500 sm:block">08/2010</p>
          </div>
          <p className="mx-6 mt-3 leading-relaxed tracking-wider text-gray-600">
            I gained a strong foundation in classical mechanics, modern physics, electromagnetics, quantum mechanics, thermodynamics, condensed matter physics, nuclear & particle physics, plasma physics, circuit theory & design, and certified to design and machine custom parts for laboratory experiments in the physics departments state of the art machine shop.
          </p>

          <div className="flex items-start justify-between mt-4">
            <div>
              <p className="font-serif italic leading-relaxed tracking-wider text-gray-600">
                <TextLink
                  to="https://en.wikipedia.org/wiki/Bachelor%27s_degree"
                  external={true}
                >B.A.</TextLink> <TextLink
                  to="https://www.colorado.edu/aps/"
                  external={true}
                >Astrophysical, Planetary, and Atmospheric Science</TextLink>
              </p>
            </div>
            <p className="hidden leading-relaxed tracking-wider text-gray-500 sm:block">08/2010</p>
          </div>
          <p className="mx-6 mt-3 leading-relaxed tracking-wider text-gray-600">
            I studied, in-depth, the current understanding of most astrophysical phenomena such as geophysics, atmospheric & planetary science, stellar structure & evolution, galaxies, neutron stars, and black holes.
          </p>

          <h2 className="mt-10 text-xl tracking-wide text-gray-700">Extracurricular Interests</h2>
          <p className="mt-3 leading-relaxed tracking-wider text-gray-600">
            In my free time I enjoy adventuring in my van (<TextLink to="https://www.instagram.com/explore/tags/vanlife/?hl=en" external={true}>#vanlife</TextLink>), spending time with my dog, practicing yoga, mountain biking, and I read a lot.
          </p>
          {/* <div
            className="w-full mx-auto mt-12 md:w-3/4"
          >
            <Button
              action="primary"
              className="w-full"
              disabled={false}
              title="See my resumé"
              to="/resume"
              type="button"
            >
              See my resumé
            </Button>
          </div> */}
        </Section>

        <Section>
          <div className="max-w-xs py-2 pl-10 pr-4 -ml-10 rounded shadow-lg bg-cyan-300 w-max sm:px-24 sm:-ml-24 sm:max-w-none">
            <h2 className="text-xl tracking-wide text-gray-800 sm:text-2xl">Interested in collaborating?</h2>
          </div>
          <div className="mx-auto md:w-10/12">
            <ContactForm />
          </div>
        </Section>
      </Main>
    </Layout>
  )
}

export default AboutPage
