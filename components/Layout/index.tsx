import React, { SFC, ReactNode } from "react";
import Header from "./Header";
import SiderBar from "./SiderBar";
import { Layout, Row, Col } from "antd";

const { Footer } = Layout;

export interface Props {
  children: ReactNode;
}
// 响应式
const siderLayout = { xxl: 4, xl: 5, lg: 5, sm: 0, xs: 0 };
const contentLayout = { xxl: 20, xl: 19, lg: 19, sm: 24, xs: 24 };

const AppLayout: SFC<Props> = props => {
  return (
    <Layout className="app-container">
      <Header />
      <Row className="app-wrapper">
        <Col {...siderLayout}>
          <SiderBar />
        </Col>
        <Col {...contentLayout}>
          <div className="app-main">{props.children}</div>
          <Footer className="footer">Designed By Taleyoung ❤️</Footer>
        </Col>
      </Row>

      <style jsx global>
        {`
          .app-wrapper {
            background: #fff;
            padding: 40px 0 0;
            position: relative;
          }
          .app-main {
            height: calc(100vh - 64px - 40px);
            overflow: auto;
            -webkit-overflow-scrolling: touch;
            box-sizing: border-box;
            padding-left: 20px;
            padding-right: 20px;
          }
          .footer {
            text-align: center;
          }
          @media only screen and (max-width: 736px) {
            .header-dropdown-icon {
              display: block !important;
              position: absolute;
              font-size: 18px;
              right: 30px;
              top: 0px;
              width: 16px;
              height: 22px;
              z-index: 1;
            }
          }
        `}
      </style>
    </Layout>
  );
};

export default AppLayout;
