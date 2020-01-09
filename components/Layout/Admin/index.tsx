import React, { SFC, ReactNode } from "react";
import { Layout } from "antd";
import Sider from "./Sider";

const { Content } = Layout;

export interface Props {
  children: ReactNode;
}
const AdminLayout: SFC<Props> = props => (
  <div>
    <Layout>
      <Sider></Sider>
      <Layout>
        <div className="content">
          <Content>{props.children}</Content>
        </div>
      </Layout>
    </Layout>
    <style jsx>{`
      .content {
        margin: 30px;
        height: 800px;
      }
    `}</style>
  </div>
);
export default AdminLayout;
