import React, { SFC, useEffect, useState } from "react";
import marked from "marked";
import hljs from "highlight.js";

import { ArticleDetail } from "@client/typings/store";
import css from "styled-jsx/css";
import ArticleInfo from "@components/ArticleInfo";
import Loading from "@components/Loading";
import Fade from "@material-ui/core/Fade";
import myApi from "@utils/myApi";

import Tocify from "./tocify";

import "highlight.js/styles/atelier-forest-dark.css";
import useTocify from "@utils/useTocify";
interface Props {
  article: ArticleDetail;
}
interface Next {
  getInitialProps: any;
}

const Article: SFC<Props> & Next = props => {
  const [loading, setloading] = useState(true);
  const { title, content, updatedAt, tags = [] } = props.article;
  // const { tocify, output, setOutput } = useTocify("");

  const tocify = new Tocify();
  const renderer = new marked.Renderer();
  renderer.heading = function(text, level) {
    const anchor = tocify.add(text, level);
    return `<div id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></div>\n`;
  };
  marked.setOptions({
    renderer,
    highlight: code => hljs.highlightAuto(code).value
  });
  const output = marked(content);

  useEffect(() => {
    setloading(false);
    // setOutput(content);
  }, [props.article]);
  console.log("output :", output);

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    // <Fade in={loading}>
    <div>
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
      </div>
    </div>
    // </Fade>
  );
};

Article.getInitialProps = async ({ query }) => {
  const res = await myApi(`article/${query.id}`);
  return { article: res };
};

export default Article;

const style = css`
  .loading {
    position: absolute;
    top: 500px;
  }
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
    margin-top: 150px;
    padding: 0;
  }
`;
