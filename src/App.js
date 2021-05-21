import React, { Component } from "react";
import Timer from "./Timer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Lambda Club</h1>
        </header>
        <Timer />
      </div>
    );
  }
}

export default App;
