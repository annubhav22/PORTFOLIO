module.exports = function override(config) {
  const babelLoader = config.module.rules
    .find(rule => Array.isArray(rule.oneOf)).oneOf
    .find(rule => rule.loader && rule.loader.includes('babel-loader'));

  babelLoader.options.plugins = [
    ...(babelLoader.options.plugins || []),
    '@babel/plugin-proposal-optional-chaining',
  ];

  return config;
};
