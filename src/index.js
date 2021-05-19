import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Display from "./Display";
import TimerSettings from "./TimerSettings";
import "./QuantityPicker.css";
import "./App.css";

ReactDOM.render(
  <React.StrictMode>
    <h1>Lambda Club</h1>
    <h2>La presentación comenzará en:</h2>
    <Router>
      <Switch>
        <Route path="/countdown">
          <Display />
        </Route>
        <Route path="/">
          <TimerSettings />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
