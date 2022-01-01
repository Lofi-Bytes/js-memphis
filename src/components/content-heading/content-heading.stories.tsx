import * as React from 'react'

import ContentHeadingComponent from './content-heading'

export default {
  title: 'Pure Components/Content Heading',
  component: ContentHeadingComponent,
}

const Template = (args) => (
  <ContentHeadingComponent {...args} />
)

export const ContentHeading = Template.bind({})
ContentHeading.args = {
  className: 'mt-8',
  children: `What is a design system?`
}
