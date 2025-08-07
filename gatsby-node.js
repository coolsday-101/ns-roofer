exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        src: require('path').resolve(__dirname, 'src'),
      },
    },
  });
};
