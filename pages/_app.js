import React from "react";
import { Provider } from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import { makeStore } from "../redux/store";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";

class MyApp extends App {
  // static async getInitialProps({ Component, ctx }) {
  //   // ctx.store.dispatch({ type: "FOO", payload: "foo" });

  //   const pageProps = Component.getInitialProps
  //     ? await Component.getInitialProps(ctx)
  //     : {};

  //   return { pageProps };
  // }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <React.Fragment>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
          <style global jsx>{`
            html,
            body,
            body > div:first-child,
            div#__next {
              height: 100%;
              width: 100%;
              display: flex;
              margin: 0px;
            }
          `}</style>
        </React.Fragment>
      </Provider>
    );
  }
}

export default withRedux(makeStore)(MyApp);
