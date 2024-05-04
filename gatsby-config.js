module.exports = {
  // Customize your site metadata:
  siteMetadata: {
    title: `Ibbu508  Blog`,
    author: `i508`,
    description: `A blogging site about movies`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `github`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
}
