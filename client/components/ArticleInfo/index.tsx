import React, { SFC } from "react";
import { Tag, Divider } from "antd";
import TagIcon from "../TagIcon";

interface Props {
  time: string;
  tags: Array<string>;
  archives: Array<string>;
}

const ArticleInfo: SFC<Props> = ({ time, tags = [], archives = [] }) => {
  return (
    <div className="info">
      <span className="date">发布于 {time}</span>
      <TagIcon type="tag"></TagIcon>
      {tags.map(item => (
        <Tag color="orange" key={item}>
          {item}
        </Tag>
      ))}
      <Divider type="vertical"></Divider>
      <TagIcon type="container" />
      {archives.map(item => (
        <Tag color="orange" key={item}>
          {item}
        </Tag>
      ))}
      <style jsx>{`
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
      `}</style>
    </div>
  );
};
export default ArticleInfo;
