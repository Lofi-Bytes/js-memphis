import * as React from 'react'

import { useForm } from 'react-hook-form'

import { graphql } from 'gatsby'
import { getImage, StaticImage } from 'gatsby-plugin-image'

import { encode } from '../utils/utils'

import Avatar from '../components/avatar'
import Banner from '../components/banner/banner'
import Button from '../components/button'
// import ContactForm from '../components/contact-form'
import ErrorMessage from '../components/contact-form/error-message'
import Jumbotron from '../components/jumbotron'
import Layout from '../components/layout'
import Main from '../components/main'
import P from '../components/paragraph'
import Section from '../components/section'
import SEO from '../components/seo'
import SocialIconRow from '../components/social-icon-row'
import SuccessMessage from '../components/contact-form/success-message'
import TextLink from '../components/text-link'
import UL from '../components/unordered-list'

type PageProps = {
  data: any
  location: Location
}

const AboutPage = ({ data, location }: PageProps) => {
  const {
    clearErrors,
    formState: { errors, isSubmitting, touchedFields },
    handleSubmit,
    register,
    reset
  } = useForm({
    mode: 'onBlur'
  })
  const [state, setState] = React.useState({})
  const [successMsg, setSuccessMsg] = React.useState(false)
  const [errorMsg, setErrorMsg] = React.useState(false)
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }
  const onSubmit = (data, event) => {
    event.preventDefault()
    data = JSON.stringify(data)
    const form = event.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        // 'form-name': form.getAttribute('name'),
        'form-name': 'contact',
        ...state
      })
    })
      .then((response) => {
        setSuccessMsg(true)
        reset()
        // console.log(response)
      })
      .catch((error) => {
        setErrorMsg(true)
        // console.log(error)
      })
  }

  const image = getImage(data.avatar)

  return (
    <Layout location={location}>
      <SEO
        metaTitle="About Jillian"
        metaDescription="Hi, I'm Jillian—a Software Engineering Manager specializing in design systems, developer experience, and accessibility. I lead teams that create beautiful, scalable, and inclusive solutions, empowering developers and driving meaningful impact across organizations."
        canonicalUrl="https://jillian.dev/about"
      />
      <Jumbotron
        title={
          <span className="js text-5xl leading-relaxed md:text-6xl md:leading-loose lg:text-7xl lg:leading-relaxed">
            My Work
          </span>
        }
        // subtitle={}
      />
      <Main>
        <Section
          background="opaque"
          className="-mt-10 mb-8 pb-12"
        >
          <Avatar
            alt="Jillian's avatar"
            src={image}
          />
          <i
            className="fa-light fa-triangle transofrm absolute -left-4 -top-8 -rotate-90 transform-gpu text-6xl text-yellow-300 sm:-left-8 sm:-top-10 sm:text-7xl lg:-left-8 lg:-top-14 lg:text-8xl"
            aria-hidden="true"
          />
          <i
            className="fa-light fa-bolt-lightning transofrm absolute -right-2 bottom-64 rotate-12 transform-gpu text-6xl text-emerald-300 sm:-right-4 sm:bottom-48 sm:text-7xl lg:-right-4 lg:bottom-48 lg:text-8xl"
            aria-hidden="true"
          />

          <h2 className="mt-10 text-2xl tracking-wide text-stone-700">
            Software Engineering Manager
            <br />
            <span className="text-xl text-stone-600">
              Design Systems, Developer Experience, and Accessibility
            </span>
          </h2>
          <SocialIconRow className="mt-3" />
          <Button
            action="tertiary"
            disabled={false}
            role="link"
            title="Return to homepage"
            className="mt-6 w-max"
            to="/"
          >
            <i
              className="fas fa-arrow-left"
              aria-hidden="true"
            />
            &nbsp;&nbsp;Return to homepage
          </Button>

          <h2 className="mt-10 text-xl tracking-wide text-stone-700">
            Current Work
          </h2>

          <h3 className="mb-2 mt-6 text-lg text-stone-600">
            Software Engineering Manager
            <br />
            <span className="text-base text-stone-600">
              Design Systems, Developer Experience, and Accessibility
            </span>
          </h3>
          <div className="d-block items-center justify-between border-b border-dotted border-pink-400 text-stone-600 sm:flex">
            <TextLink
              className="text-stone-600"
              outbound={true}
              title="Northwestern Mutual"
              to="https://www.northwesternmutual.com/"
              type="p"
            >
              Northwestern Mutual
            </TextLink>
            <P className="hidden text-stone-600 sm:block">
              September 2022 - Present
            </P>
            <P className="text-sm text-stone-600 sm:hidden">
              September 2022 - Present
            </P>
          </div>
          <P className="mt-3">
            As the manager of the design systems and developer experience
            tooling within Northwestern Mutual's Experience Platform group,
            I lead a team responsible for overseeing the system guide, core
            libraries, client-side utilities, and community contribution
            libraries.
          </P>
          <P className="mt-3">
            My key responsibilities in this role include:
          </P>
          <UL className="ml-8 mt-4 list-disc sm:ml-0">
            <li>providing technical leadership</li>
            <li>ensuring production stability for products</li>
            <li>
              standardizing and sharing best practices across the
              department
            </li>
            <li>
              collaborating with cross-functional teams to plan and
              delegate work
            </li>
            <li>
              mentoring and coaching engineers for technical and leadership
              growth
            </li>
            <li>
              recruiting, hiring, and onboarding talent for team
              development
            </li>
          </UL>
          {/* <P className="mt-3">
            Some of my significant accomplishments include:
          </P>

          <UL className="mt-4 list-disc ml-8 sm:ml-0">
            <li>
              Boosting team productivity and morale through team-building and improved communication
            </li>
            <li>
              Implementing a ticket refinement process to set more explicit expectations and outcomes
            </li>
            <li>
              Instituting a refined backlog grooming process to triage issues and feature requests, resulting in reduced backlog volume
            </li>
            <li>
              Pioneering and refining a “swarming sprint” process that allowed my team to quickly complete a large volume of highly-parallelizable work
            </li>
            <li>
              Improving the pull request review process and implementing more precise guidelines for contributing to the design system
            </li>
            <li>
              Enhancing the efficiency of program increment (PI) planning through a pre-planning process, resulting in less expensive planning sessions
            </li>
            <li>
              Guiding a working group that developed ways to strengthen design system support while reducing the support burden for the team
            </li>
            <li>
              Increasing product resiliency by implementing comprehensive testing standards
            </li>
            <li>
              Identifying opportunities to gather, define, and visualize data to drive better decision-making and realize positive outcomes
            </li>
          </UL> */}
          <h2 className="mt-10 text-xl tracking-wide text-stone-700">
            Previous Work
          </h2>
          <h3 className="mb-2 mt-6 text-lg text-stone-600">
            Senior Software Engineer, Design Systems Core Lead
          </h3>
          <div className="d-block items-center justify-between border-b border-dotted border-pink-400 text-stone-600 sm:flex">
            <TextLink
              className="text-stone-600"
              outbound={true}
              title="Northwestern Mutual"
              to="https://www.northwesternmutual.com/"
              type="p"
            >
              Northwestern Mutual
            </TextLink>
            <P className="hidden text-stone-600 sm:block">
              Jan 2022 - Aug 2022
            </P>
            <P className="text-sm text-stone-600 sm:hidden">
              Jan 2022 - Aug 2022
            </P>
          </div>
          <P className="mt-3">
            As a leader overseeing multiple teams and projects on
            Northwestern Mutual's design system, Luna, I was responsible
            for defining roadmaps, delegating work, and collaborating with
            designers on implementing new functionality. I also mentored
            and coached engineers, established team standards and best
            practices, and participated in recruiting and interviewing
            potential candidates. Additionally, I advised on contributions
            and integrations as needed.
          </P>
          {/* <P className="mt-3">
            During my tenure, I achieved the following:
          </P>

          <UL className="mt-4 list-disc ml-8 sm:ml-0">
            <li>
              Successfully migrated Luna to a monorepo and shipped it as such
            </li>
            <li>
              Improved our continuous integration pipeline, resulting in a more reliable release cadence, better review applications, and the ability to conduct canary releases for live testing pre-production
            </li>
            <li>
              Led the team that shipped Luna React Tables
            </li>
            <li>
              Oversaw the successful release of Luna Responsive Optimizations
            </li>
          </UL> */}
          {/* <P className="mt-3">
            Overall, my leadership and technical skills enabled me to guide the team toward successfully delivering key features and improvements to the Luna design system.
          </P> */}
          <h3 className="mb-2 mt-6 text-lg text-stone-600">
            Senior Software Engineer, Design Systems Contributions and
            Integrations Lead
          </h3>
          <div className="d-block items-center justify-between border-b border-dotted border-pink-400 text-stone-600 sm:flex">
            <TextLink
              className="text-stone-600"
              outbound={true}
              title="Northwestern Mutual"
              to="https://www.northwesternmutual.com/"
              type="p"
            >
              Northwestern Mutual
            </TextLink>
            <P className="hidden text-stone-600 sm:block">
              Jul 2021 - Dec 2021
            </P>
            <P className="text-sm text-stone-600 sm:hidden">
              Jan 2021 - Dec 2021
            </P>
          </div>
          <P className="mt-3">
            In this role, my focus was on lowering barriers for other teams
            at the company to contribute to Luna. For a design system to be
            successful, it requires buy-in from everyone at the company.
            One way to get this investment is to ensure that anyone can
            contribute, thus giving everyone a sense of ownership.
          </P>
          <P className="mt-3">
            Our solution was the creation of Community Contribution
            Libraries (CCLs). The Luna CCL development environment, which
            implements Storybook, is pleasant to work in. It increases
            developer velocity while reducing frustration. Luna CCLs also
            lower the collaboration barrier between designers and
            engineers.
          </P>
          <P className="mt-3">
            The Luna CCLs were also used to improve and implement better
            testing standards/practices. CCLs were built from the start to
            lower the effort required for engineers to implement tests and
            improve test coverage and variety; including real-time and
            regression testing for accessibility, components, and screens.
            Thereby increasing the confidence in the quality of the
            products we ship.
          </P>
          <P className="mt-3">
            To govern the use of CCLs, I launched our Community
            Contribution Model. This model offers guidelines for CCL
            candidacy, lifecycle, and core promotion.
          </P>
          <P className="mt-3">
            The CCL program has gained traction with several teams
            currently piloting it, and we continue to see interest from
            others. Our CCL platform has been instrumental in developing
            and deploying multiple Luna projects, and we have successfully
            adopted it as a baseline for Luna Core development.
          </P>
          <h3 className="mb-2 mt-10 text-lg text-stone-600">
            Lead Developer, Educational Technology and Web Applications
          </h3>
          <div className="d-block items-center justify-between border-b border-dotted border-pink-400 text-stone-600 sm:flex">
            <TextLink
              className="text-stone-600"
              outbound={true}
              title="BSCS"
              to="https://bscs.org/"
              type="h3"
            >
              BSCS Science Learning
            </TextLink>
            <P className="hidden text-stone-600 sm:block">
              Aug 2015 - July 2021
            </P>
            <P className="text-sm text-stone-600 sm:hidden">
              Aug 2015 - July 2021
            </P>
          </div>
          <P className="mt-4">
            At BSCS, I built and led an in-house software development team,
            modernized their tech stack, and adopted innovative approaches
            to software and design. We implemented a design system,
            component-based, serverless, microservice architectures, and
            the Jamstack, resulting in more efficient and higher quality
            digital products with lower support costs.
          </P>
          <P className="mt-4">
            My responsibilities included roadmapping, planning, delegating
            work, architecting solutions, overseeing product lifecycles,
            guiding and mentoring the team, and designing/building UIs and
            components.
          </P>
          <P className="mt-4">
            Our stack included React + TypeScript frontends (Gatsby /
            Next.js / Tailwind CSS), Golang microservices, Fauna DB for
            data persistence, Docker, and Nginx. Our design system,
            Caribou, used Gatsby for the system guide, Storybook for the
            development environment, and published components to NPM for
            easy consumption.
          </P>
          <h3 className="mb-2 mt-10 text-lg text-stone-600">
            Instructor; Astronomy and Physics
          </h3>
          <div className="d-block items-center justify-between border-b border-dotted border-pink-400 text-stone-600 sm:flex">
            <TextLink
              className="text-stone-600"
              outbound={true}
              title="Pikes Peak State College"
              to="https://www.pikespeak.edu/"
              type="h3"
            >
              Pikes Peak State College
            </TextLink>

            <P className="hidden text-stone-600 sm:block">
              Aug 2014 - Aug 2015
            </P>
            <P className="text-stone-600 sm:hidden">Aug 2014 - Aug 2015</P>
          </div>
          <P className="mt-3">
            Before my career in software development, I was an astronomy
            and physics instructor. My courses introduced students to the
            skills required to think critically about the physical world.
            They offered students experience in solving real-world
            problems.
          </P>
          {/* <UL className="mt-4 list-disc ml-8 sm:ml-0">
            <li>
              Prepared and delivered lecture presentations focusing on physics and astronomy education
            </li>
            <li>
              Performed classroom demonstrations and experiments to help students solidify new concepts
            </li>
            <li>
              Integrated leading multimedia technologies in self-prepared lectures
            </li>
          </UL> */}
          <h3 className="mb-2 mt-10 text-lg text-stone-600">
            Research Assistant
          </h3>
          <div className="d-block items-center justify-between border-b border-dotted border-pink-400 text-stone-600 sm:flex">
            <TextLink
              className="text-stone-600"
              outbound={true}
              title="University of Michigan"
              to="https://www.umich.edu/"
              type="h3"
            >
              University of Michigan
            </TextLink>

            <P className="hidden text-stone-600 sm:block">
              Aug 2011 - Aug 2014
            </P>
            <P className="text-sm text-stone-600 sm:hidden">
              Aug 2011 - Aug 2014
            </P>
          </div>
          <P className="mt-4">
            In graduate school, I did research on the space environment of
            planets and comets. Colloquially known as “space weather,” my
            research investigated how the solar wind affects the
            magnetospheres, ionospheres, and upper atmospheres of these
            objects.
          </P>
          {/* <UL className="mt-4 list-disc ml-8 sm:ml-0">
            <li>
              Programmed and validated physics & chemistry based simulations and empirical simulations
            </li>
            <li>
              Analyzed and interpreted output data
            </li>
            <li>
              Plotted and visualized pertinent results
            </li>
          </UL> */}
          <h2 className="mt-10 text-xl tracking-wide text-stone-700">
            Education
          </h2>
          <div className="d-block mt-8 items-center justify-between border-b border-dotted border-pink-400 uppercase text-stone-600 sm:flex">
            <TextLink
              className="text-stone-600"
              to="https://www.colorado.edu/"
              title="University of Colorado"
              outbound={true}
              type="h3"
            >
              University of Colorado
            </TextLink>
            <P className="hidden text-stone-600 sm:block">Boulder, CO</P>
          </div>
          <div className="mt-4 flex items-start justify-between">
            <div>
              <P className="font-serif italic">
                <TextLink
                  to="https://en.wikipedia.org/wiki/Master_of_Engineering"
                  title="Master of Engineering"
                  outbound={true}
                >
                  M.Eng.
                </TextLink>{' '}
                <TextLink
                  to="https://www.colorado.edu/engineering/academics/degree-programs/engineering-management"
                  title="University of Colorado Engineering Management Program (EMP)"
                  outbound={true}
                >
                  Engineering Management
                </TextLink>
              </P>
            </div>
            <P className="hidden text-stone-600 sm:block">in progress</P>
          </div>
          <P className="mx-6 mt-3">
            In this program, I am building foundational skills in authentic
            leadership, effective communication, organizational management,
            quantitative analysis, finance, systems engineering, product
            development, business law, ethical decision-making, and DEI in
            the workplace.
          </P>
          <div className="d-block mt-3 items-center justify-between border-b border-dotted border-pink-400 uppercase text-stone-600 sm:flex">
            <TextLink
              className="text-stone-600"
              outbound={true}
              title="University of Michigan"
              to="https://umich.edu/"
              type="h3"
            >
              University of Michigan
            </TextLink>
            <P className="hidden text-stone-600 sm:block">Ann Arbor, MI</P>
          </div>
          <div className="mt-4 flex items-start justify-between">
            <div>
              <P className="font-serif italic">
                <TextLink
                  to="https://en.wikipedia.org/wiki/Master_of_Science#United_States"
                  title="Master of Science"
                  outbound={true}
                >
                  M.S.
                </TextLink>{' '}
                <TextLink
                  to="https://clasp.engin.umich.edu/"
                  title="University of Michigan department of Climate and Space Sciences and Engineering"
                  outbound={true}
                >
                  Atmospheric and Space Science
                </TextLink>
              </P>
            </div>
            <P className="hidden text-stone-600 sm:block">05/2014</P>
          </div>
          <P className="mx-6 mt-3">
            My studies focused on the theory of plasma physics,
            electromagnetism, fluid dynamics, atmospheric radiative
            transfer and their applications to solar physics and planetary
            science.
          </P>
          <div className="mt-4 flex items-start justify-between">
            <div>
              <P className="font-serif italic">
                <TextLink
                  to="https://en.wikipedia.org/wiki/Graduate_certificate#United_States"
                  title="Graduate Certificate"
                  outbound={true}
                >
                  GradCert
                </TextLink>{' '}
                <TextLink
                  to="https://micde.umich.edu/"
                  title="Michigan Institute for Computational Discovery and Engineering"
                  outbound={true}
                >
                  Computational Discovery and Engineering
                </TextLink>
              </P>
            </div>
            <P className="hidden text-stone-600 sm:block">07/2014</P>
          </div>
          <P className="mx-6 mt-3">
            Emphasis was placed on numerical analysis, algorithms, and
            computational techniques for solving and analyzing physics and
            engineering problems.
          </P>
          <div className="d-block mt-8 items-center justify-between border-b border-dotted border-pink-400 uppercase text-stone-600 sm:flex">
            <TextLink
              className="text-stone-600"
              to="https://www.colorado.edu/"
              title="University of Colorado"
              outbound={true}
              type="h3"
            >
              University of Colorado
            </TextLink>
            <P className="hidden text-stone-600 sm:block">Boulder, CO</P>
          </div>
          <div className="mt-4 flex items-start justify-between">
            <div>
              <P className="font-serif italic">
                <TextLink
                  to="https://en.wikipedia.org/wiki/Bachelor%27s_degree"
                  title="Bachelor of Arts"
                  outbound={true}
                >
                  B.A.
                </TextLink>{' '}
                <TextLink
                  to="https://www.colorado.edu/physics/"
                  title="University of Colorado department of Physics"
                  outbound={true}
                >
                  Physics
                </TextLink>
              </P>
            </div>
            <P className="hidden text-stone-600 sm:block">08/2010</P>
          </div>
          <P className="mx-6 mt-3">
            I gained a strong foundation in classical mechanics, modern
            physics, electromagnetics, quantum mechanics, thermodynamics,
            condensed matter physics, nuclear & particle physics, plasma
            physics, circuit theory & design, and certified to design and
            machine custom parts for laboratory experiments in the physics
            department's state of the art machine shop.
          </P>
          <div className="mt-4 flex items-start justify-between">
            <div>
              <P className="font-serif italic">
                <TextLink
                  to="https://en.wikipedia.org/wiki/Bachelor%27s_degree"
                  title="Bachelor of Arts"
                  outbound={true}
                >
                  B.A.
                </TextLink>{' '}
                <TextLink
                  to="https://www.colorado.edu/aps/"
                  title="Univeresity of Colorado department of Astrophysical, Planetary, and Atmospheric Science"
                  outbound={true}
                >
                  Astrophysical, Planetary, and Atmospheric Science
                </TextLink>
              </P>
            </div>
            <P className="hidden text-stone-600 sm:block">08/2010</P>
          </div>
          <P className="mx-6 mt-3">
            I studied, in-depth, the current understanding of most
            astrophysical phenomena such as geophysics, atmospheric &
            planetary science, stellar structure & evolution, galaxies,
            neutron stars, and black holes.
          </P>
          <h2 className="mt-10 text-xl tracking-wide text-stone-700">
            Extracurricular Interests
          </h2>
          <StaticImage
            alt="Jillian and her family."
            aspectRatio={16 / 9}
            className="family mt-3 h-64"
            formats={['auto', 'webp', 'avif']}
            layout="fullWidth"
            placeholder="blurred"
            src="../images/IMG_7135.JPG"
          />
          <P className="text-sm">Jillian and her family.</P>
          <P className="mt-3">
            In my free time I enjoy spending time with my beautiful family,
            creating visual and immersive art, adventuring in our van (
            <TextLink
              to="https://www.instagram.com/explore/tags/vanlife/?hl=en"
              title="#vanlife"
              outbound={true}
            >
              #vanlife
            </TextLink>
            ), practicing yoga, mountain biking, and I read a lot.
          </P>
          <Button
            action="secondary"
            disabled={false}
            role="link"
            title="Return to homepage"
            className="mt-16 w-max"
            to="/"
          >
            <i
              className="fas fa-chevron-left"
              aria-hidden="true"
            />
            &nbsp;&nbsp;Return to homepage
          </Button>
        </Section>

        <Section background="opaque">
          <Banner color="cyan">Interested in collaborating?</Banner>
          <div className="mx-auto md:w-10/12">
            {/* <ContactForm /> */}
            {successMsg ? <SuccessMessage /> : null}
            {errorMsg ? <ErrorMessage /> : null}

            {!successMsg && (
              <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="mt-8 grid grid-cols-1 gap-4">
                  <input
                    type="hidden"
                    name="form-contact"
                    value="contact"
                  />
                  <label className="block">
                    <span className="text-sm tracking-wider text-stone-600">
                      Name
                    </span>
                    <div className="relative">
                      <input
                        {...register('name', {
                          required: true,
                          minLength: 2,
                          maxLength: 200
                        })}
                        aria-required="true"
                        className={
                          !JSON.stringify(touchedFields.name) // field is pristine
                            ? 'mt-1 block w-full rounded-lg border-0 border-l-4 border-purple-300 bg-stone-200 pl-3 pr-10 text-lg text-stone-600 caret-fuchsia-500 shadow-md focus:border-fuchsia-500 focus:ring-0'
                            : errors.name &&
                                errors.name.type === 'required'
                              ? 'mt-1 block w-full rounded-lg border-0 border-l-4 border-red-300 bg-stone-200 pl-3 pr-10 text-lg text-stone-600 caret-red-500 shadow-md focus:border-red-500 focus:ring-0'
                              : errors.name &&
                                  errors.name.type === 'minLength'
                                ? 'mt-1 block w-full rounded-lg border-0 border-l-4 border-red-300 bg-stone-200 pl-3 pr-10 text-lg text-stone-600 caret-red-500 shadow-md focus:border-red-500 focus:ring-0'
                                : errors.name &&
                                    errors.name.type === 'maxLength'
                                  ? 'mt-1 block w-full rounded-lg border-0 border-l-4 border-red-300 bg-stone-200 pl-3 pr-10 text-lg text-stone-600 shadow-md focus:border-red-500 focus:ring-0'
                                  : 'mt-1 block w-full rounded-lg border-0 border-l-4 border-green-300 bg-stone-200 pl-3 pr-10 text-lg text-stone-600 caret-green-500 shadow-md focus:border-green-500 focus:ring-0'
                        }
                        onChange={handleChange}
                        placeholder=""
                        type="text"
                      />
                      {!JSON.stringify(touchedFields.name) ? ( // field is pristine
                        <div className="absolute right-4 top-1/4 w-4"></div>
                      ) : errors.name &&
                        errors.name.type === 'required' ? (
                        <i
                          className="fa-regular fa-times absolute right-4 top-1/4 w-4 text-2xl text-red-600"
                          aria-hidden="true"
                        />
                      ) : errors.name &&
                        errors.name.type === 'minLength' ? (
                        <i
                          className="fa-regular fa-times absolute right-4 top-1/4 w-4 text-2xl text-red-600"
                          aria-hidden="true"
                        />
                      ) : errors.name &&
                        errors.name.type === 'maxLength' ? (
                        <i
                          className="fa-regular fa-times absolute right-4 top-1/4 w-4 text-2xl text-red-600"
                          aria-hidden="true"
                        />
                      ) : (
                        <i
                          className="fa-regular fa-check absolute right-4 top-1/4 w-4 text-2xl text-green-600"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    <p
                      className={
                        (errors.name && errors.name.type === 'required') ||
                        (errors.name &&
                          errors.name.type === 'minLength') ||
                        (errors.name && errors.name.type === 'maxLength')
                          ? 'error mt-1 text-sm text-red-600 opacity-100 transition-opacity delay-75 duration-200'
                          : 'error mt-1 text-sm text-red-600 opacity-0 transition-opacity delay-75 duration-200'
                      }
                      aria-hidden={
                        (errors.name && errors.name.type === 'required') ||
                        (errors.name &&
                          errors.name.type === 'minLength') ||
                        (errors.name && errors.name.type === 'maxLength')
                          ? 'false'
                          : 'true'
                      }
                      aria-live={
                        (errors.name && errors.name.type === 'required') ||
                        (errors.name &&
                          errors.name.type === 'minLength') ||
                        (errors.name && errors.name.type === 'maxLength')
                          ? 'polite'
                          : 'off'
                      }
                    >
                      {errors.name && errors.name.type === 'required' ? (
                        <>Please enter your name.</>
                      ) : errors.name &&
                        errors.name.type === 'minLength' ? (
                        <>Your name must be at least 2 characters.</>
                      ) : errors.name &&
                        errors.name.type === 'maxLength' ? (
                        <>Your name must be less than 100 characters.</>
                      ) : (
                        <>&nbsp;</>
                      )}
                    </p>
                  </label>
                  <label className="block">
                    <span className="text-sm tracking-wider text-stone-600">
                      Email
                    </span>
                    <div className="relative">
                      <input
                        {...register('email', {
                          required: true,
                          pattern:
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        })}
                        aria-required="true"
                        className={
                          !JSON.stringify(touchedFields.email) // field is pristine
                            ? 'mt-1 block w-full rounded-lg border-0 border-l-4 border-purple-300 bg-stone-200 pl-3 pr-10 text-lg text-stone-600 caret-fuchsia-500 shadow-md focus:border-fuchsia-500 focus:ring-0'
                            : errors.email &&
                                errors.email.type === 'required'
                              ? 'mt-1 block w-full rounded-lg border-0 border-l-4 border-red-300 bg-stone-200 pl-3 pr-10 text-lg text-stone-600 caret-red-500 shadow-md focus:border-red-500 focus:ring-0'
                              : errors.email &&
                                  errors.email.type === 'pattern'
                                ? 'mt-1 block w-full rounded-lg border-0 border-l-4 border-red-300 bg-stone-200 pl-3 pr-10 text-lg text-stone-600 caret-red-500 shadow-md focus:border-red-500 focus:ring-0'
                                : 'mt-1 block w-full rounded-lg border-0 border-l-4 border-green-300 bg-stone-200 pl-3 pr-10 text-lg text-stone-600 caret-green-500 shadow-md focus:border-green-500 focus:ring-0'
                        }
                        onChange={handleChange}
                        type="email"
                      />
                      {!JSON.stringify(touchedFields.email) ? ( // field is pristine
                        <div className="w-4"></div>
                      ) : errors.email &&
                        errors.email.type === 'required' ? (
                        <i
                          className="fa-regular fa-times absolute right-4 top-1/4 w-4 text-2xl text-red-600"
                          aria-hidden="true"
                        />
                      ) : errors.email &&
                        errors.email.type === 'pattern' ? (
                        <i
                          className="fa-regular fa-times absolute right-4 top-1/4 w-4 text-2xl text-red-600"
                          aria-hidden="true"
                        />
                      ) : (
                        <i
                          className="fa-regular fa-check absolute right-4 top-1/4 w-4 text-2xl text-green-600"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    <p
                      className={
                        (errors.email &&
                          errors.email.type === 'required') ||
                        (errors.email && errors.email.type === 'minLength')
                          ? 'error mt-1 text-sm text-red-600 opacity-100 transition-opacity delay-75 duration-200'
                          : 'error mt-1 text-sm text-red-600 opacity-0 transition-opacity delay-75 duration-200'
                      }
                      aria-hidden={
                        (errors.email &&
                          errors.email.type === 'required') ||
                        (errors.email && errors.email.type === 'pattern')
                          ? 'false'
                          : 'true'
                      }
                      aria-live={
                        (errors.email &&
                          errors.email.type === 'required') ||
                        (errors.email && errors.email.type === 'pattern')
                          ? 'polite'
                          : 'off'
                      }
                    >
                      {errors.email && errors.email.type === 'required' ? (
                        <>Please enter your email.</>
                      ) : errors.email &&
                        errors.email.type === 'pattern' ? (
                        <>Please enter a valid email address.</>
                      ) : (
                        <>&nbsp;</>
                      )}
                    </p>
                  </label>
                  <label className="block">
                    <span className="text-sm tracking-wider text-stone-600">
                      Message
                    </span>
                    <div className="relative">
                      <textarea
                        {...register('message', {
                          required: true,
                          minLength: 15,
                          maxLength: 3000
                        })}
                        aria-required="true"
                        className={
                          !JSON.stringify(touchedFields.message) // field is pristine
                            ? 'mt-1 block w-full flex-grow rounded-lg border-0 border-l-4 border-purple-300 bg-stone-200 pl-3 pr-10 text-lg text-stone-600 caret-fuchsia-500 shadow-md focus:border-fuchsia-500 focus:ring-0'
                            : errors.message &&
                                errors.message.type === 'required'
                              ? 'mt-1 block w-full flex-grow rounded-lg border-0 border-l-4 border-red-300 bg-stone-200 pl-3 pr-10 text-lg text-stone-600 caret-red-500 shadow-md focus:border-red-500 focus:ring-0'
                              : errors.message &&
                                  errors.message.type === 'minLength'
                                ? 'mt-1 block w-full flex-grow rounded-lg border-0 border-l-4 border-red-300 bg-stone-200 pl-3 pr-10 text-lg text-stone-600 caret-red-500 shadow-md focus:border-red-500 focus:ring-0'
                                : errors.message &&
                                    errors.message.type === 'maxLength'
                                  ? 'mt-1 block w-full flex-grow rounded-lg border-0 border-l-4 border-red-300 bg-stone-200 pl-3 pr-10 text-lg text-stone-600 caret-red-500 shadow-md focus:border-red-500 focus:ring-0'
                                  : 'mt-1 block w-full flex-grow rounded-lg border-0 border-l-4 border-green-300 bg-stone-200 pl-3 pr-10 text-lg text-stone-600 caret-green-500 shadow-md focus:border-green-500 focus:ring-0'
                        }
                        onChange={handleChange}
                        rows={4}
                      />
                      {!JSON.stringify(touchedFields.message) ? ( // field is pristine
                        <div className="w-4"></div>
                      ) : errors.message &&
                        errors.message.type === 'required' ? (
                        <i
                          className="fa-regular fa-times absolute right-4 top-2 w-4 text-2xl text-red-600"
                          aria-hidden="true"
                        />
                      ) : errors.message &&
                        errors.message.type === 'minLength' ? (
                        <i
                          className="fa-regular fa-times absolute right-4 top-2 w-4 text-2xl text-red-600"
                          aria-hidden="true"
                        />
                      ) : errors.message &&
                        errors.message.type === 'maxLength' ? (
                        <i
                          className="fa-regular fa-times absolute right-4 top-2 w-4 text-2xl text-red-600"
                          aria-hidden="true"
                        />
                      ) : (
                        <i
                          className="fa-regular fa-check absolute right-4 top-2 w-4 text-2xl text-green-600"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    <p
                      className={
                        (errors.message &&
                          errors.message.type === 'required') ||
                        (errors.message &&
                          errors.message.type === 'minLength') ||
                        (errors.message &&
                          errors.message.type === 'maxLength')
                          ? 'error mt-1 text-sm text-red-600 opacity-100 transition-opacity delay-75 duration-200'
                          : 'error mt-1 text-sm text-red-600 opacity-0 transition-opacity delay-75 duration-200'
                      }
                      aria-hidden={
                        (errors.message &&
                          errors.message.type === 'required') ||
                        (errors.message &&
                          errors.message.type === 'minLength') ||
                        (errors.message &&
                          errors.message.type === 'maxLength')
                          ? 'false'
                          : 'true'
                      }
                      aria-live={
                        (errors.message &&
                          errors.message.type === 'required') ||
                        (errors.message &&
                          errors.message.type === 'minLength') ||
                        (errors.message &&
                          errors.message.type === 'maxLength')
                          ? 'polite'
                          : 'off'
                      }
                    >
                      {errors.message &&
                      errors.message.type === 'required' ? (
                        <>Please enter a message.</>
                      ) : errors.message &&
                        errors.message.type === 'minLength' ? (
                        <>Your message must be at least 15 characters.</>
                      ) : errors.message &&
                        errors.message.type === 'maxLength' ? (
                        <>
                          Your message must be less than 3000 characters.
                        </>
                      ) : (
                        <>&nbsp;</>
                      )}
                    </p>
                  </label>
                  <Button
                    action="primary"
                    className="mt-4"
                    role="button"
                    title="Submit"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Get in touch
                  </Button>
                </div>
              </form>
            )}
          </div>
        </Section>
      </Main>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    avatar: file(relativePath: { eq: "IMG_4458_square.jpeg" }) {
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
