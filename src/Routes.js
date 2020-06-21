import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./features/Header/ModalSignUp/ModalSignUp";
import Login from "./features/Header/ModalLogin/ModalLogin";
import Home from "./App";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
