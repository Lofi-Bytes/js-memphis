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
import UL from '../components/unordered-list'

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
            Developer experience engineer
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

          {/* <h3 className="mt-6 mb-2 text-stone-600 text-lg">Senior Software Engineer, Design Systems Core Lead</h3>

          <div className="items-center justify-between border-b border-pink-400 border-dotted d-block sm:flex text-stone-600">
            <TextLink
              className="text-stone-600"
              external={true}
              title="Northwestern Mutual"
              to="https://www.northwesternmutual.com/"
              type="p"
            >
              Northwestern Mutual
            </TextLink>
            <P className="hidden sm:block text-stone-600">
              Jan 2022 - Present
            </P>
            <P className="sm:hidden text-sm text-stone-600 mt-1">
              Jan 2022 - Present
            </P>
          </div>

          <P className="mt-3">
            In my current position I oversee multiple teams/projects on Northwestern Mutual's design system, Luna. Some of my responsibilities include:
          </P>

          <UL className="mt-4 list-disc ml-8 sm:ml-0">
            <li>
              Working with leadership to roadmap, plan and delegate work
            </li>
            <li>
              Work with designers to define and implement new functionality
            </li>
            <li>
              Pair with and coach junior and mid-level engineers
            </li>
            <li>
              Continually work with my team to improve upon and establish new team standards and best practices
            </li>
            <li>
              Being active in recruiting and interviewing potential candidates
            </li>
            <li>
              Advise on Contributions and Integrations as needed
            </li>
          </UL>

          <P className="mt-3">
            Some of my achievements so far have been
          </P>

          <UL className="mt-4 list-disc ml-8 sm:ml-0">
            <li>
              Migrating Luna to a monorepo
            </li>
            <li>
              Shipping Luna as a monorepo
            </li>
            <li>
              Improved continuous integration pipeline resulting in
              <UL className="list-disc ml-8 sm:ml-0">
                <li>
                  a more reliable release cadence
                </li>
                <li>
                  review applications
                </li>
                <li>
                  canary releases for live testing pre-production
                </li>
              </UL>
            </li>
            <li>
              Shipping Luna React Tables
            </li>
            <li>
              Shipping Luna Responsive Optimizations
            </li>
          </UL> */}

          <h3 className="mt-6 mb-2 text-stone-600 text-lg">Software Engineering Manager, Developer Experience Tooling</h3>

          <div className="items-center justify-between border-b border-pink-400 border-dotted d-block sm:flex text-stone-600">
            <TextLink
              className="text-stone-600"
              external={true}
              title="Northwestern Mutual"
              to="https://www.northwesternmutual.com/"
              type="p"
            >
              Northwestern Mutual
            </TextLink>
            <P className="hidden sm:block text-stone-600">
              September 2022 - Present
            </P>
            <P className="sm:hidden text-sm text-stone-600">
              September 2022 - Present
            </P>
          </div>

          <P className="mt-3">
            I manage the Tooling team for Northwestern Mutual's Developer Experience (DevX) group. The DevX tooling group oversees:
          </P>

          <UL className="mt-4 list-disc ml-8 sm:ml-0">
            <li>
              Design system core libraries
            </li>
            <li>
              Design system community contribution libraries
            </li>
            <li>
              Server-side and client-side utilities
            </li>
            <li>
              Platform integrations
            </li>
            <li>
              Platform developer tools
            </li>
          </UL>

          <P className="mt-3">
            Some of my responsibilities include:
          </P>

          <UL className="mt-4 list-disc ml-8 sm:ml-0">
            <li>
              Collaborate with design, content, accessibility, and product leads to roadmap, plan and delegate work
            </li>
            <li>
              Coach junior, mid-level, and senior engineers
            </li>
            <li>
              Improve process and team standards
            </li>
            <li>
              Recruit and interview candidates
            </li>
          </UL>

          {/* <P className="mt-3">
            I'm soooo excited‼️ to share that starting in July I will be joining the design system team at Northwestern Mutual, where I will be leading the contributions and integrations branch for their design system, Luna.
          </P> */}
          {/* Oversee the planning, design and implementation of the design system.
          Provide technical direction in-line with business goals.
          Train, mentor, and support engineers on the team.
          Maintian continuous integration pipeline.
          monorepo
          contributions and integrations */}


          {/*

          <P className="mt-3">
            As the core engineering lead for <TextLink to="https://www.northwesternmutual.com/" title="" external={true}>Northwestern Mutual's</TextLink> design system, Luna, I work with a talented team of engineers, designers, content strategists, product managers, and project managers. I spend a lot of my time planing, roadmapping and prioritizing to provide technical direction in-line with business goals.
          </P>

          <P className="mt-3">
            At any give time I also oversee the implementation of multiple engineering projects - including mentoring engineers and performing code-reviews. I think of myself as a talent multiplier - I aim to remove blockers so that the rest of the team can perform at thier best and focus on their respective projects.
          </P>

          <P className="mt-3">
            I also spend time planing for and cuting releases. I help to maintain our continuous integration pipeline. I have contributed heavily to our contributions and integrations strategy.
          </P>

          */}
            {/* - Partner with a creative director to build a ground-up redesign of the design system powering the financial planning tools experience
            - Work with product teams to migrate their applications from the legacy system to new
            - Manage a team of engineers to build and maintain engineering tools for implementing the design system (Node scripts, Scss framework, React lib, etc)
            - Work with product teams to determine & fulfill new functionality
            - Oversee development and content creation for the design system style guide (eng usage, design usage, product guidelines) */}
          {/* <P className="mt-3">
            I work with a team of talented people -
          </P> */}
          <h2 className="mt-10 text-xl tracking-wide text-stone-700">Previous Work</h2>

          <h3 className="mt-6 mb-2 text-stone-600 text-lg">Senior Software Engineer, Design Systems Core Lead</h3>

          <div className="items-center justify-between border-b border-pink-400 border-dotted d-block sm:flex text-stone-600">
            <TextLink
              className="text-stone-600"
              external={true}
              title="Northwestern Mutual"
              to="https://www.northwesternmutual.com/"
              type="p"
            >
              Northwestern Mutual
            </TextLink>
            <P className="hidden sm:block text-stone-600">
              Jan 2022 - Aug 2022
            </P>
            <P className="sm:hidden text-sm text-stone-600">
              Jan 2022 - Aug 2022
            </P>
          </div>

          <P className="mt-3">
            In this position I oversaw multiple teams/projects on Northwestern Mutual's design system, Luna. Some of my responsibilities included:
          </P>

          <UL className="mt-4 list-disc ml-8 sm:ml-0">
            <li>
              Worked with leadership to roadmap, plan and delegate work
            </li>
            <li>
              Worked with designers to define and implement new functionality
            </li>
            <li>
              Paired with and coached junior and mid-level engineers
            </li>
            <li>
              Continually worked with my team to improve upon and establish new team standards and best practices
            </li>
            <li>
              Was active in recruiting and interviewing potential candidates
            </li>
            <li>
              Advised on Contributions and Integrations as needed
            </li>
          </UL>

          <P className="mt-3">
            Some of my achievements in this role were
          </P>

          <UL className="mt-4 list-disc ml-8 sm:ml-0">
            <li>
              Migrated Luna to a monorepo
            </li>
            <li>
              Shipped Luna as a monorepo
            </li>
            <li>
              Improved continuous integration pipeline resulting in
              <UL className="list-disc ml-8 sm:ml-0">
                <li>
                  a more reliable release cadence
                </li>
                <li>
                  review applications
                </li>
                <li>
                  canary releases for live testing pre-production
                </li>
              </UL>
            </li>
            <li>
              Shipped Luna React Tables
            </li>
            <li>
              Shipped Luna Responsive Optimizations
            </li>
          </UL>

          <h3 className="mt-6 mb-2 text-stone-600 text-lg">Senior Software Engineer, Design Systems Contributions and Integrations Lead</h3>

          <div className="items-center justify-between border-b border-pink-400 border-dotted d-block sm:flex text-stone-600">
            <TextLink
              className="text-stone-600"
              external={true}
              title=""
              to="https://www.northwesternmutual.com/"
              type="p"
            >
              Northwestern Mutual
            </TextLink>
            <P className="hidden sm:block text-stone-600">
              Jul 2021 - Dec 2021
            </P>
            <P className="sm:hidden text-sm text-stone-600">
              Jan 2021 - Dec 2021
            </P>
          </div>

          <P className="mt-3">
            In this role, my focus was on lowering barriers for other teams at the company to contribute to Luna. For a design system to be successful, it requires buy-in from everyone at the company. One way to get this investment is to ensure that anyone can contribute; thus providing everyone a sense of ownership.
          </P>

          <P className="mt-3">
            Our solution was the creation of Community Contribution Libraries (CCLs). The Luna CCL development environment, which implements <TextLink to="https://storybook.js.org/" title="" external={true}>Storybook</TextLink>, is pleasant to work in. It increases developer velocity while reducing frustration. Luna CCLs also lower the collaboration barrier between designers and engineers.
          </P>

          <P className="mt-3">
            The Luna CCLs were also used to improve and implement better testing standards/practices. CCLs were built from the start to lower the effort required for engineers to implement tests and increase test coverage and variety; including real-time and regression testing for accessibility, components, and screens.
          </P>

          <P className="mt-3">
            To govern the use of CCLs, I launched our Community Contribution Model. This model offers guidelines for CCL candidacy, lifecycle, and core promotion.
          </P>

          <h3 className="mt-10 mb-2 text-stone-600 text-lg">Lead Developer, Educational Technology and Web Applications</h3>

          <div className="items-center justify-between border-b border-pink-400 border-dotted d-block sm:flex text-stone-600">
            <TextLink
              className="text-stone-600"
              external={true}
              title=""
              to="https://bscs.org/"
              type="h3"
            >
              BSCS Science Learning
            </TextLink>
            <P className="hidden sm:block text-stone-600">
              Aug 2015 - July 2021
            </P>
            <P className="sm:hidden text-sm text-stone-600">
              Aug 2015 - July 2021
            </P>
          </div>
          {/* <P className="mt-3">
            Previously, I worked for a nonprofit organization, <TextLink to="https://bscs.org/" title="" external={true}>BSCS Science Learning</TextLink>, whose mission is to transform science teaching and learning through research-driven innovation.
          </P> */}
          {/* <P className="mt-4">
            At BSCS Science Learning, we operate on federal and private grants. The nature of this work requires our small team to build many websites and web apps every year. To keep up with demaind, we must ensure that our infrastructure is agile enough to meet the needs of a diverse range of projects while staying within budget, meeting strict deadlines, and reducing both the cost of ongoing maintenance and technical debt.
          </P> */}

          <P className="mt-4">
            During my time with BSCS, I established and grew an in-house software development team and modernized BSCS’s crumbling tech stack.
          </P>
          <P className="mt-4">
            During my time with BSCS, I oversaw the adoption of innovative approaches to software and design such as <i className="text-pink-300 fas fa-heart" /> <TextLink to="https://www.invisionapp.com/inside-design/guide-to-design-systems/" title="" external={true}>design systems</TextLink>; <TextLink to="https://medium.com/omarelgabrys-blog/component-based-architecture-3c3c23c7e348" title="" external={true}>component based</TextLink>, <TextLink to="https://martinfowler.com/articles/serverless.html" title="" external={true}>serverless</TextLink>, <TextLink to="https://martinfowler.com/articles/microservices.html" title="" external={true}> and microservice</TextLink> architectures; and the beloved <i className="text-pink-300 fas fa-heart" /> <TextLink to="https://jamstack.org/" title="" external={true}>Jamstack</TextLink>.
          </P>
          <P className="mt-4">
            These innovations allowed my small team to keep pace with increasing demand. We were able to create BSCS's digital products with more efficiency and at a higher quality with lower product support costs.
          </P>
          <P className="mt-4">
            A typical day for me involved
          </P>
          <UL className="mt-4 list-disc ml-8 sm:ml-0">
            <li>
              Roadmapping, planning, and delegating work
            </li>
            <li>
              Architecting solutions to complex problems
            </li>
            <li>
              Overseeing BSCS's digital products throughout their lifecycle
            </li>
            <li>
              Guiding and mentoring my team
            </li>
            <li>
              Designing/building UI's and UI components
            </li>
          </UL>
          <P className="mt-4">
            Our stack consisted of
          </P>
          <UL className="mt-4 list-disc ml-8 sm:ml-0">
            <li>
              <TextLink to="https://beta.reactjs.org/" title="" external={true}>React</TextLink> + <TextLink to="https://www.typescriptlang.org/" title="" external={true}>TypeScript</TextLink> frontends (<TextLink to="https://www.gatsbyjs.com/" title="" external={true}>Gatsby</TextLink> / <TextLink to="https://nextjs.org/" title="" external={true}>Next.js</TextLink> / <TextLink to="https://tailwindcss.com/" title="" external={true}>Tailwind CSS</TextLink>)
            </li>
            <li>
              <TextLink to="https://go.dev/" title="" external={true}>Golang</TextLink> microservices
            </li>
            <li>
              <TextLink to="https://fauna.com/" title="" external={true}>Fauna DB</TextLink> for persisting data
            </li>
            <li>
              <TextLink to="https://www.docker.com/" title="" external={true}>Docker</TextLink>
            </li>
            <li>
              <TextLink to="https://www.nginx.com/" title="" external={true}>Nginx</TextLink>
            </li>
          </UL>
          <P className="mt-4">
            Our design system, Caribou, used Gatsby and our component library was built in <TextLink to="https://storybook.js.org/" title="" external={true}>Storybook</TextLink>; components were published to NPM to make them readily consumable.
          </P>

          <h3 className="mt-10 mb-2 text-stone-600 text-lg">Instructor; Astronomy and Physics</h3>

          <div className="items-center justify-between border-b border-pink-400 border-dotted d-block sm:flex text-stone-600">
            <TextLink
              className="text-stone-600"
              external={true}
              title=""
              to="https://www.ppcc.edu/"
              type="h3"
            >
              Pikes Peak Community College
            </TextLink>

            <P className="hidden sm:block text-stone-600">
              Aug 2014 - Aug 2015
            </P>
            <P className="sm:hidden text-stone-600">
              Aug 2014 - Aug 2015
            </P>
          </div>
          <P className="mt-3">
            Prior to my career in software development, I was an astronomy and physics instructor. My courses introduced students to the skills required to think critically about the physical world and offered students experience in solving real-world problems.
          </P>

          <h3 className="mt-10 mb-2 text-stone-600 text-lg">Research Assistant</h3>

          <div className="items-center justify-between border-b border-pink-400 border-dotted d-block sm:flex text-stone-600">
            <TextLink
              className="text-stone-600"
              external={true}
              title=""
              to="https://www.ppcc.edu/"
              type="h3"
            >
              University of Michigan
            </TextLink>

            <P className="hidden sm:block text-stone-600">
              Aug 2011 - Aug 2014
            </P>
            <P className="sm:hidden text-sm text-stone-600">
              Aug 2011 - Aug 2014
            </P>
          </div>
          <P className="mt-4">
            In graduate school, I did research on the space environment of planets and comets. Colloquially known as “space weather,” my research investigated how the solar wind affects the magnetospheres, ionospheres, and upper atmospheres of these objects.
          </P>

          {/* <h2 className="mt-10 text-xl tracking-wide text-stone-700">Education</h2>
          <P className="mt-3">
            I hold an <TextLink to="https://en.wikipedia.org/wiki/Master_of_Science#United_States" title="" external={true}>M.S.</TextLink> in <TextLink to="https://clasp.engin.umich.edu/" title="" external={true}>Atmospheric and Space Science</TextLink> and a <TextLink to="https://en.wikipedia.org/wiki/Graduate_certificate#United_States" title="" external={true}>GradCert</TextLink> in <TextLink to="https://micde.umich.edu/" title="" external={true}>Computer Science and Engineering</TextLink> from <TextLink to="https://umich.edu/" title="" external={true}>The University of Michigan, Ann Arbor</TextLink>. I did my undergraduate studies at <TextLink to="https://www.colorado.edu/" title="" external={true}>The University of Colorado, Boulder</TextLink> where I earned a <TextLink to="https://en.wikipedia.org/wiki/Bachelor%27s_degree" title="" external={true}>B.A.</TextLink> in <TextLink to="https://www.colorado.edu/aps/" title="" external={true}>Astrophysical, Planetary, and Atmospheric Science</TextLink> and a <TextLink to="https://en.wikipedia.org/wiki/Bachelor%27s_degree" title="" external={true}>B.A.</TextLink> in <TextLink to="https://www.colorado.edu/physics/" title="" external={true}>Physics</TextLink>.
          </P> */}

          <h2 className="mt-10 text-xl tracking-wide text-stone-700">Education</h2>
          <div className="items-center justify-between mt-3 uppercase border-b border-pink-400 border-dotted d-block sm:flex text-stone-600">
            <TextLink
              className="text-stone-600"
              external={true}
              title=""
              to="https://umich.edu/"
              type="h3"
            >
              University of Michigan
            </TextLink>
            <P className="hidden sm:block text-stone-600">
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
            <P className="hidden sm:block text-stone-600">05/2014</P>
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
            <P className="hidden sm:block text-stone-600">07/2014</P>
          </div>
          <P className="mx-6 mt-3">
            Emphasis was placed on numerical analysis, algorithms, and computational techniques for solving and analyzing physics and engineering problems.
          </P>

          <div className="items-center justify-between mt-8 uppercase border-b border-pink-400 border-dotted d-block sm:flex text-stone-600">
            <TextLink
              className="text-stone-600"
              to="https://www.colorado.edu/"
              title=""
              external={true}
              type="h3"
            >
              University of Colorado
            </TextLink>
            <P className="hidden sm:block text-stone-600">
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
            <P className="hidden sm:block text-stone-600">08/2010</P>
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
            <P className="hidden sm:block text-stone-600">08/2010</P>
          </div>
          <P className="mx-6 mt-3">
            I studied, in-depth, the current understanding of most astrophysical phenomena such as geophysics, atmospheric & planetary science, stellar structure & evolution, galaxies, neutron stars, and black holes.
          </P>

          <h2 className="mt-10 text-xl tracking-wide text-stone-700">Extracurricular Interests</h2>

          <StaticImage
            alt="Jillian and her family."
            aspectRatio={16/9}
            className="h-64 mt-3 family"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            placeholder="blurred"
            src="../images/IMG_7135.JPG"
          />
          <P className="text-sm">Jillian and her family.</P>

          <P className="mt-3">
            In my free time I enjoy spending time with my beautiful family, creating visual and immersive art, adventuring in our van (<TextLink to="https://www.instagram.com/explore/tags/vanlife/?hl=en" title="" external={true}>#vanlife</TextLink>), practicing yoga, mountain biking, and I read a lot.
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
