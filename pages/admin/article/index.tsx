import React, { SFC, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Input, Button, Tag, Modal } from "antd";
import { withRouter } from "next/router";

import { fetchArticleDetail, updateArticle } from "@redux/actions/article";
import { Store, ArticleDetail } from "@client/typings/store";
import BreadCrumb from "@components/BreadCrumb";

const { TextArea } = Input;

interface Props {
  article: ArticleDetail;
  match: { params: { id: string } };
  fetchArticleDetail: typeof fetchArticleDetail;
  updateArticle: typeof updateArticle;
  router: any;
}

const Article: SFC<Props> = props => {
  console.log("props :", props);
  const { article, router } = props;
  const id = parseInt(router.query.id);

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [tags, setTags] = useState<Array<string>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [newTag, setNewTag] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    const fetch = async () => {
      await props.fetchArticleDetail(id);
    };
    fetch();
  }, []);

  useEffect(() => {
    setTitle(article.title);
    setContent(article.content);
    setTags(article.tags);
  }, [article]);

  const submitChange = async () => {
    setLoading(true);
    const data = {
      title,
      content,
      tags: []
    };
    await props.updateArticle(id, data);
    setLoading(false);
  };

  const addTag = () => {
    setTags([...tags, newTag]);
    setModal(false);
  };

  return (
    <div>
      <BreadCrumb list={["文章管理", "文章编辑"]}></BreadCrumb>
      <div className="wrap">
        <div className="title">标题</div>
        <Input value={title} onChange={e => setTitle(e.target.value)} />
        <div className="title">标签</div>
        <div className="tag">
          {tags.map(tag => (
            <Tag key={tag} color="blue">
              {tag}
            </Tag>
          ))}
          <Button icon="plus" size="small" onClick={() => setModal(true)}>
            添加书签
          </Button>
          <Modal
            title="添加书签"
            visible={modal}
            onOk={() => addTag()}
            onCancel={() => setModal(false)}
            confirmLoading={loading}
          >
            <Input
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
            ></Input>
          </Modal>
        </div>
        <div className="title">分类</div>
        <div className="title">内容</div>
        <TextArea
          value={content}
          onChange={e => setContent(e.target.value)}
          className="textArea"
        ></TextArea>
        <Button type="primary" loading={loading} onClick={submitChange}>
          提交
        </Button>
      </div>
      <style jsx>
        {`
          .title {
            margin: 10px 5px;
            font-size: 1.2em;
            font-weight: bold;
          }
          .wrap {
            width: 50%;
          }
          .textArea {
            height: 300px;
          }

          .tag {
            display: flex;
            justify-content: flex-start;
          }
        `}
      </style>
    </div>
  );
};

export default withRouter(
  connect(
    (state: Store) => ({
      article: state.article.articleDetail
    }),
    {
      fetchArticleDetail,
      updateArticle
    }
  )(Article)
);
