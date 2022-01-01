import * as React from 'react'

import CodeTag from './code-tag'

export default {
  title: 'Pure Components/Code Tag',
  component: CodeTag,
}

const Template = (args) => (
  <CodeTag {...args} />
)

export const JS = Template.bind({})
JS.args = {
  tag: "JS",
  tagBgColor: "#f7df1e",
  tagColor: "text-stone-900"
}

export const TSX = Template.bind({})
TSX.args = {
  tag: "TSX",
  tagBgColor: "#007ACC",
  tagColor: "text-stone-50"
}

export const ZSH = Template.bind({})
ZSH.args = {
  tag: "ZSH",
  tagBgColor: "bg-stone-900",
  tagColor: "text-stone-50"
}
