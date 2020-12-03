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
            <input type="text" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-purple-300 focus:ring-0 focus:border-fuchsia-500 bg-gray-100" placeholder="" />
          </label>
          <label className="block">
            <span className="text-gray-600 tracking-wider">Email</span>
            <input type="email" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-purple-300 focus:ring-0 focus:border-fuchsia-500 bg-gray-100" />
          </label>
          <label className="block">
            <span className="text-gray-600 tracking-wider">Message</span>
            <textarea className="mt-0 block w-full px-0.5 border-0 border-b-2 border-purple-300 focus:ring-0 focus:border-fuchsia-500 bg-gray-100" rows={2}></textarea>
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
