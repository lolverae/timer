import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Display from "./Display";
import TimerSettings from "./TimerSettings";
import "./QuantityPicker.css";
import "./App.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <header>
        <Link to="/">
          <h1>Lambda Club</h1>
        </Link>
      </header>
      <Switch>
        <Route path="/countdown">
          <Display />
        </Route>
        <Route path="/">
          <TimerSettings />
        </Route>
      </Switch>
    </Router>

    {/* <Router>
      <Route>
        <Switch>
          <header>
            <Link to="/">
              
            </Link>
          </header>
        </Switch>
      </Route>
    </Router> */}
    {/* <h2>La presentación comenzará en:</h2> */}
    {/* <Router>
      <Route path="/countdown">
        <Display />
      </Route>
      <Route path="/">
        <TimerSettings />
      </Route>
    </Router> */}
  </React.StrictMode>,
  document.getElementById("root")
);
