import * as React from 'react'

import FooterComponent from './footer'

export default {
  title: 'Footer',
  component: FooterComponent,
}

const Template = (args) => (
  <FooterComponent {...args} />
)

export const Footer = Template.bind({})
Footer.args = {
  className: 'mt-8',
  location: '/'
}
