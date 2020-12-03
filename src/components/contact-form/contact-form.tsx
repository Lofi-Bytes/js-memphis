import React, { FC, ReactNode } from 'react'

import Button from '../button'


const ContactForm: FC<ReactNode> = ({}: ReactNode) => {
  return (
    <React.Fragment>
      <h2 className="text-gray-800 text-2xl tracking-wide">Say Hello</h2>
      <div className="grid grid-cols-1 gap-6 mt-8">
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
          type="button"
        >
          Submit
        </Button>
      </div>
    </React.Fragment>
  )
}

export default ContactForm
