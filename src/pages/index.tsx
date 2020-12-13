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
            {/* <span
              className="bg-gradient-to-r text-transparent bg-clip-text from-pink-200 via-fuchsia-200 to-blue-200 absolute right-48 top-48"
              style={{color: 'transparent'}}
            >
              she/her
            </span> */}
          </>
        }
      />
      <Main>
        <Section className="-mt-10 mb-8">
          <Avatar />
          <h2 className="text-gray-800 text-2xl mt-10 tracking-wide">Jillian S. Estrella <br className="sm:hidden" /><span className="text-gray-500 text-xl">🏳️‍🌈 she/her 🏳️‍⚧️</span></h2>
          <p className="text-gray-500 text-xl tracking-wider leading-relaxed mt-1">
            UI Designer, Frontend Developer, &amp; Product Manager
          </p>
          <div className="flex justify-start items-start relative mt-3">
            <div>
              <a
                href="https://twitter.com/LofiBytes/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-2xl text-gray-500 hover:text-lightBlue-700 focus:text-lightBlue-700 active:text-lightBlue-700 hover:cursor-pointer duration-200 focus:outline-none focus:ring focus:ring-lightBlue-700 rounded py-1 px-2"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <div className="ml-2">
              <a
                href="https://github.com/JSNickerson"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
                className="text-2xl text-gray-500 hover:text-lightBlue-700 focus:text-lightBlue-700 active:text-lightBlue-700 hover:cursor-pointer duration-200 focus:outline-none focus:ring focus:ring-lightBlue-700 rounded py-1 px-2"
              >
                <i className="fab fa-github"></i>
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
          <h2 className="text-gray-800 text-2xl tracking-wide">Say Hello</h2>
          <div className="md:w-3/4 mx-auto">
            <ContactForm />
          </div>
        </Section>
      </Main>
    </Layout>
  )
}

export default HomePage
