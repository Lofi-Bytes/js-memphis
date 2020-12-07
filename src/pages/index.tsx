import React, { FC, ReactNode } from 'react'

import Avatar from '../components/avatar'
import Banner from '../components/banner'
import ContactForm from '../components/contact-form'
import Layout from '../components/layout'
import TextLink from '../components/text-link'
import SEO from '../components/seo'


const HomePage: FC<ReactNode> = () => {
  return (
    <Layout>
      <SEO
        metaTitle=""
        metaDescription=""
        canonicalUrl=""
      />
      <Banner
        title={
          <>
            <span className="hidden sm:inline-block">
              <i className="fal fa-narwhal text-rose-300"></i>&nbsp;&nbsp;
            </span>
            <span className="text-teal-100">
            Bit-Casting Technomancer
            </span>
            <span className="hidden sm:inline-block">
              &nbsp;&nbsp;<i className="fal fa-alien-monster text-teal-300"></i>
            </span>
            <span className="block sm:hidden">
              <i className="fal fa-narwhal text-rose-300"></i>&nbsp;&nbsp;<i className="fal fa-alien-monster text-teal-300"></i>
            </span>
          </>
        }
        subTitle={<span className="text-teal-100">Designer, Full Stack Developer, &amp; Tech Lead</span>}
      />
      <main className="min-h-screen max-w-screen-lg m-auto mb-20">
        <section className="bg-gray-100 rounded-xl p-8 w-11/12 sm:w-2/3 mx-auto -mt-12 mb-8 sm:mb-10 shadow-xl relative">
          <Avatar />
          <h2 className="text-gray-800 text-2xl mt-6 tracking-wide">About Me</h2>
          <p className="text-gray-600 tracking-wider leading-relaxed mt-3">
            Greetings! My name is Jillian (she/her). I'm a software developer based in Colorado, USA.
          </p>
          <p className="text-gray-600 tracking-wider leading-relaxed mt-4">
            My interests in software development lie at the intersection of improving developer experience, designer experience, <em>and</em> <TextLink href="https://medium.com/s/user-friendly/why-im-done-saying-user-user-experience-and-ux-in-2019-4fdfc6b7de23" external={true}>audience</TextLink> experience. I work on innovative approaches to software and design such as <i className="fas fa-heart" style={{ color: 'pink' }}></i> <TextLink href="https://www.invisionapp.com/inside-design/guide-to-design-systems/" external={true}>design dystems</TextLink>, <TextLink href="https://medium.com/omarelgabrys-blog/component-based-architecture-3c3c23c7e348" external={true}>component based</TextLink>, <TextLink href="https://martinfowler.com/articles/serverless.html" external={true}>serverless</TextLink>, <TextLink href="https://martinfowler.com/articles/microservices.html" external={true}> and microservice</TextLink> architectures, and the beloved <i className="fas fa-heart" style={{ color: 'pink' }}></i> <TextLink href="https://jamstack.org/" external={true}>Jamstack</TextLink>.
          </p>

          <h3 className="text-gray-700 text-xl mt-10 tracking-wide">Current Work</h3>
          <p className="text-gray-600 tracking-wider leading-relaxed mt-3">
            I work for a nonprofit organization, <TextLink href="https://bscs.org/" external={true}>BSCS Science Learning</TextLink>, whose mission is to transform science teaching and learning through research-driven innovation.
          </p>
          <p className="text-gray-600 tracking-wider leading-relaxed mt-4">
            At BSCS Science Learning, we operate on federal and private grants. The nature of this work requires our small team to build many websites and web apps every year. Implementing our infrastructure to be agile enough to meet the needs of a diverse range of projects while staying within budget, meeting strict deadlines, and reducing the cost of ongoing maintenance (technical debt) is paramount.
          </p>

          <h3 className="text-gray-700 text-xl mt-10 tracking-wide">Previous Work</h3>
          <p className="text-gray-600 tracking-wider leading-relaxed mt-3">
            Prior to my career as a software developer, I was an astronomy and physics instructor. My courses introduced students to the skills required to think critically about the physical world and offered students experience in solving real-world problems.
          </p>
          <p className="text-gray-600 tracking-wider leading-relaxed mt-4">
            In graduate school, I studied the space environment of planets and comets. Colloquially known as “space weather,” my studies investigated how the solar wind affects the magnetospheres, ionospheres, and upper atmospheres of these objects.
          </p>

          <h3 className="text-gray-700 text-xl mt-10 tracking-wide">Education</h3>
          <p className="text-gray-600 tracking-wider leading-relaxed mt-3">
            I hold an <TextLink href="https://en.wikipedia.org/wiki/Master_of_Science#United_States" external={true}>M.S.</TextLink> in <TextLink href="https://clasp.engin.umich.edu/" external={true}>Atmospheric and Space Science</TextLink> and a <TextLink href="https://en.wikipedia.org/wiki/Graduate_certificate#United_States" external={true}>GradCert</TextLink> in <TextLink href="https://micde.umich.edu/" external={true}>Computer Science and Engineering</TextLink> from <TextLink href="https://umich.edu/" external={true}>The University of Michigan, Ann Arbor</TextLink>. I did my undergraduate studies at <TextLink href="https://www.colorado.edu/" external={true}>The University of Colorado, Boulder</TextLink> where I earned a <TextLink href="https://en.wikipedia.org/wiki/Bachelor%27s_degree" external={true}>B.A.</TextLink> in <TextLink href="https://www.colorado.edu/aps/" external={true}>Astrophysical, Planetary, and Atmospheric Science</TextLink> and a <TextLink href="https://en.wikipedia.org/wiki/Bachelor%27s_degree" external={true}>B.A.</TextLink> in <TextLink href="https://www.colorado.edu/physics/" external={true}>Physics</TextLink>.
          </p>

          <h3 className="text-gray-700 text-xl mt-10 tracking-wide">Extracurricular Interests</h3>
          <p className="text-gray-600 tracking-wider leading-relaxed mt-3">
            In my free time I enjoy adventuring in my van (<TextLink href="https://www.instagram.com/explore/tags/vanlife/?hl=en" external={true}>#vanlife</TextLink>), spending time with my dog, practicing yoga, mountain biking, and reading.
          </p>
        </section>

        <section className="bg-gray-100 rounded-xl p-8 pb-10 w-11/12 sm:w-2/3 mx-auto shadow-xl z-10 relative">
          <ContactForm />
        </section>
      </main>
    </Layout>
  )
}

export default HomePage
