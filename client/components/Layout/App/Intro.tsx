import React, { FC } from "react";
import { Avatar, Divider } from "antd";

const Intro: FC = () => {
  return (
    <div className="container">
      <Avatar
        // src="/static/img/avatar1.jpeg"
        size="large"
        className="avatar"
      ></Avatar>
      <div className="title">taleyoung</div>
      <div className="subTitle">js爱好者</div>
      <Divider>热门文章</Divider>
      <div className="articleList">
        <div>从Material Design到UI设计</div>
        <div>从Material Design到UI设计</div>
        <div>从Material Design到UI设计</div>
        <div>从Material Design到UI设计</div>
      </div>
      <style jsx>{`
        .container {
          padding: 30px;
          text-align: center;
          background: #fff;
          width: 300px;
        }
        .avatar {
          width: 150px;
          height: 150px;
        }
        .title {
          font-size: 1.5em;
          font-weight: 700;
          margin-top: 10px;
        }
        .subTitle {
          font-size: 13px;
          margin-top: 5px;
          margin-bottom: 5px;
        }
        .articleList {
          font-size: 13px;
        }
        .tagList {
          margin-top: 5px;
        }
      `}</style>
    </div>
  );
};

export default Intro;
