import * as React from 'react'
import Prism from 'prismjs'

import CodeContainerComponent from './code-container'

export default {
  title: 'Compound Components/Code Container',
  component: CodeContainerComponent,
}

const Template = (args) => {
  React.useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  })
  return(
    <CodeContainerComponent {...args} />
  )
}

const initialForm: string =
`<form name="contact">
  <div className="grid grid-cols-1 gap-6">
    <label className="block">
      <span className="text-stone-700">Name</span>
      <input type="text" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-stone-200 focus:ring-0 focus:border-black" placeholder="">
    </label>
    <label className="block">
      <span className="text-stone-700">Email</span>
      <input type="email" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-stone-200 focus:ring-0 focus:border-black" placeholder="">
    </label>
    <label className="block">
      <span className="text-stone-700">Message</span>
      <textarea className="mt-0 block w-full px-0.5 border-0 border-b-2 border-stone-200 focus:ring-0 focus:border-black" rows={4}></textarea>
    </label>
  </div>
</div>`

export const CodeContainer = Template.bind({})
CodeContainer.args = {
  children: initialForm,
  language: "tsx",
  lineNumbers: true,
  tag: "TSX",
  tagBgColor: "#007ACC",
  tagColor: "text-white"
}
