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
            active
            date
            excerpt
            path
            section
            tags
            title
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
              const active = edge.node.active
              const date = edge.node.date
              const excerpt = edge.node.excerpt
              const path = edge.node.path
              const section = edge.node.section
              const tags = edge.node.tags
              const title = edge.node.title

              return(
                <React.Fragment key={`item-${index}`}>
                  {section === 'invited-talks'
                    ?
                      <Card
                        color="rose"
                        date={date}
                        excerpt={excerpt}
                        outbound={true}
                        published={active ? true : false}
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
                    : null
                  }
                </React.Fragment>
              )
            })
          }
          </div>
        </Section>
        <Section background="transparent" className="mb-8">
          <Banner
            color="purple"
            pageType="listPage"
          >
            Art Grant Proposals
          </Banner>
          <div className="grid grid-flow-row-dense gap-8">
          {
            talkListData.allTalksJson.edges.map((edge, index) => {
              const path = edge.node.path
              const title = edge.node.title
              const excerpt = edge.node.excerpt
              const date = edge.node.date
              const tags = edge.node.tags
              const section = edge.node.section
              const active = edge.node.active

              return(
                <React.Fragment key={`item-${index}`}>
                  {section === 'art-grant-proposals'
                    ?
                      <Card
                        color="violet"
                        date={date}
                        excerpt={excerpt}
                        outbound={true}
                        published={active ? true : false}
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
                    : null
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

export default SpeakingListPage
