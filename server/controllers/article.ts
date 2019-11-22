import articleService from "../services/article";
import { Article } from "../typings/conrtoller";
import create from "antd/lib/icon/IconFont";

const ArticleController = {
  async getArticleList(ctx) {
    console.log("create :");
    console.log("来route了 :");
    const res = await articleService.getArticleList();
    console.log("res", res);
    ctx.set("Content-Type", "application/json");
    ctx.body = {
      data: res
    };
    ctx.status = 200;
  },
  async create() {},
  async show() {}
};

export default ArticleController;
