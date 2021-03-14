import React, { FC, ReactNode, useState } from 'react'

import { useForm } from 'react-hook-form'

import { encode } from '../../utils/utils'

import Button from '../button'

import TextInput from './text-input'
import TextArea from './text-area'
import SuccessMessage from './success-message'
import ErrorMessage from './error-message'


export type ContactFormProps = {
  test: string,
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
  const [state, setState] = useState<object>({})
  const [successMsg, setSuccessMsg] = useState<boolean>(false)
  const [errorMsg, setErrorMsg] = useState<boolean>(false)
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
            <TextInput
              label="name"
              errors={errors}
              formState={formState}
              handleChange={handleChange}
              register={register({
                required: true,
                minLength: 2,
                maxLength: 200
              })}
              errorMessage={
                errors.name && errors.name.type === "required"
                  ? <>Please enter your name.</>
                  : errors.name && errors.name.type === "minLength"
                    ? <>Your name must be at least 2 characters.</>
                    : errors.name && errors.name.type === "maxLength"
                      ? <>Your name must be less than 100 characters.</>
                      : <>&nbsp;</>
              }
            />
            <TextInput
              label="email"
              errors={errors}
              formState={formState}
              handleChange={handleChange}
              register={register({
                required: true,
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              })}
              errorMessage={
                errors.email && errors.email.type === "required"
                  ? <>Please enter your email.</>
                    : errors.email && errors.email.type === "pattern"
                      ? <>Please enter a valid email address.</>
                        :<>&nbsp;</>
              }
            />
            <TextArea
              label="message"
              errors={errors}
              formState={formState}
              handleChange={handleChange}
              register={register({
                required: true,
                minLength: 15,
                maxLength: 3000
              })}
              errorMessage={
                errors.message && errors.message.type === "required"
                  ? <>Please enter a message.</>
                  : errors.message && errors.message.type === "minLength"
                    ? <>Your message must be at least 15 characters.</>
                    : errors.message && errors.message.type === "maxLength"
                      ? <>Your message must be less than 3000 characters.</>
                      : <>&nbsp;</>
              }
            />
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
