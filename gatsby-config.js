module.exports = {
  siteMetadata: {
    title: `Warri Innovation Hub`,
    description: `An innovation hub in Warri catalyzing innovations and technologies with high growth potentials built by Africans to solve local or global problems.`,
    author: `@WaffiiHub`,
    twitterUsername: `@WaffiiHub`,
    siteUrl: `https://warriinnovationhub.com`,
    image: `src/images/waffiihub-icon.png`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "blog",
        path: `${__dirname}/blog/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
      },
    },

    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `warri-innovation-hub`,
        short_name: `waffiiHub`,
        start_url: `/`,
        background_color: `#1a4faa`,
        theme_color: `#1a4faa`,
        display: `minimal-ui`,
        icon: `src/images/waffiihub-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      plugins: [
        // gatsby-remark-relative-images must
        // go before gatsby-remark-images

        `gatsby-remark-relative-images`,
        {
          resolve: `gatsby-remark-images`,
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 700,
            linkImagesToOriginal: false,
          },
        },
      ],
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
