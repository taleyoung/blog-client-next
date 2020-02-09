import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import css from "styled-jsx/css";
import { Spin, Icon, Divider } from "antd";
import { ArticleDetail } from "@itypings/store";
import ArticleInfo from "@components/ArticleInfo";
import MyDrawer from "@components/MyDrawer";
import myApi from "@utils/myApi";

import { useMdToHtml } from "@utils/mdToHtml";

interface Props {
  article: ArticleDetail;
}

const Article: NextPage<Props> = props => {
  const [loading, setloading] = useState(true);
  const { article } = props;
  const { title, content, updatedAt, tags = [], category } = props.article;
  const { output, navigate } = useMdToHtml(content);

  useEffect(() => {
    if (article) {
      setloading(false);
    }
  }, [article]);

  return (
    <Spin
      spinning={false}
      indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />}
    >
      <div className="article">
        <div className="title">{title}</div>
        <ArticleInfo
          time={updatedAt}
          tags={tags}
          category={category}
        ></ArticleInfo>
        <Divider></Divider>
        <MyDrawer
          children={navigate && navigate.render()}
          showIcon={
            <Icon type="profile" theme="twoTone" style={{ fontSize: "20px" }} />
          }
          placement="right"
          topVh="40vh"
          containerClass=".article"
          title="文章目录"
        ></MyDrawer>
        <div className="content" dangerouslySetInnerHTML={{ __html: output }} />
      </div>
      <div className="navigate">{navigate && navigate.render()}</div>

      <style jsx>{style}</style>
    </Spin>
  );
};

Article.getInitialProps = async ({ query }) => {
  const res = await myApi(`article/${query.id}`);
  return { article: res };
};

export default Article;

const style = css`
  .article {
    width: calc(100% - 300px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
  }
  .title {
    font-size: 30px;
  }
  .content {
    width: 100%;
    font-size: 1.2em;
    line-height: 2;
  }
  .navigate {
    position: fixed;
    width: 300px;
    top: 104px;
    right: 10px;
  }
  @media screen and (max-width: 736px) {
    .navigate {
      display: none;
    }
    .article {
      width: 100%;
    }
  }
`;
