import React, { useEffect, useState } from "react";
import css from "styled-jsx/css";
import { NextPage } from "next";
import { Pagination, Spin, Icon } from "antd";

import Intro from "@components/Intro";
import { ArticleList } from "@itypings/store";
import MyDrawer from "@components/MyDrawer";
import myApi, { fetchArticles } from "@utils/myApi";

import Articles from "./Articles";
import TopTitle from "./TopTitile";
import Sider from "./Sider";

interface Props {
  articleList: ArticleList;
  cate: string | string[];
  cateListData: { data: Array<{ category: string }> };
  tagList: Array<{ id: string; name: string }>;
  currentArticles: Array<{ id: string; title: string; createAt: string }>;
}

const Home: NextPage<Props> = props => {
  const {
    articleList,
    cate,
    cateListData,
    tagList,
    currentArticles = []
  } = props;
  const { total, data = [] } = articleList;
  const { data: cateList = [] } = cateListData;
  const [category, setCategory] = useState<string>(null);
  const [list, setList] = useState(data);
  const [listTotal, setListTotal] = useState(total);

  useEffect(() => {
    if (articleList) {
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
      spinning={false}
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
        <Sider
          cateList={cateList}
          tagList={tagList}
          currentArticles={currentArticles}
          category={category}
        ></Sider>
      </div>
      <MyDrawer
        children={<Intro></Intro>}
        showIcon={
          <Icon
            type="environment"
            theme="twoTone"
            style={{ fontSize: "20px" }}
          />
        }
        placement="right"
        topVh="20vh"
        containerClass=".main"
      ></MyDrawer>
      <MyDrawer
        children={
          <Sider
            cateList={cateList}
            category={category}
            tagList={tagList}
            currentArticles={currentArticles}
          ></Sider>
        }
        showIcon={
          <Icon type="appstore" theme="twoTone" style={{ fontSize: "20px" }} />
        }
        placement="right"
        topVh="30vh"
        containerClass=".main"
      ></MyDrawer>
      <style jsx>{style}</style>
    </Spin>
  );
};

Home.getInitialProps = async ({ query }) => {
  const { cate } = query;
  const res: ArticleList = cate
    ? await fetchArticles(1, cate)
    : await fetchArticles(1);
  const cateListData = await myApi("category");
  const tagList = await myApi("tag");
  const currentArticles = await myApi("article/current");
  return { articleList: res, cate, cateListData, tagList, currentArticles };
};

export default Home;

const style = css`
  .main {
    width: calc(100% - 300px);
    padding: 0 20px;
  }
  .sider {
    position: fixed;
    width: 300px;
    top: 100px;
    right: 10px;
    height: calc(100vh - 64px - 40px);
    text-align: center;
    overflow-y: auto;
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
