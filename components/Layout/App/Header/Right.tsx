import React, { SFC } from "react";
import { Menu } from "antd";
import Link from "next/link";
import { MenuList } from "@itypings/config";

interface Props {
  menuList: Array<MenuList>;
}

const Right: SFC<Props> = ({ menuList }) => {
  return (
    <div>
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
  );
};

export default Right;
