import React, { SFC, ReactNode } from "react";
import MyHeader from "./Header";
import SiderBar from "./SiderBar";
import { Layout } from "antd";

const { Content, Footer } = Layout;

export interface Props {
  children: ReactNode;
}
const AppLayout: SFC<Props> = props => {
  return (
    <div>
      <Layout>
        <MyHeader></MyHeader>
        <Layout style={{ marginTop: "65px" }}>
          <SiderBar></SiderBar>
        </Layout>
        <Layout style={{ marginLeft: "320px" }}>
          <Content style={{ margin: "24px 16px 0" }}>{props.children}</Content>
          <Footer style={{ textAlign: "center" }}>
            Designed By taleyoung ❤️
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default AppLayout;
