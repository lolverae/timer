import React from "react";
import ReactDOM from "react-dom";
import TimeLeft from "./TimeLeft";
import TimerSettings from "./TimerSettings";
import "./App.css";
import "./timeSelector.css";

ReactDOM.render(
  <React.StrictMode>
    <TimeLeft />
    <TimerSettings />
  </React.StrictMode>,
  document.getElementById("root")
);
