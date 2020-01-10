import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import css from "styled-jsx/css";
import { Input, Button, Tag, Modal } from "antd";
import { ArticleDetail } from "@itypings/store";
import BreadCrumb from "@components/BreadCrumb";
import myApi from "@utils/myApi";

const { TextArea } = Input;

interface Props {
  article: ArticleDetail;
  allTagData: Array<{ id: string; name: string }>;
  id: string;
  match?: { params: { id: string } };
}

const Article: NextPage<Props> = props => {
  const { article, allTagData, id } = props;
  const isNew = id === "" ? true : false;

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [cate, setCate] = useState<string>("");
  const [tags, setTags] = useState<Array<string>>([]);

  const [loading, setLoading] = useState<boolean>(false);
  const [newTag, setNewTag] = useState<string>("");
  const [initTag, setInitTag] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    if (isNew) {
      setTitle("");
      setContent("");
      setTags([]);
      return;
    }
  }, [allTagData]);

  useEffect(() => {
    if (Object.keys(article).length !== 0) {
      setTitle(article.title);
      setContent(article.content);
      setTags(article.tags);
      setCate(article.category);
    }
  }, [props.article]);

  const submitChange = async () => {
    setLoading(true);
    const data = {
      title,
      content,
      cate,
      tag: initTag
    };
    isNew
      ? await myApi("article", "post", data, true)
      : await myApi(`article/${article.id}`, "put", data, true);
    setLoading(false);
  };

  const addTag = async () => {
    const res = await myApi("tag", "post", {
      tagName: newTag,
      articleId: article.id
    });
    console.log("res :", res);
    if (res) {
      setModal(false);
    }
  };

  return (
    <div>
      <BreadCrumb list={["文章管理", "文章编辑"]}></BreadCrumb>
      <div className="wrap">
        <div className="title">标题</div>
        <Input value={title} onChange={e => setTitle(e.target.value)} />
        <div className="cate">分类</div>
        <Input value={cate} onChange={e => setCate(e.target.value)} />
        <div className="initTag">初始标签</div>
        <Input value={initTag} onChange={e => setInitTag(e.target.value)} />
        <div className="title">标签</div>
        {isNew ? (
          ""
        ) : (
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
        )}
        <div className="title">全部标签</div>
        {allTagData
          ? allTagData.map(tag => (
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
      <style jsx>{style}</style>
    </div>
  );
};

Article.getInitialProps = async ({ query }) => {
  const article: ArticleDetail = query.id
    ? await myApi(`article/${query.id}`)
    : {};
  const allTagData: Array<{ id: string; name: string }> = await myApi("tag");
  const id = typeof query.id === "string" ? query.id : "";
  return { article, allTagData, id };
};

export default Article;

const style = css`
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
`;
