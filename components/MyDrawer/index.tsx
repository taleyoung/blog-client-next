import React, { FC, useState, ReactNode } from "react";
import css from "styled-jsx/css";
import { Icon, Drawer } from "antd";

interface Props {
  children: ReactNode;
}

const MyDrawer: FC<Props> = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div>
      <div className="drawer-btn" onClick={() => setDrawerOpen(true)}>
        <Icon type="menu-o" className="nav-phone-icon" />
      </div>
      <Drawer
        title="Taleyoung's Blog"
        placement="right"
        closable={false}
        onClose={() => setDrawerOpen(false)}
        visible={drawerOpen}
        getContainer={() => document.querySelector(".main")}
      >
        {children}
      </Drawer>
      <style jsx>{style}</style>
    </div>
  );
};

export default MyDrawer;

const style = css`
  .drawer-btn {
    display: none;
  }
  @media screen and (max-width: 736px) {
    .drawer-btn {
      display: block;
      position: fixed;
      width: 40px;
      height: 40px;
      top: 20vh;
      right: 10px;
      box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
      border-radius: 4px 0 0 4px;
      text-align: center;
      line-height: 41px;
      z-index: 999;
      background: #fff;
    }
  }
`;
