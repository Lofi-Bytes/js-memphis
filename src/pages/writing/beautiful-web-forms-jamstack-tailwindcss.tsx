import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Alert from '../../components/alert'
import Banner from '../../components/banner'
import CodeContainer from '../../components/code-container'
import Layout from '../../components/layout'
import Main from '../../components/main'
import NextPrev from '../../components/next-prev'
import SEO from '../../components/seo'
import Section from '../../components/section'
import Tag from '../../components/tag'
import TextLink from '../../components/text-link'

import Prism from 'prismjs'


type PageProps = {
  location: Location
}

const install: string =
`# Using npm
npm install @tailwindcss/forms

# Using Yarn
yarn add @tailwindcss/forms`

const tailwindConfig: string =
`module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}`

const initialForm: string =
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

const styledForm: string =
`<form name="contact">
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
          className="block w-full pl-3 pr-10 mt-1 text-lg text-gray-600 bg-gray-200 border-0 border-l-4 border-purple-300 rounded-lg shadow-md focus:ring-0 focus:border-fuchsia-500"
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

const refactoredForm: string = `import React, { ReactNode } from 'react'

import { formatClassList } from '../../utils/utils'

import Button from '../../components/button'


const FIELD_BASE: string = \`
  bg-gray-200
  block
  border-0
  border-l-4
  focus:ring-0
  mt-1
  pl-3
  pr-10
  rounded-lg
  shadow-md
  text-gray-600
  text-lg
  w-full
\`

const FIELD: string = \`
  \${FIELD_BASE}
  border-purple-300
  focus:border-fuchsia-500
\`

const GRID: string = \`
  gap-4
  grid
  grid-cols-1
  mt-8
\`

const LABEL: string = \`
  text-gray-600
  text-sm
  tracking-wider
\`

const ContactForm = ({}: ReactNode) => {
  const formattedField: string = formatClassList(FIELD)
  const formattedLabel: string = formatClassList(LABEL)
  const formattedGrid: string = formatClassList(GRID)

  return (
    <form name="contact">
      <div className={formattedGrid}>
        <input type="hidden" name="form-contact" value="contact" />
        <label className="block">
          <span className={formattedLabel}>Name</span>
          <div className="relative">
            <input
              className={formattedField}
              aria-required="true"
              placeholder=""
              type="text"
              name="name"
            />
          </div>
        </label>
        <label className="block">
          <span className={formattedLabel}>Email</span>
          <div className="relative">
            <input
              className={formattedField}
              aria-required="true"
              type="email"
              name="email"
            />
          </div>
        </label>
        <label className="block">
          <span className={formattedLabel}>Message</span>
          <div className="relative">
            <textarea
              className={formattedField}
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
          disabled={false}
        >
          Send your message
        </Button>
      </div>
    </form>
  )
}

export default ContactForm
`

const buttonExport: string = `export { default } from './button'`

const BeautifulWebFormsJamstackTailwindCSSPage = ({
  location
}: PageProps) => {
  const postData = useStaticQuery(graphql`
    query BeautifulWebFormsJamstackTailwindCSSQuery {
      allPostsJson(
        filter: {
          title: {
            eq: "Beautiful web forms on the Jamstack"
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
        metaTitle="Beautiful web forms on the Jamstack with Tailwind CSS"
        metaDescription="Form elements are not always the easiest to style. @tailwindcss/forms solves this by prviding a basic reset."
        canonicalUrl="https://jillian.dev/writing/beautiful-web-forms-jamstack-tailwindcss"
      />
      <Banner
        align="left"
        title={title}
        subtitle={subtitle}
        date={date}
      />
      <Main>
        <Section background="opaque" className="mb-8 -mt-12">
          <div className="max-w-xs px-10 py-2 -ml-10 rounded shadow-lg bg-cyan-300 w-max sm:px-24 sm:-ml-24 sm:max-w-none">
            <h2 className="text-xl tracking-wide text-gray-800 sm:text-2xl">@tailwindcss/forms</h2>
          </div>
          <h3 className="mt-10 text-xl tracking-wide text-gray-700">Introduction</h3>
          <p className="mt-3 leading-relaxed tracking-wider text-gray-600">
            Form elements are not always the easiest to style. <TextLink
                to="https://github.com/tailwindlabs/tailwindcss-forms"
                external={true}
              >
                @tailwindcss/forms
              </TextLink> convieniently provides a basic reset for form styles that makes form elements easy to override with <TextLink
                to="https://tailwindcss.com/"
                external={true}
              >
                Tailwind CSS
              </TextLink> utility classes. @tailwindcss/forms is designed for Tailwind CSS v2.0 and replaces <TextLink to="https://github.com/tailwindlabs/tailwindcss-custom-forms" external={true}>tailwindcss-custom-forms</TextLink> which was designed to work with Tailwind CSS v1.0.
          </p>

          <h3 className="mt-10 text-xl tracking-wide text-gray-700">Getting Started</h3>
          <p className="mt-3 leading-relaxed tracking-wider text-gray-600">
            Starting with @tailwindcss/forms is fairly routine. Install the plugin:
          </p>
          <CodeContainer
            language="bash"
            lineNumbers={true}
            tag="zsh"
            tagBgColor="bg-gray-900"
            tagColor="text-white"
          >
            {install}
          </CodeContainer>
          <p className="mt-8 leading-relaxed tracking-wider text-gray-600">
            Then add the plugin to your <code className="language-bash">tailwind.config.js</code> file:
          </p>
          <CodeContainer
            language="js"
            lineNumbers={true}
            tag="JS"
            tagBgColor="#f7df1e"
            tagColor="text-gray-900"
          >
            {tailwindConfig}
          </CodeContainer>
          <h3 className="mt-10 text-xl tracking-wide text-gray-700">Usage</h3>
          <p className="mt-3 leading-relaxed tracking-wider text-gray-600">
            I found that the easiest way to get started is to look at the provided <TextLink to="https://tailwindcss-forms.vercel.app/" external={true}>live demo examples</TextLink>. For this post, we will recreate the contact form found on the homepage of <TextLink to="/" external={false}>jillian.dev</TextLink>. We will start by using dev tools to copy the underline-style form example and modify the fields as needed (also adjusting the HTML to be valid JSX/TSX):
          </p>
          <CodeContainer
            language="tsx"
            lineNumbers={true}
            tag="TSX"
            tagBgColor="#007ACC"
            tagColor="text-white"
          >
            {initialForm}
          </CodeContainer>
          <p className="mt-8 leading-relaxed tracking-wider text-gray-600">
            Which should display like this:
          </p>
          <div className="mx-auto md:w-10/12">
            <div className="px-8 py-4 mt-4 bg-white rounded shadow" style={{ backgroundColor: 'white' }}>
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
          <p className="mt-8 leading-relaxed tracking-wider text-gray-600">
            With a nice reset in place, now we can just add or remove any of the Tailwind CSS utility classes that we want in order to style the form to our liking:
          </p>
          <CodeContainer
            language="tsx"
            lineNumbers={true}
            tag="TSX"
            tagBgColor="#007ACC"
            tagColor="text-white"
          >
            {styledForm}
          </CodeContainer>
          <p className="mt-8 leading-relaxed tracking-wider text-gray-600">
            Note that on lines 6, 18, and 29 I preemptively changed the <code className="language-bash">div</code>'s to <code className="language-css">display: relative;</code> since we will be using those elements to position icons for visual feedback during form field validation in the next post. Of course I also added a button since that is an important part of any form 😊. And there we have it, a gorgeously styled and accessible contact form:
          </p>
          <div className="mx-auto md:w-10/12">
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
              <button
                className="outline-none focus:outline-none hover:outline-none active:outline-none overflow-hidden text-center tracking-wide transition block active:shadow-sm duration-200 ring-1 ring-offset-1 focus:ring-1 focus:ring-offset-1 hover:ring-1 hover:ring-offset-1 active:ring-1 active:ring-offset-1 px-6 py-2 rounded-full shadow-lg bg-purple-300 text-purple-900 font-medium ring-offset-purple-300 ring-purple-200 ring-opacity-75 focus:ring-offset-purple-700 focus:ring-purple-200 focus:ring-opacity-75 hover:ring-offset-purple-700 hover:ring-purple-200 hover:ring-opacity-75 active:ring-offset-purple-700 active:ring-purple-200 active:ring-opacity-75 transform hover:-translate-y-0.5 focus:-translate-y-0.5 active:translate-y-0.5 ease-in-out"
              >
                Send your message
              </button>
            </div>
          </div>
          <p className="mt-12 leading-relaxed tracking-wider text-gray-600">
            Lets refactor this a bit to deal with our unwieldy Tailwind CSS class names so that our <code className="language-bash">ContactForm</code> component should look as follows:
          </p>
          <CodeContainer
            language="tsx"
            lineNumbers={true}
            tag="TSX"
            tagBgColor="#007ACC"
            tagColor="text-white"
          >
            {refactoredForm}
          </CodeContainer>
          <p className="mt-8 leading-relaxed tracking-wider text-gray-600">
            For further understanding and an in-depth look that my approach to keeping components tidy while working with Tailwind CSS please see <TextLink to="/" external={false}>Tidy React-Typescript component design with Tailwind CSS</TextLink>.
          </p>
          <p className="mt-8 leading-relaxed tracking-wider text-gray-600">
            Above I have also abstracted the button into its own component, which keeps things DRY and further cleans up the TSX in the contact form component.
          </p>
          <Alert>
            Note the Button import. As a standard practice, I keep an <code className="language-bash">index.ts</code> file inside of all component subdirectories (including <code className="language-bash">contact-form</code>) which cleans up imports throughout the app:
          </Alert>
          <CodeContainer
            language="ts"
            lineNumbers={false}
            path="./src/components/button/index.ts"
            tag="TS"
            tagBgColor="#007ACC"
            tagColor="text-white"
          >
            {buttonExport}
          </CodeContainer>
          <p className="mt-8 leading-relaxed tracking-wider text-gray-600">
            Now would be a prudent opportunity to break parts of our form component into smaller subcomponents before we start adding a bunch of form validation logic. Otherwise our form component will become difficult to maintain. Including our button component, which we aren't going to cover in this post, we can abstract two more subcomponents from this form (within reason<sup>1</sup>): <code className="language-bash">TextInput</code> and <code className="language-bash">TextArea</code>.
          </p>
          <p className="mt-8 leading-relaxed tracking-wider text-gray-600">
            Next up, we will dive into using React Hook Form for client-side form field validation.
          </p>
          <p className="mt-8 text-xs leading-relaxed tracking-wider text-gray-600">
            <sup>1</sup>I'm not a fan of over-abstraction, ie. componentizing too much bloats a codebase and makes it just as difficult to follow as it would be if one hadn't broken it into components at all. Balance is important here and takes good judgement. Before breaking a piece into a component ask yourself if it will be beneficial to do so.
          </p>
          <NextPrev path={path} className="mt-10" />
        </Section>
        <Section background="opaque" className="mb-8">
          <h3 className="text-xl tracking-wide text-gray-700 ">Tags</h3>
          <div className="flex flex-wrap mt-4">
            {
              tags.map((tag, index) => {
                return (
                  <Tag
                    card={false}
                    key={`item-${index}`}
                    tagColor="purple"
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

export default BeautifulWebFormsJamstackTailwindCSSPage
