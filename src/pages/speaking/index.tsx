import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Banner from '../../components/banner/banner'
import Card from '../../components/card'
import Jumbotron from '../../components/jumbotron'
import Layout from '../../components/layout'
import Main from '../../components/main'
import Section from '../../components/section'
import SEO from '../../components/seo'
import Tag from '../../components/tag'


type PageProps = {
  location: Location
}

const SpeakingListPage = ({
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
        metaTitle="Jillian's talks"
        metaDescription="See some of my recent talks."
        canonicalUrl="https://jillian.dev/speaking/"
      />
      <Jumbotron
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
      />
      <Main>
        <Section background="transparent" className="mb-8 -mt-12">
          <Banner
            color="rose"
            pageType="listPage"
          >
            Invited talks
          </Banner>
          <div className="grid grid-flow-row-dense gap-8">
          {
            talkListData.allTalksJson.edges.map((edge, index) => {
              const path = edge.node.path
              const title = edge.node.title
              const excerpt = edge.node.excerpt
              const date = edge.node.date
              const tags = edge.node.tags

              return(
                <Card
                  color="rose"
                  date={date}
                  excerpt={excerpt}
                  external={true}
                  published={true}
                  title={title}
                  to={path}
                  tags={
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
                />
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
