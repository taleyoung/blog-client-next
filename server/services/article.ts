import * as articleModel from "../models/article";
import { GET_ARTICLE_DETAIL } from "@client/redux/action-types";

const getArticleList = async () => {
  const res = await articleModel.getAllArticles();
  console.log("service中的article");
  return res;
};

const getArticleDetail = async () => {};

const getTagsByArticleId = async (articleId: number | string) => {};

const getTagNameById = async (id: number) => {};

const insertArticle = async (title: string, content: string) => {};

const deleteArticle = async (id: number) => {};

const updateArticle = async () => {};
export default { getArticleList, getArticleDetail };
