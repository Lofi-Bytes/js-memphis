import React, { FC, ReactNode, useState } from 'react'

import { useForm } from 'react-hook-form'

import { encode } from '../../utils/utils'

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
    clearErrors,
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
    <React.Fragment>

      {successMsg &&
        <div role="alert" className="flex flex-col items-center justify-center w-full p-6 mt-8 text-lg text-gray-600 bg-gray-200 rounded-lg shadow-md h-96">
          <i className="w-full text-6xl text-center text-green-500 far fa-check-circle sm:text-7xl md:text-8xl"></i>
          <p className="mt-4 text-xl leading-relaxed tracking-wider text-center text-gray-600 sm:text-2xl md:text-3xl">Thank you!</p>
          <p className="mt-4 text-base leading-relaxed tracking-wider text-gray-600 sm:text-lg md:text-xl">I have received your message.</p>
        </div>
      }

      {errorMsg &&
        <div role="alert" className="flex items-start justify-start w-full p-4 mt-6 text-lg text-gray-600 bg-red-100 border-l-4 border-red-500 rounded-lg shadow-md">
          <i className="mt-1 text-3xl text-red-500 far fa-times-circle"></i>
          <div className="ml-4">
            <p className="text-2xl leading-relaxed tracking-wider text-gray-600">Oops!</p>
            <p className="mt-3 text-lg leading-relaxed tracking-wider text-gray-600">Well that's embarassing. Something went wrong. Please try to submit your message again.</p>
          </div>
        </div>
      }

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
              <span className="text-sm tracking-wider text-gray-600">Name</span>
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
                    "error text-red-600 mt-1 opacity-100 transition-opacity duration-200 delay-75 text-sm"
                  :
                    "error text-red-600 mt-1 opacity-0 transition-opacity duration-200 delay-75 text-sm"
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
              <span className="text-sm tracking-wider text-gray-600">Email</span>
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
                    "error text-red-600 mt-1 opacity-100 transition-opacity duration-200 delay-75 text-sm"
                  :
                    "error text-red-600 mt-1 opacity-0 transition-opacity duration-200 delay-75 text-sm"
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
              <span className="text-sm tracking-wider text-gray-600">Message</span>
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
                    "error text-red-600 mt-1 opacity-100 transition-opacity duration-200 delay-75 text-sm"
                  :
                    "error text-red-600 mt-1 opacity-0 transition-opacity duration-200 delay-75 text-sm"
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
              title="Submit"
              type="submit"
              disabled={formState.isSubmitting}
            >
              Get in touch
            </Button>
          </div>
        </form>
      }
    </React.Fragment>
  )
}

export default ContactForm
