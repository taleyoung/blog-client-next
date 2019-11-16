import App, { Container } from "next/app";
import { Provider } from "react-redux";
import store from "../client/redux/store";

import "antd/dist/antd.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps}></Component>
        </Provider>
      </Container>
    );
  }
}

export default MyApp;
