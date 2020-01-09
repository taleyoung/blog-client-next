import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import css from "styled-jsx/css";
import marked from "marked";
import hljs from "highlight.js";
import { Spin, Icon, Divider } from "antd";
import "highlight.js/styles/atelier-forest-dark.css";

import { ArticleDetail } from "@itypings/store";
import ArticleInfo from "@components/ArticleInfo";
import myApi from "@utils/myApi";

import contentStyle from "./content-style";
import Navigate from "./Navigate";

interface Props {
  article: ArticleDetail;
}

const Article: NextPage<Props> = props => {
  const [loading, setloading] = useState(true);
  const { article } = props;
  const { title, content, updatedAt, tags = [], category } = props.article;

  const navigate = new Navigate();
  const renderer = new marked.Renderer();
  renderer.heading = function(text, level) {
    const anchor = navigate.add(text, level);
    return `<div id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></div>\n`;
  };
  marked.setOptions({
    renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    breaks: true,
    smartLists: true,
    smartypants: true,
    highlight: code => hljs.highlightAuto(code).value
  });
  const output = marked(content);

  useEffect(() => {
    if (article) {
      setloading(false);
    }
  }, [article]);

  return (
    <Spin
      spinning={loading}
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
        <div className="content" dangerouslySetInnerHTML={{ __html: output }} />
      </div>
      <div className="navigate">{navigate && navigate.render()}</div>
      <style jsx>{style}</style>
      <style jsx>{contentStyle}</style>
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
    font-size: 15px;
  }
  .navigate {
    position: fixed;
    width: 300px;
    top: 104px;
    right: 20px;
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
