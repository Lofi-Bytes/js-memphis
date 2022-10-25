import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { formatDate } from '../../utils/utils'

import Alert from '../../components/alert'
import Banner from '../../components/banner/banner'
import Button from '../../components/button'
import CodeContainer from '../../components/code-container'
import H3 from '../../components/content-heading'
import Jumbotron from '../../components/jumbotron'
import Layout from '../../components/layout'
import Main from '../../components/main'
import NextPrev from '../../components/next-prev'
import P from '../../components/paragraph'
import Section from '../../components/section'
import SEO from '../../components/seo'
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
      <span className="text-stone-700">Name</span>
      <input type="text" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-stone-200 focus:ring-0 focus:border-black" placeholder="">
    </label>
    <label className="block">
      <span className="text-stone-700">Email</span>
      <input type="email" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-stone-200 focus:ring-0 focus:border-black" placeholder="">
    </label>
    <label className="block">
      <span className="text-stone-700">Message</span>
      <textarea className="mt-0 block w-full px-0.5 border-0 border-b-2 border-stone-200 focus:ring-0 focus:border-black" rows={4}></textarea>
    </label>
  </div>
</div>`

const styledForm: string =
`<form name="contact">
  <div className="grid grid-cols-1 gap-4 mt-8">
    <label className="block">
      <span className="text-sm tracking-wider text-stone-600">Name</span>
      <div className="relative">
        <input
          className="block w-full pl-3 pr-10 mt-1 text-lg border-0 border-l-4 border-purple-300 rounded-lg shadow-md text-stone-600 bg-stone-200 focus:ring-0 focus:border-fuchsia-500"
          aria-required="true"
          placeholder=""
          type="text"
          name="name"
        />
      </div>
    </label>
    <label className="block">
      <span className="text-sm tracking-wider text-stone-600">Email</span>
      <div className="relative">
        <input
          className="block w-full pl-3 pr-10 mt-1 text-lg border-0 border-l-4 border-purple-300 rounded-lg shadow-md text-stone-600 bg-stone-200 focus:ring-0 focus:border-fuchsia-500"
          aria-required="true"
          type="email"
          name="email"
        />
      </div>
    </label>
    <label className="block">
      <span className="text-sm tracking-wider text-stone-600">Message</span>
      <div className="relative">
        <textarea
          className="block w-full pl-3 pr-10 mt-1 text-lg border-0 border-l-4 border-purple-300 rounded-lg shadow-md text-stone-600 bg-stone-200 focus:ring-0 focus:border-fuchsia-500"
          aria-required="true"
          rows={4}
          name="message"
        />
      </div>
    </label>
    <button
      className="outline-none focus:outline-none hover:outline-none active:outline-none overflow-hidden text-center tracking-wide transition block active:shadow-sm duration-200 ring-1 ring-offset-1 focus:ring-1 focus:ring-offset-1 hover:ring-1 hover:ring-offset-1 active:ring-1 active:ring-offset-1 px-6 py-2 rounded-full shadow-lg bg-purple-300 text-purple-900 font-medium ring-offset-purple-300 ring-purple-200 ring-opacity-75 focus:ring-offset-purple-700 focus:ring-purple-200 focus:ring-opacity-75 hover:ring-offset-purple-700 hover:ring-purple-200 hover:ring-opacity-75 active:ring-offset-purple-700 active:ring-purple-200 active:ring-opacity-75 transform hover:-translate-y-0.5 focus:-translate-y-0.5 active:translate-y-0.5 ease-in-out"
      role="button"
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
  bg-stone-200
  block
  border-0
  border-l-4
  focus:ring-0
  mt-1
  pl-3
  pr-10
  rounded-lg
  shadow-md
  text-stone-600
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
  text-stone-600
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
          role="button"
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

const textInput: string = `import React from 'react'

import { formatClassList } from '../../utils/utils'


export type TextInputProps = {
  label: string
}

const FIELD_BASE: string = \`
  bg-stone-200
  block
  border-0
  border-l-4
  focus:ring-0
  mt-1
  pl-3
  pr-10
  rounded-lg
  shadow-md
  text-stone-600
  text-lg
  w-full
\`

const FIELD: string = \`
  \${FIELD_BASE}
  border-purple-300
  focus:border-fuchsia-500
\`

const LABEL: string = \`
  text-stone-600
  text-sm
  tracking-wider
\`

const TextInput = ({
  label
}: TextInputProps) => {
  label = label.toLowerCase()

  const formattedField: string = formatClassList(FIELD)
  const formattedLabel: string = formatClassList(LABEL)

  return (
    <label className="block">
      <span className={formattedLabel}>{label.charAt(0).toUpperCase() + label.slice(1)}</span>
      <div className="relative">
        <input
          className={formattedField}
          aria-required="true"
          placeholder=""
          type="text"
          name={label}
        />
      </div>
    </label>
  )
}

export default TextInput`

const textArea: string = `import React from 'react'

import { formatClassList } from '../../utils/utils'


export type TextAreaProps = {
  label: string
}

const FIELD_BASE: string = \`
  bg-stone-200
  block
  border-0
  border-l-4
  focus:ring-0
  mt-1
  pl-3
  pr-10
  rounded-lg
  shadow-md
  text-stone-600
  text-lg
  w-full
\`

const FIELD: string = \`
  \${FIELD_BASE}
  border-purple-300
  focus:border-fuchsia-500
\`

const LABEL: string = \`
  text-stone-600
  text-sm
  tracking-wider
\`

const TextInput = ({
  label
}: TextAreaProps) => {
  label = label.toLowerCase()

  const formattedField: string = formatClassList(FIELD)
  const formattedLabel: string = formatClassList(LABEL)

  return (
    <label className="block">
      <span className={formattedLabel}>{label.charAt(0).toUpperCase() + label.slice(1)}</span>
      <div className="relative">
        <textarea
          className={formattedField}
          aria-required="true"
          rows={4}
          name={label}
        />
      </div>
    </label>
  )
}

export default TextInput`

const grid: string = `import React, { ReactNode } from 'react'

import { formatClassList } from '../../utils/utils'


export type GridProps = {
  children: ReactNode
}

const GRID: string = \`
  gap-4
  grid
  grid-cols-1
  mt-8
\`

const Grid = ({children}: GridProps) => {
  const formattedGrid: string = formatClassList(GRID)

  return(
    <div className={formattedGrid}>{children}</div>
  )
}

export default Grid
`

const refactoredFormWithComponents: string = `import React, { ReactNode } from 'react'

import { formatClassList } from '../../utils/utils'

import Button from '../../components/button'

import Grid from './grid'
import TextArea from './text-area'
import TextInput from './text-input'


const ContactForm = ({}: ReactNode) => {
  return (
    <form name="contact">
      <Grid>
        <TextInput
          label="name"
        />
        <TextInput
          label="email"
        />
        <TextArea
          label="message"
        />"
        <Button
          action="primary"
          className="mt-4"
          role="button"
          title="Submit"
          type="submit"
          disabled={false}
        >
          Send your message
        </Button>
      </Grid>
    </form>
  )
}

export default ContactForm
`

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

  const formattedDate = formatDate(date)

  React.useEffect(() => {
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
      <Jumbotron
        align="left"
        title={title}
        subtitle={subtitle}
        date={formattedDate}
      />
      <Main>
        <Section background="opaque" className="mb-8 -mt-12">
          <Banner color="cyan">
            @tailwindcss/forms
          </Banner>

          <Button
            action="tertiary"
            disabled={false}
            role="link"
            title="Back to article list"
            className="mt-10 w-max"
            to="/writing"
          >
            <i className="fas fa-arrow-left" />&nbsp;&nbsp;Back to article list
          </Button>

          <H3 className="mt-10">Introduction</H3>
          <P className="mt-3">
            Form elements are not always the easiest to style. <TextLink
                to="https://github.com/tailwindlabs/tailwindcss-forms"
                title=""
                outbound={true}
              >
                @tailwindcss/forms
              </TextLink> convieniently provides a basic reset for form styles that makes form elements easy to override with <TextLink
                to="https://tailwindcss.com/"
                title=""
                outbound={true}
              >
                Tailwind CSS
              </TextLink> utility classes. @tailwindcss/forms is designed for Tailwind CSS v2.0 and replaces <TextLink to="https://github.com/tailwindlabs/tailwindcss-custom-forms" title="" outbound={true}>tailwindcss-custom-forms</TextLink> which was designed to work with Tailwind CSS v1.0.
          </P>

          <H3 className="mt-10">Getting Started</H3>
          <P className="mt-3">
            Starting with @tailwindcss/forms is fairly routine. Install the plugin:
          </P>
          <CodeContainer
            language="bash"
            lineNumbers={true}
            tag="zsh"
            tagBgColor="bg-stone-900"
            tagColor="text-stone-50"
          >
            {install}
          </CodeContainer>
          <P className="mt-8">
            Then add the plugin to your <code className="language-bash">tailwind.config.js</code> file:
          </P>
          <CodeContainer
            language="js"
            lineNumbers={true}
            tag="JS"
            tagBgColor="#f7df1e"
            tagColor="text-stone-900"
          >
            {tailwindConfig}
          </CodeContainer>
          <H3 className="mt-10">Usage</H3>
          <P className="mt-3">
            I found that the easiest way to get started is to look at the provided <TextLink to="https://tailwindcss-forms.vercel.app/" title="" outbound={true}>live demo examples</TextLink>. For this post, we will recreate the contact form found on the homepage of <TextLink to="/" title="" outbound={false}>jillian.dev</TextLink>. We will start by using dev tools to copy the underline-style form example and modify the fields as needed (also adjusting the HTML to be valid JSX/TSX):
          </P>
          <CodeContainer
            language="tsx"
            lineNumbers={true}
            tag="TSX"
            tagBgColor="#007ACC"
            tagColor="text-white"
          >
            {initialForm}
          </CodeContainer>
          <P className="mt-8">
            Which should display like this:
          </P>
          <div className="mx-auto md:w-10/12">
            <div className="px-8 py-4 mt-4 bg-white rounded shadow" style={{ backgroundColor: 'white' }}>
              <div className="grid grid-cols-1 gap-6">
                <label className="block">
                  <span className="text-stone-700">Name</span>
                  <input type="text" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-stone-200 focus:ring-0 focus:border-black" placeholder="" />
                </label>
                <label className="block">
                  <span className="text-stone-700">Email</span>
                  <input type="email" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-stone-200 focus:ring-0 focus:border-black" placeholder="" />
                </label>
                <label className="block">
                  <span className="text-stone-700">Message</span>
                  <textarea className="mt-0 block w-full px-0.5 border-0 border-b-2 border-stone-200 focus:ring-0 focus:border-black" rows={4}></textarea>
                </label>
              </div>
            </div>
          </div>
          <P className="mt-8">
            With a nice reset in place, now we can just add or remove any of the Tailwind CSS utility classes that we want in order to style the form to our liking:
          </P>
          <CodeContainer
            language="tsx"
            lineNumbers={true}
            tag="TSX"
            tagBgColor="#007ACC"
            tagColor="text-white"
          >
            {styledForm}
          </CodeContainer>
          <P className="mt-8">
            Note that on lines 6, 18, and 29 I preemptively changed the <code className="language-bash">div</code>'s to <code className="language-css">display: relative;</code> since we will be using those elements to position icons for visual feedback during form field validation in the next post. Of course I also added a button since that is an important part of any form 😊. And there we have it, a gorgeously styled and accessible contact form:
          </P>
          <div className="mx-auto md:w-10/12">
            <div className="grid grid-cols-1 gap-4 mt-8">
              <label className="block">
                <span className="text-sm tracking-wider text-stone-600">Name</span>
                <div className="relative">
                  <input
                    className="block w-full pl-3 pr-10 mt-1 text-lg border-0 border-l-4 border-purple-300 rounded-lg shadow-md text-stone-600 bg-stone-200 focus:ring-0 focus:border-fuchsia-500"
                    aria-required="true"
                    placeholder=""
                    type="text"
                    name="name"
                  />
                </div>
              </label>
              <label className="block">
                <span className="text-sm tracking-wider text-stone-600">Email</span>
                <div className="relative">
                  <input
                    className="block w-full pl-3 pr-10 mt-1 text-lg border-0 border-l-4 border-purple-300 rounded-lg shadow-md text-stone-600 bg-stone-200 focus:ring-0 focus:border-fuchsia-500"
                    aria-required="true"
                    type="email"
                    name="email"
                  />
                </div>
              </label>
              <label className="block">
                <span className="text-sm tracking-wider text-stone-600">Message</span>
                <div className="relative">
                  <textarea
                    className="flex-grow block w-full pl-3 pr-10 mt-1 text-lg border-0 border-l-4 border-purple-300 rounded-lg shadow-md text-stone-600 bg-stone-200 focus:ring-0 focus:border-fuchsia-500"
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
          <P className="mt-12">
            Lets refactor this a bit to deal with our unwieldy Tailwind CSS class names so that our <code className="language-bash">ContactForm</code> component should look as follows:
          </P>
          <CodeContainer
            language="tsx"
            lineNumbers={true}
            tag="TSX"
            tagBgColor="#007ACC"
            tagColor="text-white"
          >
            {refactoredForm}
          </CodeContainer>
          <P className="mt-8">
            For further understanding and an in-depth look that my approach to keeping components tidy while working with Tailwind CSS please see <TextLink to="/" title="" outbound={false}>Tidy React-Typescript component design with Tailwind CSS</TextLink>.
          </P>
          <P className="mt-8">
            Above I have also abstracted the button into its own component, which keeps things DRY and further cleans up the TSX in the contact form component.
          </P>
          <Alert className="mt-8">
            Note the Button import. As a standard practice, I keep an <code className="language-bash">index.ts</code> file inside of all component subdirectories (including <code className="language-bash">contact-form</code>) which cleans up imports throughout the app.
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
          <P className="mt-8">
            Now would be a prudent opportunity to break parts of our form component into smaller subcomponents before we start adding a bunch of form validation logic. Otherwise our form component will become difficult to maintain. Including our button component, which we aren't going to cover in this post, we can abstract two more subcomponents from this form (within reason<sup>1</sup>): <code className="language-bash">TextInput</code> and <code className="language-bash">TextArea</code>.
          </P>
          <CodeContainer
            language="ts"
            lineNumbers={true}
            path="./text-input.tsx"
            tag="TS"
            tagBgColor="#007ACC"
            tagColor="text-white"
          >
            {textInput}
          </CodeContainer>
          <CodeContainer
            language="ts"
            lineNumbers={true}
            path="./text-area.tsx"
            tag="TS"
            tagBgColor="#007ACC"
            tagColor="text-white"
          >
            {textArea}
          </CodeContainer>
          <P className="mt-8">
            And for completeness, lets turn our grid into a component as well.
          </P>
          <CodeContainer
            language="ts"
            lineNumbers={true}
            path="./grid.tsx"
            tag="TS"
            tagBgColor="#007ACC"
            tagColor="text-white"
          >
            {grid}
          </CodeContainer>
          <P className="mt-8">
            So our form component is now in good shape for managing the added complexity of React Hook Form.
          </P>
          <CodeContainer
            language="ts"
            lineNumbers={true}
            tag="TS"
            tagBgColor="#007ACC"
            tagColor="text-white"
          >
            {refactoredFormWithComponents}
          </CodeContainer>
          <P className="mt-8">
            Next up, we will dive into adding React Hook Form client-side form field validation to this form.
          </P>
          <P className="mt-8 text-xs">
            <sup>1</sup>I'm not a fan of over-abstraction, ie. componentizing too much bloats a codebase and makes it just as difficult to follow as it would be if one hadn't broken it into components at all. Balance is important here and takes good judgement. Before breaking a piece into a component ask yourself if it will be beneficial to do so.
          </P>
          <NextPrev path={path} className="mt-10" />
        </Section>
        <Section background="opaque" className="mb-8">
          <H3>Tags</H3>
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
