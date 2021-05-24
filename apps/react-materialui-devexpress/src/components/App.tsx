import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import {useAuth0} from '@auth0/auth0-react';

// components
import Layout from "./Layout";

// pages
import Error from "../pages/error/Error";
import Login from "../pages/login/Login";

// context
import { useUserState } from "../context/UserContext";

export default function App() {
  // global
  const provider = localStorage.getItem("provider") || "authO";
  const AUTH_PROVIDER: any = {
    "local": useUserState(),
    "authO": useAuth0()
  }
  const { isAuthenticated } = AUTH_PROVIDER[provider];
  localStorage.setItem("auth", isAuthenticated);

  // const { isAuthenticated } = useAuth0();
  // const anyAuthenticated = isAuthenticatedLocal;

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
        <Route
          exact
          path="/app"
          render={() => <Redirect to="/app/dashboard" />}
        />
        <PrivateRoute path="/app" component={Layout} />
        <PublicRoute path="/login" component={Login} />
        <Route component={Error} />
      </Switch>
    </Router>
  );

  // #######################################################################

  function PrivateRoute({ component, ...rest }: any) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }: any) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }
}
