import App from "next/app";
import Layout from "@components/Layout";
import Head from "next/head";
import "antd/dist/antd.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Taleyoung's Blog</title>
        </Head>
        <Layout children={<Component {...pageProps} />}></Layout>
      </>
    );
  }
}
export default MyApp;
