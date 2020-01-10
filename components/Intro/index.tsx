import React, { FC } from "react";
import { Avatar, Divider, Icon, Popover } from "antd";
import css from "styled-jsx/css";

const Intro: FC = () => {
  return (
    <div className="container">
      <div className="bg">
        <img className="bg-img" src="/static/img/bg.jpg" alt="" />
      </div>
      <Avatar
        src="/static/img/avatar1.jpeg"
        size="large"
        style={{
          width: "100px",
          height: "100px",
          boxShadow:
            "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)"
        }}
      ></Avatar>
      <div className="title">taleyoung</div>
      <div className="subTitle">js爱好者</div>
      <div className="subTitle">web开发工程师</div>
      <Divider>技能树</Divider>
      <div className="articleList">
        <div>从Material Design到UI设计</div>
        <div>从Material Design到UI设计</div>
        <div>从Material Design到UI设计</div>
        <div>从Material Design到UI设计</div>
      </div>
      <Divider>联系我</Divider>
      <div className="contact">
        <a href="https://github.com/taleyoung" target="_blank">
          <Icon type="github" style={{ fontSize: "30px", margin: "10px" }} />
        </a>
        <Popover title="微信号" content="Taleyoung" trigger="click">
          <Icon
            type="wechat"
            style={{ fontSize: "30px", margin: "10px", color: "#00CD66" }}
          />
        </Popover>
        <Popover title="qq号" content="1090117853" trigger="click">
          <Icon
            type="qq"
            style={{ fontSize: "30px", margin: "10px", color: "#1E90FF	" }}
          />
        </Popover>
      </div>
      <style jsx>{style}</style>
    </div>
  );
};

export default Intro;

const style = css`
  .bg {
    margin-bottom: -60px;
  }
  .bg-img {
    width: 100%;
    height: 200px;
    border-radius: 10px;
  }
  .container {
    padding: 0 10px;
    text-align: center;
    background: #fff;
    width: 300px;
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
`;
