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
        <Section background="transparent" className="mb-8 -mt-12">
          <div className="max-w-xs px-10 py-2 mb-10 -ml-10 rounded shadow-lg bg-cyan-300 w-max sm:px-24 sm:-ml-24 sm:max-w-none">
            <h2 className="text-xl tracking-wide text-cyan-900 sm:text-2xl">Invited talks</h2>
          </div>
          <div className="grid grid-flow-row-dense gap-8">
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
                      <i className="mt-2 text-xl transition duration-150 ease-in-out border-b-4 rounded-sm border-rose-100 fas fa-arrow-right text-rose-400 group-focus:text-rose-600 group-hover:text-rose-500 group-hover:border-rose-500 group-focus:border-rose-600 pb-0.5"></i>
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

export default SpeakingListPage
