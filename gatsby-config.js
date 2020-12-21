module.exports = {
  siteMetadata: {
    title: `Joe Bloom`,
    description: `Joe Bloom, Portfolio of Work`,
    author: `Jacob Mitchell`,
    menuLinks: [
      {
        name: `Home`,
        link: `/`,
      },
      {
        name: `Articles`,
        link: `/articles`,
      },
      {
        name: `About`,
        link: `/about`,
      },
      {
        name: `Events`,
        link: `/events`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-css-customs`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/joe.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          "Roboto",
          "Alata"
        ],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `52id1us6rrxi`,
        accessToken: `LIqcD2EhIJvaZbU35WiRYEmyW8KF487pec9vDvCQ7zU`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
