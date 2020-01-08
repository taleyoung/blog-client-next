import React from "react";
import { NextPage } from "next";
import Router, { withRouter } from "next/router";
import { Pagination, Spin } from "antd";
import { ArticleList } from "@client/typings/store";
import ArticleCard from "@client/components/ArticleCard";
import myApi from "@utils/myApi";
interface Props {
  articleList: ArticleList;
}
const fetchData = async (page: number, cate?: any) => {
  const res = cate
    ? await myApi(`article?cate=${cate}&page=${page}&page_size=10&order=DESC`)
    : await myApi(`article?page=${page}&page_size=10&order=DESC`);
  return res;
};
const Overview: NextPage<Props> = props => {
  const { articleList } = props;
  const { total, data = [] } = articleList;

  const toArticleDetail = (id: number) => {
    Router.push(`/article?id=${id}`);
  };

  const pageChange = async (page: number) => {
    await fetchData(page);
  };

  return (
    <div className="container">
      <Spin spinning={false}>
        {data.map((item, index) => (
          <div key={`${item.title}${index}`}>
            {/* <Preview
              id={item.id}
              title={item.title}
              content={item.content}
              tags={item.tags}
              time={item.updatedAt}
              toDetail={toArticleDetail}
            ></Preview> */}
            <ArticleCard
              id={item.id}
              title={item.title}
              content={item.content}
              tags={item.tags}
              time={item.updatedAt}
              category={item.category}
              toDetail={toArticleDetail}
            ></ArticleCard>
          </div>
        ))}
        <Pagination
          pageSize={10}
          defaultCurrent={1}
          total={total}
          onChange={page => pageChange(page)}
        />
      </Spin>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: left;
          align-items: center;
          margin: 30px;
          max-width: 600px;
        }
      `}</style>
    </div>
  );
};

Overview.getInitialProps = async ({ query }) => {
  const res = query.cate ? await fetchData(1, query.cate) : await fetchData(1);
  return { articleList: res };
};

export default Overview;
