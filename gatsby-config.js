module.exports = {
  siteMetadata: {
    title: 'Grendel Consulting',
    siteUrl: 'https://www.grendel-consulting.com',
    keywords: 'Grendel',
    blurb: 'Boutique Consulting on Innovation, Engineering and Cybersecurity',
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
    `gatsby-plugin-flow`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Grendel Consulting Limited`,
        icon: `src/images/Grendel-Icon-Square.svg`,
        short_name: `Grendel`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }]
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/presentational/Themes/typography`,
      }
    },
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
  ],
}
