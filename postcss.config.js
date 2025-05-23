// postcss.config.js
module.exports = {
  map: {
    inline: false,   // write separate .css.map instead of inlining
    annotation: true // add /*# sourceMappingURL=*/ comment
  },
  plugins: [
    require('autoprefixer'),
    require('cssnano')({ preset: 'default' }),
  ]
};