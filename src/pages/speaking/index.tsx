import React, { FC, ReactNode } from 'react'
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

const SpeakingListPage: FC<PageProps> = ({
  location
}: PageProps) => {
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
    <Layout location={location}>
      <SEO
        metaTitle=""
        metaDescription=""
        canonicalUrl=""
      />
      <Banner
        title={
          <>
            <span className="text-5xl leading-relaxed js md:text-6xl md:leading-loose lg:text-7xl lg:leading-relaxed">
            Speaking Engagements
            </span>
            <span className="hidden sm:inline-block">
              &nbsp;&nbsp;<i className="text-4xl leading-relaxed fal fa-podium-star text-rose-300 md:text-5xl md:leading-loose lg:text-5xl lg:leading-relaxed" />
            </span>
            <span className="block mt-3 sm:hidden">
              <i className="text-4xl fal fa-podium-star text-rose-300" />
            </span>
          </>
        }
        // subTitle={<span className="text-teal-100">Designer, Full Stack Developer, &amp; Tech Lead</span>}
      />
      <Main>
        <Section className="mb-8 -mt-12">
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
                    className="block overflow-hidden transition shadow-lg hover:shadow-xl focus:shadow-xl active:shadow-sm duration-200 rounded-lg bg-rose-100 focus:bg-rose-50 focus:outline-none focus:ring-4  focus:ring-rose-200 focus:ring-opacity-50 border-0 border-l-4 border-rose-300 hover:border-rose-400 focus:border-rose-500 transform focus:-translate-y-0.5 hover:-translate-y-0.5 active:translate-y-0.5 ease-in-out group px-8 py-6 mb-8"
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
                              color="rose"
                            >
                              {tag}
                            </Tag>
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
