import App from "next/app";
import { Provider } from "react-redux";
import { withRouter } from "next/router";
import Layout from "@components/Layout";
import withReduxStore from "@utils/withRedux";
import "antd/dist/antd.css";

interface Props {
  reduxStore: any;
}
class MyApp extends App<Props> {
  render() {
    const { reduxStore, Component, pageProps } = this.props;
    return (
      <Provider store={reduxStore}>
        <Layout
          // dispatch={reduxStore.dispatch}
          children={<Component {...pageProps} />}
        ></Layout>
      </Provider>
    );
  }
}
export default withRouter(withReduxStore(MyApp));
