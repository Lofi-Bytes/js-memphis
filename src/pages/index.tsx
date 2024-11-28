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
  data: any
  location: Location
}

const HomePage = ({ data, location }: PageProps) => {
  const {
    clearErrors,
    formState: { errors, isSubmitting, touchedFields },
    handleSubmit,
    register,
    reset
  } = useForm({
    mode: 'onBlur'
  })
  const [state, setState] = React.useState({})
  const [successMsg, setSuccessMsg] = React.useState(false)
  const [errorMsg, setErrorMsg] = React.useState(false)
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }
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
        ...state
      })
    })
      .then((response) => {
        setSuccessMsg(true)
        reset()
        // console.log(response)
      })
      .catch((error) => {
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
          metaDescription="Software Engineering Manager, Design Systems, Developer Experience, and Accessibility"
          canonicalUrl="https://jillian.dev/"
        />
        <Jumbotron
          title={
            <span className="js text-5xl leading-relaxed md:text-6xl md:leading-loose lg:text-7xl lg:leading-relaxed">
              Jillian S. Estrella
            </span>
          }
          // subtitle={
          //   <>
          //     <span className="hidden sm:inline-block">
          //       <i
          //         className="fa-light fa-narwhal text-pink-200"
          //         aria-hidden="true"
          //       />
          //       &nbsp;&nbsp;
          //     </span>
          //     <span
          //       className="bg-gradient-to-r from-pink-200 via-fuchsia-200 to-blue-200 bg-clip-text text-transparent"
          //       style={{ color: 'transparent' }}
          //     >
          //       Bit-Casting Technomancer
          //     </span>
          //     <span className="hidden sm:inline-block">
          //       &nbsp;&nbsp;
          //       <i
          //         className="fa-light fa-alien-monster text-blue-200"
          //         aria-hidden="true"
          //       />
          //     </span>
          //     <span className="block sm:hidden">
          //       <i
          //         className="fa-light fa-narwhal text-rose-300"
          //         aria-hidden="true"
          //       />
          //       &nbsp;&nbsp;
          //       <i
          //         className="fa-light fa-alien-monster text-teal-300"
          //         aria-hidden="true"
          //       />
          //     </span>
          //   </>
          // }
        />
        <Main>
          <Section
            background="opaque"
            className="-mt-10 mb-8"
          >
            <Avatar
              alt="Jillian's avatar"
              src={image}
            />
            <i
              className="fa-light fa-stop transofrm absolute -right-3 -top-10 rotate-12 transform-gpu text-6xl text-cyan-300 sm:-right-6 sm:-top-10 sm:text-7xl lg:-right-14 lg:-top-8 lg:text-8xl"
              aria-hidden="true"
            />
            <i
              className="fa-light fa-triangle transofrm absolute -left-2 top-52 rotate-45 transform-gpu text-5xl text-emerald-300 sm:-left-4 sm:top-48 sm:text-6xl lg:-left-6 lg:top-36 lg:text-7xl"
              aria-hidden="true"
            />
            <h2 className="mt-10 text-2xl tracking-wide text-stone-700">
              Software Engineering Manager
              <br />
              <span className="text-xl text-stone-600">
                Design Systems, Developer Experience, and Accessibility
              </span>
            </h2>
            <SocialIconRow className="mt-3" />
            <P className="mt-8">
              Hi, I'm Jillian—a Software Engineering Manager specializing
              in design systems, developer experience, and accessibility. I
              lead teams that create beautiful, scalable, and inclusive
              solutions, empowering developers and driving meaningful
              impact across organizations.
            </P>
            <P className="mt-8">
              With over 14 years of experience in software engineering and
              scientific computing, including over seven years managing
              teams, I've overseen tools and systems used by hundreds of
              projects. I also lead accessibility engineering efforts,
              ensuring inclusivity is at the heart of everything we build.
            </P>
            <P className="mt-8">
              Outside of work, I'm a creator of immersive and interactive
              LED art 🔥)'(🔥, a physicist, a devoted dog mom 🐶, and a
              conservationist 🌿. As a queer, trans woman, I'm passionate
              about advocating for equity and inclusion in tech and beyond.
              ✊🏾🏳️‍⚧️🌈
            </P>
            <P className="mt-8">
              Feel free to connect—I'm always happy to collaborate or chat
              about developer experience, leadership, or creative projects!
            </P>
            <div className="mx-auto mt-8 w-full md:w-3/4">
              {/* <Button
                action="secondary"
                className="w-full"
                disabled={false}
                role="link"
                title="Learn more about me"
                to="/about"
              >
                Learn more about my work&nbsp;&nbsp;
                <i
                  className="fa-regular fa-chevron-right"
                  aria-hidden="true"
                />
              </Button> */}
            </div>
          </Section>

          <Section background="opaque">
            <Banner color="yellow">Say hello</Banner>
            <div className="mx-auto md:w-10/12">
              {/* <ContactForm /> */}
              {successMsg ? <SuccessMessage /> : null}
              {errorMsg ? <ErrorMessage /> : null}

              {!successMsg && (
                <form
                  name="contact"
                  method="post"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="mt-8 grid grid-cols-1 gap-4">
                    <input
                      type="hidden"
                      name="form-contact"
                      value="contact"
                    />
                    <label className="block">
                      <span className="text-sm tracking-wider text-stone-600">
                        Name
                      </span>
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
                              ? 'mt-1 block w-full rounded-lg border-0 border-l-4 border-purple-300 bg-stone-200 pl-3 pr-10 text-lg text-stone-600 caret-fuchsia-500 shadow-md focus:border-fuchsia-500 focus:ring-0'
                              : errors.name &&
                                  errors.name.type === 'required'
                                ? 'mt-1 block w-full rounded-lg border-0 border-l-4 border-red-300 bg-stone-200 pl-3 pr-10 text-lg text-stone-600 caret-red-500 shadow-md focus:border-red-500 focus:ring-0'
                                : errors.name &&
                                    errors.name.type === 'minLength'
                                  ? 'mt-1 block w-full rounded-lg border-0 border-l-4 border-red-300 bg-stone-200 pl-3 pr-10 text-lg text-stone-600 caret-red-500 shadow-md focus:border-red-500 focus:ring-0'
                                  : errors.name &&
                                      errors.name.type === 'maxLength'
                                    ? 'mt-1 block w-full rounded-lg border-0 border-l-4 border-red-300 bg-stone-200 pl-3 pr-10 text-lg text-stone-600 shadow-md focus:border-red-500 focus:ring-0'
                                    : 'mt-1 block w-full rounded-lg border-0 border-l-4 border-green-300 bg-stone-200 pl-3 pr-10 text-lg text-stone-600 caret-green-500 shadow-md focus:border-green-500 focus:ring-0'
                          }
                          onChange={handleChange}
                          placeholder=""
                          type="text"
                        />
                        {!JSON.stringify(touchedFields.name) ? ( // field is pristine
                          <div className="absolute right-4 top-1/4 w-4"></div>
                        ) : errors.name &&
                          errors.name.type === 'required' ? (
                          <i
                            className="fa-regular fa-times absolute right-4 top-1/4 w-4 text-2xl text-red-600"
                            aria-hidden="true"
                          />
                        ) : errors.name &&
                          errors.name.type === 'minLength' ? (
                          <i
                            className="fa-regular fa-times absolute right-4 top-1/4 w-4 text-2xl text-red-600"
                            aria-hidden="true"
                          />
                        ) : errors.name &&
                          errors.name.type === 'maxLength' ? (
                          <i
                            className="fa-regular fa-times absolute right-4 top-1/4 w-4 text-2xl text-red-600"
                            aria-hidden="true"
                          />
                        ) : (
                          <i
                            className="fa-regular fa-check absolute right-4 top-1/4 w-4 text-2xl text-green-600"
                            aria-hidden="true"
                          />
                        )}
                      </div>
                      <p
                        className={
                          (errors.name &&
                            errors.name.type === 'required') ||
                          (errors.name &&
                            errors.name.type === 'minLength') ||
                          (errors.name && errors.name.type === 'maxLength')
                            ? 'error mt-1 text-sm text-red-600 opacity-100 transition-opacity delay-75 duration-200'
                            : 'error mt-1 text-sm text-red-600 opacity-0 transition-opacity delay-75 duration-200'
                        }
                        aria-hidden={
                          (errors.name &&
                            errors.name.type === 'required') ||
                          (errors.name &&
                            errors.name.type === 'minLength') ||
                          (errors.name && errors.name.type === 'maxLength')
                            ? 'false'
                            : 'true'
                        }
                        aria-live={
                          (errors.name &&
                            errors.name.type === 'required') ||
                          (errors.name &&
                            errors.name.type === 'minLength') ||
                          (errors.name && errors.name.type === 'maxLength')
                            ? 'polite'
                            : 'off'
                        }
                      >
                        {errors.name && errors.name.type === 'required' ? (
                          <>Please enter your name.</>
                        ) : errors.name &&
                          errors.name.type === 'minLength' ? (
                          <>Your name must be at least 2 characters.</>
                        ) : errors.name &&
                          errors.name.type === 'maxLength' ? (
                          <>Your name must be less than 100 characters.</>
                        ) : (
                          <>&nbsp;</>
                        )}
                      </p>
                    </label>
                    <label className="block">
                      <span className="text-sm tracking-wider text-stone-600">
                        Email
                      </span>
                      <div className="relative">
                        <input
                          {...register('email', {
                            required: true,
                            pattern:
                              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                          })}
                          aria-required="true"
                          className={
                            !JSON.stringify(touchedFields.email) // field is pristine
                              ? 'mt-1 block w-full rounded-lg border-0 border-l-4 border-purple-300 bg-stone-200 pl-3 pr-10 text-lg text-stone-600 caret-fuchsia-500 shadow-md focus:border-fuchsia-500 focus:ring-0'
                              : errors.email &&
                                  errors.email.type === 'required'
                                ? 'mt-1 block w-full rounded-lg border-0 border-l-4 border-red-300 bg-stone-200 pl-3 pr-10 text-lg text-stone-600 caret-red-500 shadow-md focus:border-red-500 focus:ring-0'
                                : errors.email &&
                                    errors.email.type === 'pattern'
                                  ? 'mt-1 block w-full rounded-lg border-0 border-l-4 border-red-300 bg-stone-200 pl-3 pr-10 text-lg text-stone-600 caret-red-500 shadow-md focus:border-red-500 focus:ring-0'
                                  : 'mt-1 block w-full rounded-lg border-0 border-l-4 border-green-300 bg-stone-200 pl-3 pr-10 text-lg text-stone-600 caret-green-500 shadow-md focus:border-green-500 focus:ring-0'
                          }
                          onChange={handleChange}
                          type="email"
                        />
                        {!JSON.stringify(touchedFields.email) ? ( // field is pristine
                          <div className="w-4"></div>
                        ) : errors.email &&
                          errors.email.type === 'required' ? (
                          <i
                            className="fa-regular fa-times absolute right-4 top-1/4 w-4 text-2xl text-red-600"
                            aria-hidden="true"
                          />
                        ) : errors.email &&
                          errors.email.type === 'pattern' ? (
                          <i
                            className="fa-regular fa-times absolute right-4 top-1/4 w-4 text-2xl text-red-600"
                            aria-hidden="true"
                          />
                        ) : (
                          <i
                            className="fa-regular fa-check absolute right-4 top-1/4 w-4 text-2xl text-green-600"
                            aria-hidden="true"
                          />
                        )}
                      </div>
                      <p
                        className={
                          (errors.email &&
                            errors.email.type === 'required') ||
                          (errors.email &&
                            errors.email.type === 'minLength')
                            ? 'error mt-1 text-sm text-red-600 opacity-100 transition-opacity delay-75 duration-200'
                            : 'error mt-1 text-sm text-red-600 opacity-0 transition-opacity delay-75 duration-200'
                        }
                        aria-hidden={
                          (errors.email &&
                            errors.email.type === 'required') ||
                          (errors.email && errors.email.type === 'pattern')
                            ? 'false'
                            : 'true'
                        }
                        aria-live={
                          (errors.email &&
                            errors.email.type === 'required') ||
                          (errors.email && errors.email.type === 'pattern')
                            ? 'polite'
                            : 'off'
                        }
                      >
                        {errors.email &&
                        errors.email.type === 'required' ? (
                          <>Please enter your email.</>
                        ) : errors.email &&
                          errors.email.type === 'pattern' ? (
                          <>Please enter a valid email address.</>
                        ) : (
                          <>&nbsp;</>
                        )}
                      </p>
                    </label>
                    <label className="block">
                      <span className="text-sm tracking-wider text-stone-600">
                        Message
                      </span>
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
                              ? 'mt-1 block w-full flex-grow rounded-lg border-0 border-l-4 border-purple-300 bg-stone-200 pl-3 pr-10 text-lg text-stone-600 caret-fuchsia-500 shadow-md focus:border-fuchsia-500 focus:ring-0'
                              : errors.message &&
                                  errors.message.type === 'required'
                                ? 'mt-1 block w-full flex-grow rounded-lg border-0 border-l-4 border-red-300 bg-stone-200 pl-3 pr-10 text-lg text-stone-600 caret-red-500 shadow-md focus:border-red-500 focus:ring-0'
                                : errors.message &&
                                    errors.message.type === 'minLength'
                                  ? 'mt-1 block w-full flex-grow rounded-lg border-0 border-l-4 border-red-300 bg-stone-200 pl-3 pr-10 text-lg text-stone-600 caret-red-500 shadow-md focus:border-red-500 focus:ring-0'
                                  : errors.message &&
                                      errors.message.type === 'maxLength'
                                    ? 'mt-1 block w-full flex-grow rounded-lg border-0 border-l-4 border-red-300 bg-stone-200 pl-3 pr-10 text-lg text-stone-600 caret-red-500 shadow-md focus:border-red-500 focus:ring-0'
                                    : 'mt-1 block w-full flex-grow rounded-lg border-0 border-l-4 border-green-300 bg-stone-200 pl-3 pr-10 text-lg text-stone-600 caret-green-500 shadow-md focus:border-green-500 focus:ring-0'
                          }
                          onChange={handleChange}
                          rows={4}
                        />
                        {!JSON.stringify(touchedFields.message) ? ( // field is pristine
                          <div className="w-4"></div>
                        ) : errors.message &&
                          errors.message.type === 'required' ? (
                          <i
                            className="fa-regular fa-times absolute right-4 top-2 w-4 text-2xl text-red-600"
                            aria-hidden="true"
                          />
                        ) : errors.message &&
                          errors.message.type === 'minLength' ? (
                          <i
                            className="fa-regular fa-times absolute right-4 top-2 w-4 text-2xl text-red-600"
                            aria-hidden="true"
                          />
                        ) : errors.message &&
                          errors.message.type === 'maxLength' ? (
                          <i
                            className="fa-regular fa-times absolute right-4 top-2 w-4 text-2xl text-red-600"
                            aria-hidden="true"
                          />
                        ) : (
                          <i
                            className="fa-regular fa-check absolute right-4 top-2 w-4 text-2xl text-green-600"
                            aria-hidden="true"
                          />
                        )}
                      </div>
                      <p
                        className={
                          (errors.message &&
                            errors.message.type === 'required') ||
                          (errors.message &&
                            errors.message.type === 'minLength') ||
                          (errors.message &&
                            errors.message.type === 'maxLength')
                            ? 'error mt-1 text-sm text-red-600 opacity-100 transition-opacity delay-75 duration-200'
                            : 'error mt-1 text-sm text-red-600 opacity-0 transition-opacity delay-75 duration-200'
                        }
                        aria-hidden={
                          (errors.message &&
                            errors.message.type === 'required') ||
                          (errors.message &&
                            errors.message.type === 'minLength') ||
                          (errors.message &&
                            errors.message.type === 'maxLength')
                            ? 'false'
                            : 'true'
                        }
                        aria-live={
                          (errors.message &&
                            errors.message.type === 'required') ||
                          (errors.message &&
                            errors.message.type === 'minLength') ||
                          (errors.message &&
                            errors.message.type === 'maxLength')
                            ? 'polite'
                            : 'off'
                        }
                      >
                        {errors.message &&
                        errors.message.type === 'required' ? (
                          <>Please enter a message.</>
                        ) : errors.message &&
                          errors.message.type === 'minLength' ? (
                          <>Your message must be at least 15 characters.</>
                        ) : errors.message &&
                          errors.message.type === 'maxLength' ? (
                          <>
                            Your message must be less than 3000 characters.
                          </>
                        ) : (
                          <>&nbsp;</>
                        )}
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
              )}
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
    avatar: file(relativePath: { eq: "IMG_4458_square.jpeg" }) {
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
