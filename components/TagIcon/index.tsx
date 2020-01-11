import React, { SFC } from "react";
import { Icon } from "antd";

interface IProp {
  type?: string;
}

const TagIcon: SFC<IProp> = ({ type }) => (
  <span className="tag">
    {type && <Icon type={type}></Icon>}
    <style jsx>
      {`
        .tag {
          margin-right: 5px;
        }
      `}
    </style>
  </span>
);

export default TagIcon;
