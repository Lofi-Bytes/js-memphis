import React, { FC, ReactNode, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Banner from '../../components/banner'
import Layout from '../../components/layout'
import TextLink from '../../components/text-link'
import Section from '../../components/section'
import SEO from '../../components/seo'
import Main from '../../components/main'
import NextButton from '../../components/next-button'
import PreviousButton from '../../components/previous-button'

import Prism from 'prismjs'


const install =
`# Using npm
npm install @tailwindcss/forms

# Using Yarn
yarn add @tailwindcss/forms`

const tailwindConfig =
`module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}`

const initialForm =
`<div className="grid grid-cols-1 gap-6">
  <label className="block">
    <span className="text-gray-700">Name</span>
    <input type="text" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" placeholder="">
  </label>
  <label className="block">
    <span className="text-gray-700">Email</span>
    <input type="email" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" placeholder="">
  </label>
  <label className="block">
    <span className="text-gray-700">Message</span>
    <textarea className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" rows={4}></textarea>
  </label>
</div>`

const BeautifulFormsJamstackTailwindCSSPage: FC<ReactNode> = () => {
  const postData = useStaticQuery(graphql`
    query BeautifulFormsJamstackTailwindCSSQuery {
      allPostsJson(
        filter: {
          title: {
            eq: "Beautiful Web Forms on the Jamstack"
          },
          subtitle: {
            eq: "With Tailwind CSS"
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

  console.log(postData.allPostsJson.edges[0])
  const title = postData.allPostsJson.edges[0].node.title
  const subtitle = postData.allPostsJson.edges[0].node.subtitle
  const date = postData.allPostsJson.edges[0].node.date
  const path = postData.allPostsJson.edges[0].node.path

  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  })

  return (
    <Layout>
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
        <Section className="-mt-12 mb-8">
          <div className="bg-cyan-300 w-max py-2 px-10 -ml-10 sm:px-24 sm:-ml-24 rounded shadow-lg max-w-xs sm:max-w-none">
            <h2 className="text-gray-800 text-xl sm:text-2xl tracking-wide">@tailwindcss/forms</h2>
          </div>
          <h3 className="text-gray-700 text-xl mt-10 tracking-wide">Introduction</h3>
          <p className="text-gray-600 tracking-wider leading-relaxed mt-3">
            Form elements are not always the easiest to style. @tailwindcss/forms convieniently provides a basic reset for form styles that makes form elements easy to override with Tailwind CSS utility classes. @tailwindcss/forms is designed for Tailwind CSS v2.0 and replaces <TextLink to="https://github.com/tailwindlabs/tailwindcss-custom-forms" external={true}>tailwindcss-custom-forms</TextLink> which was designed to work with Tailwind CSS v1.0.
          </p>

          <h3 className="text-gray-700 text-xl mt-10 tracking-wide">Getting Started</h3>
          <p className="text-gray-600 tracking-wider leading-relaxed mt-3">
            Starting with @tailwindcss/forms is fairly routine. Install the plugin:
          </p>
          <div className="code-container shadow mt-4 bg-gray-50 rounded-lg p-1 pt-3 border-l-8 border-blue-500">
            <div
              className="text-lg text font-thin font-mono w-max rounded-tr-xl rounded-bl-xl px-4 ml-3 bg-gray-900 text-gray-50 shadow-md"
            >
              zsh
            </div>
            <pre>
              <code className="language-bash">{install}</code>
            </pre>
          </div>
          <p className="text-gray-600 tracking-wider leading-relaxed mt-8">
            Then add the plugin to your <code className="language-bash">tailwind.config.js</code> file:
          </p>
          <div className="code-container shadow mt-4 bg-gray-50 rounded-lg p-1 pt-3 border-l-8 border-blue-500">
            <div
              className="text-lg text font-thin font-mono w-max rounded-tr-xl rounded-bl-xl px-4 ml-3 shadow-md"
              style={{
                backgroundColor: '#f7df1e'
              }}
            >
              JS
            </div>
            <pre>
              <code className="language-javascript">{tailwindConfig}</code>
            </pre>
          </div>
          <h3 className="text-gray-700 text-xl mt-10 tracking-wide">Usage</h3>
          <p className="text-gray-600 tracking-wider leading-relaxed mt-3">
            I found that the easiest way to get started is to look at the provided <TextLink to="https://tailwindcss-forms.vercel.app/" external={true}>live demo examples</TextLink>. For this post, we will recreate the contact form on the homepage of jillian.dev. We will start by simply copying the underline-style form example and modify the fields as needed (also adjusting the HTML to be valid JSX/TSX):
          </p>
          <div className="code-container shadow mt-4 bg-gray-50 rounded-lg p-1 pt-3 border-l-8 border-blue-500">
            <div
              className="text-lg text font-thin font-mono w-max rounded-tl-sm rounded-tr-xl rounded-bl-xl rounded-br-sm px-4 ml-3 shadow-md text-gray-50"
              style={{
                backgroundColor: '#007ACC'
              }}
            >
              TSX
            </div>
            <pre>
              <code className="language-tsx line-numbers">{initialForm}</code>
            </pre>
          </div>
          <p className="text-gray-600 tracking-wider leading-relaxed mt-8">
            Which should display like this:
          </p>
          <div className="bg-white shadow rounded px-8 py-4 mt-4" style={{ backgroundColor: 'white' }}>
            <div className="grid grid-cols-1 gap-6">
              <label className="block">
                <span className="text-gray-700">Name</span>
                <input type="text" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" placeholder="" />
              </label>
              <label className="block">
                <span className="text-gray-700">Email</span>
                <input type="email" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" placeholder="" />
              </label>
              <label className="block">
                <span className="text-gray-700">Message</span>
                <textarea className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" rows={4}></textarea>
              </label>
            </div>
          </div>
          <div className="flex justify-between items-center mt-10">
            <PreviousButton
              action="secondary"
              path={path}
            >
              <i className="far fa-chevron-left"></i>&nbsp;&nbsp;Prev
            </PreviousButton>
            <NextButton
              action="primary"
              path={path}
            >
              Next&nbsp;&nbsp;<i className="far fa-chevron-right"></i>
            </NextButton>
          </div>
        </Section>
      </Main>
    </Layout>
  )
}

export default BeautifulFormsJamstackTailwindCSSPage
