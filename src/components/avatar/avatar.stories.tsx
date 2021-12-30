import * as React from 'react'

import Avatar from './avatar'

export default {
  title: 'Avatar',
  component: Avatar,
}

const Template = (args) => <Avatar {...args} />

export const Info = Template.bind({})

Info.args = {
  className: 'mt-28',
  src: '../../images/bsfSBbsadfK.jpg'
}
