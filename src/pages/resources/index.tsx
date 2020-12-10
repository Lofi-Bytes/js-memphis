import React, { FC, ReactNode } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import Banner from '../../components/banner'
import Layout from '../../components/layout'
import SEO from '../../components/seo'


const ProjectsListPage: FC<ReactNode> = () => {
  const resourcesListData = useStaticQuery(graphql`
    query ResourcesListNavigationQuery {
      allResourcesJson {
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
            <span className="text-teal-100">
            Projects
            </span>
            <span className="hidden sm:inline-block">
              &nbsp;&nbsp;<i className="fal fa-code-merge text-teal-300"></i>
            </span>
            <span className="block sm:hidden">
              <i className="fal fa-code-branch text-amber-300"></i>&nbsp;&nbsp;<i className="fal fa-code-merge text-teal-300"></i>
            </span>
          </>
        }
        // subTitle={<span className="text-teal-100">Designer, Full Stack Developer, &amp; Tech Lead</span>}
      />
      <main className="min-h-screen max-w-screen-lg m-auto mb-20">
        <section className="bg-gray-100 rounded-xl p-8 w-11/12 sm:w-3/4 mx-auto -mt-12 mb-8 sm:mb-10 shadow-xl relative">
          {
            resourcesListData.allResourcesJson.edges.map((edge, index) => {
              const path = edge.node.path
              const title = edge.node.title
              const excerpt = edge.node.excerpt
              const date = edge.node.date
              const tags = edge.node.tags
              return(
                <React.Fragment key={`item-${index}`}>
                  <Link
                    to={path}
                    className="block overflow-hidden transition shadow-lg hover:shadow-xl focus:shadow-xl active:shadow-sm duration-200 rounded-lg bg-amber-100 focus:bg-amber-50 focus:outline-none focus:ring-4  focus:ring-amber-200 focus:ring-opacity-50 border-0 border-l-4 border-amber-300 hover:border-amber-400 focus:border-amber-500 transform focus:-translate-y-0.5 hover:-translate-y-0.5 active:translate-y-0.5 ease-in-out group px-8 py-6 mb-8"
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
                            <div className="rounded-full bg-amber-50 shadow group-focus:bg-amber-100 transition ease-in-out w-max py-1 px-3 mr-3">
                              <p className="text-sm tracking-widert text-amber-700">
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
        </section>
      </main>
    </Layout>
  )
}

export default ProjectsListPage
