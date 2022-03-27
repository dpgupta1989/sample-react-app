import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Home from "staticComponents/Home.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/srp" render={props => <Home {...props} />} />
      <Redirect from="/" to="/srp/vendorSearch" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
