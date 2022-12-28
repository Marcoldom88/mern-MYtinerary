module.exports = {
  webpack: {
    configure: {
      entry: './src/index.js',
      experiments: {
        topLevelAwait: true,
      },
    },
  },
};