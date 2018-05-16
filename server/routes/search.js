import Router from 'koa-router';

const router = new Router();

router.get('/search', async (ctx) => {
  ctx.body = { message: 'hello search' };
});

export default router;
