import React, { SFC, useState, useEffect } from "react";
import { Avatar, Divider, Tag } from "antd";
import myApi from "@utils/myApi";
// import avatar1 from "@static/img/avatar1.jpeg";

export interface IProp {
  tags?: any[];
}

interface Next {
  getInitialProps: any;
}

const SideBar: SFC<IProp> & Next = ({ tags = [] }) => {
  // const [tags, setTags] = useState([]);
  // useEffect(() => {
  //   const fetch = async () => {
  //     const res = await myApi("tag");
  //     setTags(res);
  //   };
  //   fetch();
  // }, []);
  return (
    <div className="container">
      {/* <Avatar
        src="/static/img/avatar1.jpeg"
        size="large"
        className={style.avatar}
      ></Avatar> */}
      <div className="title">taleyoung</div>
      <div className="subTitle">js爱好者</div>
      <Divider>热门文章</Divider>
      <div className="articleList">
        <div>从Material Design到UI设计</div>
        <div>从Material Design到UI设计</div>
        <div>从Material Design到UI设计</div>
        <div>从Material Design到UI设计</div>
      </div>
      <Divider>标签</Divider>
      <div className="tagList">
        {tags.map(item => (
          <Tag key={item.id} color="blue">
            {item.name}
          </Tag>
        ))}
      </div>
      <style jsx>{`
        .container {
          border: 1px solid #eee;
          padding: 30px;
          text-align: center;
          box-shadow: 5px 5px 4px -4px #eee;
          background: #fff;
          height: 1000px;
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

SideBar.getInitialProps = async function() {
  console.log("object");
  const res = await myApi("tag");
  console.log("res", res);
  return {
    tags: res
  };
};

export default SideBar;
