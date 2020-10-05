browserslist: [
  "defaults"
],
module.exports = {
  plugins: {
    "@fullhuman/postcss-purgecss": {
      content: ['./hugo_stats.json'],
      whitelist: ["alert", "close", "collapse", "collapsing", "fade", "modal", "popover", "tooltip", "blockquote"], //see https://github.com/uncss/uncss/wiki/Using-uncss-with-Bootstrap
      whitelistPatterns: [/alert$/, /close$/, /collapse$/, /fade$/, /modal$/, /popover$/, /tooltip$/, /show/, /alert-.*/, /close-.*/, /collapse-.*/, /fade-.*/, /modal-.*/, /popover-.*/, /tooltip-.*/],
      whitelistPatternsChildren: [/alert$/, /close$/, /collaps$/, /fade$/, /modal$/, /popover$/, /tooltip$/, /alert-.*/, /close-.*/, /collapse-.*/, /fade-.*/, /modal-.*/, /popover-.*/, /tooltip-.*/],
      defaultExtractor: (content) => {
        let els = JSON.parse(content).htmlElements;
        return els.tags.concat(els.classes, els.ids);
      }
    },
    autoprefixer: {},
    cssnano: {
      preset: "default"
    }
  },
}
