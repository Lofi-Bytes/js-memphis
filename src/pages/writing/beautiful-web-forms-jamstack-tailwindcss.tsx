import React, { FC, ReactNode, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Banner from '../../components/banner'
import Layout from '../../components/layout'
import TextLink from '../../components/text-link'
import Section from '../../components/section'
import SEO from '../../components/seo'
import Main from '../../components/main'

import Prism from 'prismjs'


const code =
`export function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}`

const FirstPostTestPage: FC<ReactNode> = () => {
  const postData = useStaticQuery(graphql`
    query BeautifulFormsJamstackQuery {
      allPostsJson(
        filter: {
          title: {
            eq: "Beautiful Web Forms on the Jamstack"
          }
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
          }
        }
      }
    }
  `)
  console.log(postData)
  const title = postData.allPostsJson.edges[0].node.title
  const subtitle = postData.allPostsJson.edges[0].node.subtitle
  const date = postData.allPostsJson.edges[0].node.date
  const tags = postData.allPostsJson.edges[0].node.tags

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
          <h2 className="text-gray-800 text-2xl tracking-wide">Introduction</h2>
          <p className="text-gray-600 tracking-wider leading-relaxed mt-3">
            Web forms are arguably one of the most important tools in web development and design. They drive conversions and bridge the communication gap between you and your audience. When implemented poorly, they can serve to frustrate and alienate your audience. Good designers always seek to make forms as simple as possible. Reducing friction for one's audience increases conversion potential and makes web sites/apps more pleasant to use.
          </p>
          <p className="text-gray-600 tracking-wider leading-relaxed mt-3">
            Historically, web forms have been one of the more clunky parts of the audience experience. For example, server side validation requires submitting the form to the mercy of a request-respons cycle before the audience can recieve feedback. I'm sure most of us have had the experience of our web form sate being cleared, having to start over entirely 😩.
          </p>
          <p className="text-gray-600 tracking-wider leading-relaxed mt-3">
            On the development side, implementing web forms well has been a lot of work. Fortunately as the front end has become more capable, development has followed suit and shifted toward the front end. This has allowed for innovative approaches that make both the audience experience <em>and</em> the developer experience happier. The audience gets more real-time feedback on thier progress with less friction and the developer can implement the improved experience with less work.
          </p>
          <p className="text-gray-600 tracking-wider leading-relaxed mt-3">
            Let's take a look at the following three tools that are leading the drive to make web forms a more pleasant experience for everyone:
          </p>
          <ol className="list-decimal list-inside text-gray-600 tracking-wider leading-relaxed mt-3">
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
            <li className="mt-3">
              We will then look at how to implement real-time form validation using <TextLink
                to="https://react-hook-form.com/"
                external={true}
              >
                React Hook Form
              </TextLink>; a super light, performant, and easy-to-use form validation library.
            </li>
            <li className="mt-3">
              Finally, we will see how to handle form submissions using <TextLink
              to="https://www.netlify.com/products/forms/"
              external={true}
            >
              Netlify Forms
            </TextLink>. On the Jamstack we seek to reduce technical debt by elmininating unnecessary complexity. Often, the answer lies in elegant 3rd party solutions. We will see that in <strong><em>most</em></strong> cases, one no longer needs their own dedicated server for form handling, among other things. Freeing up our time and effort for building better products, rather than building infrastructure.
            </li>
          </ol>



          <p className="text-gray-600 tracking-wider leading-relaxed mt-3">

            <br />

            <br />

          </p>


          <div className="code-container">
            <pre className="line-numbers">
              <code className="language-javascript">{code}</code>
            </pre>
          </div>
        </Section>
      </Main>
    </Layout>
  )
}

export default FirstPostTestPage
