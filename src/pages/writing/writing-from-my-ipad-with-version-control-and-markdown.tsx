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

const WritingFromMyIpadWithVersionControlAndMarkdown = ({
  location
}: PageProps) => {
  const postData = useStaticQuery(graphql`
    query WritingFromMyIpadWithVersionControlAndMarkdownQuery {
      allPostsJson(
        filter: {
          title: {
            eq: "Writing from my iPad with Version Control and Markdown"
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
        metaTitle="Writing from my iPad with Version Control and Markdown"
        metaDescription=""
        canonicalUrl="https://jillian.dev/writing/writing-from-my-ipad-with-version-control-and-markdown"
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
            <h2 className="text-xl tracking-wide text-purple-900 sm:text-2xl">My new writing workflow</h2>
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
            As a software developer, and someone who voice codes, I prefer to work in a command line / simple text editor environment when possible. <TextLink
              to="https://en.wikipedia.org/wiki/Graphical_user_interface"
              external={true}
            >GUI’s</TextLink> and things I have to click around in add an extra layer of friction for me. Software such as MS Word or Google Docs are overbearingly <TextLink
              to="https://en.wikipedia.org/wiki/WYSIWYG"
              external={true}
            >WYSIWYG</TextLink> and mouse click-dependent, they get in the way.
          </p>
          <p className="mt-4 leading-relaxed tracking-wider text-gray-600">
            As an alternative to WYSIWYG editors, A lot of folx use <TextLink
              to="https://en.wikipedia.org/wiki/Markdown"
              external={true}
            >Markdown</TextLink>  on their blogs as a means of keeping their content framework-agnostic. I am among those who appreciate the simplicity of writing in Markdown. To be clear, I do not use Markdown on my blog / personal site. For my personal work, I experience too much frustration with the “one size fits all” approach to building websites with Markdown or a <TextLink
              to="https://en.wikipedia.org/wiki/Content_management_system"
              external={true}
            >CMS</TextLink>. I’d prefer to retain the flexibility of writing in <TextLink
              to="https://en.wikipedia.org/wiki/HTML"
              external={true}
            >HTML</TextLink>/<TextLink
              to="https://en.wikipedia.org/wiki/CSS"
              external={true}
            >CSS</TextLink>/<TextLink
              to="https://en.wikipedia.org/wiki/JavaScript"
              external={true}
            >JS</TextLink>. Aside from publishing my works on my website, much of my writing process does indeed happen in Markdown, and I treat my Markdown files as the source of truth with version control.
          </p>
          <p className="mt-4 leading-relaxed tracking-wider text-gray-600">
            As a professional software developer, I spend far too many hours in front of my computer. Thus, I would like the option to read, research, or write in a different setting away from my desk, such as chilling in my hammock with my iPad. Since I keep my developer's journal, blog, and other notes in Markdown files and in version control, I set out to find a way to access these files and edit them on my iPad. At first, I was thinking I would have to do something elaborate like <TextLink
              to="https://github.com/cdr/code-server"
              external={true}
            >host VS Code on a server</TextLink> or edit the files in my browser on <TextLink
              to="https://en.wikipedia.org/wiki/GitHub"
              external={true}
            >GitHub</TextLink>. Luckily, it didn’t take too much digging to discover there’s good native software for the iPad that makes setting up this workflow easy. This workflow consists of a combination of two apps, <TextLink
              to="https://workingcopyapp.com"
              external={true}
            >Working Copy</TextLink> and <TextLink
              to="https://ulysses.app"
              external={true}
            >Ulysses</TextLink> (or <TextLink
              to="https://ia.net/writer"
              external={true}
            >iA Writer</TextLink>).
          </p>
          <h3 className="mt-10 text-xl tracking-wide text-gray-700">Version Control</h3>
          <p className="mt-4 leading-relaxed tracking-wider text-gray-600">
            Working Copy is a “powerful <TextLink
              to="https://en.wikipedia.org/wiki/Git"
              external={true}
            >Git</TextLink> client for <TextLink
              to="https://en.wikipedia.org/wiki/IOS"
              external={true}
            >iOS</TextLink> that clones, edits, commits, pushes, & more”. It's an intuitive GUI for Git. If you are familiar with Git, then getting up to speed with Working Copy won’t take you but a few minutes.
          </p>
          <p className="mt-4 leading-relaxed tracking-wider text-gray-600">
            Furthermore, it should be noted that Working Copy has a built-in editor. Hence, this workflow can work with Working Copy alone, but the writing experience won’t be as eloquent.
          </p>
          <h3 className="mt-10 text-xl tracking-wide text-gray-700">Edit in Place</h3>
          <p className="mt-4 leading-relaxed tracking-wider text-gray-600">
            The key to using version control with any file editing app on the iPad is that the apps used must take an *edit in place* approach to working with files. This contrasts with many iOS apps that tend to keep files locked away and exclusively accessible from within the respective app. More and more apps are taking on the edit in place mindset, which has become more justified since Apple introduced <TextLink
              to="https://apps.apple.com/us/app/files/id1232058109"
              external={true}
            >
              Files
            </TextLink> on iOS. As a result, you can initialize a Git repository with Working Copy, and then you can use an *edit in place* file editor of choice to create and edit files within the repository. Any changes to a file shows immediately in all apps that are used to access the file.
          </p>
          <h3 className="mt-10 text-xl tracking-wide text-gray-700">Markdown</h3>
          <p className="mt-4 leading-relaxed tracking-wider text-gray-600">
            Writing in Markdown is becoming increasingly popular, and for good reason. Markdown is an easy <TextLink
              to="https://en.wikipedia.org/wiki/Markup_language"
              external={true}
            >
              markup language
            </TextLink> to learn. Once you understand the basics of Markdown, it becomes faster to format your document inline as you write, rather than fiddling with the myriad of formatting buttons like one would find in MS Word or Google Docs.
          </p>
          <h3 className="mt-10 text-xl tracking-wide text-gray-700">Markdown Editors</h3>
          <p className="mt-4 leading-relaxed tracking-wider text-gray-600">
            The nice thing about Markdown editors is that they have clever ways of quasi-rendering the results of your Markdown syntax right inside the editor as you work. It eliminates the urge to have an editor window and a render window open side-by-side; as would be the case with a more traditional tool like <TextLink
              to="https://en.wikipedia.org/wiki/Visual_Studio_Code"
              external={true}
            >
              VS Code
            </TextLink>.
          </p>
          <p className="mt-4 leading-relaxed tracking-wider text-gray-600">
            Markdown editors take a minimalist approach. They intentionally stay out of the way to offer a focused, distraction-free writing experience.
          </p>
          <h4 className="mt-10 text-lg tracking-wide text-gray-700">Ulysses</h4>
          <p className="mt-4 leading-relaxed tracking-wider text-gray-600">
            Ulysses is a fantastic Markdown editor. The biggest complaint folx have with Ulysses is that it is subscription-based; $6 per month or $50 per year. It’s intuitive and easy to use, and it comes with a full-featured file manager built in. It feels natural to work with for anyone who is used to using Finder on macOS or Explorer on Windows, and is a standard expectation if one is used to working with code editors on their computer. The built-in file manager makes perfect sense when working with Git repositories.
          </p>
          <p className="mt-4 leading-relaxed tracking-wider text-gray-600">
            Ulysses has other useful built-in features such as providing statistics on your document such as word count, character count, time spent working, and it auto-generates an outline of your document. It has a powerful spelling, style, and grammar checker built-in; but it is a web-based service, so it will ask you for access permission before it is enabled.
          </p>
          <p className="mt-4 leading-relaxed tracking-wider text-gray-600">
            Ulysses is also customizable. Not so much that you will spend loads of time fiddling with settings, but enough to get it feeling good for a persons individual needs/preferences.
          </p>
          <h4 className="mt-10 text-lg tracking-wide text-gray-700">iA Writer</h4>
          <p className="mt-4 leading-relaxed tracking-wider text-gray-600">
            iA Writer is a compelling alternative to Ulysses. It offers some similar features to Ulysses, but is noticeably less feature full. It is not as customizable as Ulysses, making it feel more opinionated. My favorite of the features that it does offer is the built-in style checker. I like how it shows in real time if you are using superfluous language, helping one to write more concisely. iA Writer comes at a one-time cost of $30. I think a lot of folx prefer iA Writer since it is not subscription-based.
          </p>
          <p className="mt-4 leading-relaxed tracking-wider text-gray-600">
            My biggest complaint about iA Writer is that the file management is weak. You have to pull in one file at a time, instead of having access to an entire directory. All files that you have opened with iA Writer appear in one flat list, lacking hierarchical organization. In other words, there’s not a built-in file manager. You really have to dig for the file you would like to edit.
          </p>
          <p className="mt-4 leading-relaxed tracking-wider text-gray-600">
            While frustrating, iA Writer’s lack of a file manager is not a showstopper. iA is otherwise pleasant to use, and it *edits files in place*, so it fits into the Git workflow.
          </p>
          <h3 className="mt-10 text-xl tracking-wide text-gray-700">Conclusion</h3>
          <p className="mt-4 leading-relaxed tracking-wider text-gray-600">
            In my time using this workflow, I’ve been enjoying the freedom and flexibility that it is affording. I feel like I am controlling my files, not the apps. The best part is that this workflow is platform-agnostic and everything is in version control.
          </p>
          <p className="mt-4 leading-relaxed tracking-wider text-gray-600">
            The clarity that comes from writing in a proper Markdown editor on the iPad cannot be overstated. The writing experience is focused and distraction free. It is helping to overcome my “writers block” and enabling me to be more productive by alleviating the fatigue I experience from being tethered to my computer for long hours.
          </p>
          <p className="mt-4 leading-relaxed tracking-wider text-gray-600">
            Working Copy is a powerful yet easy to use Git client. It makes keeping any work that I do on my iPad in version control simple. This allows me to keep my work in sync across all my devices and ensures that work from one device doesn’t accidentally overwrite work from another.
          </p>
          <p className="mt-4 leading-relaxed tracking-wider text-gray-600">
            There is a plethora of Markdown editor options available. Not all allow *edit in place*, making them unsuitable for this workflow. Of the Markdown editors that I tested, Ulysses and iA Writer were my preferred options. However, Ulysses is the best choice with its file management capabilities, rich set of features, and customizability.
          </p>
          <p className="mt-4 leading-relaxed tracking-wider text-gray-600">
            Both Ulysses and iA Writer have native apps for iOS and macOS, potentially making them a great choice to use across all devices. Although I have not tested the desktop apps yet, I expect them to be functionally similar to their iOS counterparts. Thus far, I’ve been using VS Code for writing in Markdown on my Mac which has worked well enough, but lacking the helpful features that these apps offer.
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

export default WritingFromMyIpadWithVersionControlAndMarkdown
