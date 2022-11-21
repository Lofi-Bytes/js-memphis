import * as React from 'react'


const ErrorMessage = () => (
  <div role="alert" className="flex items-start justify-start w-full p-4 mt-6 text-lg text-stone-600 bg-red-100 border-l-4 border-red-500 rounded-lg shadow-md">
    <i className="mt-1 text-3xl text-red-500 fa-regular fa-times-circle" />
    <div className="ml-4">
      <p className="text-2xl leading-relaxed tracking-wider text-stone-600">Oops!</p>
      <p className="mt-3 text-lg leading-relaxed tracking-wider text-stone-600">Well that's embarassing. Something went wrong. Please try to submit your message again.</p>
    </div>
  </div>
)

export default ErrorMessage
