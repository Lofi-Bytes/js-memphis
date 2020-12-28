import React, { FC, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Alert from '../../components/alert'
import Banner from '../../components/banner'
import Layout from '../../components/layout'
import TextLink from '../../components/text-link'
import Section from '../../components/section'
import SEO from '../../components/seo'
import Main from '../../components/main'
import NextPrev from '../../components/next-prev'
import Tag from '../../components/tag'

import Prism from 'prismjs'


const install =
`# Using npm
npm install react-hook-form

# Using Yarn
yarn add react-hook-form`

const styledForm =
`import React, { FC, ReactNode, useState } from 'react'

import Button from '../button'


export type ContactFormProps = {
  name: string,
  email: string,
  message: string
}

const ContactForm: FC<ReactNode> = ({}: ReactNode) => {
  return (
    <form name="contact">
      <div className="grid grid-cols-1 gap-4 mt-8">
        <input type="hidden" name="form-contact" value="contact" />
        <label className="block">
          <span className="text-sm tracking-wider text-gray-600">Name</span>
          <div className="relative">
            <input
              className="block w-full pl-3 pr-10 mt-1 text-lg text-gray-600 bg-gray-200 border-0 border-l-4 border-purple-300 rounded-lg shadow-md focus:ring-0 focus:border-fuchsia-500"
              aria-required="true"
              placeholder=""
              type="text"
              name="name"
            />
          </div>
        </label>
        <label className="block">
          <span className="text-sm tracking-wider text-gray-600">Email</span>
          <div className="relative">
            <input
              className="block w-full pl-3 pr-10 mt-1 text-lg text-gray-600 bg-gray-200 border-0 border-l-4 border-purple-300 rounded-lg shadow-md focus:ring-0 focus:border-fuchsia-500"
              aria-required="true"
              type="email"
              name="email"
            />
          </div>
        </label>
        <label className="block">
          <span className="text-sm tracking-wider text-gray-600">Message</span>
          <div className="relative">
            <textarea
              className="flex-grow block w-full pl-3 pr-10 mt-1 text-lg text-gray-600 bg-gray-200 border-0 border-l-4 border-purple-300 rounded-lg shadow-md focus:ring-0 focus:border-fuchsia-500"
              aria-required="true"
              rows={4}
              name="message"
            />
          </div>
        </label>
        <Button
          action="primary"
          className="mt-4"
          title="Submit"
          type="submit"
        >
          Submit
        </Button>
      </div>
    </form>
  )
}

export default ContactForm`

const buttonExport = `export { default } from './button'`

type PageProps = {
  location: Location
}

const BeautifulWebFormsJamstackReactHookFormPage: FC<PageProps> = ({
  location
}: PageProps) => {
  const postData = useStaticQuery(graphql`
    query BeautifulWebFormsJamstackReactHookFormQuery {
      allPostsJson(
        filter: {
          title: {
            eq: "Beautiful Web Forms on the Jamstack"
          },
          subtitle: {
            eq: "With React Hook Form"
          }
        }
      ) {
        edges {
          node {
            title
            subtitle
            date
            tags
            path
          }
        }
      }
    }
  `)

  const title = postData.allPostsJson.edges[0].node.title
  const subtitle = postData.allPostsJson.edges[0].node.subtitle
  const date = postData.allPostsJson.edges[0].node.date
  const path = postData.allPostsJson.edges[0].node.path
  const tags = postData.allPostsJson.edges[0].node.tags

  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  })

  return (
    <Layout location={location}>
      <SEO
        metaTitle=""
        metaDescription=""
        canonicalUrl=""
      />
      <Banner
        align="left"
        title={title}
        subtitle={subtitle}
        date={date}
      />
      <Main>
        <Section className="mb-8 -mt-12">
          <div className="max-w-xs px-10 py-2 -ml-10 rounded shadow-lg bg-cyan-300 w-max sm:px-24 sm:-ml-24 sm:max-w-none">
            <h2 className="text-xl tracking-wide text-gray-800 sm:text-2xl">React Hook Form</h2>
          </div>
          <h3 className="mt-10 text-xl tracking-wide text-gray-700">Introduction</h3>
          <p className="mt-3 leading-relaxed tracking-wider text-gray-600">
            <TextLink to="https://react-hook-form.com/" external={true}>React Hook Form</TextLink> is a lightweight and performant client side form field validation library for <TextLink to="https://reactjs.org/" external={true}>React</TextLink>. In this post we will continue to build the contact form that we started previously.
          </p>
          <h3 className="mt-10 text-xl tracking-wide text-gray-700">Getting Started</h3>
          <p className="mt-3 leading-relaxed tracking-wider text-gray-600">
            Start by installing React Hook Form:
          </p>
          <div className="p-1 pt-3 mt-4 border-l-8 border-blue-500 rounded-lg shadow code-container bg-gray-50">
            <div
              className="px-4 mb-4 ml-3 font-mono text-lg font-thin bg-gray-900 shadow-md text w-max rounded-tr-xl rounded-bl-xl"
              style={{ color: '#ffffff' }}
            >
              zsh
            </div>
            <pre>
              <code className="language-bash">{install}</code>
            </pre>
          </div>
          <p className="mt-3 leading-relaxed tracking-wider text-gray-600">
            Now we are ready to start using it in our project.
          </p>
          <h3 className="mt-10 text-xl tracking-wide text-gray-700">Usage</h3>
          <p className="mt-3 leading-relaxed tracking-wider text-gray-600">
            Starting with a basic react arrow function component, which renders the Tailwind CSS-styled form that we created previously:
          </p>
          <div className="p-1 pt-3 mt-4 border-l-8 border-blue-500 rounded-lg shadow code-container bg-gray-50">
            <div className="mb-4 ml-3">
              <code className="language-bash">./src/components/contact-form/contact-form.tsx</code>
            </div>
            <div
              className="px-4 mb-4 ml-3 font-mono text-lg font-thin rounded-tl-sm rounded-br-sm shadow-md text w-max rounded-tr-xl rounded-bl-xl"
              style={{
                backgroundColor: '#007ACC',
                color: '#ffffff'
              }}
            >
              TSX
            </div>
            <pre>
              <code className="language-tsx line-numbers">{styledForm}</code>
            </pre>
          </div>
          <p className="mt-8 leading-relaxed tracking-wider text-gray-600">
            Note above that I have abstracted the button into its own component which keeps things dry and cleans up the TSX in this component.
          </p>
          <Alert>
            As a standard practice, I keep an <code className="language-bash">index.ts</code> file inside of all component subdirectories which cleans up imports throughout the app:
            <div className="p-1 pt-3 mt-4 border-l-8 border-blue-500 rounded-lg shadow code-container bg-gray-50">
              <div className="mb-4 ml-3">
                <code className="language-bash">./src/components/button/index.ts</code>
              </div>
              <div
                className="px-4 mb-4 ml-3 font-mono text-lg font-thin rounded-tl-sm rounded-br-sm shadow-md text w-max rounded-tr-xl rounded-bl-xl"
                style={{
                  backgroundColor: '#007ACC',
                  color: '#ffffff'
                }}
              >
                TS
              </div>
              <pre>
                <code className="language-tsx line-numbers">{buttonExport}</code>
              </pre>
            </div>
          </Alert>

          <NextPrev path={path} className="mt-10" />
        </Section>
        <Section className="mb-8">
          <h3 className="text-xl tracking-wide text-gray-700 ">Tags</h3>
          <div className="flex flex-wrap mt-4">
            {
              tags.map((tag, index) => {
                return (
                  <Tag
                    card={false}
                    key={`item-${index}`}
                    color="purple"
                  >
                    {tag}
                  </Tag>
                )
              })
            }
          </div>
        </Section>
      </Main>
    </Layout>
  )
}

export default BeautifulWebFormsJamstackReactHookFormPage
