/* istanbul ignore next */
export default function mountWebpackMiddleware(server) {
  // disable for global requires since airbnb doesn't like them being in a block
  if (process.env.NODE_ENV === 'development') {
    /* eslint-disable */
    const config = require('../../webpack/webpack.config');
    const compiler = require('webpack')(config);
    server.use(require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath,
    }));
    server.use(require('webpack-hot-middleware')(compiler));
    /* eslint-enable */
  }
}
