import React, { FC, useState, ReactNode } from 'react'

import { useForm } from 'react-hook-form'

import { encode } from '../../utils/utils'

import Button from '../button'


const ContactForm: FC<ReactNode> = ({}: ReactNode) => {
  const { register, handleSubmit, formState, errors, reset } = useForm({
    mode: 'onChange',
  })
  const [state, setState] = React.useState({})
  const [feedbackMsg, setFeedbackMsg] = useState(null)
  const handleChange = e => setState({ ...state, [e.target.name]: e.target.value })
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
        setFeedbackMsg(`Thanks for reaching out. I'll get back to you soon.`)
        reset()
        // console.log(response)
      })
      .catch(error => {
        setFeedbackMsg("Oops, something went wrong. The form could not be submitted.")
        // console.log(error)
      })
  }
  return (
    <React.Fragment>
      <h2 className="text-gray-800 text-2xl tracking-wide">Say Hello</h2>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-1 gap-6 mt-8">
          <input type="hidden" name="form-contact" value="contact" />
          <label className="block">
            <span className="text-gray-600 tracking-wider">Name</span>
            <input
              className={
                !JSON.stringify(formState.touched.name)
                ?
                  "mt-0 block w-full px-0.5 border-0 border-b-2 border-purple-300 focus:ring-0 focus:border-fuchsia-500 bg-gray-100"
                :
                  JSON.stringify(formState.touched.name)
                  &&
                  formState.dirtyFields.name === undefined
                  &&
                  !errors.name
                  ?
                    "mt-0 block w-full px-0.5 border-0 border-b-2 border-purple-300 focus:ring-0 focus:border-fuchsia-500 bg-gray-100 is-invalid"
                  :
                    errors.name
                    ?
                      "mt-0 block w-full px-0.5 border-0 border-b-2 border-purple-300 focus:ring-0 focus:border-fuchsia-500 bg-gray-100 is-invalid"
                    :
                      "mt-0 block w-full px-0.5 border-0 border-b-2 border-purple-300 focus:ring-0 focus:border-fuchsia-500 bg-gray-100 is-valid"
              }
              placeholder=""
              type="text"
              name="name"
              onChange={handleChange}
              ref={register({ required: true, maxLength: 200 })}
            />

            {((errors.name && errors.name.type === 'required') || formState.touched.name) &&
              <div className="invalid-feedback">
                Please provide a name.
              </div>
            }
          </label>
          <label className="block">
            <span className="text-gray-600 tracking-wider">Email</span>
            <input
              className={
                !JSON.stringify(formState.touched.email)
                ?
                  "mt-0 block w-full px-0.5 border-0 border-b-2 border-purple-300 focus:ring-0 focus:border-fuchsia-500 bg-gray-100"
                :
                  JSON.stringify(formState.touched.email)
                  &&
                  formState.dirtyFields.email === undefined
                  &&
                  !errors.email
                  ?
                    "mt-0 block w-full px-0.5 border-0 border-b-2 border-purple-300 focus:ring-0 focus:border-fuchsia-500 bg-gray-100 is-invalid"
                  :
                    errors.email
                    ?
                      "mt-0 block w-full px-0.5 border-0 border-b-2 border-purple-300 focus:ring-0 focus:border-fuchsia-500 bg-gray-100 is-invalid"
                    :
                      "mt-0 block w-full px-0.5 border-0 border-b-2 border-purple-300 focus:ring-0 focus:border-fuchsia-500 bg-gray-100 is-valid"
              }
              type="email"
              name="email"
              onChange={handleChange}
              ref={register({
                required: true,
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              })}
            />

            {((errors.email && errors.email.type === 'required') || formState.touched.email) &&
              <div className="invalid-feedback">
                Please provide your email address.
              </div>
            }
          </label>
          <label className="block">
            <span className="text-gray-600 tracking-wider">Message</span>
            <textarea
              className={
                !JSON.stringify(formState.touched.message)
                ?
                  "mt-0 block w-full px-0.5 border-0 border-b-2 border-purple-300 focus:ring-0 focus:border-fuchsia-500 bg-gray-100"
                :
                  JSON.stringify(formState.touched.message)
                  &&
                  formState.dirtyFields.message === undefined
                  &&
                  !errors.message
                  ?
                    "mt-0 block w-full px-0.5 border-0 border-b-2 border-purple-300 focus:ring-0 focus:border-fuchsia-500 bg-gray-100 is-invalid"
                  :
                    errors.message
                    ?
                      "mt-0 block w-full px-0.5 border-0 border-b-2 border-purple-300 focus:ring-0 focus:border-fuchsia-500 bg-gray-100 is-invalid"
                    :
                      "mt-0 block w-full px-0.5 border-0 border-b-2 border-purple-300 focus:ring-0 focus:border-fuchsia-500 bg-gray-100 is-valid"
              }
              rows={4}
              name="message"
              onChange={handleChange}
              ref={register({ required: true })}
              ></textarea>

              {((errors.message && errors.message.type === 'required') || formState.touched.message) &&
                <div className="invalid-feedback">
                  Please provide a message.
                </div>
              }
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
    </React.Fragment>
  )
}

export default ContactForm
