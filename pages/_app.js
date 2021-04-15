import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import { Provider } from 'react-redux';
import PageChange from "components/PageChange/PageChange.js";
import { createStore, combineReducers, applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import * as reducers from '../service/reducers';
import ideasReducer from '../service/reducers/ideas';
import userReducer from '../service/reducers/user';
import usersReducer from '../service/reducers/users';
import { setupApiClient } from '../api/client';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

const logger = createLogger();
const rootReducers = combineReducers({
  ideasReducer: ideasReducer,
  usersReducer: usersReducer,
  user: userReducer,
  ...reducers
})
const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware, logger))
);


Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

setupApiClient();

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    const Layout = Component.layout || (({ children }) => <>{children}</>);

    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Ecoechange Admin</title>
        </Head>
        <Provider store={store} >
		<Layout>
          <Component {...pageProps} />
        </Layout>
		</Provider>
      </React.Fragment>
    );
  }
}
