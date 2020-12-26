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
`<form name="contact">
  <div className="grid grid-cols-1 gap-6">
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
  </div>
</div>`

const styledForm =
`<form name="contact">
  <div className="grid grid-cols-1 gap-4 mt-8">
    <input type="hidden" name="form-contact" value="contact" />
    <label className="block">
      <span className="text-gray-600 tracking-wider text-sm">Name</span>
      <div className="relative">
        <input
          className="mt-1 block pl-3 pr-10 border-0 border-l-4 border-purple-300 focus:ring-0 focus:border-fuchsia-500 bg-gray-200 rounded-lg text-gray-600 text-lg w-full shadow-md"
          aria-required="true"
          placeholder=""
          type="text"
          name="name"
        />
      </div>
    </label>
    <label className="block">
      <span className="text-gray-600 tracking-wider text-sm">Email</span>
      <div className="relative">
        <input
          className="mt-1 block pl-3 pr-10 border-0 border-l-4 border-purple-300 focus:ring-0 focus:border-fuchsia-500 bg-gray-200 rounded-lg text-gray-600 text-lg w-full shadow-md"
          aria-required="true"
          type="email"
          name="email"
        />
      </div>
    </label>
    <label className="block">
      <span className="text-gray-600 tracking-wider text-sm">Message</span>
      <div className="relative">
        <textarea
          className="mt-1 block flex-grow pl-3 pr-10 border-0 border-l-4 border-purple-300 focus:ring-0 focus:border-fuchsia-500 bg-gray-200 rounded-lg text-gray-600 text-lg w-full shadow-md"
          aria-required="true"
          rows={4}
          name="message"
        />
      </div>
    </label>
    <button
      className="outline-none focus:outline-none hover:outline-none active:outline-none overflow-hidden text-center tracking-wide transition block active:shadow-sm duration-200 ring-1 ring-offset-1 focus:ring-1 focus:ring-offset-1 hover:ring-1 hover:ring-offset-1 active:ring-1 active:ring-offset-1 px-6 py-2 rounded-full shadow-lg bg-purple-300 text-purple-900 font-medium ring-offset-purple-300 ring-purple-200 ring-opacity-75 focus:ring-offset-purple-700 focus:ring-purple-200 focus:ring-opacity-75 hover:ring-offset-purple-700 hover:ring-purple-200 hover:ring-opacity-75 active:ring-offset-purple-700 active:ring-purple-200 active:ring-opacity-75 transform hover:-translate-y-0.5 focus:-translate-y-0.5 active:translate-y-0.5 ease-in-out"
      title="Submit"
      type="submit"
    >
      Submit
    </button>
  </div>
</form>`

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
              className="text-lg text font-thin font-mono w-max rounded-tr-xl rounded-bl-xl px-4 ml-3 bg-gray-900 shadow-md mb-4"
              style={{ color: '#ffffff' }}
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
              className="text-lg text font-thin font-mono w-max rounded-tr-xl rounded-bl-xl px-4 ml-3 shadow-md mb-4"
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
            I found that the easiest way to get started is to look at the provided <TextLink to="https://tailwindcss-forms.vercel.app/" external={true}>live demo examples</TextLink>. For this post, we will recreate the contact form found on the homepage of <TextLink to="/" external={false}>jillian.dev</TextLink>. We will start by using dev tools to copy the underline-style form example and modify the fields as needed (also adjusting the HTML to be valid JSX/TSX):
          </p>
          <div className="code-container shadow mt-4 bg-gray-50 rounded-lg p-1 pt-3 border-l-8 border-blue-500">
            <div
              className="text-lg text font-thin font-mono w-max rounded-tl-sm rounded-tr-xl rounded-bl-xl rounded-br-sm px-4 ml-3 shadow-md mb-4"
              style={{
                backgroundColor: '#007ACC',
                color: '#ffffff'
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
          <div>
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
          </div>
          <p className="text-gray-600 tracking-wider leading-relaxed mt-8">
            With a nice reset in place, now we can just add or remove any of the Tialwind CSS utility classes that we want in order to style the form to our liking:
          </p>
          <div className="code-container shadow mt-4 bg-gray-50 rounded-lg p-1 pt-3 border-l-8 border-blue-500">
            <div
              className="text-lg text font-thin font-mono w-max rounded-tl-sm rounded-tr-xl rounded-bl-xl rounded-br-sm px-4 ml-3 shadow-md mb-4"
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
          <p className="text-gray-600 tracking-wider leading-relaxed mt-8">
            Note that on lines 6, 18, and 29 I preemptively changed the <code className="language-bash">div</code>'s to <code className="css">display: relative;</code> since we will be using those elements to position icons for visual feedback in the next post. And there we have it, a gorgeous, accessible contact form that doesn't yet function:
          </p>
          <div>
            <div className="grid grid-cols-1 gap-4 mt-8">
              <input type="hidden" name="form-contact" value="contact" />
              <label className="block">
                <span className="text-gray-600 tracking-wider text-sm">Name</span>
                <div className="relative">
                  <input
                    className="mt-1 block pl-3 pr-10 border-0 border-l-4 border-purple-300 focus:ring-0 focus:border-fuchsia-500 bg-gray-200 rounded-lg text-gray-600 text-lg w-full shadow-md"
                    aria-required="true"
                    placeholder=""
                    type="text"
                    name="name"
                  />
                </div>
              </label>
              <label className="block">
                <span className="text-gray-600 tracking-wider text-sm">Email</span>
                <div className="relative">
                  <input
                    className="mt-1 block pl-3 pr-10 border-0 border-l-4 border-purple-300 focus:ring-0 focus:border-fuchsia-500 bg-gray-200 rounded-lg text-gray-600 text-lg w-full shadow-md"
                    aria-required="true"
                    type="email"
                    name="email"
                  />
                </div>
              </label>
              <label className="block">
                <span className="text-gray-600 tracking-wider text-sm">Message</span>
                <div className="relative">
                  <textarea
                    className="mt-1 block flex-grow pl-3 pr-10 border-0 border-l-4 border-purple-300 focus:ring-0 focus:border-fuchsia-500 bg-gray-200 rounded-lg text-gray-600 text-lg w-full shadow-md"
                    aria-required="true"
                    rows={4}
                    name="message"
                  />
                </div>
              </label>
              <button
                className="outline-none focus:outline-none hover:outline-none active:outline-none overflow-hidden text-center tracking-wide transition block active:shadow-sm duration-200 ring-1 ring-offset-1 focus:ring-1 focus:ring-offset-1 hover:ring-1 hover:ring-offset-1 active:ring-1 active:ring-offset-1 px-6 py-2 rounded-full shadow-lg bg-purple-300 text-purple-900 font-medium ring-offset-purple-300 ring-purple-200 ring-opacity-75 focus:ring-offset-purple-700 focus:ring-purple-200 focus:ring-opacity-75 hover:ring-offset-purple-700 hover:ring-purple-200 hover:ring-opacity-75 active:ring-offset-purple-700 active:ring-purple-200 active:ring-opacity-75 transform hover:-translate-y-0.5 focus:-translate-y-0.5 active:translate-y-0.5 ease-in-out"
                title="Submit"
                // type="submit"
              >
                Submit
              </button>
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
