module.exports = {
  siteMetadata: {
    title: `New Gatsby Site`,
    description: `A website using our Gatsby theme!`
  },
  plugins: [
    {
      resolve: "gatsby-theme-style",
      options: {
        wrapRootElement: false,
        navigationPages: [
          {
            name: "About",
            title: "About Us Page",
            path: "/about"
          }
        ]
      }
    }
  ]
};
