import React, { FC, ReactNode } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import Banner from '../../components/banner'
import Layout from '../../components/layout'
import TextLink from '../../components/text-link'
import SEO from '../../components/seo'


const WritingPostListPage: FC<ReactNode> = () => {
  const postListData = useStaticQuery(graphql`
    query WritingPostListNavigationQuery {
      allPostsJson {
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
            {/* <span className="hidden sm:inline-block">
              <i className="fal fa-narwhal text-rose-300"></i>&nbsp;
            </span> */}
            <span className="text-teal-100">
            Writing
            </span>
            <span className="hidden sm:inline-block">
              &nbsp;&nbsp;<i className="fal fa-comment-edit text-orange-300"></i>
            </span>
            <span className="block sm:hidden">
              <i className="fal fa-comment-edit text-orange-300"></i>
            </span>
          </>
        }
        // subTitle={<span className="text-teal-100">Designer, Full Stack Developer, &amp; Tech Lead</span>}
      />
      <main className="min-h-screen max-w-screen-lg m-auto mb-20">
        <section className="bg-gray-100 rounded-xl p-8 pt-10 w-11/12 sm:w-3/4 mx-auto -mt-12 mb-8 sm:mb-10 shadow-xl relative">
          {
            postListData.allPostsJson.edges.map((edge, index) => {
              const path = edge.node.path
              const title = edge.node.title
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
                    <p className="font-serif italic text-sm tracking-wider text-gray-500">
                      {date}
                    </p>
                    <p className="text-base tracking-wider text-gray-600 mt-4">
                      {excerpt}
                    </p>
                    <div className="mt-4 flex flex-wrap">
                      {
                        tags.map((tag, index) => {
                          console.log(tag)
                          if (tag === "JavaScript") {
                            return (
                              <div className="rounded-full bg-violet-50 shadow group-focus:bg-violet-100 transition ease-in-out w-max py-1 px-3 mr-3">
                                <p className="text-sm tracking-widert text-violet-500">
                                  {tag}
                                </p>
                              </div>
                            )
                          }
                          if (tag === "Jamstack") {
                            return (
                              <div className="rounded-full bg-violet-50 shadow group-focus:bg-violet-100 transition ease-in-out w-max py-1 px-3 mr-3">
                                <p className="text-sm tracking-widert text-violet-500">
                                  {tag}
                                </p>
                              </div>
                            )
                          }
                          if (tag === "LGBTQ+") {
                            return (
                              <div className="rounded-full bg-violet-50 shadow group-focus:bg-violet-100 transition ease-in-out w-max py-1 px-3 mr-3">
                                <p className="text-sm tracking-widert text-violet-500">
                                  {tag}
                                </p>
                              </div>
                            )
                          }
                          if (tag === "Design Systems") {
                            return (
                              <div className="rounded-full bg-violet-50 shadow group-focus:bg-violet-100 transition ease-in-out w-max py-1 px-3 mr-3">
                                <p className="text-sm tracking-widert text-violet-500">
                                  {tag}
                                </p>
                              </div>
                            )
                          }
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

export default WritingPostListPage
