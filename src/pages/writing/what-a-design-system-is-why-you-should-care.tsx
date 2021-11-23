import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { formatDate } from '../../utils/utils'

import Banner from '../../components/banner'
import Layout from '../../components/layout'
import TextLink from '../../components/text-link'
import Section from '../../components/section'
import SEO from '../../components/seo'
import Main from '../../components/main'
import NextPrev from '../../components/next-prev'
import Tag from '../../components/tag'
import Button from '../../components/button'

import Prism from 'prismjs'

type PageProps = {
  location: Location
}

const WhatADesignSystemIsWhyYouShouldCare = ({
  location
}: PageProps) => {
  const postData = useStaticQuery(graphql`
    query WhatADesignSystemIsWhyYouShouldCareQuery {
      allPostsJson(
        filter: {
          title: {
            eq: "What a design system is, and why you should care"
          },
          subtitle: {
            eq: ""
          }
        }
      ) {
        edges {
          node {
            title
            subtitle
            date
            tags
            path
          }
        }
      }
    }
  `)

  const title = postData.allPostsJson.edges[0].node.title
  const subtitle = postData.allPostsJson.edges[0].node.subtitle
  const date = postData.allPostsJson.edges[0].node.date
  const path = postData.allPostsJson.edges[0].node.path
  const tags = postData.allPostsJson.edges[0].node.tags

  const formattedDate = formatDate(date)

  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  })

  return (
    <Layout location={location}>
      <SEO
        metaTitle="What a design system is, and why you should care"
        metaDescription=""
        canonicalUrl="https://jillian.dev/writing/what-a-design-system-is-why-you-should-care"
      />
      <Banner
        align="left"
        title={title}
        subtitle={subtitle}
        date={formattedDate}
      />
      <Main>
        <Section background="opaque" className="mb-8 -mt-12">
          <div className="max-w-xs px-10 py-2 -ml-10 bg-purple-300 rounded shadow-lg w-max sm:px-24 sm:-ml-24 sm:max-w-none">
            <h2 className="text-xl tracking-wide text-purple-900 sm:text-2xl">Thinking in systems</h2>
          </div>

          <Button
            action="tertiary"
            disabled={false}
            title="Back to article list"
            className="mt-10 w-max"
            to="/writing"
          >
            <i className="fas fa-arrow-left" />&nbsp;&nbsp;Back to article list
          </Button>

          <p className="mt-8 leading-relaxed tracking-wider text-stone-600">
            Have you ever wondered how some designers, developers, or companies get their digital products to look so “designed” and professional? They seem to captivate and earn a user's trust instantaneously. Have you had trouble getting your own digital products to reach the same level of presentational nirvana? Have you asked yourself what could possibly be their secret? If only you, too, could get your hands on some of that magic sauce.
          </p>
          <p className="mt-4 leading-relaxed tracking-wider text-stone-600">
            So, what is this design Qi that only the most elite and practiced of developers and designers can tap into? Are you ready for it? I’m about to tell you the answer to life, the universe, and everything. No, the answer is not 42. The answer is <em>systems</em>. Specifically <em>design systems</em>.
          </p>
          <h3 className="mt-10 text-xl tracking-wide text-stone-700">What is a design system?</h3>
          <p className="mt-4 leading-relaxed tracking-wider text-stone-600">
            <TextLink
              to="https://www.merriam-webster.com/dictionary/system"
              title="Merriam-Webster"
              external={true}
            >Merriam-Webster</TextLink> defines a system as an organized set of doctrines, ideas, or principles usually intended to explain the arrangement or working of a systematic whole.
          </p>
          <p className="mt-4 leading-relaxed tracking-wider text-stone-600">
            In her book, <TextLink
              to="https://www.amazon.com/dp/1603580557/"
              title="Thinking in Systems"
              external={true}
            >Thinking in Systems</TextLink>, Donella H. Meadows explains that a system must consist of three kinds of things:
          </p>
          <ul className="pb-4 mt-4 leading-relaxed tracking-wider list-disc list-inside text-stone-600 sm:px-8">
            <li>elements,</li>
            <li>interconnections, and</li>
            <li>a function or purpose</li>
          </ul>
          <p className="mt-4 leading-relaxed tracking-wider text-stone-600">
            Applying this to digital products:
          </p>
          <p className="mt-4 leading-relaxed tracking-wider text-stone-600">
            <strong>A design system is a source of truth for designing and building digital products consisting of foundations (color, typography, depth, spacing, …) and guidelines (patterns, shared practices, components, …).</strong>
          </p>
          <h3 className="mt-10 text-xl tracking-wide text-stone-700">Design systems in practice</h3>
          <p className="mt-4 leading-relaxed tracking-wider text-stone-600">
            Tools such as <TextLink
              to="https://developer.mozilla.org/en-US/docs/Web/CSS"
              title="Cascading Style Sheets (CSS)"
              external={true}
            >CSS</TextLink> and <TextLink
              to="https://www.figma.com"
              title="Figma"
              external={true}
            >Figma</TextLink> give us thousands of options regarding space, color, type, depth, and much more. This affords us incredible latitude for creativity. However, this much flexibility can also be a curse. Building a digital product without constraints is like trying to build a straw house from individual strands of hay, or trying to build a brick house from individual grains of sand. You wouldn’t do it because it would be torture. You would instead start by compressing the hay into bales, or the sand into bricks. Perhaps you would have a handful of sizes of bales or bricks to choose from for different parts of the house. These constraints, defined in advance, make the process of assembling the house considerably less complicated.
          </p>
          <p className="mt-4 leading-relaxed tracking-wider text-stone-600">
            Likewise, by placing constraints on your design choices in advance, a design system eliminates decision fatigue, enforces consistency, and speeds up the design and engineering process. By reducing your cognitive load, a design system will leave you with more time and energy to spend on other aspects of your digital product, such as creating better user interactions.
          </p>
          <h3 className="mt-10 text-xl tracking-wide text-stone-700">Working with systems</h3>
          <p className="mt-4 leading-relaxed tracking-wider text-stone-600">
            Digital companies invest a ton of resources to build and maintain their design systems. They do this because their design system (usually) defines their brand. Their design system will inform their brand guidelines and visual identity such as how the company relates to its customers through color, voice, tone, and product interactions. However, you don’t have to be a multi-billion dollar company, or a design firm, with large teams of specialists to apply design system sensibilities to your projects.
          </p>
          <p className="mt-4 leading-relaxed tracking-wider text-stone-600">
            There are many open-source options available. Some are a better choice than others. For example, <em>Material Design</em>, a <em>design language</em> (synonymous with design system) created and open sourced by Google, is a popular choice among the uninitiated. This design language, published at <TextLink
              to="https://material.io/design"
              title="Material Design"
              external={true}
            >https://material.io/design</TextLink>, is used to inform many open-source <TextLink
              to="https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/"
              title="The difference between a framework and a library"
              external={true}
            ><em>frameworks</em> and <em>component libraries</em></TextLink>. If you choose to use it, your projects will inevitably look like they were built by Google. Gross 🤢
          </p>
          <h3 className="mt-10 text-xl tracking-wide text-stone-700">Begin with solid foundations</h3>
          <p className="mt-4 leading-relaxed tracking-wider text-stone-600">
            As mentioned previously, a design system will consist of both <em>foundations</em> and <em>guidelines</em>. Many of a design system’s guidelines; such as patterns, best practices, and components; are built from the system's foundations. Foundations are the fundamental building blocks of a design system. Defining these foundations can require painstaking effort with a strong attention to detail. Some open-source libraries aim to provide these foundations for you out of the box, while being careful not to inflict any guideline-related patterns.
          </p>
          <p className="mt-4 leading-relaxed tracking-wider text-stone-600">
            <TextLink
              to="https://tailwindcss.com"
              title="Tailwind CSS"
              external={true}
            >Tailwind CSS</TextLink> is one such system. Often referred to as a “utility only” CSS library<sup>1</sup>, Tailwind CSS is one of the most elegant open-source systems. It provides a complete suite of foundations out of the box. As an additional bonus, Tailwind’s class names double perfectly as (<TextLink
              to="https://spectrum.adobe.com/page/design-tokens/#Global-tokens"
              title="Global tokens"
              external={true}
            >global</TextLink>) design tokens. Tailwind’s docs are a joy to use, and non-tech people such as designers pick up the class names (tokens) with ease. Once you set up Tailwind with your customizations, such as your brand's color pallets, one can readily jump right into building brand guidelines. There are other utility class libraries available, but my experience is that none are as polished as Tailwind.
          </p>
          <p className="mt-4 leading-relaxed tracking-wider text-stone-600">
            <TextLink
              to="http://getbem.com"
              title="Block Element Modifier (BEM)"
              external={true}
            >Block Element Modifier (BEM)</TextLink> libraries such as Bootstrap, Foundation, Bulma, and Materialize are not suitable starting points for a design system. They offer limited, if any at all, utilities that serve as proper foundations. They are highly opinionated and come with their own pre-defined guidelines baked in. To get them to align with your brand identity, you will waste many hours undoing/overriding their out-of-the-box behavior.
          </p>
          <p className="mt-4 leading-relaxed tracking-wider text-stone-600">
            Tailwind does <TextLink
              to="https://tailwindcss.com/docs/extracting-components#extracting-component-classes-with-apply"
              title="Extracting component classes with @apply"
              external={true}
            >come with a pattern</TextLink> that allows you to create your own BEM-like class names — some design systems implement <TextLink
              to="https://spectrum.adobe.com/page/design-tokens/#Alias-tokens"
              title="Alias tokens"
              external={true}
            >alias tokens</TextLink> and <TextLink
              to="https://spectrum.adobe.com/page/design-tokens/#Component-specific-tokens"
              title="Component-specific tokens"
              external={true}
            >component-specific tokens</TextLink>. I don’t use this approach in my personal projects whenever possible. If you need an HTML/CSS-only component library, you will use this pattern. Otherwise, component-based architecture allows you to circumvent the additional effort. <TextLink
              to="https://jillian.dev"
              title=""
              external={true}
            >Just add the relevant class lists (global tokens) to string literals assigned to constants at the top of your components</TextLink>. This approach creates a CSS-in-JS-like experience without the CSS-in-JS runtime overhead.
          </p>
          <h3 className="mt-10 text-xl tracking-wide text-stone-700">Conclusion</h3>
          <p className="mt-4 leading-relaxed tracking-wider text-stone-600">
            Working with a proper system will make you a better designer/developer. Limiting your options in advance will reduce decision fatigue, enforce consistency — especially when working with a team, and reduce development time. If you have never worked with a system, starting from scratch can be daunting. If you are new to systems, I recommended that you start with an existing high-quality foundational system to familiarize yourself with systems thinking. Lastly, To get a feel for what makes a design system successful, take time to explore the design systems of some of the world's most successful brands:
          </p>
          <ul className="pb-4 mt-4 leading-relaxed tracking-wider list-inside text-stone-600 sm:px-8">
            <li>
              <TextLink
                to="https://designsystemsrepo.com/design-systems"
                title="Design Systems Gallery; a comprehensive and curated list of design systems, style guides and pattern libraries that you can use for inspiration."
                external={true}
              >
                https://designsystemsrepo.com/design-systems
              </TextLink>
            </li>
            <li>
              <TextLink
                to="https://adele.uxpin.com"
                title="Adele; the repository of publicly available design systems and pattern libraries"
                external={true}
              >
                https://adele.uxpin.com
              </TextLink>
            </li>
          </ul>
          <p className="mt-4 leading-relaxed tracking-wider text-stone-600">
            In this article we’ve explored what a design system is, and how it can improve one’s process. But one still needs good design sensibilities in order to build a system and then put it to good use. Check back soon for my upcoming series on practical and easy to implement design best practices.
          </p>
          <p className="mt-8 text-xs leading-relaxed tracking-wider text-stone-600">
            <sup>1</sup>Referring to Tailwind CSS as a “utility only CSS framework” doesn’t do it justice. Doing so causes those who don’t understand the beauty of systems to underestimate its value.
          </p>
          <NextPrev path={path} className="mt-10" />
        </Section>
        <Section background="opaque" className="mb-8">
          <h3 className="text-xl tracking-wide text-stone-700 ">Tags</h3>
          <div className="flex flex-wrap mt-4">
            {
              tags.map((tag, index) => {
                return (
                  <Tag
                    card={false}
                    key={`item-${index}`}
                    tagColor="purple"
                  >
                    {tag}
                  </Tag>
                )
              })
            }
          </div>
        </Section>
      </Main>
    </Layout>
  )
}

export default WhatADesignSystemIsWhyYouShouldCare
