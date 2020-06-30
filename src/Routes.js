import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./App";
import Dashboard from "./features/Dashboard/Dashboard";
import PrivateRoute from "./components/core/PrivateRouter";
import Header from "./features/Header/Headers";
import Page404 from "./components/core/Page404";
import { isAuthenticated } from "./components/auth";

const { user } = isAuthenticated();
const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />

        <PrivateRoute
          path={
            user && user.role === 1 ? "/admin/dashboard" : "/user/dashboard"
          }
          exact
          component={Dashboard}
        />

        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
