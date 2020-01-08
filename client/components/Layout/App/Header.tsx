import React, { SFC } from "react";
import { Menu, Icon, Button, Layout } from "antd";
import Link from "next/link";
import css from "styled-jsx/css";
import { Item } from "rc-menu";

const { Header } = Layout;

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1445382_6tc0o0rwbfu.js"
});

const menuList = [
  {
    path: "/overview",
    iconType: "icon-qiu",
    name: "首页"
  },
  {
    path: "/timeline",
    iconType: "icon-jilu",
    name: "文章归档"
  },
  {
    path: "/about",
    iconType: "icon-xiangji",
    name: "关于我"
  }
];

export interface Props {}

const MyHeader: SFC<Props> = () => {
  return (
    <div>
      <Header
        className="header"
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          backgroundColor: "#556cd6",
          boxShadow:
            "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)"
        }}
      >
        <div className="topBar">
          <div className="logo">Taleyoung's Blog</div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[]}
            style={{ lineHeight: "64px", backgroundColor: "#556cd6" }}
          >
            {menuList.map(item => (
              <Menu.Item key={item.name}>
                <Link href={item.path}>
                  <a>{item.name}</a>
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        </div>
      </Header>
      <style jsx>{style}</style>
    </div>
  );
};

export default MyHeader;

const style = css`
  .logo {
    color: #fff;
    font-size: 20px;
  }
  .menu {
    line-height: 40px;
    padding-left: 40%;
  }

  .topBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: #fff; */
    /* border-bottom: 1px solid #eee;
    box-shadow: 0 5px 4px #eee; */
  }
`;
