import React, { SFC, ReactNode } from "react";
import Header from "./Header";
import SiderBar from "./SiderBar";
import { Layout, Row, Col, Divider } from "antd";

const { Footer } = Layout;

export interface Props {
  children: ReactNode;
}
// 响应式
const siderLayout = { xxl: 5, xl: 6, lg: 5, sm: 0, xs: 0 };
const contentLayout = { xxl: 19, xl: 18, lg: 19, sm: 24, xs: 24 };

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
          <Footer className="footer">
            <Divider style={{ color: "#fff" }}></Divider>Designed By Taleyoung
            ❤️
          </Footer>
        </Col>
      </Row>

      <style jsx global>
        {`
          .app-wrapper {
            background: #fff;
            padding: 40px 0 0;

            margin: 40px 0px 0 0px;
          }
          .app-main {
            min-height: 100vh;
            -webkit-overflow-scrolling: touch;
            box-sizing: border-box;
            padding-left: 0px;
            padding-right: 20px;
          }
          .footer {
            text-align: center;
            background: #fff;
            margin: 0 60px;
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
            .app-wrapper {
              margin: 40px 0 0 0;
            }
          }
        `}
      </style>
    </Layout>
  );
};

export default AppLayout;
