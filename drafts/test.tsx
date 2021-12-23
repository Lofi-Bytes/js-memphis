import React, { ReactNode } from 'react'

import { formatClassList } from '../../utils/utils'

import Button from '../../components/button'


const FIELD_BASE: string = `
  bg-stone-200
  block
  border-0
  border-l-4
  focus:ring-0
  mt-1
  pl-3
  pr-10
  rounded-lg
  shadow-md
  text-stone-600
  text-lg
  w-full
`

const FIELD: string = `
  ${FIELD_BASE}
  border-purple-300
  focus:border-fuchsia-500
`

const GRID: string = `
  gap-4
  grid
  grid-cols-1
  mt-8
`

const LABEL: string = `
  text-stone-600
  text-sm
  tracking-wider
`

const ContactForm = ({}: ReactNode) => {
  const formattedField: string = formatClassList(FIELD)
  const formattedLabel: string = formatClassList(LABEL)
  const formattedGrid: string = formatClassList(GRID)

  return (
    <form name="contact">
      <div className={formattedGrid}>
        <input type="hidden" name="form-contact" value="contact" />
        <label className="block">
          <span className={formattedLabel}>Name</span>
          <div className="relative">
            <input
              className={formattedField}
              aria-required="true"
              placeholder=""
              type="text"
              name="name"
            />
          </div>
        </label>
        <label className="block">
          <span className={formattedLabel}>Email</span>
          <div className="relative">
            <input
              className={formattedField}
              aria-required="true"
              type="email"
              name="email"
            />
          </div>
        </label>
        <label className="block">
          <span className={formattedLabel}>Message</span>
          <div className="relative">
            <textarea
              className={formattedField}
              aria-required="true"
              rows={4}
              name="message"
            />
          </div>
        </label>
        <Button
          action="primary"
          className="mt-4"
          title="Submit"
          type="submit"
          role="button"
          disabled={false}
        >
          Send your message
        </Button>
      </div>
    </form>
  )
}

export default ContactForm
