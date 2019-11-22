// const Router = require("koa-router");
import Router from "koa-router";
const article = new Router({ prefix: "/article" });
import ArticleController from "../controllers/article";

article.get("/", ArticleController.getArticleList);
export default article;
