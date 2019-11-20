module.exports = themeOptions => ({
  siteMetadata: {
    title: `Gatsby Theme Tutorial`,
    description: `A tutorial for building a GatsbyJS theme from scratch!`,
    navigationPages: themeOptions.navigationPages
      ? [...themeOptions.navigationPages]
      : "null"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`
      }
    }
  ]
});
