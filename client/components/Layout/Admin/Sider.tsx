import React, { useState, SFC } from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import Router from "next/router";

const { Sider } = Layout;
const { SubMenu } = Menu;

const AppSider: SFC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const addArticle = () => {
    Router.push(`/admin/article?id=${-1}`);
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
          <Menu.Item key="1">文章列表</Menu.Item>
          <Menu.Item key="2" onClick={addArticle}>
            新增文章
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
