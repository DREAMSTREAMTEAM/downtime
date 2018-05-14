const webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = () => {
  const plugins = {
    production: [],
    development: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
    ],
  };

  return plugins[process.env.NODE_ENV];
};
