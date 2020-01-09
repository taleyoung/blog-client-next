import App from "next/app";
import { Provider } from "react-redux";
import { withRouter } from "next/router";
import Layout from "@components/Layout/App";
import AdminLayout from "@components/Layout/Admin";
import withReduxStore from "@utils/withRedux";
import "antd/dist/antd.css";

interface Props {
  reduxStore: any;
}
class MyApp extends App<Props> {
  componentDidMount() {
    // Remove the server-side injected CSS.
    // const jssStyles = document.querySelector("#jss-server-side");
    // if (jssStyles) {
    //   jssStyles.parentElement.removeChild(jssStyles);
    // }
  }
  isAppLayout(pathname) {
    const arr = pathname.split("/");
    return !(arr[1] === "admin");
  }
  renderLayout() {
    const { Component, pageProps, router } = this.props;
    return this.isAppLayout(router.pathname) ? (
      <Layout
        // dispatch={reduxStore.dispatch}
        children={<Component {...pageProps} />}
      ></Layout>
    ) : (
      <AdminLayout children={<Component {...pageProps} />}></AdminLayout>
    );
  }
  render() {
    const { reduxStore } = this.props;
    return <Provider store={reduxStore}>{this.renderLayout()}</Provider>;
  }
}
export default withRouter(withReduxStore(MyApp));
