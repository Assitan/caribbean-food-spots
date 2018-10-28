module.exports = {
  pluginOptions: {
    apollo: {
      enableMocks: true,
      enableEngine: true,
    },
    express: {
      shouldServeApp: true,
      serverDir: './srv',
    },
  },
};
