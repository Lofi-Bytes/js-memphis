import * as React from 'react'

import Alert from './alert'

export default {
  title: 'Alert',
  component: Alert,
}

const Template = (args) => <Alert {...args} />

export const Info = Template.bind({})
Info.args = {
  children: `This series assumes the reader has an intermediate understanding of React JS and Tailwind CSS.`,
  className: ''
}
