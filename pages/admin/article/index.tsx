import React, { SFC, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Input, Button, Tag, Modal } from "antd";
import { withRouter } from "next/router";

import {
  fetchArticleDetail,
  updateArticle,
  addArticle
} from "@redux/actions/article";
import { Store, ArticleDetail } from "@client/typings/store";
import BreadCrumb from "@components/BreadCrumb";
import myApi from "@utils/myApi";

const { TextArea } = Input;

interface Props {
  article: ArticleDetail;
  match: { params: { id: string } };
  fetchArticleDetail: typeof fetchArticleDetail;
  updateArticle: typeof updateArticle;
  addArticle: typeof addArticle;
  router: any;
}

const Article: SFC<Props> = props => {
  const { article, router } = props;
  const id = parseInt(router.query.id);
  const isNew = id === -1 ? true : false;

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [tags, setTags] = useState<Array<string>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [newTag, setNewTag] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);

  const [allTags, setAllTags] = useState([{ id: "", name: "" }]);

  useEffect(() => {
    const fetch = async () => {
      const res = await myApi("tag");
      console.log("res", res);
      setAllTags(res);
      console.log("allTags", allTags);
      if (isNew) {
        setTitle("");
        setContent("");
        setTags([]);
        return;
      }
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
      tags
    };
    isNew ? await props.addArticle(data) : await props.updateArticle(id, data);
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
            title="添加标签"
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
        <div className="title">全部标签</div>
        {allTags
          ? allTags.map(tag => (
              <Tag key={tag.id} color="green">
                {tag.name}
              </Tag>
            ))
          : ""}
        <div className="title">内容</div>
        <TextArea
          value={content}
          onChange={e => setContent(e.target.value)}
          className="textArea"
          style={{ height: "200px" }}
        ></TextArea>
        <div className="btn">
          <Button
            icon="thunderbolt"
            type="primary"
            loading={loading}
            onClick={submitChange}
          >
            提交
          </Button>
        </div>
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
            height: 400px;
          }
          .tag {
            display: flex;
            justify-content: flex-start;
          }
          .btn {
            margin-top: 30px;
            display: flex;
            justify-content: flex-start;
            width: 100px;
            padding: 10px auto 10px auto;
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
      updateArticle,
      addArticle
    }
  )(Article)
);
