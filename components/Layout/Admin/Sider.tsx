import React, { useState, SFC } from "react";
import { Layout, Menu, Icon } from "antd";
import Router from "next/router";
import Link from "next/link";

const { Sider } = Layout;
const { SubMenu } = Menu;

const AppSider: SFC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const addArticle = () => {
    Router.push(`/admin/article`);
  };
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
    >
      <div style={{ height: "50px" }} />
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="user" />
              <span>文章管理</span>
            </span>
          }
        >
          <Menu.Item key="1">
            <Link href="/admin/overview">
              <a>文章列表</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link href="/admin/article">
              <a>新增文章</a>
            </Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="3">
          <Icon type="file" />
          <span>标签管理</span>
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="file" />
          <span>分类管理</span>
        </Menu.Item>
      </Menu>
      <style jsx>{`
        .logo {
          height: 32px;
          background: rgba(255, 255, 255, 0.2);
          margin: 16px;
        }
      `}</style>
    </Sider>
  );
};

export default AppSider;
