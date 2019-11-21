// const Router = require("koa-router");
import Router from "koa-router";
const article = new Router();
// const ArticleController = require("../controllers/articles");
import ArticleController from "../controllers/articles";

article.get("api/v1/articles", async ctx => {
  console.log("来route了 :");
  ctx.set("Content-Type", "application/json");
  ctx.body = "111";
  ctx.status = 200;
});

// module.exports = { router };
export default article;
