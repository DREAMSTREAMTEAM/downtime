export default function mountLogger(server) {
  if (process.env.NODE_ENV === 'development') {
    server.use(require('koa-logger')()); //eslint-disable-line
  }
}
