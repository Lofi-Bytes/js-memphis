import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { formatDate } from '../../utils/utils'

import Banner from '../../components/banner/banner'
import Button from '../../components/button'
import H3 from '../../components/content-heading'
import Jumbotron from '../../components/jumbotron'
import Layout from '../../components/layout'
import Main from '../../components/main'
import NextPrev from '../../components/next-prev'
import P from '../../components/paragraph'
import Section from '../../components/section'
import SEO from '../../components/seo'
import Tag from '../../components/tag'
import TextLink from '../../components/text-link'
import UL from '../../components/unordered-list'

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

  React.useEffect(() => {
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
      <Jumbotron
        align="left"
        title={title}
        subtitle={subtitle}
        date={formattedDate}
      />
      <Main>
        <Section background="opaque" className="mb-8 -mt-12">
          <Banner color="rose">
            Thinking in systems
          </Banner>

          <Button
            action="tertiary"
            className="mt-10 w-max"
            disabled={false}
            role="link"
            title="Back to article list"
            to="/writing"
          >
            <i className="fa-solid fa-arrow-left" aria-hidden="true" />&nbsp;&nbsp;Back to article list
          </Button>

          <P className="mt-8">
            Have you ever wondered how some designers, developers, or companies get their digital products to look so “designed” and professional? They seem to captivate and earn a user's trust instantaneously. Have you had trouble getting your own digital products to reach the same level of presentational nirvana? Have you asked yourself what could possibly be their secret? If only you, too, could get your hands on some of that magic sauce.
          </P>
          <P className="mt-4">
            So, what is this design Qi that only the most elite and practiced of developers and designers can tap into? Are you ready for it? I'm about to tell you the answer to life, the universe, and everything. No, the answer is not 42. The answer is <em>systems</em>. Specifically <em>design systems</em>.
          </P>
          <H3 className="mt-10">What is a design system?</H3>
          <P className="mt-4">
            <TextLink
              to="https://www.merriam-webster.com/dictionary/system"
              title="Merriam-Webster"
              outbound={true}
            >Merriam-Webster</TextLink> defines a system as an organized set of doctrines, ideas, or principles usually intended to explain the arrangement or working of a systematic whole.
          </P>
          <P className="mt-4">
            In her book, <TextLink
              to="https://www.amazon.com/dp/1603580557/"
              title="Thinking in Systems"
              outbound={true}
            >Thinking in Systems</TextLink>, Donella H. Meadows explains that a system must consist of three kinds of things:
          </P>
          <UL className="mt-4 pb-4 list-disc list-inside">
            <li>elements,</li>
            <li>interconnections, and</li>
            <li>a function or purpose</li>
          </UL>
          <P className="mt-4">
            Applying this to digital products:
          </P>
          <P className="mt-4">
            <strong>A design system is a source of truth for designing and building digital products consisting of foundations (color, typography, depth, spacing, …) and guidelines (patterns, shared practices, components, …).</strong>
          </P>
          <H3 className="mt-10">Design systems in practice</H3>
          <P className="mt-4">
            Tools such as <TextLink
              to="https://developer.mozilla.org/en-US/docs/Web/CSS"
              title="Cascading Style Sheets (CSS)"
              outbound={true}
            >CSS</TextLink> and <TextLink
              to="https://www.figma.com"
              title="Figma"
              outbound={true}
            >Figma</TextLink> give us thousands of options regarding space, color, type, depth, and much more. This affords us incredible latitude for creativity. However, this much flexibility can also be a curse. Building a digital product without constraints is like trying to build a straw house from individual strands of hay, or trying to build a brick house from individual grains of sand. You wouldn't do it because it would be torture. You would instead start by compressing the hay into bales, or the sand into bricks. Perhaps you would have a handful of sizes of bales or bricks to choose from for different parts of the house. These constraints, defined in advance, make the process of assembling the house considerably less complicated.
          </P>
          <P className="mt-4">
            Likewise, by placing constraints on your design choices in advance, a design system eliminates decision fatigue, enforces consistency, and speeds up the design and engineering process. By reducing your cognitive load, a design system will leave you with more time and energy to spend on other aspects of your digital product, such as creating better user interactions.
          </P>
          <H3 className="mt-10">Working with systems</H3>
          <P className="mt-4">
            Digital companies invest a ton of resources to build and maintain their design systems. They do this because their design system (usually) defines their brand. Their design system will inform their brand guidelines and visual identity such as how the company relates to its customers through color, voice, tone, and product interactions. However, you don't have to be a multi-billion dollar company, or a design firm, with large teams of specialists to apply design system sensibilities to your projects.
          </P>
          <P className="mt-4">
            There are many open-source options available. Some are a better choice than others. For example, <em>Material Design</em>, a <em>design language</em> (synonymous with design system) created and open sourced by Google, is a popular choice among the uninitiated. This design language, published at <TextLink
              to="https://material.io/design"
              title="Material Design"
              outbound={true}
            >https://material.io/design</TextLink>, is used to inform many open-source <TextLink
              to="https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/"
              title="The difference between a framework and a library"
              outbound={true}
            ><em>frameworks</em> and <em>component libraries</em></TextLink>. If you choose to use it, your projects will inevitably look like they were built by Google. Gross 🤢
          </P>
          <H3 className="mt-10">Begin with solid foundations</H3>
          <P className="mt-4">
            As mentioned previously, a design system will consist of both <em>foundations</em> and <em>guidelines</em>. Many of a design system's guidelines; such as patterns, best practices, and components; are built from the system's foundations. Foundations are the fundamental building blocks of a design system. Defining these foundations can require painstaking effort with a strong attention to detail. Some open-source libraries aim to provide these foundations for you out of the box, while being careful not to inflict any guideline-related patterns.
          </P>
          <P className="mt-4">
            <TextLink
              to="https://tailwindcss.com"
              title="Tailwind CSS"
              outbound={true}
            >Tailwind CSS</TextLink> is one such system. Often referred to as a “utility only” CSS library<sup>1</sup>, Tailwind CSS is one of the most elegant open-source systems. It provides a complete suite of foundations out of the box. As an additional bonus, Tailwind's class names double perfectly as (<TextLink
              to="https://spectrum.adobe.com/page/design-tokens/#Global-tokens"
              title="Global tokens"
              outbound={true}
            >global</TextLink>) design tokens. Tailwind's docs are a joy to use, and non-tech people such as designers pick up the class names (tokens) with ease. Once you set up Tailwind with your customizations, such as your brand's color pallets, one can readily jump right into building brand guidelines. There are other utility class libraries available, but my experience is that none are as polished as Tailwind.
          </P>
          <P className="mt-4">
            <TextLink
              to="http://getbem.com"
              title="Block Element Modifier (BEM)"
              outbound={true}
            >Block Element Modifier (BEM)</TextLink> libraries such as Bootstrap, Foundation, Bulma, and Materialize are not suitable starting points for a design system. They offer limited, if any at all, utilities that serve as proper foundations. They are highly opinionated and come with their own pre-defined guidelines baked in. To get them to align with your brand identity, you will waste many hours undoing/overriding their out-of-the-box behavior.
          </P>
          <P className="mt-4">
            Tailwind does <TextLink
              to="https://tailwindcss.com/docs/extracting-components#extracting-component-classes-with-apply"
              title="Extracting component classes with @apply"
              outbound={true}
            >come with a pattern</TextLink> that allows you to create your own BEM-like class names — some design systems implement <TextLink
              to="https://spectrum.adobe.com/page/design-tokens/#Alias-tokens"
              title="Alias tokens"
              outbound={true}
            >alias tokens</TextLink> and <TextLink
              to="https://spectrum.adobe.com/page/design-tokens/#Component-specific-tokens"
              title="Component-specific tokens"
              outbound={true}
            >component-specific tokens</TextLink>. I don't use this approach in my personal projects whenever possible. If you need an HTML/CSS-only component library, you will use this pattern. Otherwise, component-based architecture allows you to circumvent the additional effort. <TextLink
              to="https://jillian.dev"
              title=""
              outbound={true}
            >Just add the relevant class lists (global tokens) to string literals assigned to constants at the top of your components</TextLink>. This approach creates a CSS-in-JS-like experience without the CSS-in-JS runtime overhead.
          </P>
          <H3 className="mt-10">Conclusion</H3>
          <P className="mt-4">
            Working with a proper system will make you a better designer/developer. Limiting your options in advance will reduce decision fatigue, enforce consistency — especially when working with a team, and reduce development time. If you have never worked with a system, starting from scratch can be daunting. If you are new to systems, I recommended that you start with an existing high-quality foundational system to familiarize yourself with systems thinking. Lastly, To get a feel for what makes a design system successful, take time to explore the design systems of some of the world's most successful brands:
          </P>
          <UL className="mt-4 pb-4 list-inside">
            <li>
              <TextLink
                to="https://designsystemsrepo.com/design-systems"
                title="Design Systems Gallery; a comprehensive and curated list of design systems, style guides and pattern libraries that you can use for inspiration."
                outbound={true}
              >
                https://designsystemsrepo.com/design-systems
              </TextLink>
            </li>
            <li>
              <TextLink
                to="https://adele.uxpin.com"
                title="Adele; the repository of publicly available design systems and pattern libraries"
                outbound={true}
              >
                https://adele.uxpin.com
              </TextLink>
            </li>
          </UL>
          <P className="mt-4">
            In this article we've explored what a design system is, and how it can improve one's process. But one still needs good design sensibilities in order to build a system and then put it to good use. Check back soon for both; a series on practical and easy to implement design best practices and a series on design system implementation.
          </P>
          <P className="mt-8 text-xs">
            <sup>1</sup>Referring to Tailwind CSS as a “utility only CSS framework” is a travesty. Once one looks at it in the context of systems, its elegance cannot be overstated.
          </P>
          <NextPrev path={path} className="mt-10" />
        </Section>
        <Section background="opaque" className="mb-8">
          <H3>Tags</H3>
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
