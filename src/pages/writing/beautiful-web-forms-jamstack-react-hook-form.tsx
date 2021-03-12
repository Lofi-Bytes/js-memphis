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
import CodeContainer from '../../components/code-container/code-container'


const install: string =
`# Using npm
npm install react-hook-form

# Using Yarn
yarn add react-hook-form`

const styledForm: string =
`import React, { FC, ReactNode, useState } from 'react'

import Button from '../button'


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

const buttonExport: string = `export { default } from './button'`

const importUseForm: string = `import { useForm } from 'react-hook-form'`

const setUp: string = `import React, { FC, ReactNode, useState } from 'react'

import Button from '../button'


export type ContactFormProps = {
  name: string,
  email: string,
  message: string
}

const ContactForm: FC<ReactNode> = ({}: ReactNode) => {
  const {
    register,
    handleSubmit,
    formState,
    errors,
    reset
  } = useForm<ContactFormProps>({
    mode: 'onBlur'
  })
  const [state, setState] = React.useState({})
  const [successMsg, setSuccessMsg] = useState(false)
  const [errorMsg, setErrorMsg] = useState(false)
  const handleChange = e => {setState({
    ...state,
    [e.target.name]: e.target.value
  })}
  const onSubmit = (data, e) => {
    e.preventDefault()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        ...state,
      }),
    })
      .then(response => {
        setSuccessMsg(true)
        reset()
      })
      .catch(error => {
        setErrorMsg(true)
      })
  }
  return (
  ...`

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
        <Section background="transparent" className="mb-8 -mt-12">
          <div className="max-w-xs px-10 py-2 -ml-10 bg-yellow-300 rounded shadow-lg w-max sm:px-24 sm:-ml-24 sm:max-w-none">
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
          <CodeContainer
            language="bash"
            tag="zsh"
            tagBgColor="bg-gray-900"
            tagColor="text-white"
          >
            {install}
          </CodeContainer>
          <p className="mt-3 leading-relaxed tracking-wider text-gray-600">
            Now we are ready to start using it in our project.
          </p>
          <h3 className="mt-10 text-xl tracking-wide text-gray-700">Usage</h3>
          <p className="mt-3 leading-relaxed tracking-wider text-gray-600">
            Starting with a basic react arrow function component (of type ReactNode), which renders the Tailwind CSS-styled form that we created previously:
          </p>
          <CodeContainer
            language="tsx"
            path="./src/components/contact-form/contact-form.tsx"
            tag="TSX"
            tagBgColor="#007ACC"
            tagColor="text-white"
          >
            {styledForm}
          </CodeContainer>
          <p className="mt-8 leading-relaxed tracking-wider text-gray-600">
            Above I have abstracted the button into its own component which keeps things dry and cleans up the TSX in the contact form component. {/* Please see ____ for tips on component design with TailwindCSS. */}
          </p>
          <Alert>
            Note the Button import. As a standard practice, I keep an <code className="language-bash">index.ts</code> file inside of all component subdirectories (including <code className="language-bash">contact-form</code>) which cleans up imports throughout the app:
          </Alert>
          <CodeContainer
            language="ts"
            path="./src/components/button/index.ts"
            tag="TS"
            tagBgColor="#007ACC"
            tagColor="text-white"
          >
            {buttonExport}
          </CodeContainer>
          <p className="mt-8 leading-relaxed tracking-wider text-gray-600">
            The first thing we want to do to get started is import the <code className="language-bash">useForm</code> hook:
          </p>
          <CodeContainer
            language="ts"
            tag="TS"
            tagBgColor="#007ACC"
            tagColor="text-white"
          >
            {importUseForm}
          </CodeContainer>
          <p className="mt-8 leading-relaxed tracking-wider text-gray-600">
            Now we are going to set up several React Hook Form methods that we will use. <code className="language-bash">useForm</code> takes <TextLink to="https://react-hook-form.com/api#useForm" external={true}>optional arguments</TextLink> and we define it to be of type <code className="language-bash">ContactFormProps</code>. We will set React Hook Form's <code className="language-bash">mode</code> argument to fire validation on blur. In addition, we will be storing information about the forms state. Finally we set up our submit handler, which uses JavaScripts <TextLink to="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" external={true}>Fetch API</TextLink> to submit our form to <TextLink to="https://www.netlify.com/products/forms/" external={true}>Netlify Forms</TextLink>. Note that we use the <code className="language-bash">reset</code> method in our submit handler to clear the form when the form has been submitted successfully.
          </p>
          <CodeContainer
            language="ts"
            tag="TS"
            tagBgColor="#007ACC"
            tagColor="text-white"
          >
            {setUp}
          </CodeContainer>
          <Alert>
            <p>
              Netlify sets up the form feature during your websites <strong><em>build time</em></strong>. Netlify's bots <em>must</em> be able to detect your form in your site's prerendered HTML. A common frustration that I have seen folx run into is when the form is "hidden" from Netlify's bots due to some abstraction, usually because it is rendered at <strong><em>run time</em></strong> using JavaScript, such as building the form as a React component like we are doing here! The work-around is to be sure you have this form rendered out as HTML somewhere oh your site.
            </p>
            <p className="mt-8">
              I usually accomplish this by building this same form into its own <TextLink to="/contact" external={false}>contact</TextLink> page/route. Yes, this does result in duplicated code which isn't terribly DRY, but in this case it is necessary. Since I use the contact component on many other pages, I don't find it necessary to directly link to a dedicated "contact" route anywhere, but it does exist.
            </p>
          </Alert>
          <NextPrev path={path} className="mt-10" />
        </Section>
        <Section background="transparent" className="mb-8">
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

export default BeautifulWebFormsJamstackReactHookFormPage
