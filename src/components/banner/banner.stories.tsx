import * as React from 'react'

import Banner from './banner'

export default {
  title: 'Banner',
  component: Banner,
}

const Template = (args) => (
  <div className='mt-8 ml-28'>
    <Banner {...args} />
  </div>
)

export const Cyan = Template.bind({})
Cyan.args = {
  className: '',
  color: 'cyan',
  children: `@tailwindcss/forms`
}

export const Rose = Template.bind({})
Rose.args = {
  className: '',
  color: 'rose',
  children: `Invited talks`
}

export const Purple = Template.bind({})
Purple.args = {
  className: '',
  color: 'purple',
  children: `Software development`
}

export const Yellow = Template.bind({})
Yellow.args = {
  className: '',
  color: 'yellow',
  children: `Say hello`
}
