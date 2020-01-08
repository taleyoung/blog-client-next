import React, { SFC } from "react";
import { Icon, Divider } from "antd";
import ArticleInfo from "../ArticleInfo";
import css from "styled-jsx/css";

interface Props {
  id: number;
  title: string;
  content: string;
  time: string;
  tags?: Array<string>;
  toDetail: (id: number) => void;
}

const Preview: SFC<Props> = ({ id, title, content, tags, time, toDetail }) => (
  <div>
    <div className="container">
      <div className="desc">
        <Icon type="heart" theme="twoTone" style={{ fontSize: "30px" }} />
        <div>24</div>
      </div>
      <div className="content">
        <div className="pre-img"></div>
        <div className="title" onClick={() => toDetail(id)}>
          {title}
        </div>
        <div>
          {content} <a onClick={() => toDetail(id)}>查看全文</a>
        </div>
        <ArticleInfo time={time} tags={tags} category={"aa"}></ArticleInfo>
      </div>
    </div>
    <style jsx>{style}</style>
  </div>
);

export default Preview;

const style = css`
  .pre-img {
    height: 150px;
    background: #fc817c;
    border-radius: 5px;
  }
  .container {
    padding: 15px;
    margin-bottom: 20px;
    display: flex;
    justify-content: flex-start;
    width: 600px;
    border: 1px solid #eee;
    border-radius: 10px;
    /* background: #f5f5d5; */
  }
  .desc {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .content {
    flex: 9;
    display: flex;
    flex-direction: column;
    min-height: 150px;
  }
  .title {
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
  }
  .title:hover {
    color: #40608e;
  }
  .info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 15px;
  }
  .date {
    font-size: 10px;
    font-weight: 300;
    margin-right: 10px;
  }
  .tag {
    margin-right: 5px;
  }
  .card {
    width: 600px;
    height: 180px;
  }
`;
