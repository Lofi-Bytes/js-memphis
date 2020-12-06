import React, { FC, useState } from 'react'

import { useForm } from 'react-hook-form'

import { encode } from '../utils/utils'

import Banner from '../components/banner'
import Button from '../components/button'
import Layout from '../components/layout'


const ContactPage: FC = () => {
  const {
    register,
    handleSubmit,
    formState,
    errors,
    clearErrors,
    reset
  } = useForm({
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
    <Layout>
      <Banner
        title={
          <>
            <span className="hidden sm:inline-block">
              <i className="fal fa-paper-plane text-gray-50"></i>&nbsp;
            </span>
            <span className="text-teal-100">
            Say Hello
            </span>
            <span className="hidden sm:inline-block">
              &nbsp;<i className="fal fa-mailbox text-gray-50"></i>
            </span>
            <span className="block sm:hidden">
              <i className="fal fa-paper-plane text-gray-50"></i>&nbsp;&nbsp;<i className="fal fa-mailbox text-gray-50"></i>
            </span>
          </>
        }
        // subTitle={<span className="text-teal-100">Designer, Full Stack Developer, &amp; Tech Lead</span>}
      />
      <main className="min-h-screen max-w-screen-lg m-auto mb-20">
        <section className="bg-gray-100 rounded-xl p-8 pb-10 w-11/12 sm:w-2/3 mx-auto -mt-12 shadow-xl z-10 relative">
          <React.Fragment>

            {successMsg &&
              <div role="alert" className="h-96 mt-8 flex flex-col items-center justify-center p-6 bg-gray-200 rounded-lg text-gray-600 text-lg w-full shadow-md">
                <i className="far fa-check-circle text-green-500 text-6xl sm:text-7xl md:text-8xl text-center w-full"></i>
                <p className="text-gray-600 text-xl sm:text-2xl md:text-3xl text-center tracking-wider leading-relaxed mt-4">Thank you!</p>
                <p className="text-gray-600 text-base sm:text-lg md:text-xl tracking-wider leading-relaxed mt-4">I have received your message.</p>
              </div>
            }

            {errorMsg &&
              <div role="alert" className="mt-6 flex items-start justify-start p-4 bg-red-100 rounded-lg text-gray-600 text-lg w-full shadow-md border-red-500 border-l-4">
                <i className="far fa-times-circle text-red-500 text-3xl mt-1"></i>
                <div className="ml-4">
                  <p className="text-gray-600 text-2xl tracking-wider leading-relaxed">Oops!</p>
                  <p className="text-gray-600 text-lg tracking-wider leading-relaxed mt-3">Well that's embarassing. Something went wrong. Please try to submit your message again.</p>
                </div>
              </div>
            }

            {/* {!successMsg && */}
              <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit(onSubmit)}
                className={
                  !successMsg
                  ? "visible"
                  : "invisible"
                }
              >
                <div className="grid grid-cols-1 gap-4 mt-8">
                  <input type="hidden" name="form-contact" value="contact" />
                  <label className="block">
                    <span className="text-gray-600 tracking-wider text-sm">Name</span>
                    <div className="relative">
                      <input
                        className={
                          !JSON.stringify(formState.touched.name) // field is pristine
                          ?
                            "mt-1 block pl-3 pr-10 border-0 border-l-4 border-purple-300 focus:ring-0 focus:border-fuchsia-500 bg-gray-200 rounded-lg text-gray-600 text-lg w-full shadow-md"
                          :
                            errors.name && errors.name.type === "required"
                              ?
                                "mt-1 block pl-3 pr-10 border-0 border-l-4 border-red-300 focus:ring-0 focus:border-red-500 bg-gray-200 rounded-lg text-gray-600 text-lg w-full shadow-md"
                              :
                                errors.name && errors.name.type === "minLength"
                                  ?
                                    "mt-1 block pl-3 pr-10 border-0 border-l-4 border-red-300 focus:ring-0 focus:border-red-500 bg-gray-200 rounded-lg text-gray-600 text-lg w-full shadow-md"
                                  :
                                    errors.name && errors.name.type === "maxLength"
                                      ?
                                        "mt-1 block pl-3 pr-10 border-0 border-l-4 border-red-300 focus:ring-0 focus:border-red-500 bg-gray-200 rounded-lg text-gray-600 text-lg w-full shadow-md"
                                      :
                                        "mt-1 block pl-3 pr-10 border-0 border-l-4 border-green-300 focus:ring-0 focus:border-green-500 bg-gray-200 rounded-lg text-gray-600 text-lg w-full shadow-md"
                        }
                        aria-required="true"
                        placeholder=""
                        type="text"
                        name="name"
                        onChange={handleChange}
                        ref={
                          register(
                            {
                              required: true,
                              minLength: 2,
                              maxLength: 200
                            }
                          )
                        }
                      />
                      {
                        !JSON.stringify(formState.touched.name) // field is pristine
                          ?
                            <div className="w-4 absolute right-4 top-1/4"></div>
                          :
                            errors.name && errors.name.type === "required"
                              ?
                                <i className="far fa-times text-red-600 text-2xl w-4 absolute right-4 top-1/4"></i>
                              :
                                errors.name && errors.name.type === "minLength"
                                  ?
                                    <i className="far fa-times text-red-600 text-2xl w-4 absolute right-4 top-1/4"></i>
                                  :
                                    errors.name && errors.name.type === "maxLength"
                                    ?
                                      <i className="far fa-times text-red-600 text-2xl w-4 absolute right-4 top-1/4"></i>
                                    :
                                      <i className="far fa-check text-green-600 text-2xl w-4 absolute right-4 top-1/4"></i>
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
                    <span className="text-gray-600 tracking-wider text-sm">Email</span>
                    <div className="relative">
                      <input
                        className={
                          !JSON.stringify(formState.touched.email) // field is pristine
                          ?
                            "mt-1 block pl-3 pr-10 border-0 border-l-4 border-purple-300 focus:ring-0 focus:border-fuchsia-500 bg-gray-200 rounded-lg text-gray-600 text-lg w-full shadow-md"
                          :
                            errors.email && errors.email.type === "required"
                              ?
                                "mt-1 block pl-3 pr-10 border-0 border-l-4 border-red-300 focus:ring-0 focus:border-red-500 bg-gray-200 rounded-lg text-gray-600 text-lg w-full shadow-md"
                              :
                                errors.email && errors.email.type === "pattern"
                                  ?
                                    "mt-1 block pl-3 pr-10 border-0 border-l-4 border-red-300 focus:ring-0 focus:border-red-500 bg-gray-200 rounded-lg text-gray-600 text-lg w-full shadow-md"
                                  :
                                    "mt-1 block pl-3 pr-10 border-0 border-l-4 border-green-300 focus:ring-0 focus:border-green-500 bg-gray-200 rounded-lg text-gray-600 text-lg w-full shadow-md"
                        }
                        aria-required="true"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        ref={
                          register(
                            {
                              required: true,
                              pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            }
                          )
                        }
                      />
                      {
                        !JSON.stringify(formState.touched.email) // field is pristine
                          ?
                            <div className="w-4"></div>
                          :
                            errors.email && errors.email.type === "required"
                              ?
                                <i className="far fa-times text-red-600 text-2xl w-4 absolute right-4 top-1/4"></i>
                              :
                                errors.email && errors.email.type === "pattern"
                                  ?
                                    <i className="far fa-times text-red-600 text-2xl w-4 absolute right-4 top-1/4"></i>
                                  :
                                    <i className="far fa-check text-green-600 text-2xl w-4 absolute right-4 top-1/4"></i>
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
                    <span className="text-gray-600 tracking-wider text-sm">Message</span>
                    <div className="relative">
                      <textarea
                        className={
                          !JSON.stringify(formState.touched.message) // field is pristine
                          ?
                            "mt-1 block flex-grow pl-3 pr-10 border-0 border-l-4 border-purple-300 focus:ring-0 focus:border-fuchsia-500 bg-gray-200 rounded-lg text-gray-600 text-lg w-full shadow-md"
                          :
                            errors.message && errors.message.type === "required"
                              ?
                                "mt-1 block flex-grow pl-3 pr-10 border-0 border-l-4 border-red-300 focus:ring-0 focus:border-red-500 bg-gray-200 rounded-lg text-gray-600 text-lg w-full shadow-md"
                              :
                                errors.message && errors.message.type === "minLength"
                                  ?
                                    "mt-1 block flex-grow pl-3 pr-10 border-0 border-l-4 border-red-300 focus:ring-0 focus:border-red-500 bg-gray-200 rounded-lg text-gray-600 text-lg w-full shadow-md"
                                  :
                                    errors.message && errors.message.type === "maxLength"
                                    ?
                                      "mt-1 block flex-grow pl-3 pr-10 border-0 border-l-4 border-red-300 focus:ring-0 focus:border-red-500 bg-gray-200 rounded-lg text-gray-600 text-lg w-full shadow-md"
                                    :
                                      "mt-1 block flex-grow pl-3 pr-10 border-0 border-l-4 border-green-300 focus:ring-0 focus:border-green-500 bg-gray-200 rounded-lg text-gray-600 text-lg w-full shadow-md"
                        }
                        aria-required="true"
                        rows={4}
                        name="message"
                        onChange={handleChange}
                        ref={
                          register(
                            {
                              required: true,
                              minLength: 15,
                              maxLength: 3000
                            }
                          )
                        }
                      />
                      {
                        !JSON.stringify(formState.touched.message) // field is pristine
                          ?
                            <div className="w-4"></div>
                          :
                            errors.message && errors.message.type === "required"
                              ?
                                <i className="far fa-times text-red-600 text-2xl w-4 absolute right-4 top-2"></i>
                              :
                                errors.message && errors.message.type === "minLength"
                                  ?
                                    <i className="far fa-times text-red-600 text-2xl w-4 absolute right-4 top-2"></i>
                                  :
                                    errors.message && errors.message.type === "maxLength"
                                    ?
                                      <i className="far fa-times text-red-600 text-2xl w-4 absolute right-4 top-2"></i>
                                    :
                                      <i className="far fa-check text-green-600 text-2xl w-4 absolute right-4 top-2"></i>
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
                    title="Submit"
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            {/* } */}
          </React.Fragment>
        </section>
      </main>
    </Layout>
  )
}

export default ContactPage
