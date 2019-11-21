import Koa from "koa";
import next from "next";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import logger from "koa-logger";

import article from "./routers/index";
import Router from "koa-router";
const router = new Router();

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
  // router.all("*", async ctx => {
  //   await handle(ctx.req, ctx.res);
  //   ctx.respond = false;
  // });
  // router.get("/api/v1/article", async ctx => {
  //   console.log("来route了 :");
  //   ctx.set("Content-Type", "application/json");
  //   ctx.body = "111";
  //   ctx.status = 200;
  // });
  router.use("/", article.routes(), article.allowedMethods());

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
