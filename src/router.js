import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SignIn from "./containers/Pages/SignIn";

const PublicRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <SignIn />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default PublicRoutes;
