const config = require('./webpack.dev.js');

config.module.rules.push({
  test: /\.js$/,
  enforce: 'post',
  include: `${config.context}/app`,
  loader: '@jsdevtools/coverage-istanbul-loader',
  exclude: [
    /\.spec\.js$/,
    /node_modules/,
  ],
});

module.exports = config;
