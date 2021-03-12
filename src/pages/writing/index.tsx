import React, { FC } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import Banner from '../../components/banner'
import Layout from '../../components/layout'
import Section from '../../components/section'
import SEO from '../../components/seo'
import Main from '../../components/main'
import Tag from '../../components/tag'


type PageProps = {
  location: Location
}

const WritingPostListPage: FC<PageProps> = ({
  location
}: PageProps) => {
  const postListData = useStaticQuery(graphql`
    query WritingPostListNavigationQuery {
      allPostsJson(sort: {fields: date, order: DESC}) {
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
            Writing
            </span>
            <span className="hidden sm:inline-block">
              &nbsp;&nbsp;<i className="text-4xl leading-relaxed text-orange-300 fal fa-comment-edit md:text-5xl md:leading-loose lg:text-5xl lg:leading-relaxed" />
            </span>
            <span className="block mt-3 sm:hidden">
              <i className="text-4xl text-orange-300 fal fa-comment-edit" />
            </span>
          </>
        }
        // subTitle={<span className="text-teal-100">Designer, Full Stack Developer, &amp; Tech Lead</span>}
      />
      <Main>
        <Section background="transparent" className="mb-8 -mt-12">
          <div className="max-w-xs px-10 py-2 mb-10 -ml-10 rounded shadow-lg bg-rose-300 w-max sm:px-24 sm:-ml-24 sm:max-w-none">
            <h2 className="text-xl tracking-wide text-rose-900 sm:text-2xl">Software Development</h2>
          </div>
          <div className="grid grid-flow-row-dense gap-8">
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
                    className="block overflow-hidden transition shadow-lg hover:shadow-xl focus:shadow-xl active:shadow-sm duration-200 rounded-lg bg-violet-100 focus:bg-violet-50 focus:outline-none focus:ring-4 focus:ring-violet-200 focus:ring-opacity-50 border-0 border-l-8 border-violet-400 hover:border-violet-500 focus:border-violet-600 transform focus:-translate-y-0.5 hover:-translate-y-0.5 active:translate-y-0.5 ease-in-out group px-4 sm:px-8 py-6"
                  >
                    <h2 className="text-xl tracking-wider text-violet-900">
                      {title}
                    </h2>
                    <p className="tracking-wider text-violet-900 text-md">{subtitle}</p>
                    <p className="font-serif text-sm italic tracking-wider text-violet-700">
                      {date}
                    </p>
                    <div className="flex flex-wrap mt-2">
                      {
                        tags.map((tag, index) => {
                          return (
                            <Tag
                              card={true}
                              key={`item-${index}`}
                              tagColor="violet"
                            >
                              {tag}
                            </Tag>
                          )
                        })
                      }
                    </div>
                    <p className="mt-4 text-base tracking-wider text-violet-700">
                      {excerpt}
                    </p>
                    <div className="flex flex-row-reverse">
                      <i className="mt-2 text-xl transition duration-150 ease-in-out border-b-4 rounded-sm border-violet-100 fas fa-arrow-right text-violet-400 group-focus:text-violet-600 group-hover:text-violet-500 group-hover:border-violet-500 group-focus:border-violet-600 pb-0.5"></i>
                    </div>
                  </Link>
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

export default WritingPostListPage
