import * as articleModel from "../models/article";

const getArticleList = async () => {
  const res = await articleModel.getArticleList();
  console.log("service中的article");
  return { data: res };
};

const getArticleDetail = async (id: number) => {
  const res = await articleModel.getArticleById(id);
  console.log("getArticleDetail------res", res);
  return res;
};

const insertArticle = async (title: string, content: string) => {
  const res = await articleModel.create(title, content, []);
  return res;
};

const deleteArticle = async (id: number) => {
  const res = await articleModel._delete(id);
  return res;
};

const updateArticle = async (id: number, title: string, content: string) => {
  const res = await articleModel.update(id, title, content);
  return res;
};
export default {
  getArticleList,
  getArticleDetail,
  insertArticle,
  deleteArticle,
  updateArticle
};
