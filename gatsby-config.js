module.exports = {
  siteMetadata: {
    title: `Shadow and Fox`,
    description: `The blog and portfolio site of Lyndsey Herbert, a Senior Front-end Developer currently working at Ampersand Commerce.`,
    author: `@lyndsherb`,
    contactInfo: [
      {
        title: 'Github',
        icon: 'github',
        href: 'https://github.com/lyndsherb',
      },
      {
        title: 'Twitter',
        icon: 'twitter',
        href: 'https://www.twitter.com/lyndsherb',
      },
      {
        title: 'Linkedin',
        icon: 'linkedin',
        href: 'https://www.linkedin.com/in/lyndsherb/',
      },
      {
        title: 'Email',
        icon: 'email',
        href: 'mailto:lyndsey+website@shadowandfox.co',
      },
    ],
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
        background_color: `#3CAEB4`,
        theme_color: `#3CAEB4`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [`node_modules`, `src/scss`],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto Slab\:700`]
      }
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
          rule: {
            include: /src\/images\/icons/
          }
      }
    }
  ],
}
