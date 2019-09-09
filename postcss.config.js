browserslist: [
  "last 2 versions",
  "Explorer >= 8"
],
module.exports = {
  plugins: {
    autoprefixer: {},
    '@fullhuman/postcss-purgecss': {
      content: ["layouts/**/*.html"],
      ignore: []
    },
    cssnano: {
      preset: "default"
    }
  },
}
