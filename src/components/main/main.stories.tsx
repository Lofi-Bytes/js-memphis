import * as React from 'react'

import MainComponent from './main'

export default {
  title: 'Pure Components/Main',
  component: MainComponent,
}

const Template = (args) => <MainComponent {...args} />

export const Main = Template.bind({})
Main.args = {

}
