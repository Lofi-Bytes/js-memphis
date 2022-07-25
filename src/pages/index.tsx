import * as React from 'react'

import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

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

const HomePage = ({
  data,
  location
}: PageProps) => {
  const image = getImage(data.avatar)

  return (
    <Layout location={location}>
      <SEO
        metaTitle="Jillian S. Estrella"
        metaDescription="Design systems engineer"
        canonicalUrl="https://jillian.dev/"
      />
      <Jumbotron
        title={<span className="text-5xl leading-relaxed js md:text-6xl md:leading-loose lg:text-7xl lg:leading-relaxed">Jillian S. Estrella</span>}
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
          <Avatar
            alt="Jillian's avatar"
            src={image}
          />
          <i className="absolute text-6xl fal fa-stop text-cyan-300 -right-3 -top-10 sm:-right-6 sm:-top-10 sm:text-7xl lg:-right-14 lg:-top-8 lg:text-8xl transofrm rotate-12 transform-gpu"></i>
          <i className="absolute text-5xl rotate-45 fal fa-triangle text-emerald-300 -left-2 top-52 sm:-left-4 sm:top-48 sm:text-6xl lg:-left-6 lg:top-36 lg:text-7xl transofrm transform-gpu"></i>
          <h2 className="mt-10 text-2xl tracking-wide text-stone-700">Developer experience engineer
          {/* <br /><span className="text-xl text-stone-600">🏳️‍🌈 she/her 🏳️‍⚧️</span> */}
          </h2>
          <SocialIconRow className="mt-3" />
          <P className="mt-8">
            Hi there! Welcome to my creative space. I am a <TextLink
              to="https://www.helpnetsecurity.com/2021/07/16/developer-experience-engineer/"
              title=""
              external={true}
            >
              developer experience engineer (DXE)
            </TextLink> and tech lead. I love building beautiful and accessible design systems. I am passionate about technology that advances social and environmental justice.
          </P>
          {/* <P className="mt-4">
            Please take a look around and be sure to check back often. This is my brand new website as of December 2020, and I will be adding new content regularly.
          </P> */}
          <div
            className="w-full mx-auto mt-8 md:w-3/4"
          >
            <Button
              action="secondary"
              className="w-full"
              disabled={false}
              role="link"
              title="Learn more about me"
              to="/about"
            >
              Learn more about me&nbsp;&nbsp;<i className="far fa-chevron-right" />
            </Button>
          </div>
        </Section>

        <Section background="opaque">
          <Banner color="yellow">
            Say hello
          </Banner>
          <div className="mx-auto md:w-10/12">
            <ContactForm />
          </div>
        </Section>
      </Main>
    </Layout>
  )
}

export default HomePage

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
