import React, { SFC } from "react";
import css from "styled-jsx/css";
import Link from "next/link";
import { Divider, Tag, Menu, Icon } from "antd";
import Intro from "@components/Intro";

const SideBar: SFC = () => {
  return (
    <div className="app-sidebar">
      <Intro></Intro>
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
    margin: 0 auto;
    position: fixed;
  }
`;
