import articleService from "../services/article";
import { Article } from "../typings/conrtoller";
import returnBody from "../utils/returnBody";

export default class ArticleController {
  static async show(ctx) {
    try {
      const { id } = ctx.params;
      // const { page, page_size, order } = ctx.query;
      const res = id
        ? await articleService.getArticleDetail(parseInt(id))
        : await articleService.getArticleList();
      returnBody(ctx, 200, res);
    } catch (error) {
      returnBody(ctx, 404);
    }
  }

  static async create(ctx) {
    try {
      const { title, content } = ctx.query;
      const res = await articleService.insertArticle(title, content);
      returnBody(ctx, 200, res);
    } catch (error) {
      returnBody(ctx, 404);
    }
  }

  static async delete(ctx) {
    try {
      const { id } = ctx.params;
      const res = await articleService.deleteArticle(id);
      returnBody(ctx, 200, res);
    } catch (error) {
      returnBody(ctx, 404);
    }
  }

  static async update(ctx) {
    try {
      const { id } = ctx.params;
      const { title, content } = ctx.query;
      const res = await articleService.updateArticle(id, title, content);
      returnBody(ctx, 200, res);
    } catch (error) {
      returnBody(ctx, 404);
    }
  }
}
