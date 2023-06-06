const webpack = require("webpack");
module.exports = function override(config) {
  const fallback = config.resolve.fallback || {
    fs: false,
    net: false,
    async_hooks: false,
    "node-persist": false,
  };
  Object.assign(fallback, {
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
    assert: require.resolve("assert"),
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    os: require.resolve("os-browserify"),
    url: require.resolve("url"),
    path: require.resolve("path-browserify"),
    zlib: require.resolve("browserify-zlib"),
  });
  config.resolve.fallback = fallback;
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
    new webpack.DefinePlugin({ "global.GENTLY": false }),
    new webpack.NormalModuleReplacementPlugin(
      /^hexoid$/,
      require.resolve("hexoid/dist/index.js")
    ),
    new webpack.NormalModuleReplacementPlugin(
      /^os$/,
      require.resolve("os-browserify/main")
    ),
  ]);

  return config;
};
