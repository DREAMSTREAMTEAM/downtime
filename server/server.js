import Koa from 'koa';
import Cors from '@koa/cors';
import BodyParser from 'koa-bodyparser';
import Helmet from 'koa-helmet';
import respond from 'koa-respond';
import serveStatic from 'koa-static';
import path from 'path';

import searchRoutes from './routes/search';
import webpackMiddleware from './middlewares/webpackMiddleware';
import logger from './middlewares/logger';

const app = new Koa();

app.use(Helmet());
app.use(Cors());
app.use(BodyParser());
app.use(respond());
webpackMiddleware(app);
logger(app);
app.use(serveStatic(path.join(__dirname, '../client')));
app.use(searchRoutes.routes());

export default app;
