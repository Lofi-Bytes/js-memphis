import React, { FC, ReactNode } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import Banner from '../../components/banner'
import Layout from '../../components/layout'
import Section from '../../components/section'
import SEO from '../../components/seo'
import Main from '../../components/main'
import Tag from '../../components/tag'


const WritingPostListPage: FC<ReactNode> = () => {
  const postListData = useStaticQuery(graphql`
    query WritingPostListNavigationQuery {
      allPostsJson {
        edges {
          node {
            title
            subtitle
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
            Writing
            </span>
            <span className="hidden sm:inline-block">
              &nbsp;&nbsp;<i className="fal fa-comment-edit text-orange-300 text-4xl leading-relaxed md:text-5xl md:leading-loose lg:text-5xl lg:leading-relaxed"></i>
            </span>
            <span className="block sm:hidden mt-3">
              <i className="fal fa-comment-edit text-orange-300 text-4xl"></i>
            </span>
          </>
        }
        // subTitle={<span className="text-teal-100">Designer, Full Stack Developer, &amp; Tech Lead</span>}
      />
      <Main>
        <Section className="-mt-12 mb-8">
          {
            postListData.allPostsJson.edges.map((edge, index) => {
              const path = edge.node.path
              const title = edge.node.title
              const subtitle = edge.node.subtitle
              const excerpt = edge.node.excerpt
              const date = edge.node.date
              const tags = edge.node.tags
              return(
                <React.Fragment key={`item-${index}`}>
                  <Link
                    to={path}
                    className="block overflow-hidden transition shadow-lg hover:shadow-xl focus:shadow-xl active:shadow-sm duration-200 rounded-lg bg-violet-100 focus:bg-violet-50 focus:outline-none focus:ring-4  focus:ring-violet-200 focus:ring-opacity-50 border-0 border-l-4 border-violet-300 hover:border-violet-400 focus:border-violet-500 transform focus:-translate-y-0.5 hover:-translate-y-0.5 active:translate-y-0.5 ease-in-out group px-8 py-6 mb-8"
                  >
                    <h2 className="tracking-wider text-gray-800 text-xl">
                      {title}
                    </h2>
                    <p className="tracking-wider text-gray-800 text-md">{subtitle}</p>
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
                            <Tag
                              key={`item-${index}`}
                              color="violet"
                            >
                              {tag}
                            </Tag>
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

export default WritingPostListPage
