import * as React from 'react'

import ParagraphComponent from './paragraph'

export default {
  title: 'Pure Components/Paragraph',
  component: ParagraphComponent,
}

const Template = (args) => <ParagraphComponent {...args} />

export const Paragraph = Template.bind({})
Paragraph.args = {
  className: 'mt-8',
  children: "Hi there! Welcome to my creative space. I love building beautiful and accessible digital experiences and I am passionate about technology that advances social and environmental justice."
}
