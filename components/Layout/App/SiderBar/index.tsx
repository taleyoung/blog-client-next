import React, { SFC } from "react";
import css from "styled-jsx/css";
import Link from "next/link";
import { Divider, Tag, Menu, Icon } from "antd";
import Intro from "@components/Intro";

const SideBar: SFC = () => {
  return (
    // <Sider
    //   breakpoint="lg"
    //   collapsedWidth="0"
    //   width={300}
    //   style={{
    //     overflow: "auto",
    //     height: "100vh",
    //     position: "fixed",
    //     left: 0,
    //     background: "#fff"
    //   }}
    // >
    //   <div className="logo" />
    //   <Intro></Intro>
    //   <Divider>标签云</Divider>
    //   <Tag color="blue">react</Tag>
    //   <Tag color="blue">nodejs</Tag>
    //   <Divider>文章归类</Divider>
    //   <Menu theme="light" mode="inline" defaultSelectedKeys={["前端"]}>
    //     {["前端", "后端", "算法", "零碎"].map(text => (
    //       <Menu.Item key={text}>
    //         <Link
    //           href={{
    //             pathname: "/overview",
    //             query: { cate: text }
    //           }}
    //         >
    //           <div>
    //             <Icon type="user" />
    //             <span className="nav-text">{text}</span>
    //           </div>
    //         </Link>
    //       </Menu.Item>
    //     ))}
    //   </Menu>
    // </Sider>
    <div className="app-sidebar">
      {/* <img className="sider-avatar" alt="" />
      <h2 className="title">taleyoung</h2>
      <h5 className="sub-title">js爱好者</h5>

      <Divider orientation="left">热门文章</Divider>
      <ul className="article-list">
        <li className="article-list-li">
          <a className="article-list-a">文章</a>
        </li>
      </ul>

      <Divider orientation="left">标签</Divider>
      <div className="tag-list">
        <Tag color="blue">react</Tag>
        <Tag color="blue">nodejs</Tag>
      </div> */}
      <Intro></Intro>
      <Divider>标签云</Divider>
      <Tag color="blue">react</Tag>
      <Tag color="blue">nodejs</Tag>
      <Divider>文章归类</Divider>
      <Menu theme="light" mode="inline" defaultSelectedKeys={["前端"]}>
        {["前端", "后端", "算法", "零碎"].map(text => (
          <Menu.Item key={text}>
            <Link
              href={{
                pathname: "/overview",
                query: { cate: encodeURIComponent(text) }
              }}
            >
              <div>
                <Icon type="user" />
                <span className="nav-text">{text}</span>
              </div>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
      <style jsx>{style}</style>
    </div>
  );
};

export default SideBar;

const style = css`
  .app-sidebar {
    border-right: 1px solid #ebedf0;
    height: calc(100vh - 64px - 40px);
    text-align: center;
    color: rgba(0, 0, 0, 0.65);
    overflow-y: auto;
  }
  .sider-avatar {
    width: 132px;
    height: 132px;
    border-radius: 50%;
  }
  .title {
    font-size: 1.5em;
    font-weight: 700;
    margin-top: 10px;
  }
  .sub-title {
    font-size: 13px;
    margin-top: 5px;
    margin-bottom: 5px;
    color: rgba(0, 0, 0, 0.65);
  }
  .article-list {
    text-align: left;
  }
  .article-list-li {
    padding: 0 20px;
  }
  .article-list-a {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
    line-height: 32px;
    color: #8590a6;
    cursor: pointer;
  }
  .article-list-a:hover {
    background: #f0f2f5;
    /* a {
      color: #40a9ff;
    } */
  }

  .tag-list {
    overflow: hidden;

    /* a {
      color: inherit;
    } */
  }
  .ant-tag {
    margin-bottom: 6px;
  }
`;
