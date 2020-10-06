browserslist: [
  "defaults"
],
module.exports = {
  plugins: {
    "@fullhuman/postcss-purgecss": {
      content: ["layouts/**/*.html"],
      whitelist: ["alert", "close", "collapse", "collapsing", "fade", "modal", "popover", "tooltip", "blockquote"], //see https://github.com/uncss/uncss/wiki/Using-uncss-with-Bootstrap
      whitelistPatterns: [/alert$/, /close$/, /collapse$/, /fade$/, /modal$/, /popover$/, /tooltip$/, /show/, /alert-.*/, /close-.*/, /collapse-.*/, /fade-.*/, /modal-.*/, /popover-.*/, /tooltip-.*/],
      whitelistPatternsChildren: [/alert$/, /close$/, /collaps$/, /fade$/, /modal$/, /popover$/, /tooltip$/, /alert-.*/, /close-.*/, /collapse-.*/, /fade-.*/, /modal-.*/, /popover-.*/, /tooltip-.*/]
    },
    autoprefixer: {},
    cssnano: {
      preset: "default"
    }
  },
}
