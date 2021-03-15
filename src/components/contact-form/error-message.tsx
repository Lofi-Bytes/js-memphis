import React, { ReactNode } from 'react'


const ErrorMessage = ({}: ReactNode) => (
  <div role="alert" className="flex items-start justify-start w-full p-4 mt-6 text-lg text-gray-600 bg-red-100 border-l-4 border-red-500 rounded-lg shadow-md">
    <i className="mt-1 text-3xl text-red-500 far fa-times-circle"></i>
    <div className="ml-4">
      <p className="text-2xl leading-relaxed tracking-wider text-gray-600">Oops!</p>
      <p className="mt-3 text-lg leading-relaxed tracking-wider text-gray-600">Well that's embarassing. Something went wrong. Please try to submit your message again.</p>
    </div>
  </div>
)

export default ErrorMessage
