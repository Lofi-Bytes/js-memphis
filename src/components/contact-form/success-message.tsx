import React, { ReactNode } from 'react'


const SuccessMessage = ({}: ReactNode) => (
  <div role="alert" className="flex flex-col items-center justify-center w-full p-6 mt-8 text-lg text-gray-600 bg-gray-200 rounded-lg shadow-md h-96">
    <i className="w-full text-6xl text-center text-green-500 far fa-check-circle sm:text-7xl md:text-8xl"></i>
    <p className="mt-4 text-xl leading-relaxed tracking-wider text-center text-gray-600 sm:text-2xl md:text-3xl">Thank you!</p>
    <p className="mt-4 text-base leading-relaxed tracking-wider text-gray-600 sm:text-lg md:text-xl">I have received your message.</p>
  </div>
)

export default SuccessMessage