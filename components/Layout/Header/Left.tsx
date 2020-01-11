import React, { SFC } from "react";
import css from "styled-jsx/css";
import Link from "next/link";
import { Dropdown, Menu, Icon } from "antd";
import { MenuList } from "@itypings/config";

interface Props {
  menuList: Array<MenuList>;
}

const Left: SFC<Props> = ({ menuList }) => {
  const menu = (
    <Menu>
      {menuList.map(item => (
        <Menu.Item key={item.name}>
          <Link href={item.path}>
            <a>{item.name}</a>
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <div className="left">
      <div className="logo">
        <Icon type="bulb" theme="twoTone" style={{ fontSize: "30px" }} />
        Taleyoung's Blog
      </div>
      <div className="header-dropdown">
        <Dropdown
          overlayStyle={{
            width: "100vw",
            left: " 0 !important",
            top: "65 !important",
            backgroundColor: "#556cd6"
          }}
          trigger={["click"]}
          overlay={menu}
          getPopupContainer={() => document.querySelector(".header .left")}
        >
          <div className="header-dropdown-icon">
            <Icon type="menu-o" />
          </div>
        </Dropdown>
      </div>
      <style jsx>{style}</style>
    </div>
  );
};
export default Left;
const style = css`
  .left {
    color: #fff;
    text-align: center;
    font-size: 20px;
    position: relative;
  }
  .header-dropdown {
    width: 100vw;
    left: 0 !important;
    top: 65px;
  }

  .header-dropdown-icon {
    display: none;
  }
`;
