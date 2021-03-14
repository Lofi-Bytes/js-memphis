import React from 'react'

import { formatClassList } from '../../utils/utils'

import {
  FieldEmptyIcon,
  FieldErrorIcon,
  FieldValidIcon
} from './icons'


export type TextInputTypes = {
  label: string,
  errors: any,
  errorMessage: any,
  formState: any,
  handleChange: any,
  register: any,
  [other:string]: unknown
}

const FIELD_BASE: string = `
  bg-gray-200
  block
  border-0
  border-l-4
  focus:ring-0
  mt-1
  pl-3
  pr-10
  rounded-lg
  shadow-md
  text-gray-600
  text-lg
  w-full
`

const FIELD: string = `
  ${FIELD_BASE}
  border-purple-300
  focus:border-fuchsia-500
`

const FIELD_ERROR: string = `
  ${FIELD_BASE}
  border-red-300
  focus:border-red-500
`

const FIELD_VALID: string = `
  ${FIELD_BASE}
  border-green-300
  focus:border-green-500
`

const ERROR_HELP_TEXT: string = `
  delay-75
  duration-200
  error
  mt-1
  opacity-100
  text-red-600
  text-sm
  transition-opacity
`

const TextArea = ({
  label,
  errors,
  errorMessage,
  formState,
  handleChange,
  register,
  ...other
}) => {
  label = label.toLowerCase()

  const formattedField: string = formatClassList(FIELD)
  const formattedFieldError: string = formatClassList(FIELD_ERROR)
  const formattedFieldValid: string = formatClassList(FIELD_VALID)

  return (
    <label className="block">
      <span className="text-sm tracking-wider text-gray-600">{label.charAt(0).toUpperCase() + label.slice(1)}</span>
      <div className="relative">
        <textarea
          className={
            !JSON.stringify(formState.touched[label]) // field is pristine
              ? formattedField
              : errors[label]
                ? formattedFieldError
                : formattedFieldValid

          }
          aria-required="true"
          rows={4}
          name={label}
          onChange={handleChange}
          ref={register}
        />
        {
          !JSON.stringify(formState.touched[label]) // field is pristine
            ? <FieldEmptyIcon className="top-2" />
            : errors[label]
              ? <FieldErrorIcon className="top-2" />
              : <FieldValidIcon className="top-2" />
        }
      </div>
      <p
        className={
          errors[label]
            ? `${ERROR_HELP_TEXT} opacity-100`
            : `${ERROR_HELP_TEXT} opacity-0`
        }
        aria-hidden={
          errors[label]
            ? "false"
            : "true"
        }
        aria-live={
          errors[label]
            ? "polite"
            : "off"
        }
      >
        {errorMessage}
      </p>
    </label>
  )
}

export default TextArea
