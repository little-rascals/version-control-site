require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  plugins: [
    {
      resolve: "@vojtaholik/gatsby-theme-simplecast",
      options: {
        markdownPath: "content/episodes",
        episodeSlug: "show"
      }
    },
    `gatsby-plugin-theme-ui`
  ]
}
