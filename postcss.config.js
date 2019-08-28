module.exports = {
  plugins: {
    autoprefixer: {
      browsers: [
        "last 2 versions",
        "Explorer >= 8",
      ]
    },
    postcss-uncss: {
      html: ["layouts/**/*.html"],
      ignore: []
    },
    cssnano: {
      preset: "default"
    }
  },
}
