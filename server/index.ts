import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import cors from 'koa2-cors';
import next from 'next';
import router from './routers/index';

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();

  server.use(cors()).use(bodyParser()).use(logger());

  server.use(router.routes()).use(router.allowedMethods());

  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    await next();
  });

  server.listen(3000, () => {
    console.log('koa server listening on 3000');
  });
});
