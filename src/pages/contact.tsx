import * as React from 'react'

import { useForm } from 'react-hook-form'

import { encode } from '../utils/utils'

import Button from '../components/button'
import ErrorMessage from '../components/contact-form/error-message'
import Jumbotron from '../components/jumbotron'
import Layout from '../components/layout'
import Main from '../components/main'
import Section from '../components/section'
import Banner from '../components/banner/banner'
import SEO from '../components/seo'
import SuccessMessage from '../components/contact-form/success-message'


/**
 * This component exists to render a pure HTML form during build time
 * so that Netlify will recognize that the form exists.
 */

type PageProps = {
  location: Location
}

const ContactPage = ({
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
  const handleChange = e => {setState({
    ...state,
    [e.target.name]: e.target.value

  })}
  const onSubmit = (data, e) => {
    // JSON.stringify(data)
    e.preventDefault()
    // const form = e.target
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
  return (
    <Layout location={location}>
      <SEO
        metaTitle="Contact Jillian"
        metaDescription="Feel free to say hello. I love to meet new people and invite opportunities to collaborate."
        canonicalUrl="https://jillian.dev/contact/"
      />
      <Jumbotron
        title={
          <>
            <span className="hidden sm:inline-block">
              <i className="text-4xl leading-relaxed fal fa-paper-plane text-stone-50 md:text-5xl md:leading-loose lg:text-5xl lg:leading-relaxed" />&nbsp;&nbsp;
            </span>
            <span className="text-5xl leading-relaxed js md:text-6xl md:leading-loose lg:text-7xl lg:leading-relaxed">
              Send Me a Message
            </span>
            <span className="hidden sm:inline-block">
              &nbsp;&nbsp;<i className="text-4xl leading-relaxed fal fa-mailbox text-stone-50 md:text-5xl md:leading-loose lg:text-5xl lg:leading-relaxed" />
            </span>
            <span className="block sm:hidden">
              <i className="text-4xl fal fa-paper-plane text-stone-50" />&nbsp;&nbsp;<i className="text-4xl fal fa-mailbox text-stone-50" />
            </span>
          </>
        }
        // subtitle={<span className="text-teal-100">Designer, Full Stack Developer, &amp; Tech Lead</span>}
      />
      <Main>
        <Section background="opaque" className="mb-8 -mt-12">
          {/* <div className="max-w-xs py-2 pl-10 pr-4 -ml-10 rounded shadow-lg bg-cyan-300 w-max sm:px-24 sm:-ml-24 sm:max-w-none">
            <h2 className="text-xl tracking-wide text-cyan-900 sm:text-2xl">Say hello</h2>
          </div> */}
          <Banner color="cyan">
            Say hello
          </Banner>
          <div className="mx-auto md:w-10/12">

            {successMsg && <SuccessMessage />}
            {errorMsg && <ErrorMessage />}

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
                            "mt-1 block pl-3 pr-10 border-0 border-l-4 border-purple-300 focus:ring-0 focus:border-fuchsia-500 bg-stone-200 rounded-lg text-stone-600 text-lg w-full shadow-md"
                          :
                            errors.name && errors.name.type === "required"
                              ?
                                "mt-1 block pl-3 pr-10 border-0 border-l-4 border-red-300 focus:ring-0 focus:border-red-500 bg-stone-200 rounded-lg text-stone-600 text-lg w-full shadow-md"
                              :
                                errors.name && errors.name.type === "minLength"
                                  ?
                                    "mt-1 block pl-3 pr-10 border-0 border-l-4 border-red-300 focus:ring-0 focus:border-red-500 bg-stone-200 rounded-lg text-stone-600 text-lg w-full shadow-md"
                                  :
                                    errors.name && errors.name.type === "maxLength"
                                      ?
                                        "mt-1 block pl-3 pr-10 border-0 border-l-4 border-red-300 focus:ring-0 focus:border-red-500 bg-stone-200 rounded-lg text-stone-600 text-lg w-full shadow-md"
                                      :
                                        "mt-1 block pl-3 pr-10 border-0 border-l-4 border-green-300 focus:ring-0 focus:border-green-500 bg-stone-200 rounded-lg text-stone-600 text-lg w-full shadow-md"
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
                                <i className="absolute w-4 text-2xl text-red-600 far fa-times right-4 top-1/4"></i>
                              :
                                errors.name && errors.name.type === "minLength"
                                  ?
                                    <i className="absolute w-4 text-2xl text-red-600 far fa-times right-4 top-1/4"></i>
                                  :
                                    errors.name && errors.name.type === "maxLength"
                                    ?
                                      <i className="absolute w-4 text-2xl text-red-600 far fa-times right-4 top-1/4"></i>
                                    :
                                      <i className="absolute w-4 text-2xl text-green-600 far fa-check right-4 top-1/4"></i>
                      }
                    </div>
                    <p
                      className={
                        (errors.name && errors.name.type === "required") ||
                        (errors.name && errors.name.type === "minLength") ||
                        (errors.name && errors.name.type === "maxLength")
                        ?
                          "error text-red-600 mt-1 opacity-100 transition-opacity duration-200 delay-75"
                        :
                          "error text-red-600 mt-1 opacity-0 transition-opacity duration-200 delay-75"
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
                            <p className="text-sm">Please enter your name.</p>
                          :
                            errors.name && errors.name.type === "minLength"
                              ?
                                <p className="text-sm">Your name must be at least 2 characters.</p>
                              :
                                errors.name && errors.name.type === "maxLength"
                                  ?
                                    <p className="text-sm">Your name must be less than 100 characters.</p>
                                  :
                                    <p className="text-sm">&nbsp;</p>
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
                            "mt-1 block pl-3 pr-10 border-0 border-l-4 border-purple-300 focus:ring-0 focus:border-fuchsia-500 bg-stone-200 rounded-lg text-stone-600 text-lg w-full shadow-md"
                          :
                            errors.email && errors.email.type === "required"
                              ?
                                "mt-1 block pl-3 pr-10 border-0 border-l-4 border-red-300 focus:ring-0 focus:border-red-500 bg-stone-200 rounded-lg text-stone-600 text-lg w-full shadow-md"
                              :
                                errors.email && errors.email.type === "pattern"
                                  ?
                                    "mt-1 block pl-3 pr-10 border-0 border-l-4 border-red-300 focus:ring-0 focus:border-red-500 bg-stone-200 rounded-lg text-stone-600 text-lg w-full shadow-md"
                                  :
                                    "mt-1 block pl-3 pr-10 border-0 border-l-4 border-green-300 focus:ring-0 focus:border-green-500 bg-stone-200 rounded-lg text-stone-600 text-lg w-full shadow-md"
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
                                <i className="absolute w-4 text-2xl text-red-600 far fa-times right-4 top-1/4"></i>
                              :
                                errors.email && errors.email.type === "pattern"
                                  ?
                                    <i className="absolute w-4 text-2xl text-red-600 far fa-times right-4 top-1/4"></i>
                                  :
                                    <i className="absolute w-4 text-2xl text-green-600 far fa-check right-4 top-1/4"></i>
                      }
                    </div>
                    <p
                      className={
                        (errors.email && errors.email.type === "required") ||
                        (errors.email && errors.email.type === "minLength")
                        ?
                          "error text-red-600 mt-1 opacity-100 transition-opacity duration-200 delay-75"
                        :
                          "error text-red-600 mt-1 opacity-0 transition-opacity duration-200 delay-75"
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
                            <p className="text-sm">Please enter your email.</p>
                          :
                            errors.email && errors.email.type === "pattern"
                              ?
                                <p className="text-sm">Please enter a valid email address.</p>
                              :
                                <p className="text-sm">&nbsp;</p>
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
                            "mt-1 block flex-grow pl-3 pr-10 border-0 border-l-4 border-purple-300 focus:ring-0 focus:border-fuchsia-500 bg-stone-200 rounded-lg text-stone-600 text-lg w-full shadow-md"
                          :
                            errors.message && errors.message.type === "required"
                              ?
                                "mt-1 block flex-grow pl-3 pr-10 border-0 border-l-4 border-red-300 focus:ring-0 focus:border-red-500 bg-stone-200 rounded-lg text-stone-600 text-lg w-full shadow-md"
                              :
                                errors.message && errors.message.type === "minLength"
                                  ?
                                    "mt-1 block flex-grow pl-3 pr-10 border-0 border-l-4 border-red-300 focus:ring-0 focus:border-red-500 bg-stone-200 rounded-lg text-stone-600 text-lg w-full shadow-md"
                                  :
                                    errors.message && errors.message.type === "maxLength"
                                    ?
                                      "mt-1 block flex-grow pl-3 pr-10 border-0 border-l-4 border-red-300 focus:ring-0 focus:border-red-500 bg-stone-200 rounded-lg text-stone-600 text-lg w-full shadow-md"
                                    :
                                      "mt-1 block flex-grow pl-3 pr-10 border-0 border-l-4 border-green-300 focus:ring-0 focus:border-green-500 bg-stone-200 rounded-lg text-stone-600 text-lg w-full shadow-md"
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
                                <i className="absolute w-4 text-2xl text-red-600 far fa-times right-4 top-2"></i>
                              :
                                errors.message && errors.message.type === "minLength"
                                  ?
                                    <i className="absolute w-4 text-2xl text-red-600 far fa-times right-4 top-2"></i>
                                  :
                                    errors.message && errors.message.type === "maxLength"
                                    ?
                                      <i className="absolute w-4 text-2xl text-red-600 far fa-times right-4 top-2"></i>
                                    :
                                      <i className="absolute w-4 text-2xl text-green-600 far fa-check right-4 top-2"></i>
                      }
                    </div>
                    <p
                      className={
                        (errors.message && errors.message.type === "required") ||
                        (errors.message && errors.message.type === "minLength") ||
                        (errors.message && errors.message.type === "maxLength")
                        ?
                          "error text-red-600 mt-1 opacity-100 transition-opacity duration-200 delay-75"
                        :
                          "error text-red-600 mt-1 opacity-0 transition-opacity duration-200 delay-75"
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
                            <p className="text-sm">Please enter a message.</p>
                          :
                            errors.message && errors.message.type === "minLength"
                              ?
                                <p className="text-sm">Your message must be at least 15 characters.</p>
                              :
                                errors.message && errors.message.type === "maxLength"
                                  ?
                                    <p className="text-sm">Your message must be less than 3000 characters.</p>
                                  :
                                    <p className="text-sm">&nbsp;</p>
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
  );
}

export default ContactPage
