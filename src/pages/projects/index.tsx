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
          }
        }
      }
    }
  `)
  return (
    <Layout location={location}>
      <SEO
        metaTitle=""
        metaDescription=""
        canonicalUrl=""
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
        <Section className="mb-8 -mt-12">
          <div className="max-w-xs px-10 py-2 mb-10 -ml-10 bg-yellow-300 rounded shadow-lg w-max sm:px-24 sm:-ml-24 sm:max-w-none">
            <h2 className="text-xl tracking-wide text-gray-800 sm:text-2xl">BSCS Science Learning</h2>
          </div>
          {
            projectsListData.allProjectsJson.edges.map((edge, index) => {
              const path = edge.node.path
              const title = edge.node.title
              const excerpt = edge.node.excerpt
              const date = edge.node.date
              const tags = edge.node.tags
              const section = edge.node.section

              return(
                <React.Fragment key={`item-${index}`}>
                  {section === 'bscs'
                    ?
                      <a
                        href={path}
                        className="block overflow-hidden transition shadow-lg hover:shadow-xl focus:shadow-xl active:shadow-sm duration-200 rounded-lg bg-lightBlue-100 focus:bg-lightBlue-50 focus:outline-none focus:ring-4  focus:ring-lightBlue-200 focus:ring-opacity-50 border-0 border-l-4 border-lightBlue-300 hover:border-lightBlue-400 focus:border-lightBlue-500 transform focus:-translate-y-0.5 hover:-translate-y-0.5 active:translate-y-0.5 ease-in-out group px-8 py-6 mb-8"
                      >
                        <h2 className="w-11/12 text-xl tracking-wider text-gray-800">
                          {title}
                        </h2>
                        <p className="font-serif text-sm italic tracking-wider text-gray-600">
                          {date}
                        </p>
                        <p className="mt-4 text-base tracking-wider text-gray-600">
                          {excerpt}
                        </p>
                        <div className="flex flex-wrap mt-4">
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
                      </a>
                    : null
                  }
                </React.Fragment>
              )
            })
          }
        </Section>
        <Section className="mb-8">
          <div className="max-w-xs px-10 py-2 mb-10 -ml-10 rounded shadow-lg bg-rose-300 w-max sm:px-24 sm:-ml-24 sm:max-w-none">
            <h2 className="text-xl tracking-wide text-gray-800 sm:text-2xl">CodePen</h2>
          </div>
          {
            projectsListData.allProjectsJson.edges.map((edge, index) => {
              const path = edge.node.path
              const title = edge.node.title
              const excerpt = edge.node.excerpt
              const date = edge.node.date
              const tags = edge.node.tags
              const section = edge.node.section

              return(
                <React.Fragment key={`item-${index}`}>
                  {section === 'codepen'
                    ?
                      <a
                        href={path}
                        className="block overflow-hidden transition shadow-lg hover:shadow-xl focus:shadow-xl active:shadow-sm duration-200 rounded-lg bg-lightBlue-100 focus:bg-lightBlue-50 focus:outline-none focus:ring-4  focus:ring-lightBlue-200 focus:ring-opacity-50 border-0 border-l-4 border-lightBlue-300 hover:border-lightBlue-400 focus:border-lightBlue-500 transform focus:-translate-y-0.5 hover:-translate-y-0.5 active:translate-y-0.5 ease-in-out group px-8 py-6 mb-8"
                      >
                        <h2 className="w-11/12 text-xl tracking-wider text-gray-800">
                          {title}
                        </h2>
                        <p className="font-serif text-sm italic tracking-wider text-gray-600">
                          {date}
                        </p>
                        <p className="mt-4 text-base tracking-wider text-gray-600">
                          {excerpt}
                        </p>
                        <div className="flex flex-wrap mt-4">
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
                      </a>
                    : null
                  }
                </React.Fragment>
              )
            })
          }
        </Section>
      </Main>
    </Layout>
  )
}

export default ProjectsListPage
