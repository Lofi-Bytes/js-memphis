import * as React from 'react'

import HeaderComponent from './header'

export default {
  title: 'Compound Components/Header',
  component: HeaderComponent,
}

const Template = (args) => (
  <HeaderComponent {...args} />
)

export const Header = Template.bind({})
Header.args = {
  className: 'mt-8',
  location: '/'
}
