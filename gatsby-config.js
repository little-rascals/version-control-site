require("dotenv").config({
  path: `.env`
})

module.exports = {
  plugins: [
    {
      resolve: "@vojtaholik/gatsby-theme-simplecast",
      options: {
        simplecastApiSecret: process.env.SIMPLECAST_API_SECRET,
        podcastId: process.env.PODCAST_ID,
        markdownPath: "content/episodes",
        episodeSlug: "show"
      }
    },
    `gatsby-plugin-theme-ui`
  ],
  siteMetadata: {
    title: "Version Control",
    description: "An awesome technology podcast",
    author: "little-rascals"
  }
}
