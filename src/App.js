import React, { Component } from "react";
import Timer from "./Timer";
import "./App.css";
import image from "./logo.svg";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <img src={image} alt="My logo" />

          <h1> Club</h1>
        </header>
        <Timer />
      </div>
    );
  }
}

export default App;
