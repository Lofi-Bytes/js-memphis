import React from 'react'

import Avatar from '../components/avatar'
import Banner from '../components/banner'
import Button from '../components/button'
import ContactForm from '../components/contact-form'
import Layout from '../components/layout'
import Main from '../components/main'
import SEO from '../components/seo'
import Section from '../components/section'
import SocialIconRow from '../components/social-icon-row'


type PageProps = {
  location: Location
}

const HomePage = ({
  location
}: PageProps) => {
  return (
    <Layout location={location}>
      <SEO
        metaTitle="Jillian S. Estrella"
        metaDescription="Front-end systems designer & solutions architect"
        canonicalUrl="https://jillian.dev/"
      />
      <Banner
        title={<span className="text-5xl leading-relaxed js md:text-6xl md:leading-loose lg:text-7xl lg:leading-relaxed">Jillian Serenity</span>}
        subtitle={
          <>
            <span className="hidden sm:inline-block">
              <i className="text-pink-200 fal fa-narwhal" />&nbsp;&nbsp;
            </span>
            <span
              className="text-transparent bg-gradient-to-r bg-clip-text from-pink-200 via-fuchsia-200 to-blue-200"
              style={{color: 'transparent'}}
            >
              Bit-Casting Technomancer
            </span>
            <span className="hidden sm:inline-block">
              &nbsp;&nbsp;<i className="text-blue-200 fal fa-alien-monster" />
            </span>
            <span className="block sm:hidden">
              <i className="fal fa-narwhal text-rose-300" />&nbsp;&nbsp;<i className="text-teal-300 fal fa-alien-monster" />
            </span>
          </>
        }
      />
      <Main>
        <Section background="opaque" className="mb-8 -mt-10">
          <Avatar />
          <i className="absolute text-6xl fal fa-stop text-cyan-300 -right-3 -top-10 sm:-right-6 sm:-top-10 sm:text-7xl lg:-right-14 lg:-top-8 lg:text-8xl transofrm rotate-12 transform-gpu"></i>
          <i className="absolute text-5xl rotate-45 fal fa-triangle text-emerald-300 -left-2 top-52 sm:-left-4 sm:top-48 sm:text-6xl lg:-left-6 lg:top-36 lg:text-7xl transofrm transform-gpu"></i>
          {/* <h2 className="mt-10 text-2xl tracking-wide text-gray-800">Jillian S. Estrella <br className="sm:hidden" /><span className="text-xl text-gray-500">🏳️‍🌈 she/her 🏳️‍⚧️</span></h2> */}
          <h2 className="mt-10 text-2xl tracking-wide text-gray-700">Front-end systems designer &amp; solutions architect <br /><span className="text-xl text-gray-600">🏳️‍🌈 she/her 🏳️‍⚧️</span></h2>
          {/* <p className="mt-1 text-xl leading-relaxed tracking-wider text-gray-500">
            Front End Systems Designer &amp; Solutions Architect
          </p> */}
          <SocialIconRow className="mt-3" />
          <p className="mt-8 leading-relaxed tracking-wider text-gray-600">
            Hi there! Welcome to my creative space. I love building beautiful and accessible digital experiences and I am passionate about technology that advances social and environmental justice.
          </p>
          <p className="mt-4 leading-relaxed tracking-wider text-gray-600">
            Please take a look around and be sure to check back often. This is my brand new website as of December 2020, and I will be adding new content regularly.
          </p>
          <div
            className="w-full mx-auto mt-8 md:w-3/4"
          >
            <Button
              action="secondary"
              className="w-full"
              disabled={false}
              title="Learn more about me"
              to="/about"
            >
              Learn more about me&nbsp;&nbsp;<i className="far fa-chevron-right" />
            </Button>
          </div>
        </Section>

        <Section background="opaque">
          <div className="max-w-xs px-10 py-2 -ml-10 bg-yellow-300 rounded shadow-lg w-max sm:px-24 sm:-ml-24 sm:max-w-none">
            <h2 className="text-xl tracking-wide text-yellow-900 sm:text-2xl">Say hello</h2>
          </div>
          <div className="mx-auto md:w-10/12">
            <ContactForm />
          </div>
        </Section>
      </Main>
    </Layout>
  )
}

export default HomePage
