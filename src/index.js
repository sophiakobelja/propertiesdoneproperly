import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import React, { Component } from "react";
import AppBar from "./components/appbar";
import Home from "./pages/Home";
import ServicesPage from "./components/servicespage";
import AboutPage from "./components/aboutpage";
import "./scss/styles.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Index() {
  return (
    <Router>
      <Switch>
        <Route
          path="/about"
          component={(params) => {
            return <AboutPage {...params} />;
          }}
        />
        <Route
          path="/services"
          component={(params) => {
            return <ServicesPage {...params} />;
          }}
        />
        <Route
          path="/"
          component={(params) => {
            return <Home {...params} />;
          }}
        />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<Index />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
