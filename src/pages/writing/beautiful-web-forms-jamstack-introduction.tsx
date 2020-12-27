import React, { FC, ReactNode, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Alert from '../../components/alert'
import Banner from '../../components/banner'
import Layout from '../../components/layout'
import TextLink from '../../components/text-link'
import Section from '../../components/section'
import SEO from '../../components/seo'
import Main from '../../components/main'
import NextButton from '../../components/next-button'

import Prism from 'prismjs'


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
        <Section className="mb-8 -mt-12">
          <div className="max-w-xs px-10 py-2 -ml-10 rounded shadow-lg bg-rose-300 w-max sm:px-24 sm:-ml-24 sm:max-w-none">
            <h2 className="text-xl tracking-wide text-gray-800 sm:text-2xl">Series Introduction</h2>
          </div>

          {/* <div className="flex px-8 py-4 mt-8 bg-blue-100 border-l-4 border-blue-400 rounded shadow-lg">
            <i className="far fa-info-circle text-xl text-blue-900 mt-0.5"></i>
            <p className="ml-4 leading-relaxed tracking-wider text-blue-900">This series assumes the reader has an intermediate understanding of React JS and Tailwind CSS.</p>
          </div> */}

          <Alert

          >
            This series assumes the reader has an intermediate understanding of React JS and Tailwind CSS.
          </Alert>

          <p className="mt-8 leading-relaxed tracking-wider text-gray-600">
            Web forms are arguably one of the most important tools in web development and design. They drive conversions and bridge the communication gap between you and your audience. When implemented poorly, they can serve to frustrate and alienate your audience. Good designers always seek to make forms as simple as possible. Reducing friction for one's audience increases conversion potential and makes web sites/apps more pleasant to use.
          </p>
          <p className="mt-4 leading-relaxed tracking-wider text-gray-600">
            Historically, web forms have been one of the more clunky parts of the audience experience. For example, server side validation requires submitting the form to the mercy of a request-respons cycle before the audience can recieve feedback. I'm sure most of us have had the experience of our web form sate being cleared, having to start over entirely 😩.
          </p>
          <p className="mt-4 leading-relaxed tracking-wider text-gray-600">
            On the development side, implementing web forms well has been a lot of work. Fortunately as the front end has become more capable, development has followed suit and shifted toward the front end. This has allowed for innovative approaches that make both the audience experience <em>and</em> the developer experience happier. The audience gets more real-time feedback on thier progress with less friction and the developer can implement the improved experience with less work.
          </p>
          <p className="mt-4 leading-relaxed tracking-wider text-gray-600">
            In this three part series, we will take a look at the following tools that are leading the drive to make web forms a more pleasant experience for everyone:
          </p>
          <ol className="pb-4 mt-4 leading-relaxed tracking-wider text-gray-600 list-decimal list-inside sm:px-8">
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
          <p className="mt-8 leading-relaxed tracking-wider text-gray-600">
            Ready to dive in?
          </p>
          <div className="mt-4">
            <NextButton
              action="primary"
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
