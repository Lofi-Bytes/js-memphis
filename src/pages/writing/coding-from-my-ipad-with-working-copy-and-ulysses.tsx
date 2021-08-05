import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { formatDate } from '../../utils/utils'

import Alert from '../../components/alert'
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

const CodingFromMyIpadWithWorkingCopyAndUlysses = ({
  location
}: PageProps) => {
  const postData = useStaticQuery(graphql`
    query CodingFromMyIpadWithWorkingCopyAndUlyssesQuery {
      allPostsJson(
        filter: {
          title: {
            eq: "Coding from my iPad with Working Copy and Ulysses"
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
        metaTitle="Coding from my iPad with Working Copy and Ulysses"
        metaDescription=""
        canonicalUrl="https://jillian.dev/writing/coding-from-my-ipad-with-working-copy-and-ulysses"
      />
      <Banner
        align="left"
        title={title}
        subtitle={subtitle}
        date={formattedDate}
      />
      <Main>
        <Section background="opaque" className="mb-8 -mt-12">
          <div className="max-w-xs px-10 py-2 -ml-10 rounded shadow-lg bg-rose-300 w-max sm:px-24 sm:-ml-24 sm:max-w-none">
            <h2 className="text-xl tracking-wide text-gray-800 sm:text-2xl">Markdown</h2>
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

          <h3 className="mt-10 text-xl tracking-wide text-gray-700">Motivation</h3>
          <p className="mt-8 leading-relaxed tracking-wider text-gray-600">
            As a software developer and someone who voice codes, I prefer to work in a command line / simple text editor environment as often as possible. GUI’s and things I have to click around in add an extra layer of friction for me. Blogging and note taking is no exception to this rule. A lot of folx use Markdown on their blogs as a means of keeping their content framework agnostic. To be clear, I do not use Markdown on my blog / personal site. For my personal work, I experience too much frustration with the “one size fits all” approach to building websites with Markdown or a CMS. I’d rather retain the flexibility of writing in HTML/CSS/JS. My website aside, I appreciate the simplicity of writing in Markdown. So most of my writing process does actually happen in Markdown.
          </p>
          <p className="mt-4 leading-relaxed tracking-wider text-gray-600">
            As a professional software developer, I also spend far too many hours in front of my computer. So I would like the option to read, research, or write in a different setting away from my desk, like chilling in my hammock with my iPad. Since I keep my developers journal, blog, etc in Markdown files and in version control, I set out to find a way to access these files and edit them on my iPad. At first I was thinking I would have to do something elaborate like <TextLink
              to="https://github.com/cdr/code-server"
              external={true}
            >
              host VS Code on a server
            </TextLink> or edit the files in my browser on GitHub. Luckily, it didn’t take too much digging to discover there’s already some good native software for the iPad that makes setting up this workflow easy. This workflow consists of a combination of two apps, Working Copy and Ulysses (or iA Writer). It should be noted that you can make it work with only Working Copy if you are in a pinch, it has a built in editor, but the writing experience just won’t be quite as eloquent.
          </p>
          <h3 className="mt-10 text-xl tracking-wide text-gray-700">Version Control</h3>
          <p className="mt-4 leading-relaxed tracking-wider text-gray-600">
            Working Copy is a “powerful Git client for iOS that clones, edits, commits, pushes, & more”. If you are already familiar with Git then getting up to speed with it won’t take you but a few minutes. Its just a GUI for Git. It’s a very well thought out app and it works really well. It has more features than I think I’ll ever fully take advantage of.
          </p>
          <h3 className="mt-10 text-xl tracking-wide text-gray-700">Markdown Editor</h3>
          <p className="mt-4 leading-relaxed tracking-wider text-gray-600">
            Ulysses is a Markdown writing app. Writing in Markdown is becoming increasingly popular and for good reason. Markdown is a very easy to learn <TextLink
              to="https://en.wikipedia.org/wiki/Markup_language"
              external={true}
            >
              markup language
            </TextLink>. Once you understand the basics, it becomes faster to format your document inline as you write rather than fiddling with myriad formatting buttons like one would find in MS Word or Google Docs. The nice thing about a tool like Ulysses is that it renders the results of your Markdown formatting right inside of the editor as you work. It eliminates the need to have an editor window and a render window open side-by-side; as would be the case with a more traditional tool like VS Code. Though I haven’t vetted it yet, iA writer looks like a compelling alternative to Ulysses.
          </p>
          <h3 className="mt-10 text-xl tracking-wide text-gray-700">Edit in Place</h3>
          <p className="mt-4 leading-relaxed tracking-wider text-gray-600">
            What makes these apps work so seamlessly together is that they both take an *edit in place* approach to working with files. This is in contrast to a lot of iOS apps that tend to keep files locked away and exclusively accessible only from within the respective app. More and more apps are taking on the edit in place mindset which has become more justified since Apple introduced Files on the iOS operating system. So with Working Copy you can set up a folder and initialize a Git repository within it. You can use either Working Copy or Ulysses to create and edit files. Any changes to a file shows immediately in both apps.
          </p>
          <h3 className="mt-10 text-xl tracking-wide text-gray-700">Conclusion</h3>
          <p className="mt-4 leading-relaxed tracking-wider text-gray-600">
            So far I’ve really been enjoying the freedom and flexibility that this workflow is affording to me. The writing experience with Ulysses is focused and distraction free. The clarity that comes from writing in a proper Markdown editor on the iPad cannot be overstated. It is helping to remove my “writers block” and enabling me to be more productive by alleviating the fatigue I experience from being tethered to my computer for long hours.
          </p>
          <p className="mt-4 leading-relaxed tracking-wider text-gray-600">
            Working Copy is a powerful yet easy to use Git client. It makes it easy to keep any work that I do on my iPad in version control. This allows me to keep my work in sync across all my devices and ensures that work from one device doesn’t accidentally overwrite work from another.
          </p>
          <NextPrev path={path} className="mt-10" />
        </Section>
        <Section background="opaque" className="mb-8">
          <h3 className="text-xl tracking-wide text-gray-700 ">Tags</h3>
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

export default CodingFromMyIpadWithWorkingCopyAndUlysses
