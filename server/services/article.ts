import * as articleModel from "../models/article";
import dayjs from "dayjs";
import { ArticleScheme } from "../typings/model";

interface ArticleModel {
  id: string;
  title: string;
  content: string;
  updated_at: dayjs.ConfigType;
  tags: { split: (arg0: string) => string[] };
}

const getArticleList = async (
  page: number = 1,
  page_size: number = 10,
  order: "DESC" | "ASC" = "DESC"
) => {
  try {
    const offset = (page - 1) * page_size;
    const res: Array<ArticleModel> = await articleModel.getArticleList(
      page_size,
      offset,
      order
    );
    let list: Array<ArticleScheme> = [];
    res.forEach(item => {
      list.push({
        id: item.id,
        title: item.title,
        content: item.content,
        updatedAt: dayjs(item.updated_at).format("YYYY-MM-DD HH:MM"),
        tags: item.tags.split(",")
      });
    });
    return { data: list };
  } catch (error) {
    console.log("error", error);
  }
};

const getArticleDetail = async (id: number) => {
  try {
    const res = await articleModel.getArticleById(id);
    let detail: ArticleScheme = {
      id: res[0].id,
      title: res[0].title,
      content: res[0].content,
      updatedAt: dayjs(res[0].updated_at).format("YYYY-MM-DD HH:MM"),
      tags: res[0].tags.split(",")
    };
    return detail;
  } catch (error) {
    console.log("error", error);
  }
};

const insertArticle = async (title: string, content: string) => {
  const res = await articleModel.create(title, content);
  return res;
};

const deleteArticle = async (id: number) => {
  const res = await articleModel._delete(id);
  return res;
};

const updateArticle = async (id: number, title: string, content: string) => {
  try {
    const res = await articleModel.update(id, title, content);
    return res;
  } catch (err) {
    console.log("err", err);
  }
};
export default {
  getArticleList,
  getArticleDetail,
  insertArticle,
  deleteArticle,
  updateArticle
};
