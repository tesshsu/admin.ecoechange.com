import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import { Provider } from 'react-redux';
import cookies from "next-cookies";
import PageChange from "components/PageChange/PageChange.js";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import * as reducers from '../service/reducers';
import ideasReducer from '../service/reducers/ideas';
import userReducer from '../service/reducers/user';
import usersReducer from '../service/reducers/users';
import { setupApiClient } from '../api/client';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import * as LOGGED_USER_ACTIONS from "../service/actions";
import useLoggedUser from "../service/hooks/useLoggedUser";

const logger = createLogger();
const rootReducers = combineReducers({
  ...reducers,
})
const store = createStore(
    rootReducers,
    applyMiddleware(thunkMiddleware, logger)
);

//------------------------
// Router setup
//------------------------
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

//------------------------
// API setup
//------------------------
setupApiClient();

// Cookie init
function getCookie(cname) {
  if (typeof window === "undefined") return null;
  var name = cname + "=";

  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
}

//------------------------
// Export App
//------------------------
export default class MyApp extends App {

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    const authUser = cookies(ctx).user || "";

    if (authUser) {
      store.dispatch({
        type: LOGGED_USER_ACTIONS.LOGIN,
        payload: {
          user: authUser.loggedUser,
        },
      });
    }

    return { pageProps };
  }

  componentDidMount() {
    const userCookie = getCookie("user");
    if (userCookie) {
      const loggedUser = JSON.parse(userCookie).loggedUser;
      store.dispatch({
        type: LOGGED_USER_ACTIONS.LOGIN,
        payload: {
          user: loggedUser,
        },
      });
    }
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
