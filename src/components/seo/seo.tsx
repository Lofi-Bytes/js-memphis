import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import faviconImage from '../../images/favicon/star-512-300945.png'

export type HelmetProps = {
  metaDescription: string,
  meta?: any[],
  metaTitle: string,
  canonicalUrl: string,
  lang?: string,
  noIndex?: boolean,
  ogImage?: string,
  ogImageAlt?: string,
  twitterImage?: string,
  [other: string]: unknown
}

const SEO = ({
  canonicalUrl,
  lang='en',
  meta,
  metaDescription,
  metaTitle,
  noIndex=false,
  ogImage,
  ogImageAlt,
  twitterImage,
  ...other
}: HelmetProps) => {
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
      // titleTemplate={`%s | ${title}`}
      titleTemplate={`%s`}
      link={[
        {
          rel: `canonical`,
          href: canonicalUrl
        }
      ]}
      meta={[
        {
          charset: `utf-8`
        },
        {
          name: `viewport`,
          content: `width=device-width, initial-scale=1, shrink-to-fit=no`
        },
        {
          name: `description`,
          content: metaDescription ? metaDescription : description,
        },
        {
          property: `og:url`,
          content: canonicalUrl
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:site_name`,
          content: `Jillian S. Estrella, Design systems engineer & solutions architect`
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
          property: `og:image`,
          content: ogImage ? ogImage : faviconImage
        },
        {
          property: `og:image:alt`,
          content: ogImageAlt ? ogImageAlt : `Lagoon-colored star.`
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
          name: `twitter:site`,
          content: `@LofiBytes`
        },
        {
          name: `twitter:image`,
          content: twitterImage
                    ? twitterImage
                    : ogImage
                      ? ogImage
                      : faviconImage
        },
        {
          property: `twitter:image:alt`,
          content: ogImageAlt ? ogImageAlt : `Lagoon-colored star.`
        },
        {
          name: `twitter:title`,
          content: metaTitle ? metaTitle : title,
        },
        {
          name: `twitter:description`,
          content: metaDescription ? metaDescription : description,
        },
        noIndex
          ?
            {
              name: `robots`,
              content: `noindex`
            }
          :
            {}
      ]}
    />
  )
}

export default SEO
