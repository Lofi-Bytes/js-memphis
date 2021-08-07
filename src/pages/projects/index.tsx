import React, { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Banner from '../../components/banner'
import Layout from '../../components/layout'
import Section from '../../components/section'
import SEO from '../../components/seo'
import Main from '../../components/main'
import Tag from '../../components/tag'


type PageProps = {
  location: Location
}

const ProjectsListPage: FC<PageProps> = ({
  location
}: PageProps) => {
  const projectsListData = useStaticQuery(graphql`
    query ProjectsListNavigationQuery {
      allProjectsJson {
        edges {
          node {
            title
            path
            excerpt
            date
            section
            tags
            active
          }
        }
      }
    }
  `)
  return (
    <Layout location={location}>
      <SEO
        metaTitle="Jillian's projects"
        metaDescription="Peruse a selection of my recent projects."
        canonicalUrl="https://jillian.dev/projects/"
      />
      <Banner
        title={
          <>
            <span className="hidden sm:inline-block">
              <i className="text-4xl leading-relaxed fal fa-code-branch text-amber-300 md:text-5xl md:leading-loose lg:text-5xl lg:leading-relaxed" />&nbsp;&nbsp;
            </span>
            <span className="text-5xl leading-relaxed js md:text-6xl md:leading-loose lg:text-7xl lg:leading-relaxed">
            Selected Projects
            </span>
            <span className="hidden sm:inline-block">
              &nbsp;&nbsp;<i className="text-4xl leading-relaxed text-teal-300 fal fa-code-merge md:text-5xl md:leading-loose lg:text-5xl lg:leading-relaxed" />
            </span>
            <span className="block mt-3 sm:hidden">
              <i className="text-4xl fal fa-code-branch text-amber-300" />&nbsp;&nbsp;<i className="text-4xl text-teal-300 fal fa-code-merge" />
            </span>
          </>
        }
        // subTitle={<span className="text-teal-100">Designer, Full Stack Developer, &amp; Tech Lead</span>}
      />
      <Main>
        <Section background="transparent" className="mb-8 -mt-12">
          <div className="max-w-xs px-10 py-2 mb-10 -ml-10 rounded shadow-lg bg-cyan-300 w-max sm:px-24 sm:-ml-24 sm:max-w-none">
            <h2 className="text-xl tracking-wide text-cyan-900 sm:text-2xl">GitHub</h2>
          </div>
          <div className="grid grid-flow-row-dense gap-8">
          {
            projectsListData.allProjectsJson.edges.map((edge, index) => {
              const path = edge.node.path
              const title = edge.node.title
              const excerpt = edge.node.excerpt
              const date = edge.node.date
              const tags = edge.node.tags
              const section = edge.node.section
              const active = edge.node.active

              return(
                <React.Fragment key={`item-${index}`}>
                  {section === 'github' && active
                    ?
                      <a
                        href={path}
                        className="block overflow-hidden transition shadow-lg hover:shadow-xl focus:shadow-xl active:shadow-sm duration-200 rounded-lg bg-lightBlue-100 focus:bg-lightBlue-50 focus:outline-none focus:ring-4  focus:ring-lightBlue-200 focus:ring-opacity-50 border-0 border-l-8 border-lightBlue-400 hover:border-lightBlue-500 focus:border-lightBlue-600 transform focus:-translate-y-0.5 hover:-translate-y-0.5 active:translate-y-0.5 ease-in-out group px-4 sm:px-8 py-6"
                      >
                        <h2 className="w-11/12 text-xl tracking-wider text-lightBlue-900">
                          {title}
                        </h2>
                        <p className="font-serif text-sm italic tracking-wider text-lightBlue-700">
                          {date}
                        </p>
                        <div className="flex flex-wrap mt-2">
                          {
                            tags.map((tag, index) => {
                              return (
                                <Tag
                                  card={true}
                                  key={`item-${index}`}
                                  tagColor="lightBlue"
                                >
                                  {tag}
                                </Tag>
                              )
                            })
                          }
                        </div>
                        <p className="mt-4 text-base tracking-wider text-lightBlue-700">
                          {excerpt}
                        </p>
                        <div className="flex flex-row-reverse">
                          <i className="mt-2 text-xl transition duration-150 ease-in-out border-b-4 rounded-sm border-lightBlue-100 fas fa-arrow-right text-lightBlue-400 group-focus:text-lightBlue-600 group-hover:text-lightBlue-500 group-hover:border-lightBlue-500 group-focus:border-lightBlue-600 pb-0.5" />
                        </div>
                      </a>
                    : null
                  }

                  {section === 'github' && !active
                    ?
                      <div
                        className="block px-4 py-6 overflow-hidden border-0 border-l-8 rounded-lg shadow-lg bg-lightBlue-100 border-lightBlue-400 sm:px-8"
                      >
                        <h2 className="w-11/12 text-xl tracking-wider text-lightBlue-900">
                          {title}
                        </h2>
                        <p className="font-serif text-sm italic tracking-wider text-lightBlue-700">
                          {date}
                        </p>
                        <div className="flex flex-wrap mt-2">
                          {
                            tags.map((tag, index) => {
                              return (
                                <Tag
                                  card={true}
                                  key={`item-${index}`}
                                  tagColor="lightBlue"
                                >
                                  {tag}
                                </Tag>
                              )
                            })
                          }
                        </div>
                        <p className="mt-4 text-base tracking-wider text-lightBlue-700">
                          {excerpt}
                        </p>
                        <div className="flex flex-row-reverse">
                          <div className="mt-2 px-3 py-0.5 rounded-lg shadow w-max bg-lightBlue-50">
                            <span className="w-11/12 text-lg tracking-wider text-lightBlue-600">
                              Coming soon
                            </span>
                          </div>
                        </div>
                      </div>
                    : null
                  }
                </React.Fragment>
              )
            })
          }
          </div>
        </Section>
        <Section background="transparent" className="mb-8">
          <div className="max-w-xs px-10 py-2 mb-10 -ml-10 rounded shadow-lg bg-rose-300 w-max sm:px-24 sm:-ml-24 sm:max-w-none">
            <h2 className="text-xl tracking-wide text-rose-900 sm:text-2xl">CodePen</h2>
          </div>
          <div className="grid grid-flow-row-dense gap-8">
          {
            projectsListData.allProjectsJson.edges.map((edge, index) => {
              const path = edge.node.path
              const title = edge.node.title
              const excerpt = edge.node.excerpt
              const date = edge.node.date
              const tags = edge.node.tags
              const section = edge.node.section
              const active = edge.node.active

              return(
                <React.Fragment key={`item-${index}`}>
                  {section === 'codepen' && active
                    ?
                      <a
                        href={path}
                        className="block overflow-hidden transition shadow-lg hover:shadow-xl focus:shadow-xl active:shadow-sm duration-200 rounded-lg bg-rose-100 focus:bg-rose-50 focus:outline-none focus:ring-4  focus:ring-rose-200 focus:ring-opacity-50 border-0 border-l-8 border-rose-400 hover:border-rose-500 focus:border-rose-600 transform focus:-translate-y-0.5 hover:-translate-y-0.5 active:translate-y-0.5 ease-in-out group px-4 sm:px-8 py-6"
                      >
                        <h2 className="w-11/12 text-xl tracking-wider text-rose-900">
                          {title}
                        </h2>
                        <p className="font-serif text-sm italic tracking-wider text-rose-700">
                          {date}
                        </p>
                        <div className="flex flex-wrap mt-2">
                          {
                            tags.map((tag, index) => {
                              return (
                                <Tag
                                  card={true}
                                  key={`item-${index}`}
                                  tagColor="rose"
                                >
                                  {tag}
                                </Tag>
                              )
                            })
                          }
                        </div>
                        <p className="mt-4 text-base tracking-wider text-rose-700">
                          {excerpt}
                        </p>
                        <div className="flex flex-row-reverse">
                          <i className="mt-2 text-xl transition duration-150 ease-in-out border-b-4 rounded-sm border-rose-100 fas fa-arrow-right text-rose-400 group-focus:text-rose-600 group-hover:text-rose-500 group-hover:border-rose-500 group-focus:border-rose-600 pb-0.5" />
                        </div>
                      </a>
                    : null
                  }

                  {section === 'codepen' && !active
                    ?
                      <div
                        className="block px-4 py-6 overflow-hidden border-0 border-l-8 rounded-lg shadow-lg bg-rose-100 border-rose-400 sm:px-8"
                      >
                        <h2 className="w-11/12 text-xl tracking-wider text-rose-900">
                          {title}
                        </h2>
                        <p className="font-serif text-sm italic tracking-wider text-rose-700">
                          {date}
                        </p>
                        <div className="flex flex-wrap mt-2">
                          {
                            tags.map((tag, index) => {
                              return (
                                <Tag
                                  card={true}
                                  key={`item-${index}`}
                                  tagColor="rose"
                                >
                                  {tag}
                                </Tag>
                              )
                            })
                          }
                        </div>
                        <p className="mt-4 text-base tracking-wider text-rose-700">
                          {excerpt}
                        </p>
                        <div className="flex flex-row-reverse">
                          <div className="mt-2 px-3 py-0.5 rounded-lg shadow w-max bg-rose-50">
                            <span className="w-11/12 text-lg tracking-wider text-rose-600">
                              Coming soon
                            </span>
                          </div>
                        </div>
                      </div>
                    : null
                  }
                </React.Fragment>
              )
            })
          }
          </div>
        </Section>
        <Section background="transparent" className="mb-8">
          <div className="max-w-xs px-10 py-2 mb-10 -ml-10 bg-yellow-300 rounded shadow-lg w-max sm:px-24 sm:-ml-24 sm:max-w-none">
            <h2 className="text-xl tracking-wide text-yellow-900 sm:text-2xl">BSCS Science Learning</h2>
          </div>
          <div className="grid grid-flow-row-dense gap-8">
          {
            projectsListData.allProjectsJson.edges.map((edge, index) => {
              const path = edge.node.path
              const title = edge.node.title
              const excerpt = edge.node.excerpt
              const date = edge.node.date
              const section = edge.node.section
              const tags = edge.node.tags
              const active = edge.node.active

              return(
                <React.Fragment key={`item-${index}`}>
                  {section === 'bscs' && active
                    ?
                      <a
                        href={path}
                        className="block overflow-hidden transition shadow-lg hover:shadow-xl focus:shadow-xl active:shadow-sm duration-200 rounded-lg bg-yellow-100 focus:bg-yellow-50 focus:outline-none focus:ring-4  focus:ring-yellow-200 focus:ring-opacity-50 border-0 border-l-8 border-yellow-500 hover:border-yellow-600 focus:border-yellow-600 transform focus:-translate-y-0.5 hover:-translate-y-0.5 active:translate-y-0.5 ease-in-out group px-4 sm:px-8 py-6"
                      >
                        <h2 className="w-11/12 text-xl tracking-wider text-yellow-900">
                          {title}
                        </h2>
                        <p className="font-serif text-sm italic tracking-wider text-yellow-700">
                          {date}
                        </p>
                        <div className="flex flex-wrap mt-2">
                          {
                            tags.map((tag, index) => {
                              return (
                                <Tag
                                  card={true}
                                  key={`item-${index}`}
                                  tagColor="yellow"
                                >
                                  {tag}
                                </Tag>
                              )
                            })
                          }
                        </div>
                        <p className="mt-4 text-base tracking-wider text-yellow-700">
                          {excerpt}
                        </p>
                        <div className="flex flex-row-reverse">
                          <i className="mt-2 text-xl transition duration-150 ease-in-out border-b-4 rounded-sm border-yellow-100 fas fa-arrow-right text-yellow-500 group-focus:text-yellow-600 group-hover:text-yellow-600 group-hover:border-yellow-600 group-focus:border-yellow-600 pb-0.5" />
                        </div>
                      </a>
                    : null
                  }

                  {section === 'bscs' && !active
                    ?
                      <div
                        className="block px-4 py-6 overflow-hidden bg-yellow-100 border-0 border-l-8 border-yellow-400 rounded-lg shadow-lg sm:px-8"
                      >
                        <h2 className="w-11/12 text-xl tracking-wider text-yellow-900">
                          {title}
                        </h2>
                        <p className="font-serif text-sm italic tracking-wider text-yellow-700">
                          {date}
                        </p>
                        <div className="flex flex-wrap mt-2">
                          {
                            tags.map((tag, index) => {
                              return (
                                <Tag
                                  card={true}
                                  key={`item-${index}`}
                                  tagColor="yellow"
                                >
                                  {tag}
                                </Tag>
                              )
                            })
                          }
                        </div>
                        <p className="mt-4 text-base tracking-wider text-yellow-700">
                          {excerpt}
                        </p>
                        <div className="flex flex-row-reverse">
                          <div className="mt-2 px-3 py-0.5 rounded-lg shadow w-max bg-yellow-50">
                            <span className="w-11/12 text-lg tracking-wider text-yellow-700">
                              Coming soon
                            </span>
                          </div>
                        </div>
                      </div>
                    : null
                  }
                </React.Fragment>
              )
            })
          }
          </div>
        </Section>
      </Main>
    </Layout>
  )
}

export default ProjectsListPage
