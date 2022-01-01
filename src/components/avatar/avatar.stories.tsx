import * as React from 'react'

import AvatarComponent from './avatar'

export default {
  title: 'Pure Components/Avatar',
  component: AvatarComponent,
}

const Template = (args) => <AvatarComponent {...args} />

export const Avatar = Template.bind({})
Avatar.args = {
  alt: `Jillian's avatar`,
  className: 'mt-28',
  src: `'gatsby-plugin-image' not currently supported in Storybook`
}
