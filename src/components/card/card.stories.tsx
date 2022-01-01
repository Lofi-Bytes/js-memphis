import * as React from 'react'

import Card from './card'
import Tag from '../tag'

import data from '../../data/talks.json'

export default {
  title: 'Card',
  component: Card,
}

const Template = (args) => <Card {...args} />

export const Rose = Template.bind({})
Rose.args = {
  className: '',
  color: 'rose',
  date: data[0].date,
  excerpt: data[0].excerpt,
  external: true,
  published: data[0].published,
  tags: data[0].tags.map((tag, index) => {
    return (
      <Tag
        card={true}
        key={`item-${index}`}
        tagColor="rose"
      >
        {tag}
      </Tag>
    )
  }),
  title: data[0].title,
  to: data[0].path
}

export const Sky = Template.bind({})
Sky.args = {
  className: '',
  color: 'sky',
  date: data[0].date,
  excerpt: data[0].excerpt,
  external: false,
  published: data[0].published,
  tags: data[0].tags.map((tag, index) => {
    return (
      <Tag
        card={true}
        key={`item-${index}`}
        tagColor="sky"
      >
        {tag}
      </Tag>
    )
  }),
  title: data[0].title,
  to: data[0].path
}

export const Violet = Template.bind({})
Violet.args = {
  className: '',
  color: 'violet',
  date: data[0].date,
  excerpt: data[0].excerpt,
  external: false,
  published: data[0].published,
  tags: data[0].tags.map((tag, index) => {
    return (
      <Tag
        card={true}
        key={`item-${index}`}
        tagColor="violet"
      >
        {tag}
      </Tag>
    )
  }),
  title: data[0].title,
  to: data[0].path
}

export const Yellow = Template.bind({})
Yellow.args = {
  className: '',
  color: 'yellow',
  date: data[0].date,
  excerpt: data[0].excerpt,
  external: false,
  published: data[0].published,
  tags: data[0].tags.map((tag, index) => {
    return (
      <Tag
        card={true}
        key={`item-${index}`}
        tagColor="yellow"
      >
        {tag}
      </Tag>
    )
  }),
  title: data[0].title,
  to: data[0].path
}
