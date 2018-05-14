import Koa from 'koa';
import Router from 'koa-router';
import Cors from '@koa/cors';
import BodyParser from 'koa-bodyparser';
import Helmet from 'koa-helmet';
import respond from 'koa-respond';
import serveStatic from 'koa-static';

import searchRoutes from './routes/search';
import webpackHotMiddleware from './middlewares/webpackMiddleware';
import logger from './middlewares/logger';

const app = new Koa();
const router = new Router();

app.use(Helmet());
app.use(Cors());
app.use(BodyParser());
app.use(respond());
webpackHotMiddleware(app);
logger(app);
app.use(serveStatic('../client', { defer: true }));
app.use(searchRoutes.routes());

export default app;
