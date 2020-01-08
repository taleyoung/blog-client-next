import React from "react";
import { NextPage } from "next";
import Router from "next/router";
import Link from "next/link";
import { Pagination, Spin, List, Avatar } from "antd";
import { ArticleList } from "@client/typings/store";
import ArticleInfo from "@components/ArticleInfo";
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
        <List
          itemLayout="vertical"
          size="large"
          dataSource={data}
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={[
                <ArticleInfo
                  time={item.updatedAt}
                  tags={item.tags}
                  category={item.category}
                ></ArticleInfo>
              ]}
              extra={
                <img
                  width={200}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              }
            >
              <List.Item.Meta
                // avatar={<Avatar src={item.avatar} />}
                title={
                  <Link
                    href={{
                      pathname: "/article",
                      query: { id: item.id }
                    }}
                  >
                    <a> {item.title}</a>
                  </Link>
                }
                description={item.updatedAt}
              />
              {item.content}
            </List.Item>
          )}
        />
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
