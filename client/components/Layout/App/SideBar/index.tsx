import React, { SFC, useState, useEffect } from "react";
import { Avatar, Divider, Tag } from "antd";
import myApi from "@utils/myApi";
import style from "./style.less";
// import avatar1 from "@assets/img/avatar1.jpeg";

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
    <div className={style.container}>
      {/* <Avatar src={avatar1} size="large" className={style.avatar}></Avatar> */}
      <div className={style.title}>taleyoung</div>
      <div className={style.subTitle}>js爱好者</div>
      <Divider>热门文章</Divider>
      <div className={style.articleList}>
        <div>从Material Design到UI设计</div>
        <div>从Material Design到UI设计</div>
        <div>从Material Design到UI设计</div>
        <div>从Material Design到UI设计</div>
      </div>
      <Divider>标签</Divider>
      <div className={style.tagList}>
        {tags.map(item => (
          <Tag key={item.id} color="blue">
            {item.name}
          </Tag>
        ))}
      </div>
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
