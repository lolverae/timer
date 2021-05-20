import React, { useState } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import QuantityPicker from "./QuantityPicker";
import settingsContext from "./settingsContext";

// import Display from "./Display";
import TimerSettings from "./TimerSettings";
import "./QuantityPicker.css";
import "./App.css";

const App = () => {
  const expoName = useState();
  const presentatorName = useState();

  return (
    <settingsContext.Provider value={(expoName, presentatorName)}>
      <Router>
        <header>
          <Link to="/">
            <h1>Lambda Club</h1>
          </Link>
        </header>
        <Switch>
          <Route path="/countdown">
            <QuantityPicker />
          </Route>
          <Route path="/">
            <TimerSettings />
          </Route>
        </Switch>
      </Router>
    </settingsContext.Provider>
  );
};
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
