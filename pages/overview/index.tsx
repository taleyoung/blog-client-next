import React, { useEffect, useState } from "react";
import css from "styled-jsx/css";
import { NextPage } from "next";
import Link from "next/link";
import { Pagination, Spin, Icon, Tag, Divider, Menu, Timeline } from "antd";

import Intro from "@components/Intro";
import { ArticleList } from "@itypings/store";
import MyDrawer from "@components/MyDrawer";
import myApi, { fetchArticles } from "@utils/myApi";
import Articles from "./Articles";
import TopTitle from "./TopTitile";

interface Props {
  articleList: ArticleList;
  cate: string | string[];
  cateListData: { data: Array<{ category: string }> };
  tagList: Array<{ id: string; name: string }>;
  currentArticles: any;
}

const Overview: NextPage<Props> = props => {
  const { articleList, cate, cateListData, tagList, currentArticles } = props;
  const { total, data = [] } = articleList;
  const { data: cateList } = cateListData;
  const [loading, setLoading] = useState<boolean>(true);
  const [category, setCategory] = useState<string>(null);
  const [list, setList] = useState([]);
  const [listTotal, setListTotal] = useState();

  useEffect(() => {
    if (articleList) {
      setLoading(false);
      setList(data);
      setListTotal(total);
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
    const res = await fetchArticles(page, cate);
    setList(res.data);
    setListTotal(res.total);
  };

  return (
    <Spin
      spinning={loading}
      indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />}
    >
      <TopTitle category={category}></TopTitle>
      <div className="main">
        <Articles data={list}></Articles>
        <div className="pagination">
          <Pagination
            pageSize={10}
            defaultCurrent={1}
            total={listTotal}
            size="small"
            onChange={page => pageChange(page)}
          />
        </div>
      </div>
      <div className="sider">
        <Divider>文章归类</Divider>
        <Menu theme="light" mode="inline" defaultSelectedKeys={["全部"]}>
          <Menu.Item key="全部">
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
        {tagList.map(tag => (
          <Tag color="blue" key={tag.name}>
            {tag.name}
          </Tag>
        ))}
        <Divider>近期文章</Divider>
        <Timeline>
          {currentArticles.map(article => (
            <Timeline.Item key={article.id}>
              <Link
                href={{
                  pathname: "/article",
                  query: { id: article.id }
                }}
              >
                <a>{article.title}</a>
              </Link>
            </Timeline.Item>
          ))}
        </Timeline>
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
  const tagList = await myApi("tag");
  const currentArticles = await myApi("article/current");
  return { articleList: res, cate, cateListData, tagList, currentArticles };
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
