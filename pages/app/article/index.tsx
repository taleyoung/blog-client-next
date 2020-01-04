import React, { SFC, useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import marked from "marked";
import hljs from "highlight.js";

import { fetchArticleDetail } from "@redux/actions/article";
import { Store, ArticleDetail } from "@client/typings/store";
import css from "styled-jsx/css";
import ArticleInfo from "@components/ArticleInfo";
import Loading from "@components/Loading";
import Fade from "@material-ui/core/Fade";

import Tocify from "./tocify";

import "highlight.js/styles/atelier-forest-dark.css";

interface Props {
  article: ArticleDetail;
  match: { params: { id: string } };
  fetchArticleDetail: typeof fetchArticleDetail;
  router: any;
}

const Article: SFC<Props> = props => {
  const [loading, setloading] = useState(true);
  const { title, content, updatedAt, tags = [] } = props.article;
  const tocify = new Tocify();
  const renderer = new marked.Renderer();
  renderer.heading = function(text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<div id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></div>\n`;
  };
  marked.setOptions({
    renderer,
    highlight: code => hljs.highlightAuto(code).value
  });
  const output = marked(content);

  useEffect(() => {
    const getArticle = async () => {
      await props.fetchArticleDetail(parseInt(props.router.query.id));
    };
    getArticle();
  }, []);

  return (
    <Fade in={loading}>
      <div className="container">
        <div className="content-wrap">
          <div className="title">{title}</div>
          <ArticleInfo
            time={updatedAt}
            tags={tags}
            archives={["33", "44"]}
          ></ArticleInfo>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: output }}
          />
        </div>
        <div className="toc">{tocify && tocify.render()}</div>
        <style jsx>{style}</style>
        {/* <Loading></Loading> */}
      </div>
    </Fade>
  );
};

export default withRouter(
  connect(
    (state: Store) => ({
      article: state.article.articleDetail
    }),
    { fetchArticleDetail }
  )(Article)
);

const style = css`
  .container {
    display: flex;
  }
  .content-wrap {
    flex: 4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin: 30px 90px 0px 90px;
    padding: 10px;
    border-radius: 20px;
    /* background: #f5f5d5; */
  }

  .title {
    font-size: 30px;
  }

  .content {
    flex: 4;
    line-height: 2em;
    font-size: 15px;
  }
  .toc {
    flex: 1;
    margin-top: 50px;
    padding: 0;
  }
`;
