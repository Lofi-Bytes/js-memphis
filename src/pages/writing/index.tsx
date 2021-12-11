import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Banner from '../../components/banner/banner'
import Card from '../../components/card'
import Jumbotron from '../../components/jumbotron'
import Layout from '../../components/layout'
import Section from '../../components/section'
import SEO from '../../components/seo'
import Main from '../../components/main'
import Tag from '../../components/tag'


type PageProps = {
  location: Location
}

const WritingPostListPage = ({
  location
}: PageProps) => {
  const postListData = useStaticQuery(graphql`
    query WritingPostListNavigationQuery {
      allPostsJson(sort: {fields: date, order: DESC}) {
        edges {
          node {
            title
            subtitle
            published
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
        metaTitle="Jillian's blog"
        metaDescription="I blog about interesting tech and diversity, equity, and inclusion."
        canonicalUrl="https://jillian.dev/writing/"
      />
      <Jumbotron
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
      />
      <Main>
        <Section background="transparent" className="mb-8 -mt-12">
          <Banner
            color="purple"
            pageType="listPage"
          >
            Software development
          </Banner>

          <div className="grid grid-flow-row-dense gap-8">
          {
            postListData.allPostsJson.edges.map((edge, index) => {
              const path = edge.node.path
              const title = edge.node.title
              const published = edge.node.published
              const excerpt = edge.node.excerpt
              const date = edge.node.date
              const tags = edge.node.tags

              return(
                <React.Fragment key={`item-${index}`}>
                  {
                    published
                      ?
                        <Card
                          color="violet"
                          date={date}
                          excerpt={excerpt}
                          external={false}
                          published={published}
                          title={title}
                          to={path}
                          tags={
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
                        />
                      :
                        null
                  }
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
