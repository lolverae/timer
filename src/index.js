import React from "react";
import ReactDOM from "react-dom";
import TimeLeft from "./TimeLeft";
import TimerSettings from "./TimerSettings";
import "./QuantityPicker.css";
import "./App.css";

ReactDOM.render(
  <React.StrictMode>
    <TimeLeft />
    <TimerSettings />
  </React.StrictMode>,
  document.getElementById("root")
);
