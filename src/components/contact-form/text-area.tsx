import React from 'react'

import {
  RegisterOptions,
  FieldErrors,
  FormStateProxy
} from 'react-hook-form'

import {
  formatClassList,
  joinStrings
} from '../../utils/utils'

import {
  FieldEmptyIcon,
  FieldErrorIcon,
  FieldValidIcon
} from './icons'


const FIELD_BASE = formatClassList([
  'bg-stone-200',
  'block',
  'border-0',
  'border-l-4',
  'focus:ring-0',
  'mt-1',
  'pl-3',
  'pr-10',
  'rounded-lg',
  'shadow-md',
  'text-stone-600',
  'text-lg',
  'w-full'
])

const FIELD = formatClassList([
  FIELD_BASE,
  'border-purple-300',
  'focus:border-fuchsia-500'
])

const FIELD_ERROR = formatClassList([
  FIELD_BASE,
  'border-red-300',
  'focus:border-red-500'
])

const FIELD_VALID = formatClassList([
  FIELD_BASE,
  'border-green-300',
  'focus:border-green-500'
])

const ERROR_HELP_TEXT = formatClassList([
  'delay-75',
  'duration-200',
  'error',
  'mt-1',
  'opacity-100',
  'text-red-600',
  'text-sm',
  'transition-opacity'
])

const LABEL = formatClassList([
  'text-stone-600',
  'text-sm',
  'tracking-wider'
])

export type TextAreaProps = {
  errorMessage: object,
  errors: FieldErrors,
  handleChange: Function,
  label: string,
  touchedFields: object
}

const TextArea = ({
  errorMessage,
  errors,
  handleChange,
  label,
  touchedFields,
  ...props
}: TextAreaProps) => {
  label = label.toLowerCase()

  return (
    <label className="block">
      <span className={LABEL}>{label.charAt(0).toUpperCase() + label.slice(1)}</span>
      <div className="relative">
        <textarea
          {...props}
          className={
            !JSON.stringify(touchedFields[label]) // field is pristine
              ? FIELD
              : errors[label]
                ? FIELD_ERROR
                : FIELD_VALID
          }
          aria-required="true"
          rows={4}
          name={label}
          onChange={() => handleChange}
        />
        {
          !JSON.stringify(touchedFields[label]) // field is pristine
            ? <FieldEmptyIcon className="top-2" />
            : errors[label]
              ? <FieldErrorIcon className="top-2" />
              : <FieldValidIcon className="top-2" />
        }
      </div>
      <p
        className={
          errors[label]
            ? joinStrings(' ', ERROR_HELP_TEXT, 'opacity-100')
            : joinStrings(' ', ERROR_HELP_TEXT, 'opacity-0')
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
