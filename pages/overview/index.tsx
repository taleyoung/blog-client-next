import React, { useEffect, useState } from "react";
import css from "styled-jsx/css";
import { NextPage } from "next";
import Link from "next/link";
import { Pagination, Spin, Icon, Tag, Divider, Menu } from "antd";

import Intro from "@components/Intro";
import { ArticleList } from "@itypings/store";
import MyDrawer from "@components/MyDrawer";
import myApi from "@utils/myApi";
import Articles from "./Articles";
import TopTitle from "./TopTitile";

const fetchArticles = async (page: number, cate?: string | string[]) => {
  if (cate instanceof Array) {
    return [];
  } else {
    const res = cate
      ? await myApi(`article?cate=${cate}&page=${page}&page_size=10&order=DESC`)
      : await myApi(`article?page=${page}&page_size=10&order=DESC`);
    return res;
  }
};

interface Props {
  articleList: ArticleList;
  cate: string | string[];
  cateListData: { data: Array<{ category: string }> };
}

const Overview: NextPage<Props> = props => {
  console.log("props :", props);
  const { articleList, cate, cateListData } = props;
  const { total, data = [] } = articleList;
  const { data: cateList } = cateListData;
  const [loading, setLoading] = useState<boolean>(true);
  const [category, setCategory] = useState<string>(null);

  useEffect(() => {
    if (articleList) {
      setLoading(false);
    }
  }, [articleList]);

  useEffect(() => {
    if (!cate || cate instanceof Array) {
      setCategory(null);
    } else {
      setCategory(decodeURIComponent(cate));
    }
  }, [cate]);

  const pageChange = async (page: number) => {
    await fetchArticles(page);
  };

  return (
    <Spin
      spinning={loading}
      indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />}
    >
      <TopTitle category={category}></TopTitle>
      <div className="main">
        <Articles data={data}></Articles>
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
        <Divider>文章归类</Divider>
        <Menu theme="light" mode="inline" defaultSelectedKeys={["前端"]}>
          <Menu.Item>
            <Link href="/overview">
              <div>
                <Icon type="user" />
                <span className="nav-text">全部</span>
              </div>
            </Link>
          </Menu.Item>

          {cateList.map(item => (
            <Menu.Item key={item.category}>
              <Link
                href={{
                  pathname: "/overview",
                  query: { cate: encodeURIComponent(item.category) }
                }}
              >
                <div>
                  <Icon type="user" />
                  <span className="nav-text">{item.category}</span>
                </div>
              </Link>
            </Menu.Item>
          ))}
        </Menu>
        <Divider>标签云</Divider>
        <Tag color="blue">react</Tag>
        <Tag color="blue">nodejs</Tag>
      </div>
      <MyDrawer children={<Intro></Intro>}></MyDrawer>
      <style jsx>{style}</style>
    </Spin>
  );
};

Overview.getInitialProps = async ({ query }) => {
  const { cate } = query;
  const res: ArticleList = cate
    ? await fetchArticles(1, cate)
    : await fetchArticles(1);
  const cateListData = await myApi("category");
  return { articleList: res, cate, cateListData };
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
