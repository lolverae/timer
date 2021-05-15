import React from "react";
import ReactDOM from "react-dom";
import TimeLeft from "./TimeLeft";
import TimerSettings from "./TimerSettings";
import "./App.css";

ReactDOM.render(
  <React.StrictMode>
    <h1>Lambda Club</h1>
    <TimeLeft />
    <TimerSettings />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
