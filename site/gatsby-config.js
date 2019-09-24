module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "36af8yh1",
        dataset: "production",
        // a token with read permissions is required
        // if you have a private dataset
        token:
          "sk70uyzB2SRhcXtrymfZfwS36c6UWox6ZPECk9bCQuuOw8nobR5PbjzCsCoA9LPyZ655JdebMGMJWaJ3r46W4QB93zi6gqnDPjfRHi4irVuvQU8oIwUEnuFLJuMUFwxQ0AzunMdqhbkwpLfnUJ8x00DQz4eQIqPJDWwhd8iy8IlQCjwQ3RpB",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
