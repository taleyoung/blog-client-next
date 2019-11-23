import * as db from "../utils/db-util";

const getArticleList = async () => {
  const _sql = `SELECT article.id, title, content, group_concat(tag.name) tags
                FROM tag, article,tag_article
                WHERE tag.id IN (
                    SELECT tag_article.tag_id
                    WHERE tag_article.article_id = article.id
                      AND tag_article.tag_id = tag.id
                    )
                GROUP BY article.id`;
  return db.query(_sql);
};

const getArticleById = async (id: number) => {
  let _sql = `SELECT article.id, title, content, group_concat(tag.name) tags
              FROM tag, article,tag_article
              WHERE tag.id IN (
                  SELECT tag_article.tag_id
                  WHERE tag_article.article_id = article.id
                    AND tag_article.tag_id = tag.id
                    AND article.id=?
                  )
              GROUP BY article.id`;

  return db.query(_sql, [id]);
};

const create = async (title: string, content: string, tags: string[]) => {
  const _sql = `INSERT INTO article(title, content) VALUES(?, ?)`;
  return db.query(_sql, [title, content]);
};

const update = async (id: number, title: string, content: string) => {
  const _sql = `UPDATE ARTICLE SET title=?, content=? WHERE id=?`;
  return db.query(_sql, [title, content, id]);
};

const _delete = async (id: number) => {
  const _sql = `DELETE FROM article WHERE id = ?`;
  const res = db.query(_sql, [id]);
  if (res) {
    return res;
  }
};

export { getArticleList, create, update, _delete, getArticleById };
