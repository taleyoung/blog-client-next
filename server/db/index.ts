var mysql = require("mysql");
var config = require("../config/default.js");

import mysql from "mysql2";

var pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "taleyoung",
  database: "blog",
  port: 3306
});

let query = (sql: string, values?: any) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
          connection.release();
        });
      }
    });
  });
};

const selectAllUser = () => {
  const _sql = "SELECT * FROM ARTICLE";
  return query(_sql);
};

export { selectAllUser };
