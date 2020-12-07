import React, { FC } from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'


export type HelmetProps = {
  metaDescription: string,
  meta?: any[],
  metaTitle: string,
  canonicalUrl: string,
  lang?: string,
  [other: string]: unknown
}

const SEO: FC<HelmetProps> = ({
  metaDescription,
  lang='en',
  meta,
  metaTitle,
  canonicalUrl,
  ...other
}: HelmetProps) => {
  console.log(metaTitle, metaDescription, canonicalUrl)
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const title = site.siteMetadata.title
  const description = site.siteMetadata.description
  const author = site.siteMetadata.author

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle ? metaTitle : title}
      titleTemplate={`%s | ${title}`}
      link={[
        {
          rel: `canonical`,
          href: canonicalUrl
        }
      ]}
      meta={[
        {
          name: `description`,
          content: metaDescription ? metaDescription : description,
        },
        {
          property: `og:title`,
          content: metaTitle ? metaTitle : title,
        },
        {
          property: `og:description`,
          content: metaDescription ? metaDescription : description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: metaTitle ? metaTitle : title,
        },
        {
          name: `twitter:description`,
          content: metaDescription ? metaDescription : description,
        },
      ]}
    />
  )
}

export default SEO
