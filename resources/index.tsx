import React from 'react'
import {
  useStaticQuery,
  graphql
} from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-gtag'

import Jumbotron from '../../components/jumbotron'
import Layout from '../../components/layout'
import Main from '../../components/main'
import Section from '../../components/section'
import SEO from '../../components/seo'

type PageProps = {
  location: Location
}

const ProjectsListPage = ({
  location
}: PageProps) => {
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
    <Layout location={location}>
      <SEO
        metaTitle=""
        metaDescription=""
        canonicalUrl=""
      />
      <Jumbotron
        title={
          <>
            <span className="hidden sm:inline-block">
              <i className="fa-light fa-gem text-fuchsia-300"></i>&nbsp;&nbsp;
            </span>
            <span className="text-5xl leading-relaxed js md:text-6xl md:leading-loose lg:text-7xl lg:leading-relaxed">
            My Resources
            </span>
            <span className="hidden sm:inline-block">
              &nbsp;&nbsp;<i className="fa-light fa-gem text-lime-300"></i>
            </span>
            <span className="block mt-3 sm:hidden">
              <i className="fa-light fa-gem text-fuchsia-300"></i>&nbsp;&nbsp;<i className="fa-light fa-gem text-lime-300"></i>
            </span>
          </>
        }
        subTitle={<span className="text-teal-100">A list of helpful how-to's.</span>}
      />
      <Main>
        <Section className="mb-8 -mt-12">
          <div className="grid grid-cols-2 gap-4" >
            {
              resourcesListData.allResourcesJson.edges.map((edge, index) => {
                const href = edge.node.href
                const title = edge.node.title
                const author = edge.node.author
                const tags = edge.node.tags
                return(
                  <React.Fragment key={`item-${index}`}>
                    <OutboundLink
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block overflow-hidden transition shadow-lg hover:shadow-xl focus:shadow-xl active:shadow-sm duration-200 rounded-lg bg-amber-100 focus:bg-amber-50 focus:outline-none focus:ring-4  focus:ring-amber-200 focus:ring-opacity-50 border-0 border-l-4 border-amber-300 hover:border-amber-400 focus:border-amber-500 transform focus:-translate-y-0.5 hover:-translate-y-0.5 active:translate-y-0.5 ease-in-out group px-8 py-6 mb-8"
                    >
                      <div className="flex items-start justify-between">
                        <h2 className="text-lg tracking-wider text-stone-800">
                          {title}
                        </h2>
                        <i className="text-xs fas fa-external-link-alt external-link-icon text-amber-700" />
                      </div>
                      <p className="mt-2 text-sm tracking-wider text-stone-600">
                        By {author}
                      </p>
                      <div className="flex flex-wrap mt-4">
                        {
                          tags.map((tag, index) => {
                            return (
                              <div className="px-3 py-1 mr-3 transition ease-in-out rounded-full shadow bg-amber-50 group-focus:bg-amber-100 w-max">
                                <p className="text-sm tracking-widert text-amber-700">
                                  {tag}
                                </p>
                              </div>
                            )
                          })
                        }
                      </div>
                    </OutboundLink>
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
