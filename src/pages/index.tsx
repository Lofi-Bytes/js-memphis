import React, { FC, ReactNode } from 'react'

import Avatar from '../components/avatar'
import Banner from '../components/banner'
import Button from '../components/button'
import ContactForm from '../components/contact-form'
import Layout from '../components/layout'
import Section from '../components/section'
import SEO from '../components/seo'
import Main from '../components/main'


const HomePage: FC<ReactNode> = () => {
  return (
    <Layout>
      <SEO
        metaTitle=""
        metaDescription=""
        canonicalUrl=""
      />
      <Banner
        title={<span className="js text-5xl leading-relaxed md:text-6xl md:leading-loose lg:text-7xl lg:leading-relaxed">Jillian Serenity</span>}
        subTitle={
          <>
            <span className="hidden sm:inline-block">
              <i className="fal fa-narwhal text-pink-200"></i>&nbsp;&nbsp;
            </span>
            <span
              className="bg-gradient-to-r text-transparent bg-clip-text from-pink-200 via-fuchsia-200 to-blue-200"
              style={{color: 'transparent'}}
            >
              Bit-Casting Technomancer
            </span>
            <span className="hidden sm:inline-block">
              &nbsp;&nbsp;<i className="fal fa-alien-monster text-blue-200"></i>
            </span>
            <span className="block sm:hidden">
              <i className="fal fa-narwhal text-rose-300"></i>&nbsp;&nbsp;<i className="fal fa-alien-monster text-teal-300"></i>
            </span>
          </>
        }
      />
      <Main>
        <Section className="-mt-10 mb-8">
          <Avatar />
          <i className="fal fa-stop text-cyan-300 absolute -right-3 -top-10 text-6xl sm:-right-6 sm:-top-10 sm:text-7xl lg:-right-14 lg:-top-8 lg:text-8xl transofrm rotate-12 transform-gpu"></i>
          <i className="fal fa-triangle text-emerald-300 absolute -left-2 top-52 text-5xl sm:-left-4 sm:top-48 sm:text-6xl lg:-left-6 lg:top-36 lg:text-7xl transofrm rotate-45 transform-gpu"></i>
          <h2 className="text-gray-800 text-2xl mt-10 tracking-wide">Jillian S. Estrella <br className="sm:hidden" /><span className="text-gray-500 text-xl">🏳️‍🌈 she/her 🏳️‍⚧️</span></h2>
          <p className="text-gray-500 text-xl tracking-wider leading-relaxed mt-1">
            Front End Systems Designer &amp; Architect
          </p>
          <div className="flex justify-start items-start relative mt-3">
            <div>
              <a
                href="https://github.com/lofi-bytes"
                aria-label="Jillian's Github"
                title="Jillian's Github"
                className="text-2xl text-gray-500 hover:text-lightBlue-700 focus:text-lightBlue-700 active:text-lightBlue-700 hover:cursor-pointer duration-200 focus:outline-none focus:ring focus:ring-lightBlue-700 rounded py-1 px-2"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
            <div className="ml-2">
              <a
                href="https://twitter.com/LofiBytes/"
                aria-label="Jillian's Twitter"
                title="Jillian's Twitter"
                className="text-2xl text-gray-500 hover:text-lightBlue-700 focus:text-lightBlue-700 active:text-lightBlue-700 hover:cursor-pointer duration-200 focus:outline-none focus:ring focus:ring-lightBlue-700 rounded py-1 px-2"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <div className="ml-2">
              <a
                href="https://codepen.io/LofiBytes"
                aria-label="Jillian's CodePen"
                title="Jillian's CodePen"
                className="text-2xl text-gray-500 hover:text-lightBlue-700 focus:text-lightBlue-700 active:text-lightBlue-700 hover:cursor-pointer duration-200 focus:outline-none focus:ring focus:ring-lightBlue-700 rounded py-1 px-2"
              >
                <i className="fab fa-codepen"></i>
              </a>
            </div>
            <div className="ml-2">
              <a
                href="https://dev.to/lofibytes"
                aria-label="Jillian's DEV Profile"
                title="Jillian's DEV Profile"
                className="text-2xl text-gray-500 hover:text-lightBlue-700 focus:text-lightBlue-700 active:text-lightBlue-700 hover:cursor-pointer duration-200 focus:outline-none focus:ring focus:ring-lightBlue-700 rounded py-1 px-2"
              >
                <i className="fab fa-dev"></i>
              </a>
            </div>
          </div>

          <p className="text-gray-600 tracking-wider leading-relaxed mt-8">
            Hi there! Welcome to my creative space. I love building beautiful digital experiences and I am passionate about technology that advances social and environmental justice.
          </p>
          <div
            className="mx-auto mt-8 w-full md:w-3/4"
          >
            <Button
              action="primary"
              className="w-full"
              disabled={false}
              title="Learn more about me"
              to="/about"
            >
              Learn more about me
            </Button>
          </div>
        </Section>

        <Section>
          <div className="bg-yellow-300 w-max py-2 px-10 -ml-10 sm:px-24 sm:-ml-24 rounded shadow-lg">
            <h2 className="text-gray-800 text-xl sm:text-2xl tracking-wide">Say Hello</h2>
          </div>
          <div className="md:w-10/12 mx-auto">
            <ContactForm />
          </div>
        </Section>
      </Main>
    </Layout>
  )
}

export default HomePage
