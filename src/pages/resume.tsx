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


const ResumePage: FC<ReactNode> = () => {
  return (
    <Layout>
      <SEO
        metaTitle=""
        metaDescription=""
        canonicalUrl=""
      />
      <Banner
        title={<span className="js text-5xl leading-relaxed md:text-6xl md:leading-loose lg:text-7xl lg:leading-relaxed">My Resumé</span>}
        // subTitle={}
      />
      <Main>
        <Section className="-mt-10 mb-8">
          <Avatar />
          <h3 className="text-gray-700 text-xl mt-10 tracking-wide"></h3>
          <p className="text-gray-600 tracking-wider leading-relaxed mt-3">

          </p>
        </Section>

        <Section>
          <h2 className="text-gray-800 text-2xl tracking-wide">Get in Touch</h2>
          <div className="md:w-3/4 mx-auto">
            <ContactForm />
          </div>
        </Section>
      </Main>
    </Layout>
  )
}

export default ResumePage
