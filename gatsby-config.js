module.exports = {
    siteMetadata: {
      title: `Undefined State`,
    },
    plugins: [
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography.js`,
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: `${__dirname}/src/pages`,
          name: 'pages',
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: `${__dirname}/src/images`,
          name: 'images',
        },
      },
      `gatsby-transformer-remark`,
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
    ],
}