import React, { useEffect, useState } from "react";
import css from "styled-jsx/css";
import { NextPage } from "next";
import Link from "next/link";
import { Pagination, List, Spin, Icon } from "antd";

import Intro from "@components/Intro";
import { ArticleList } from "@itypings/store";
import ArticleInfo from "@components/ArticleInfo";
import MyDrawer from "@components/MyDrawer";
import myApi from "@utils/myApi";

const fetchData = async (page: number, cate?: any) => {
  const res = cate
    ? await myApi(`article?cate=${cate}&page=${page}&page_size=10&order=DESC`)
    : await myApi(`article?page=${page}&page_size=10&order=DESC`);
  return res;
};

interface Props {
  articleList: ArticleList;
}

const Overview: NextPage<Props> = props => {
  const { articleList } = props;
  const { total, data = [] } = articleList;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("props.articleList :", articleList);
    if (articleList) {
      setLoading(false);
    }
  }, [articleList]);

  const pageChange = async (page: number) => {
    await fetchData(page);
  };

  const Articles = () => (
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
              isTime={false}
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
  );

  return (
    <Spin
      spinning={loading}
      indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />}
    >
      <div className="main">
        <Articles></Articles>
        <div className="pagination">
          <Pagination
            pageSize={10}
            defaultCurrent={1}
            total={total}
            size="small"
            onChange={page => pageChange(page)}
          />
        </div>
      </div>
      <div className="sider">
        <Intro></Intro>
      </div>
      <MyDrawer children={<Intro></Intro>}></MyDrawer>
      <style jsx>{style}</style>
    </Spin>
  );
};

Overview.getInitialProps = async ({ query }) => {
  const res = query.cate ? await fetchData(1, query.cate) : await fetchData(1);
  return { articleList: res };
};

export default Overview;

const style = css`
  .main {
    width: calc(100% - 300px);
    padding: 0 20px;
  }
  .sider {
    position: fixed;
    width: 300px;
    top: 100px;
    right: 20px;
  }
  .pagination {
    display: flex;
    justify-content: flex-end;
    margin: 20px 0;
  }

  @media screen and (max-width: 736px) {
    .main {
      width: 100%;
    }
    .sider {
      display: none;
    }
  }
`;
