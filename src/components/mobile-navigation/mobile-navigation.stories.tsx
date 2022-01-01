import * as React from 'react'

import MobileNavigationComponent from './mobile-navigation'

export default {
  title: 'Pure Components/Mobile Navigation',
  component: MobileNavigationComponent,
}

const Template = (args) => (
  <MobileNavigationComponent {...args} />
)

export const MobileNavigation = Template.bind({})
MobileNavigation.args = {
  className: 'mt-8',
  location: '/'
}
