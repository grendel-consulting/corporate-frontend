module.exports = {
  siteMetadata: {
    title: 'Grendel Consulting',
    keywords: 'Grendel',
    blurb: 'Boutique consultancy providing interim and remote CTO services',
    author: `@jhaelan`,
    corporate: {
      name: 'Grendel Consulting Limited',
      reference: '10125435',
      region: 'England and Wales',
      office: 'Venture House, Brookside Avenue, Rustington, Littlehampton, BN16 3LF',
      since: '2016',
    }
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
