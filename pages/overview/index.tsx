import React, { SFC, useEffect, useState } from "react";
import { connect } from "react-redux";
import Router from "next/router";
import { Pagination, Spin } from "antd";
import { Store, ArticleList } from "@client/typings/store";
import Preview from "@client/components/Preview";
import { fetchArticleList } from "@client/redux/actions/article";
import ArticleCard from "@client/components/ArticleCard";
import myApi from "@utils/myApi";
interface Props {
  articleList: ArticleList;
  fetchArticleList: typeof fetchArticleList;
  res: any;
}

interface Next {
  getInitialProps: any;
}
const fetData = async page => {
  const res = await myApi(`article?page=${page}&page_size=10&order=DESC`);
  return res;
};
const Overview: SFC<Props> & Next = props => {
  const { articleList } = props;
  const { total, data = [] } = articleList;

  const toArticleDetail = (id: number) => {
    Router.push(`/article?id=${id}`);
  };

  const pageChange = async (page: number) => {
    await fetData(page);
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
          margin-top: 30px;
          width: 70%;
        }
      `}</style>
    </div>
  );
};

Overview.getInitialProps = async () => {
  const res = await fetData(1);
  return { articleList: res };
};

export default connect(
  (state: Store) => ({
    articleList2: state.article.articleList
  }),
  { fetchArticleList }
)(Overview);
