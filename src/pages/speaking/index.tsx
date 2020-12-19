import React, { FC, ReactNode } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import Banner from '../../components/banner'
import Layout from '../../components/layout'
import TextLink from '../../components/text-link'
import Section from '../../components/section'
import SEO from '../../components/seo'
import Main from '../../components/main'


const SpeakingListPage: FC<ReactNode> = () => {
  const talkListData = useStaticQuery(graphql`
    query SpeakingTalkListNavigationQuery {
      allTalksJson {
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
            <span className="js text-5xl leading-relaxed md:text-6xl md:leading-loose lg:text-7xl lg:leading-relaxed">
            Speaking Engagements
            </span>
            <span className="hidden sm:inline-block">
              &nbsp;&nbsp;<i className="fal fa-podium-star text-rose-300 text-4xl leading-relaxed md:text-5xl md:leading-loose lg:text-5xl lg:leading-relaxed"></i>
            </span>
            <span className="block sm:hidden mt-3">
              <i className="fal fa-podium-star text-rose-300 text-4xl"></i>
            </span>
          </>
        }
        // subTitle={<span className="text-teal-100">Designer, Full Stack Developer, &amp; Tech Lead</span>}
      />
      <Main>
        <Section className="-mt-12 mb-8">
          {
            talkListData.allTalksJson.edges.map((edge, index) => {
              const path = edge.node.path
              const title = edge.node.title
              const excerpt = edge.node.excerpt
              const date = edge.node.date
              const tags = edge.node.tags
              return(
                <React.Fragment key={`item-${index}`}>
                  <a
                    href={path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden transition shadow-lg hover:shadow-xl focus:shadow-xl active:shadow-sm duration-200 rounded-lg bg-rose-100 focus:bg-rose-50 focus:outline-none focus:ring-4  focus:ring-rose-200 focus:ring-opacity-50 border-0 border-l-4 border-rose-300 hover:border-rose-400 focus:border-rose-500 transform focus:-translate-y-0.5 hover:-translate-y-0.5 active:translate-y-0.5 ease-in-out group px-8 py-6 mb-8"
                  >
                    <div className="flex justify-between items-start">
                      <h2 className="tracking-wider text-gray-800 text-xl w-11/12">
                        {title}
                      </h2>
                      <i className="fas fa-external-link-alt external-link-icon text-sm text-rose-700" />
                    </div>
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
                            <div
                              className="rounded-full bg-rose-50 shadow group-focus:bg-rose-100 transition ease-in-out w-max py-1 px-3 mr-3 mb-2"
                              key={`item-${index}`}
                            >
                              <p className="text-sm tracking-widert text-rose-700">
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
        </Section>
      </Main>
    </Layout>
  )
}

export default SpeakingListPage
