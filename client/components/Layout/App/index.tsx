import React, { SFC, ReactNode } from "react";
import Header from "./Header";
import SideBar from "./SiderBar";
import { Layout, Row, Col } from "antd";

const { Footer } = Layout;

export interface Props {
  children: ReactNode;
}

const siderLayout = { xxl: 6, xl: 6, lg: 6, sm: 0, xs: 0 };
const contentLayout = { xxl: 15, xl: 14, lg: 14, sm: 24, xs: 24 };

const AppLayout: SFC<Props> = props => {
  return (
    <Layout>
      <Header></Header>
      <Row className="wrapper">
        <Col {...siderLayout}>
          <SideBar></SideBar>
        </Col>
        <Col {...contentLayout}>{props.children}</Col>
      </Row>
      <Footer>footer</Footer>
      <style jsx>{`
        .wrapper {
           {
            /* background: #efefef; */
          }
        }
      `}</style>
    </Layout>
  );
};

export default AppLayout;
