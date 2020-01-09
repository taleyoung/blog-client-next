import React, { FC } from "react";
import { Tag } from "antd";

interface Props {
  category: string;
}
const TopTitle: FC<Props> = ({ category }) => (
  <div className="top-title">
    {category ? (
      <div>
        <Tag color="#108ee9">{category}</Tag>的查询结果
      </div>
    ) : (
      <div>
        <Tag color="#108ee9">全部文章</Tag>
      </div>
    )}
    <style jsx>
      {`
        .top-title {
          margin-left: 20px;
        }
      `}
    </style>
  </div>
);

export default TopTitle;
