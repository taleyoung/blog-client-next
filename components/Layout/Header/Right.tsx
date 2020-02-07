import React, { SFC } from "react";
import { Menu, Button } from "antd";
import Link from "next/link";
import { MenuList } from "@itypings/config";

interface Props {
  menuList: Array<MenuList>;
}

const Right: SFC<Props> = ({ menuList }) => {
  return (
    <div>
      <Menu
        theme="light"
        mode="horizontal"
        style={{
          lineHeight: "64px",
          backgroundColor: "#556cd6",
          display: "flex",
          justifyContent: "center"
        }}
      >
        {menuList.map(item => (
          <Menu.Item key={item.name}>
            <Link href={item.path}>
              <a style={{ color: "#fff" }}>{item.name}</a>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default Right;
