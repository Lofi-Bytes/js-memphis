import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Banner from '../../components/banner'
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

const ProjectsListPage = ({ location }: PageProps) => {
  const projectsListData = useStaticQuery(graphql`
    query ProjectsListNavigationQuery {
      allProjectsJson {
        edges {
          node {
            title
            path
            excerpt
            date
            section
            tags
            active
          }
        }
      }
    }
  `)
  return (
    <Layout location={location}>
      <SEO
        metaTitle="Jillian's projects"
        metaDescription="Peruse a selection of my recent projects."
        canonicalUrl="https://jillian.dev/projects/"
      />
      <Jumbotron
        title={
          <>
            <span className="hidden sm:inline-block">
              <i
                className="text-4xl leading-relaxed fa-light fa-code-branch text-amber-300 md:text-5xl md:leading-loose lg:text-5xl lg:leading-relaxed"
                aria-hidden="true"
              />
              &nbsp;&nbsp;
            </span>
            <span className="text-5xl leading-relaxed js md:text-6xl md:leading-loose lg:text-7xl lg:leading-relaxed">
              Selected Projects
            </span>
            <span className="hidden sm:inline-block">
              &nbsp;&nbsp;
              <i
                className="text-4xl leading-relaxed text-teal-300 fa-light fa-code-merge md:text-5xl md:leading-loose lg:text-5xl lg:leading-relaxed"
                aria-hidden="true"
              />
            </span>
            <span className="block mt-3 sm:hidden">
              <i
                className="text-4xl fa-light fa-code-branch text-amber-300"
                aria-hidden="true"
              />
              &nbsp;&nbsp;
              <i
                className="text-4xl text-teal-300 fa-light fa-code-merge"
                aria-hidden="true"
              />
            </span>
          </>
        }
      />
      <Main>
        <Section
          background="transparent"
          className="mb-8"
        >
          <Banner
            color="purple"
            pageType="listPage"
          >
            Design Systems
          </Banner>
          <div className="grid grid-flow-row-dense gap-8">
            {projectsListData.allProjectsJson.edges.map((edge, index) => {
              const active = edge.node.active
              const date = edge.node.date
              const excerpt = edge.node.excerpt
              const path = edge.node.path
              const published = edge.node.published
              const section = edge.node.section
              const tags = edge.node.tags
              const title = edge.node.title

              return (
                <React.Fragment key={`item-${index}`}>
                  {published && section === 'design-systems' ? (
                    <Card
                      color="violet"
                      date={date}
                      excerpt={excerpt}
                      outbound={true}
                      published={active ? true : false}
                      title={title}
                      to={path}
                      tags={tags.map((tag, index) => {
                        return (
                          <Tag
                            card={true}
                            key={`item-${index}`}
                            tagColor="violet"
                          >
                            {tag}
                          </Tag>
                        )
                      })}
                    />
                  ) : null}
                </React.Fragment>
              )
            })}
          </div>
        </Section>
        <Section
          background="transparent"
          className="mb-8"
        >
          <Banner
            color="rose"
            pageType="listPage"
          >
            Art Installations
          </Banner>
          <div className="grid grid-flow-row-dense gap-8">
            {projectsListData.allProjectsJson.edges.map((edge, index) => {
              const active = edge.node.active
              const date = edge.node.date
              const excerpt = edge.node.excerpt
              const path = edge.node.path
              const published = edge.node.published
              const section = edge.node.section
              const tags = edge.node.tags
              const title = edge.node.title

              return (
                <React.Fragment key={`item-${index}`}>
                  {published && section === 'art-installations' ? (
                    <Card
                      color="rose"
                      date={date}
                      excerpt={excerpt}
                      outbound={true}
                      published={active ? true : false}
                      title={title}
                      to={path}
                      tags={tags.map((tag, index) => {
                        return (
                          <Tag
                            card={true}
                            key={`item-${index}`}
                            tagColor="rose"
                          >
                            {tag}
                          </Tag>
                        )
                      })}
                    />
                  ) : null}
                </React.Fragment>
              )
            })}
          </div>
        </Section>
        <Section
          background="transparent"
          className="mb-8 -mt-12"
        >
          <Banner
            color="cyan"
            pageType="listPage"
          >
            GitHub
          </Banner>
          <div className="grid grid-flow-row-dense gap-8">
            {projectsListData.allProjectsJson.edges.map((edge, index) => {
              const active = edge.node.active
              const date = edge.node.date
              const excerpt = edge.node.excerpt
              const path = edge.node.path
              const published = edge.node.published
              const section = edge.node.section
              const tags = edge.node.tags
              const title = edge.node.title

              return (
                <React.Fragment key={`item-${index}`}>
                  {published && section === 'github' ? (
                    <Card
                      color="sky"
                      date={date}
                      excerpt={excerpt}
                      outbound={true}
                      published={active ? true : false}
                      title={title}
                      to={path}
                      tags={tags.map((tag, index) => {
                        return (
                          <Tag
                            card={true}
                            key={`item-${index}`}
                            tagColor="sky"
                          >
                            {tag}
                          </Tag>
                        )
                      })}
                    />
                  ) : null}
                </React.Fragment>
              )
            })}
          </div>
        </Section>
        <Section
          background="transparent"
          className="mb-8"
        >
          <Banner
            color="purple"
            pageType="listPage"
          >
            CodePen
          </Banner>
          <div className="grid grid-flow-row-dense gap-8">
            {projectsListData.allProjectsJson.edges.map((edge, index) => {
              const active = edge.node.active
              const date = edge.node.date
              const excerpt = edge.node.excerpt
              const path = edge.node.path
              const published = edge.node.published
              const section = edge.node.section
              const tags = edge.node.tags
              const title = edge.node.title

              return (
                <React.Fragment key={`item-${index}`}>
                  {published && section === 'codepen' ? (
                    <Card
                      color="violet"
                      date={date}
                      excerpt={excerpt}
                      outbound={true}
                      published={active ? true : false}
                      title={title}
                      to={path}
                      tags={tags.map((tag, index) => {
                        return (
                          <Tag
                            card={true}
                            key={`item-${index}`}
                            tagColor="violet"
                          >
                            {tag}
                          </Tag>
                        )
                      })}
                    />
                  ) : null}
                </React.Fragment>
              )
            })}
          </div>
        </Section>
        <Section
          background="transparent"
          className="mb-8"
        >
          <Banner
            color="yellow"
            pageType="listPage"
          >
            BSCS Science Learning
          </Banner>
          <div className="grid grid-flow-row-dense gap-8">
            {projectsListData.allProjectsJson.edges.map((edge, index) => {
              const active = edge.node.active
              const date = edge.node.date
              const excerpt = edge.node.excerpt
              const path = edge.node.path
              const published = edge.node.published
              const section = edge.node.section
              const tags = edge.node.tags
              const title = edge.node.title

              return (
                <React.Fragment key={`item-${index}`}>
                  {published && section === 'bscs' ? (
                    <Card
                      color="yellow"
                      date={date}
                      excerpt={excerpt}
                      outbound={true}
                      published={active ? true : false}
                      title={title}
                      to={path}
                      tags={tags.map((tag, index) => {
                        return (
                          <Tag
                            card={true}
                            key={`item-${index}`}
                            tagColor="yellow"
                          >
                            {tag}
                          </Tag>
                        )
                      })}
                    />
                  ) : null}
                </React.Fragment>
              )
            })}
          </div>
        </Section>
      </Main>
    </Layout>
  )
}

export default ProjectsListPage
