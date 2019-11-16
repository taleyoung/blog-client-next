const Koa = require("koa");
const Router = require("koa-router");
const next = require("next");
// import Koa from "koa";
// import next from "next";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  router.get("/a/:id", async ctx => {
    const id = ctx.params.id;
    await handle(ctx.req, ctx.res, {
      pathname: "/a",
      query: {
        id
      }
    });
  });

  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    await next();
  });

  server.use(router.routes);

  server.listen(3000, () => {
    console.log("koa server listening on 3000");
  });
});

//解决 isolatedModules 报错问题
// export default undefined;
module.exports = {};