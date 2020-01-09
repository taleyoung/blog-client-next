import React, { SFC } from "react";
import { Icon, Layout, Row, Col } from "antd";
import { menuList } from "../../../../config/index";
import Left from "./Left";
import Right from "./Right";
const { Header } = Layout;

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1445382_6tc0o0rwbfu.js"
});
// 响应式
const responsiveLeft = { xxl: 5, xl: 5, lg: 5, sm: 4, xs: 24 };
const responsiveRight = { xxl: 5, xl: 5, lg: 10, sm: 0, xs: 0 };

export interface Props {}

const MyHeader: SFC<Props> = () => {
  return (
    <div className="header">
      <Header
        className="header"
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          backgroundColor: "#556cd6",
          boxShadow:
            "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)"
        }}
      >
        <Row type="flex" justify="space-between">
          <Col {...responsiveLeft}>
            <Left menuList={menuList}></Left>
          </Col>
          <Col {...responsiveRight}>
            <Right menuList={menuList}></Right>
          </Col>
        </Row>
      </Header>
    </div>
  );
};

export default MyHeader;
