import React, { FC, ReactNode } from 'react'
import { Link } from 'gatsby'

import Avatar from '../components/avatar'
import Banner from '../components/banner'
import Button from '../components/button'
import ContactForm from '../components/contact-form'
import Layout from '../components/layout'
import TextLink from '../components/text-link'
import Section from '../components/section'
import SEO from '../components/seo'
import Main from '../components/main'


const AboutPage: FC<ReactNode> = () => {
  return (
    <Layout>
      <SEO
        metaTitle=""
        metaDescription=""
        canonicalUrl=""
      />
      <Banner
        title={<span className="js text-5xl leading-relaxed md:text-6xl md:leading-loose lg:text-7xl lg:leading-relaxed">About Me</span>}
        // subTitle={}
      />
      <Main>
        <Section className="-mt-10 mb-8 pb-12">
          <Avatar />
          <h2 className="text-gray-700 text-xl mt-10 tracking-wide">Current Work</h2>
          <p className="text-gray-600 tracking-wider leading-relaxed mt-3">
            I work for a nonprofit organization, <TextLink href="https://bscs.org/" external={true}>BSCS Science Learning</TextLink>, whose mission is to transform science teaching and learning through research-driven innovation.
          </p>
          {/* <p className="text-gray-600 tracking-wider leading-relaxed mt-4">
            At BSCS Science Learning, we operate on federal and private grants. The nature of this work requires our small team to build many websites and web apps every year. To keep up with demaind, we must ensure that our infrastructure is agile enough to meet the needs of a diverse range of projects while staying within budget, meeting strict deadlines, and reducing both the cost of ongoing maintenance and technical debt.
          </p> */}
          <p className="text-gray-600 tracking-wider leading-relaxed mt-4">
            A critical part of my role within the organization is to continually improve developer experience, designer experience, <em>and</em> <TextLink href="https://medium.com/s/user-friendly/why-im-done-saying-user-user-experience-and-ux-in-2019-4fdfc6b7de23" external={true}>audience</TextLink> experience. During my time with BSCS, I have overseen the adoption of innovative approaches to software and design such as <i className="fas fa-heart text-pink-300"></i> <TextLink href="https://www.invisionapp.com/inside-design/guide-to-design-systems/" external={true}>design systems</TextLink>, <TextLink href="https://medium.com/omarelgabrys-blog/component-based-architecture-3c3c23c7e348" external={true}>component based</TextLink>, <TextLink href="https://martinfowler.com/articles/serverless.html" external={true}>serverless</TextLink>, <TextLink href="https://martinfowler.com/articles/microservices.html" external={true}> and microservice</TextLink> architectures, and the beloved <i className="fas fa-heart text-pink-300"></i> <TextLink href="https://jamstack.org/" external={true}>Jamstack</TextLink>.
          </p>

          <h2 className="text-gray-700 text-xl mt-10 tracking-wide">Previous Work</h2>
          <p className="text-gray-600 tracking-wider leading-relaxed mt-3">
            Prior to my career as a software developer, I was an astronomy and physics instructor. My courses introduced students to the skills required to think critically about the physical world and offered students experience in solving real-world problems.
          </p>
          <p className="text-gray-600 tracking-wider leading-relaxed mt-4">
            In graduate school, I did research on the space environment of planets and comets. Colloquially known as “space weather,” my research investigated how the solar wind affects the magnetospheres, ionospheres, and upper atmospheres of these objects.
          </p>

          {/* <h2 className="text-gray-700 text-xl mt-10 tracking-wide">Education</h2>
          <p className="text-gray-600 tracking-wider leading-relaxed mt-3">
            I hold an <TextLink href="https://en.wikipedia.org/wiki/Master_of_Science#United_States" external={true}>M.S.</TextLink> in <TextLink href="https://clasp.engin.umich.edu/" external={true}>Atmospheric and Space Science</TextLink> and a <TextLink href="https://en.wikipedia.org/wiki/Graduate_certificate#United_States" external={true}>GradCert</TextLink> in <TextLink href="https://micde.umich.edu/" external={true}>Computer Science and Engineering</TextLink> from <TextLink href="https://umich.edu/" external={true}>The University of Michigan, Ann Arbor</TextLink>. I did my undergraduate studies at <TextLink href="https://www.colorado.edu/" external={true}>The University of Colorado, Boulder</TextLink> where I earned a <TextLink href="https://en.wikipedia.org/wiki/Bachelor%27s_degree" external={true}>B.A.</TextLink> in <TextLink href="https://www.colorado.edu/aps/" external={true}>Astrophysical, Planetary, and Atmospheric Science</TextLink> and a <TextLink href="https://en.wikipedia.org/wiki/Bachelor%27s_degree" external={true}>B.A.</TextLink> in <TextLink href="https://www.colorado.edu/physics/" external={true}>Physics</TextLink>.
          </p> */}

          <h2 className="text-gray-700 text-xl mt-10 tracking-wide">Education</h2>
          <div className="d-block sm:flex items-center justify-between border-b border-dotted border-pink-400 mt-3 uppercase">
            <TextLink
              href="https://umich.edu/"
              external={true}
              type="h3"
            >
              University of Michigan
            </TextLink>
            <p className="text-gray-600 tracking-wider leading-relaxed">
              Ann Arbor, MI
            </p>
          </div>
          <div className="flex items-start justify-between mt-4">
            <div>
              <p className="text-gray-600 tracking-wider leading-relaxed font-serif italic">
                <TextLink
                  href="https://en.wikipedia.org/wiki/Master_of_Science#United_States"
                  external={true}
                >M.S.</TextLink> Atmospheric and Space Science
              </p>
              <p>
                <TextLink
                  href="https://clasp.engin.umich.edu/"
                  external={true}
                >https://clasp.engin.umich.edu/</TextLink>
              </p>
            </div>
            <p className="text-gray-600 tracking-wider leading-relaxed hidden sm:block">05/2014</p>
          </div>
          <p className="text-gray-600 tracking-wider leading-relaxed hidden sm:block mt-3 mx-6">
            My studies focused on the theory of plasma physics, electromagnetism, fluid dynamics, atmospheric radiative transfer and their applications to solar physics and planetary science.
          </p>

          <div className="flex items-start justify-between mt-4">
            <div>
              <p className="text-gray-600 tracking-wider leading-relaxed font-serif italic">
                <TextLink
                  href="https://en.wikipedia.org/wiki/Graduate_certificate#United_States"
                  external={true}
                >GradCert</TextLink> Computational Discovery and Engineering
              </p>
              <p>
                <TextLink
                  href="https://micde.umich.edu/"
                  external={true}
                >https://micde.umich.edu/</TextLink>
              </p>
            </div>
            <p className="text-gray-600 tracking-wider leading-relaxed hidden sm:block">07/2014</p>
          </div>
          <p className="text-gray-600 tracking-wider leading-relaxed hidden sm:block mt-3 mx-6">
            Emphasis was placed on numerical analysis, algorithms, and computational techniques for solving and analyzing physics and engineering problems.
          </p>

          <div className="d-block sm:flex items-center justify-between border-b border-dotted border-pink-400 mt-8 uppercase">
            <TextLink
              href="https://www.colorado.edu/"
              external={true}
              type="h3"
            >
              University of Colorado
            </TextLink>
            <p className="text-gray-600 tracking-wider leading-relaxed">
              Boulder, CO
            </p>
          </div>

          <div className="flex items-start justify-between mt-4">
            <div>
              <p className="text-gray-600 tracking-wider leading-relaxed font-serif italic">
                <TextLink
                  href="https://en.wikipedia.org/wiki/Bachelor%27s_degree"
                  external={true}
                >B.A.</TextLink> Physics
              </p>
              <p>
                <TextLink
                  href="https://www.colorado.edu/physics/"
                  external={true}
                >https://www.colorado.edu/physics/</TextLink>
              </p>
            </div>
            <p className="text-gray-600 tracking-wider leading-relaxed hidden sm:block">08/2010</p>
          </div>
          <p className="text-gray-600 tracking-wider leading-relaxed hidden sm:block mt-3 mx-6">
            I gained a strong foundation in classical mechanics, modern physics, electromagnetics, quan- tum mechanics, thermodynamics, condensed matter physics, nuclear & particle physics, plasma physics, circuit theory & design, and certified to design and machine custom parts for laboratory experiments in the physics departments state of the art machine shop.
          </p>

          <div className="flex items-start justify-between mt-4">
            <div>
              <p className="text-gray-600 tracking-wider leading-relaxed font-serif italic">
                <TextLink
                  href="https://en.wikipedia.org/wiki/Bachelor%27s_degree"
                  external={true}
                >B.A.</TextLink> Astrophysical, Planetary, and Atmospheric Science
              </p>
              <p>
                <TextLink
                  href="https://www.colorado.edu/aps/"
                  external={true}
                >https://www.colorado.edu/aps/</TextLink>
              </p>
            </div>
            <p className="text-gray-600 tracking-wider leading-relaxed hidden sm:block">08/2010</p>
          </div>
          <p className="text-gray-600 tracking-wider leading-relaxed hidden sm:block mt-3 mx-6">
            I studied, in-depth, the current understanding of most astrophysical phenomena such as geophysics, atmospheric & planetary science, stellar structure & evolution, galaxies, neutron stars, and black holes.
          </p>

          <h2 className="text-gray-700 text-xl mt-10 tracking-wide">Extracurricular Interests</h2>
          <p className="text-gray-600 tracking-wider leading-relaxed mt-3">
            In my free time I enjoy adventuring in my van (<TextLink href="https://www.instagram.com/explore/tags/vanlife/?hl=en" external={true}>#vanlife</TextLink>), spending time with my dog, practicing yoga, mountain biking, and I read a lot.
          </p>
          {/* <div
            className="mx-auto mt-12 w-full md:w-3/4"
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
          <h2 className="text-gray-800 text-2xl tracking-wide">Interested in collaborating?</h2>
          <div className="md:w-3/4 mx-auto">
            <ContactForm />
          </div>
        </Section>
      </Main>
    </Layout>
  )
}

export default AboutPage
