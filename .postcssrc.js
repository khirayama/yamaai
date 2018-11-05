module.exports = {
  plugins: {
    'postcss-import': {
      path: 'src'
    },
    'postcss-simple-vars': null,
    'postcss-nested': null,
    autoprefixer: {
      // https://wiki.linecorp.com/pages/viewpage.action?pageId=263110918
      // https://github.com/ai/browserslist#queries
      browsers: ['last 2 versions', 'ie >= 9', 'iOS >= 8', 'Android >= 4'],
    },
    cssnano: null,
  },
};
