import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Home } from "../components/Home";
import { Login } from "../components/Login";
import { Protected } from "../components/Protected";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/protected" component={Protected} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export { Routes };
