import React, { SFC } from "react";
import { Menu, Icon, Button } from "antd";
import Link from "next/link";
import css from "styled-jsx/css";
// import style from "./style";

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1445382_6tc0o0rwbfu.js"
});

const menuList = [
  {
    path: "/app/home",
    iconType: "icon-qiu",
    name: "首页"
  },
  {
    path: "/app/article",
    iconType: "icon-jilu",
    name: "文章"
  },
  {
    path: "/app/project",
    iconType: "icon-lianxi",
    name: "项目"
  },
  {
    path: "/app/timeline",
    iconType: "icon-lubiao",
    name: "时间线"
  },
  {
    path: "/app/about",
    iconType: "icon-xiangji",
    name: "关于我"
  }
];

export interface Props {}

const Header: SFC<Props> = props => {
  // const toAdmin = () => {
  //   props.history.push("/admin/overview");
  // };
  return (
    <div className="topBar">
      <div className="logo">Taleyoung的博客</div>
      <div className="menu">
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={["首页"]}>
          {menuList.map(menu => (
            <Menu.Item key={menu.name}>
              <Link href={menu.path}>
                <div>
                  <IconFont type={menu.iconType} style={{ fontSize: "24px" }} />
                  {menu.name}
                </div>
              </Link>
            </Menu.Item>
          ))}
        </Menu>
        {/* <Button>Admin</Button> */}
      </div>
      <style jsx>{style}</style>
    </div>
  );
};

export default Header;

const style = css`
  .logo {
    padding-left: 5%;
    font-size: 24px;
  }

  .menu {
    line-height: 40px;
    padding-left: 40%;
  }

  .topBar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 45px;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    box-shadow: 0 5px 4px #eee;
  }
`;
