import React, { SFC } from "react";
import Link from "next/link";
import { Layout, Divider, Tag, Menu, Icon } from "antd";
import Intro from "./Intro";

const { Sider } = Layout;
const SideBar: SFC = () => {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      width={300}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        background: "#fff"
      }}
    >
      <div className="logo" />
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
                query: { cate: text }
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
    </Sider>
  );
};

export default SideBar;
