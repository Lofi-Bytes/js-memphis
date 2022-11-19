import * as React from 'react'

import JumbotronComponent from './jumbotron'

export default {
  title: 'Pure Components/Jumbotron',
  component: JumbotronComponent,
}

const Template = (args) => <JumbotronComponent {...args} />

export const Jumbotron = Template.bind({})
Jumbotron.args = {
  title: <span className="text-5xl leading-relaxed js md:text-6xl md:leading-loose lg:text-7xl lg:leading-relaxed">Jillian Serenity</span>,
  subtitle:
    <>
      <span className="hidden sm:inline-block">
        <i className="text-pink-200 fa-light fa-narwhal" />&nbsp;&nbsp;
      </span>
      <span
        className="text-transparent bg-gradient-to-r bg-clip-text from-pink-200 via-fuchsia-200 to-blue-200"
        style={{color: 'transparent'}}
      >
        Bit-Casting Technomancer
      </span>
      <span className="hidden sm:inline-block">
        &nbsp;&nbsp;<i className="text-blue-200 fa-light fa-alien-monster" />
      </span>
      <span className="block sm:hidden">
        <i className="fa-light fa-narwhal text-rose-300" />&nbsp;&nbsp;<i className="text-teal-300 fa-light fa-alien-monster" />
      </span>
    </>
}
