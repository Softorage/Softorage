const purgecss = require("@fullhuman/postcss-purgecss")

module.exports = {
  plugins: {
    autoprefixer: {
      browsers: [
        "last 2 versions",
        "Explorer >= 8",
      ]
    },
    purgecss: {
      content: ["layouts/**/*.html"],
      ignore: []
    },
    cssnano: {
      preset: "default"
    }
  },
}
