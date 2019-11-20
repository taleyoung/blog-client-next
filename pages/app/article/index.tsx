import React, { SFC, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import ReactMarkdown from "react-markdown";
// import CodeBlock from "@utils/codeBlock";
import { fetchArticleDetail } from "@redux/actions/article";
import { Store, ArticleDetail } from "@client/types/store";
import css from "styled-jsx/css";
import ArticleInfo from "@components/ArticleInfo";

interface Props {
  article: ArticleDetail;
  match: { params: { id: string } };
  fetchArticleDetail: typeof fetchArticleDetail;
  router: any;
}

const Article: SFC<Props> = props => {
  const { title, content, updatedAt, tags = [] } = props.article;

  useEffect(() => {
    const getArticle = async () => {
      await props.fetchArticleDetail(parseInt(props.router.query.id));
    };
    getArticle();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="title">{title}</div>
        <ArticleInfo
          time={updatedAt}
          tags={tags}
          archives={["33", "44"]}
        ></ArticleInfo>
        <div className="content">
          <ReactMarkdown
            source={content}
            // renderers={{
            //   code: CodeBlock
            // }}
          ></ReactMarkdown>
        </div>
      </div>
      <style jsx>{style}</style>
    </div>
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
    line-height: 2em;
    padding: 50px 150px 0 150px;
    font-size: 15px;
  }
`;
