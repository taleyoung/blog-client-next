import React, { SFC } from "react";
import { Tag, Divider } from "antd";
import TagIcon from "../TagIcon";

interface Props {
  time: string;
  tags: Array<string>;
  category: string;
  isTime?: boolean;
}

const ArticleInfo: SFC<Props> = ({
  time,
  tags = [],
  category = "",
  isTime = true
}) => {
  return (
    <div className="info">
      <TagIcon type="tag"></TagIcon>
      {tags.map(item => (
        <Tag color="orange" key={item}>
          {item}
        </Tag>
      ))}
      <Divider type="vertical"></Divider>
      <TagIcon type="container" />
      <Tag color="orange">{category}</Tag>
      <Divider type="vertical"></Divider>
      {isTime ? <span className="date">发布于 {time}</span> : ""}
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
