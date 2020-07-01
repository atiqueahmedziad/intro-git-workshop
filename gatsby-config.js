module.exports = {
  siteMetadata: {
    title: "Introduction to Git and Github",
    subtitle: "Learn Git and Github basics",
    description:
      "A workshop based of focused on learning the basics of Git and Github. Some real life usages of Git and Github will be demoed in the workshop.",
    keywords: [
      "git",
      "github",
      "basics of git",
      "basics of github",
      "project management on github"
    ]
  },
  pathPrefix: "/intro-git-workshop",
  plugins: [
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/lessons`,
        name: "markdown-pages"
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
              linkImagesToOriginal: true,
              sizeByPixelDensity: false
            }
          }
        ]
      }
    }
  ]
};
