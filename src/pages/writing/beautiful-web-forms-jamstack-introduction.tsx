import React, { FC, ReactNode, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Banner from '../../components/banner'
import Layout from '../../components/layout'
import TextLink from '../../components/text-link'
import Section from '../../components/section'
import SEO from '../../components/seo'
import Main from '../../components/main'

import Prism from 'prismjs'
import NextButton from '../../components/next-button'


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

const BeautifulFormsJamstackIntroductionPage: FC<ReactNode> = () => {
  const postData = useStaticQuery(graphql`
    query BeautifulFormsJamstackIntroductionQuery {
      allPostsJson(
        filter: {
          title: {
            eq: "Beautiful Web Forms on the Jamstack"
          },
          subtitle: {
            eq: ""
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
          <div className="bg-rose-300 w-max py-2 px-10 -ml-10 sm:px-24 sm:-ml-24 rounded shadow-lg max-w-xs sm:max-w-none">
            <h2 className="text-gray-800 text-xl sm:text-2xl tracking-wide">Series Introduction</h2>
          </div>
          <div className="flex border-l-4 bg-blue-100 border-blue-400 py-4 px-8 rounded shadow-lg mt-8">
            <i className="far fa-info-circle text-xl text-blue-900 mt-0.5"></i>
            <p className="text-blue-900 ml-4 tracking-wider leading-relaxed">This series assumes the reader has an intermediate understanding of React JS and Tailwind CSS.</p>
          </div>
          <p className="text-gray-600 tracking-wider leading-relaxed mt-8">
            Web forms are arguably one of the most important tools in web development and design. They drive conversions and bridge the communication gap between you and your audience. When implemented poorly, they can serve to frustrate and alienate your audience. Good designers always seek to make forms as simple as possible. Reducing friction for one's audience increases conversion potential and makes web sites/apps more pleasant to use.
          </p>
          <p className="text-gray-600 tracking-wider leading-relaxed mt-4">
            Historically, web forms have been one of the more clunky parts of the audience experience. For example, server side validation requires submitting the form to the mercy of a request-respons cycle before the audience can recieve feedback. I'm sure most of us have had the experience of our web form sate being cleared, having to start over entirely 😩.
          </p>
          <p className="text-gray-600 tracking-wider leading-relaxed mt-4">
            On the development side, implementing web forms well has been a lot of work. Fortunately as the front end has become more capable, development has followed suit and shifted toward the front end. This has allowed for innovative approaches that make both the audience experience <em>and</em> the developer experience happier. The audience gets more real-time feedback on thier progress with less friction and the developer can implement the improved experience with less work.
          </p>
          <p className="text-gray-600 tracking-wider leading-relaxed mt-4">
            In this three part series, we will take a look at the following tools that are leading the drive to make web forms a more pleasant experience for everyone:
          </p>
          <ol className="list-decimal list-inside text-gray-600 tracking-wider leading-relaxed pb-4 sm:px-8 mt-4">
            <li>
              We will start by ensuring our form is accessible and pleasant to look at using <TextLink
                to="https://github.com/tailwindlabs/tailwindcss-forms"
                external={true}
              >
                @tailwindcss/forms
              </TextLink>. @tailwindcss/forms is "a [<TextLink
                to="https://tailwindcss.com/"
                external={true}
              >
                Tailwind CSS
              </TextLink>] plugin that provides a basic reset for form styles that makes form elements easy to override with [Tailwind CSS] utilities."
            </li>
            <li className="mt-4">
              We will then look at how to implement real-time form validation using <TextLink
                to="https://react-hook-form.com/"
                external={true}
              >
                React Hook Form
              </TextLink>; a super light, performant, and easy-to-use form validation library.
            </li>
            <li className="mt-4">
              Finally, we will see how to handle form submissions using <TextLink
              to="https://www.netlify.com/products/forms/"
              external={true}
            >
              Netlify Forms
            </TextLink>. On the Jamstack we seek to reduce technical debt by elmininating unnecessary complexity. Often, the answer lies in elegant 3rd party solutions. We will see that in <strong><em>most</em></strong> cases, one no longer needs their own dedicated server for form handling, among other things. Freeing up our time and effort for building better products, rather than building infrastructure.
            </li>
          </ol>
          <p className="text-gray-600 tracking-wider leading-relaxed mt-8">
            Ready to dive in?
          </p>
          <div className="mt-4">
            <NextButton
              path={path}
            >
              Let's Get Started&nbsp;&nbsp;<i className="far fa-chevron-right"></i>
            </NextButton>
          </div>
        </Section>
      </Main>
    </Layout>
  )
}

export default BeautifulFormsJamstackIntroductionPage
