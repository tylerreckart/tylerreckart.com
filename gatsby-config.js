module.exports = {
  pathPrefix: `/tylerreckart`,
  siteMetadata: {
    title: 'Tyler Reckart',
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-google-analytics',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon_32x32.png",
        injectHTML: true,
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    `gatsby-mdx`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingID: "UA-70418516-1",
        head: false,
        anonymize: true,
      }
    }
  ],
};
