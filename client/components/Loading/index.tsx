import React, { SFC } from "react";
import { Spin } from "antd";

const Loading: SFC = () => (
  <div className="container">
    <Spin size="large"></Spin>
    <style jsx>{`
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 600px;
      }
    `}</style>
  </div>
);

export default Loading;
