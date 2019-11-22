import * as db from "../utils/db-util";

const getAllArticles = async () => {
  const _sql = "SELECT * FROM ARTICLE";
  return db.query(_sql);
};

const create = async (title, content) => {
  const _sql = `INSERT INTO ARTICLE(title, content) VALUES(${title}, ${content})`;
  return db.query(_sql);
};

const update = async (id, title, content) => {
  const _sql = `UPDATE ARTICLE SET title=${title}, content=${content} WHERE id=${id}`;
  return db.query(_sql);
};

export { getAllArticles };
