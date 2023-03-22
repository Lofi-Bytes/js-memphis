import * as React from 'react'

import { useForm } from 'react-hook-form'

import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

import { encode } from '../utils/utils'

import Avatar from '../components/avatar'
import Banner from '../components/banner/banner'
import Button from '../components/button'
// import ContactForm from '../components/contact-form'
import ErrorMessage from '../components/contact-form/error-message'
import Jumbotron from '../components/jumbotron'
import Layout from '../components/layout'
import Main from '../components/main'
import P from '../components/paragraph'
import Section from '../components/section'
import SEO from '../components/seo'
import SocialIconRow from '../components/social-icon-row'
import SuccessMessage from '../components/contact-form/success-message'
import TextLink from '../components/text-link'


type PageProps = {
  data: any,
  location: Location
}

const HomePage = ({
  data,
  location
}: PageProps) => {
  const {
    clearErrors,
    formState: {
      errors,
      isSubmitting,
      touchedFields
    },
    handleSubmit,
    register,
    reset
  } = useForm({
    mode: 'onBlur'
  })
  const [state, setState] = React.useState({})
  const [successMsg, setSuccessMsg] = React.useState(false)
  const [errorMsg, setErrorMsg] = React.useState(false)
  const handleChange = event => {setState({
    ...state,
    [event.target.name]: event.target.value
  })}
  const onSubmit = (data, event) => {
    event.preventDefault()
    data = JSON.stringify(data)
    const form = event.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        // 'form-name': form.getAttribute('name'),
        'form-name': 'contact',
        ...state,
      }),
    })
      .then(response => {
        setSuccessMsg(true)
        reset()
        // console.log(response)
      })
      .catch(error => {
        setErrorMsg(true)
        // console.log(error)
      })
  }

  const image = getImage(data.avatar)

  return (
    <>
      <Layout location={location}>
        <SEO
          metaTitle="Jillian S. Estrella"
          metaDescription="Design systems engineer"
          canonicalUrl="https://jillian.dev/"
        />
        <Jumbotron
          title={<span className="text-5xl leading-relaxed js md:text-6xl md:leading-loose lg:text-7xl lg:leading-relaxed">Jillian S. Estrella</span>}
          subtitle={
            <>
              <span className="hidden sm:inline-block">
                <i className="text-pink-200 fa-light fa-narwhal" aria-hidden="true" />&nbsp;&nbsp;
              </span>
              <span
                className="text-transparent bg-gradient-to-r bg-clip-text from-pink-200 via-fuchsia-200 to-blue-200"
                style={{color: 'transparent'}}
              >
                Bit-Casting Technomancer
              </span>
              <span className="hidden sm:inline-block">
                &nbsp;&nbsp;<i className="text-blue-200 fa-light fa-alien-monster" aria-hidden="true" />
              </span>
              <span className="block sm:hidden">
                <i className="fa-light fa-narwhal text-rose-300" aria-hidden="true" />&nbsp;&nbsp;<i className="text-teal-300 fa-light fa-alien-monster" aria-hidden="true" />
              </span>
            </>
          }
        />
        <Main>
          <Section background="opaque" className="mb-8 -mt-10">
            <Avatar
              alt="Jillian's avatar"
              src={image}
            />
            <i className="absolute text-6xl fa-light fa-stop text-cyan-300 -right-3 -top-10 sm:-right-6 sm:-top-10 sm:text-7xl lg:-right-14 lg:-top-8 lg:text-8xl transofrm rotate-12 transform-gpu" aria-hidden="true" />
            <i className="absolute text-5xl rotate-45 fa-light fa-triangle text-emerald-300 -left-2 top-52 sm:-left-4 sm:top-48 sm:text-6xl lg:-left-6 lg:top-36 lg:text-7xl transofrm transform-gpu" aria-hidden="true" />
            <h2 className="mt-10 text-2xl tracking-wide text-stone-700">Design systems and developer experience engineer
            {/* <br /><span className="text-xl text-stone-600">🏳️‍🌈 she/her 🏳️‍⚧️</span> */}
            </h2>
            <SocialIconRow className="mt-3" />
            <P className="mt-8">
              Hi there! Welcome to my creative space. I am a <TextLink
                to="https://uxdesign.cc/everything-you-need-to-know-about-design-systems-54b109851969"
                title=""
                outbound={true}
              >design systems</TextLink> and <TextLink
                to="https://www.helpnetsecurity.com/2021/07/16/developer-experience-engineer/"
                title=""
                outbound={true}
              >
                developer experience
              </TextLink> engineer. I am also a tech lead. I love building beautiful and accessible digital experiences. I am passionate about technology that advances social and environmental justice.
            </P>
            {/* <P className="mt-4">
              Please take a look around and be sure to check back often. This is my brand new website as of December 2020, and I will be adding new content regularly.
            </P> */}
            <div
              className="w-full mx-auto mt-8 md:w-3/4"
            >
              <Button
                action="secondary"
                className="w-full"
                disabled={false}
                role="link"
                title="Learn more about me"
                to="/about"
              >
                Learn more about me&nbsp;&nbsp;<i className="fa-regular fa-chevron-right" aria-hidden="true" />
              </Button>
            </div>
          </Section>

          <Section background="opaque">
            <Banner color="yellow">
              Say hello
            </Banner>
            <div className="mx-auto md:w-10/12">
              {/* <ContactForm /> */}
              {successMsg ? <SuccessMessage /> : null}
              {errorMsg ? <ErrorMessage /> : null}

              {!successMsg &&
                <form
                  name="contact"
                  method="post"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="grid grid-cols-1 gap-4 mt-8">
                    <input type="hidden" name="form-contact" value="contact" />
                    <label className="block">
                      <span className="text-sm tracking-wider text-stone-600">Name</span>
                      <div className="relative">
                        <input
                          {...register('name', {
                            required: true,
                            minLength: 2,
                            maxLength: 200
                          })}
                          aria-required="true"
                          className={
                            !JSON.stringify(touchedFields.name) // field is pristine
                            ?
                              "mt-1 block pl-3 pr-10 border-0 border-l-4 border-purple-300 focus:ring-0 focus:border-fuchsia-500 caret-fuchsia-500 bg-stone-200 rounded-lg text-stone-600 text-lg w-full shadow-md"
                            :
                              errors.name && errors.name.type === "required"
                                ?
                                  "mt-1 block pl-3 pr-10 border-0 border-l-4 border-red-300 focus:ring-0 focus:border-red-500 caret-red-500 bg-stone-200 rounded-lg text-stone-600 text-lg w-full shadow-md"
                                :
                                  errors.name && errors.name.type === "minLength"
                                    ?
                                      "mt-1 block pl-3 pr-10 border-0 border-l-4 border-red-300 focus:ring-0 focus:border-red-500 caret-red-500 bg-stone-200 rounded-lg text-stone-600 text-lg w-full shadow-md"
                                    :
                                      errors.name && errors.name.type === "maxLength"
                                        ?
                                          "mt-1 block pl-3 pr-10 border-0 border-l-4 border-red-300 focus:ring-0 focus:border-red-500 bg-stone-200 rounded-lg text-stone-600 text-lg w-full shadow-md"
                                        :
                                          "mt-1 block pl-3 pr-10 border-0 border-l-4 border-green-300 focus:ring-0 focus:border-green-500 caret-green-500 bg-stone-200 rounded-lg text-stone-600 text-lg w-full shadow-md"
                          }
                          onChange={handleChange}
                          placeholder=""
                          type="text"
                        />
                        {
                          !JSON.stringify(touchedFields.name) // field is pristine
                            ?
                              <div className="absolute w-4 right-4 top-1/4"></div>
                            :
                              errors.name && errors.name.type === "required"
                                ?
                                  <i className="absolute w-4 text-2xl text-red-600 fa-regular fa-times right-4 top-1/4" aria-hidden="true" />
                                :
                                  errors.name && errors.name.type === "minLength"
                                    ?
                                      <i className="absolute w-4 text-2xl text-red-600 fa-regular fa-times right-4 top-1/4" aria-hidden="true" />
                                    :
                                      errors.name && errors.name.type === "maxLength"
                                      ?
                                        <i className="absolute w-4 text-2xl text-red-600 fa-regular fa-times right-4 top-1/4" aria-hidden="true" />
                                      :
                                        <i className="absolute w-4 text-2xl text-green-600 fa-regular fa-check right-4 top-1/4" aria-hidden="true" />
                        }
                      </div>
                      <p
                        className={
                          (errors.name && errors.name.type === "required") ||
                          (errors.name && errors.name.type === "minLength") ||
                          (errors.name && errors.name.type === "maxLength")
                          ?
                            "text-sm error text-red-600 mt-1 opacity-100 transition-opacity duration-200 delay-75"
                          :
                            "text-sm error text-red-600 mt-1 opacity-0 transition-opacity duration-200 delay-75"
                        }
                        aria-hidden={
                          (errors.name && errors.name.type === "required") ||
                          (errors.name && errors.name.type === "minLength") ||
                          (errors.name && errors.name.type === "maxLength")
                          ?
                            "false"
                          :
                            "true"
                        }
                        aria-live={
                          (errors.name && errors.name.type === "required") ||
                          (errors.name && errors.name.type === "minLength") ||
                          (errors.name && errors.name.type === "maxLength")
                          ?
                            "polite"
                          :
                            "off"
                        }
                      >
                        {
                          errors.name && errors.name.type === "required"
                            ?
                              <>Please enter your name.</>
                            :
                              errors.name && errors.name.type === "minLength"
                                ?
                                  <>Your name must be at least 2 characters.</>
                                :
                                  errors.name && errors.name.type === "maxLength"
                                    ?
                                      <>Your name must be less than 100 characters.</>
                                    :
                                      <>&nbsp;</>
                        }
                      </p>
                    </label>
                    <label className="block">
                      <span className="text-sm tracking-wider text-stone-600">Email</span>
                      <div className="relative">
                        <input
                          {...register('email', {
                            required: true,
                            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                          })}
                          aria-required="true"
                          className={
                            !JSON.stringify(touchedFields.email) // field is pristine
                            ?
                              "mt-1 block pl-3 pr-10 border-0 border-l-4 border-purple-300 focus:ring-0 focus:border-fuchsia-500 caret-fuchsia-500 bg-stone-200 rounded-lg text-stone-600 text-lg w-full shadow-md"
                            :
                              errors.email && errors.email.type === "required"
                                ?
                                  "mt-1 block pl-3 pr-10 border-0 border-l-4 border-red-300 focus:ring-0 focus:border-red-500 caret-red-500 bg-stone-200 rounded-lg text-stone-600 text-lg w-full shadow-md"
                                :
                                  errors.email && errors.email.type === "pattern"
                                    ?
                                      "mt-1 block pl-3 pr-10 border-0 border-l-4 border-red-300 focus:ring-0 focus:border-red-500 caret-red-500 bg-stone-200 rounded-lg text-stone-600 text-lg w-full shadow-md"
                                    :
                                      "mt-1 block pl-3 pr-10 border-0 border-l-4 border-green-300 focus:ring-0 focus:border-green-500 caret-green-500 bg-stone-200 rounded-lg text-stone-600 text-lg w-full shadow-md"
                          }
                          onChange={handleChange}
                          type="email"
                        />
                        {
                          !JSON.stringify(touchedFields.email) // field is pristine
                            ?
                              <div className="w-4"></div>
                            :
                              errors.email && errors.email.type === "required"
                                ?
                                  <i className="absolute w-4 text-2xl text-red-600 fa-regular fa-times right-4 top-1/4" aria-hidden="true" />
                                :
                                  errors.email && errors.email.type === "pattern"
                                    ?
                                      <i className="absolute w-4 text-2xl text-red-600 fa-regular fa-times right-4 top-1/4" aria-hidden="true" />
                                    :
                                      <i className="absolute w-4 text-2xl text-green-600 fa-regular fa-check right-4 top-1/4" aria-hidden="true" />
                        }
                      </div>
                      <p
                        className={
                          (errors.email && errors.email.type === "required") ||
                          (errors.email && errors.email.type === "minLength")
                          ?
                            "text-sm error text-red-600 mt-1 opacity-100 transition-opacity duration-200 delay-75"
                          :
                            "text-sm error text-red-600 mt-1 opacity-0 transition-opacity duration-200 delay-75"
                        }
                        aria-hidden={
                          (errors.email && errors.email.type === "required") ||
                          (errors.email && errors.email.type === "pattern")
                          ?
                            "false"
                          :
                            "true"
                        }
                        aria-live={
                          (errors.email && errors.email.type === "required") ||
                          (errors.email && errors.email.type === "pattern")
                          ?
                            "polite"
                          :
                            "off"
                        }
                      >
                        {
                          errors.email && errors.email.type === "required"
                            ?
                              <>Please enter your email.</>
                            :
                              errors.email && errors.email.type === "pattern"
                                ?
                                  <>Please enter a valid email address.</>
                                :
                                  <>&nbsp;</>
                        }
                      </p>
                    </label>
                    <label className="block">
                      <span className="text-sm tracking-wider text-stone-600">Message</span>
                      <div className="relative">
                        <textarea
                          {...register('message', {
                            required: true,
                            minLength: 15,
                            maxLength: 3000
                          })}
                          aria-required="true"
                          className={
                            !JSON.stringify(touchedFields.message) // field is pristine
                            ?
                              "mt-1 block flex-grow pl-3 pr-10 border-0 border-l-4 border-purple-300 focus:ring-0 focus:border-fuchsia-500 caret-fuchsia-500 bg-stone-200 rounded-lg text-stone-600 text-lg w-full shadow-md"
                            :
                              errors.message && errors.message.type === "required"
                                ?
                                  "mt-1 block flex-grow pl-3 pr-10 border-0 border-l-4 border-red-300 focus:ring-0 focus:border-red-500 caret-red-500 bg-stone-200 rounded-lg text-stone-600 text-lg w-full shadow-md"
                                :
                                  errors.message && errors.message.type === "minLength"
                                    ?
                                      "mt-1 block flex-grow pl-3 pr-10 border-0 border-l-4 border-red-300 focus:ring-0 focus:border-red-500 caret-red-500 bg-stone-200 rounded-lg text-stone-600 text-lg w-full shadow-md"
                                    :
                                      errors.message && errors.message.type === "maxLength"
                                      ?
                                        "mt-1 block flex-grow pl-3 pr-10 border-0 border-l-4 border-red-300 focus:ring-0 focus:border-red-500 caret-red-500 bg-stone-200 rounded-lg text-stone-600 text-lg w-full shadow-md"
                                      :
                                        "mt-1 block flex-grow pl-3 pr-10 border-0 border-l-4 border-green-300 focus:ring-0 focus:border-green-500 caret-green-500 bg-stone-200 rounded-lg text-stone-600 text-lg w-full shadow-md"
                          }
                          onChange={handleChange}
                          rows={4}
                        />
                        {
                          !JSON.stringify(touchedFields.message) // field is pristine
                            ?
                              <div className="w-4"></div>
                            :
                              errors.message && errors.message.type === "required"
                                ?
                                  <i className="absolute w-4 text-2xl text-red-600 fa-regular fa-times right-4 top-2" aria-hidden="true" />
                                :
                                  errors.message && errors.message.type === "minLength"
                                    ?
                                      <i className="absolute w-4 text-2xl text-red-600 fa-regular fa-times right-4 top-2" aria-hidden="true" />
                                    :
                                      errors.message && errors.message.type === "maxLength"
                                      ?
                                        <i className="absolute w-4 text-2xl text-red-600 fa-regular fa-times right-4 top-2" aria-hidden="true" />
                                      :
                                        <i className="absolute w-4 text-2xl text-green-600 fa-regular fa-check right-4 top-2" aria-hidden="true" />
                        }
                      </div>
                      <p
                        className={
                          (errors.message && errors.message.type === "required") ||
                          (errors.message && errors.message.type === "minLength") ||
                          (errors.message && errors.message.type === "maxLength")
                          ?
                            "text-sm error text-red-600 mt-1 opacity-100 transition-opacity duration-200 delay-75"
                          :
                            "text-sm error text-red-600 mt-1 opacity-0 transition-opacity duration-200 delay-75"
                        }
                        aria-hidden={
                          (errors.message && errors.message.type === "required") ||
                          (errors.message && errors.message.type === "minLength") ||
                          (errors.message && errors.message.type === "maxLength")
                          ?
                            "false"
                          :
                            "true"
                        }
                        aria-live={
                          (errors.message && errors.message.type === "required") ||
                          (errors.message && errors.message.type === "minLength") ||
                          (errors.message && errors.message.type === "maxLength")
                          ?
                            "polite"
                          :
                            "off"
                        }
                      >
                        {
                          errors.message && errors.message.type === "required"
                            ?
                              <>Please enter a message.</>
                            :
                              errors.message && errors.message.type === "minLength"
                                ?
                                  <>Your message must be at least 15 characters.</>
                                :
                                  errors.message && errors.message.type === "maxLength"
                                    ?
                                      <>Your message must be less than 3000 characters.</>
                                    :
                                      <>&nbsp;</>
                        }
                      </p>
                    </label>
                    <Button
                      action="primary"
                      className="mt-4"
                      role="button"
                      title="Submit"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Get in touch
                    </Button>
                  </div>
                </form>
              }
            </div>
          </Section>
        </Main>
      </Layout>
    </>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
  avatar: file(relativePath: {eq: "IMG_3482.JPG"}) {
    childImageSharp {
      gatsbyImageData(
        width: 300
        quality: 100
        placeholder: BLURRED
        formats: [AUTO, WEBP, AVIF]
      )
    }
  }
}
`
