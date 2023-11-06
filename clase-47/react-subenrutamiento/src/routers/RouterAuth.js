import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AuthLogin from "../modules/auth/screen/AuthLogin";
import AuthRegister from "../modules/auth/screen/AuthRegister";
import AuthRecover from "../modules/auth/screen/AuthRecover";

const RouterAuth = () => {
  return (
    <>
      {/* contenido estatico */}
      <Switch>
        <Route path={"/auth/login"} component={AuthLogin} />
        <Route path={"/auth/register"} component={AuthRegister} />
        <Route path={"/auth/recover"} component={AuthRecover} />
        <Redirect to={"/auth/login"} />
      </Switch>
    </>
  );
};

export default RouterAuth;
