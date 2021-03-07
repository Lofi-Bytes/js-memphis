module.exports = {
  siteMetadata: {
    title: `Jillian Serenity - Front End Systems Designer & Solutions Architect`,
    description: `Head of development & design @ BSCS Science Learning`,
    author: `Jillian S. Estrella`,
    siteUrl: `https://jillian.dev/`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-image`,
    // Images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // JSON
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `posts`,
    //     path: `${__dirname}/src/posts/`,
    //   },
    // },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://jillian.dev`,
        sitemap: `https://jillian.dev/sitemap.xml`,
        policy: [{ userAgent: `*`, allow: `/` }]
      }
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `UA-`,
    //     // Puts tracking script in the head instead of the body
    //     head: false,
    //     // Setting this parameter is optional
    //     // anonymize: true,
    //     // Setting this parameter is also optional
    //     respectDNT: true,
    //     // Avoids sending pageview hits from custom paths
    //     // exclude: [`/preview/**`, `/do-not-track/me/too/`],
    //     // Enables Google Optimize using your container Id
    //     // optimizeId: `YOUR_GOOGLE_OPTIMIZE_TRACKING_ID`,
    //     // Enables Google Optimize Experiment ID
    //     // experimentId: `YOUR_GOOGLE_EXPERIMENT_ID`,
    //     // Set Variation ID. 0 for original 1,2,3....
    //     // variationId: `YOUR_GOOGLE_OPTIMIZE_VARIATION_ID`,
    //     // Any additional create only fields (optional)
    //     sampleRate: 5,
    //     siteSpeedSampleRate: 10,
    //     cookieDomain: `jilliansn.netlify.com`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jillian Serenity - Designer, Full Stack Developer, & Tech Lead`,
        short_name: `Jillian Serenity`,
        start_url: `/`,
        background_color: `#1F2937`,
        theme_color: `#2DD4BF`,
        // display: `standalone`,
        display: `minimal-ui`,
        icon: `src/images/favicon/star-512-300945.png`, // This path is relative to the root of the site.
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
