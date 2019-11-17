import React, { SFC, useEffect, useState } from "react";
import { connect } from "react-redux";
import Router, { withRouter } from "next/router";
import { Pagination, Spin } from "antd";
import { Store, ArticleList } from "../../../client/types/store";
import Preview from "../../../client/components/Preview";
import { fetchArticleList } from "../../../client/redux/actions/article";
import style from "./style.less";

interface Props {
  articleList: ArticleList;
  fetchArticleList: typeof fetchArticleList;
}

interface Next {
  getInitialProps: any;
}

const Overview: SFC<Props> & Next = props => {
  // const [loading, setLoading] = useState(true);
  const { articleList } = props;
  const { total, data } = articleList;

  // useEffect(() => {
  //   const getArticles = async () => {
  //     await props.fetchArticleList();
  //   };
  //   getArticles();
  //   setLoading(false);
  // }, []);

  const toArticleDetail = (id: number) => {
    Router.push(`/app/article/${id}`);
  };

  const pageChange = async (page: number) => {
    await props.fetchArticleList(page);
  };

  return (
    <div className={style.container}>
      <Spin spinning={false}>
        {data.map((item, index) => (
          <div
            key={`${item.title}${index}`}
            // onClick={() => toArticleDetail(item.id)}
          >
            <Preview
              id={item.id}
              title={item.title}
              content={item.content}
              tags={item.tags}
              time={item.updatedAt}
              toDetail={toArticleDetail}
            ></Preview>
          </div>
        ))}
        <Pagination
          pageSize={10}
          defaultCurrent={1}
          total={total}
          onChange={page => pageChange(page)}
        />
      </Spin>
    </div>
  );
};

Overview.getInitialProps = async () => {
  console.log("进入initialProps :");
  const res = await fetchArticleList();
  console.log("res :", res);
  return { res };
};

export default connect(
  (state: Store) => ({
    articleList: state.article.articleList
  }),
  { fetchArticleList }
)(Overview);
