import App, { Container } from "next/app";
import { Provider } from "react-redux";
import Layout from "@components/Layout/App";
import withReduxStore from "@utils/withRedux";

import "antd/dist/antd.css";

interface Props {
  reduxStore: any;
}
class MyApp extends App<Props> {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      // <Container>
      <Provider store={reduxStore}>
        <Layout
          // dispatch={reduxStore.dispatch}
          children={<Component {...pageProps} />}
        ></Layout>
      </Provider>
      // </Container>
    );
  }
}

export default withReduxStore(MyApp);
