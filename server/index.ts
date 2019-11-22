import Koa from "koa";
import next from "next";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import logger from "koa-logger";

import router from "./routers/index";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  // const router = new Router();

  // router.get("/a/:id", async ctx => {
  //   const id = ctx.params.id;
  //   await handle(ctx.req, ctx.res, {
  //     pathname: "/a",
  //     query: {
  //       id
  //     }
  //   });
  // });

  server
    .use(cors())
    .use(bodyParser())
    .use(logger());

  server.use(router.routes()).use(router.allowedMethods());

  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    await next();
  });

  server.listen(3000, () => {
    console.log("koa server listening on 3000");
  });
});
