import App from "next/app";
import Layout from "@components/Layout";
import "antd/dist/antd.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Layout children={<Component {...pageProps} />}></Layout>;
  }
}
export default MyApp;
