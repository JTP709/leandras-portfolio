module.exports = {
  siteMetadata: {
    title: "Digital Rainclouds",
    author: "Jon Prell",
    description: "Leandra Clifton's Portfolio",
    toggles: {
      "photography": true,
      "web design": true,
      "social media": true,
      "hand crafted": true,
      "illustration": true
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
