// const Router = require("koa-router");
import Router from "koa-router";
const router = new Router();
// const ArticleController = require("../controllers/articles");
import ArticleController from "../controllers/articles";

router.get("/api/articles", async ctx => {
  ctx.body = "111";
});

// module.exports = { router };
export default { router };
