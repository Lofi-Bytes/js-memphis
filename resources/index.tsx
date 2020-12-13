import React, { FC, ReactNode } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import Banner from '../../components/banner'
import Layout from '../../components/layout'
import Section from '../../components/section'
import SEO from '../../components/seo'
import Main from '../../components/main'


const ProjectsListPage: FC<ReactNode> = () => {
  const resourcesListData = useStaticQuery(graphql`
    query ResourcesListNavigationQuery {
      allResourcesJson {
        edges {
          node {
            title
            href
            author
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
              <i className="fal fa-gem text-fuchsia-300"></i>&nbsp;&nbsp;
            </span>
            <span className="js text-5xl leading-relaxed md:text-6xl md:leading-loose lg:text-7xl lg:leading-relaxed">
            My Resources
            </span>
            <span className="hidden sm:inline-block">
              &nbsp;&nbsp;<i className="fal fa-gem text-lime-300"></i>
            </span>
            <span className="block sm:hidden mt-3">
              <i className="fal fa-gem text-fuchsia-300"></i>&nbsp;&nbsp;<i className="fal fa-gem text-lime-300"></i>
            </span>
          </>
        }
        subTitle={<span className="text-teal-100">A list of helpful how-to's.</span>}
      />
      <Main>
        <Section className="-mt-12 mb-8">
          <div className="grid grid-cols-2 gap-4" >
            {
              resourcesListData.allResourcesJson.edges.map((edge, index) => {
                const href = edge.node.href
                const title = edge.node.title
                const author = edge.node.author
                const tags = edge.node.tags
                return(
                  <React.Fragment key={`item-${index}`}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block overflow-hidden transition shadow-lg hover:shadow-xl focus:shadow-xl active:shadow-sm duration-200 rounded-lg bg-amber-100 focus:bg-amber-50 focus:outline-none focus:ring-4  focus:ring-amber-200 focus:ring-opacity-50 border-0 border-l-4 border-amber-300 hover:border-amber-400 focus:border-amber-500 transform focus:-translate-y-0.5 hover:-translate-y-0.5 active:translate-y-0.5 ease-in-out group px-8 py-6 mb-8"
                    >
                      <div className="flex justify-between items-start">
                        <h2 className="tracking-wider text-gray-800 text-lg">
                          {title}
                        </h2>
                        <i className="fas fa-external-link-alt external-link-icon text-xs text-amber-700" />
                      </div>
                      <p className="text-sm tracking-wider text-gray-600 mt-2">
                        By {author}
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
                    </a>
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
