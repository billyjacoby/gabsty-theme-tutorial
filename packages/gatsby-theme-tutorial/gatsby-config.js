module.exports = {
  siteMetadata: {
    title: `Gatsby Theme Tutorial`,
    description: `A tutorial for building a GatsbyJS theme from scratch!`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`
      }
    }
  ]
};
