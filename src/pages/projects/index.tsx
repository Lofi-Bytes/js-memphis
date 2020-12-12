import React, { FC, ReactNode } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import Banner from '../../components/banner'
import Layout from '../../components/layout'
import TextLink from '../../components/text-link'
import Section from '../../components/section'
import SEO from '../../components/seo'
import Main from '../../components/main'


const ProjectsListPage: FC<ReactNode> = () => {
  const projectsListData = useStaticQuery(graphql`
    query ProjectsListNavigationQuery {
      allProjectsJson {
        edges {
          node {
            title
            path
            excerpt
            date
            tags
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO
        metaTitle=""
        metaDescription=""
        canonicalUrl=""
      />
      <Banner
        title={
          <>
            <span className="hidden sm:inline-block">
              <i className="fal fa-code-branch text-amber-300"></i>&nbsp;&nbsp;
            </span>
            <span>
            Projects
            </span>
            <span className="hidden sm:inline-block">
              &nbsp;&nbsp;<i className="fal fa-code-merge text-teal-300"></i>
            </span>
            <span className="block sm:hidden mt-3">
              <i className="fal fa-code-branch text-amber-300"></i>&nbsp;&nbsp;<i className="fal fa-code-merge text-teal-300"></i>
            </span>
          </>
        }
        // subTitle={<span className="text-teal-100">Designer, Full Stack Developer, &amp; Tech Lead</span>}
      />
      <Main>
        <Section className="-mt-12 mb-8">
          {
            projectsListData.allProjectsJson.edges.map((edge, index) => {
              const path = edge.node.path
              const title = edge.node.title
              const excerpt = edge.node.excerpt
              const date = edge.node.date
              const tags = edge.node.tags
              return(
                <React.Fragment key={`item-${index}`}>
                  <Link
                    to={path}
                    className="block overflow-hidden transition shadow-lg hover:shadow-xl focus:shadow-xl active:shadow-sm duration-200 rounded-lg bg-lightBlue-100 focus:bg-lightBlue-50 focus:outline-none focus:ring-4  focus:ring-lightBlue-200 focus:ring-opacity-50 border-0 border-l-4 border-lightBlue-300 hover:border-lightBlue-400 focus:border-lightBlue-500 transform focus:-translate-y-0.5 hover:-translate-y-0.5 active:translate-y-0.5 ease-in-out group px-8 py-6 mb-8"
                  >
                    <h2 className="tracking-wider text-gray-800 text-xl">
                      {title}
                    </h2>
                    <p className="font-serif italic text-sm tracking-wider text-gray-600">
                      {date}
                    </p>
                    <p className="text-base tracking-wider text-gray-600 mt-4">
                      {excerpt}
                    </p>
                    <div className="mt-4 flex flex-wrap">
                      {
                        tags.map((tag, index) => {
                          return (
                            <div className="rounded-full bg-lightBlue-50 shadow group-focus:bg-lightBlue-100 transition ease-in-out w-max py-1 px-3 mr-3">
                              <p className="text-sm tracking-widert text-lightBlue-700">
                                {tag}
                              </p>
                            </div>
                          )
                        })
                      }
                    </div>
                  </Link>
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
