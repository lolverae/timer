import React, { Component } from "react";
import * as timerStates from "./timerStates";

class TimerButton extends Component {
  constructor() {
    super();

    this.getButton = this.getButton.bind(this);
  }

  getButton() {
    if (this.props.timerState === timerStates.NOT_SET)
      return (
        <button className="btn" onClick={this.props.startTimer}>
          Inicio
        </button>
      );

    if (this.props.timerState === timerStates.RUNNING)
      return (
        <button className="btn" onClick={this.props.stopTimer}>
          Pausa
        </button>
      );

    if (this.props.timerState === timerStates.COMPLETE)
      return (
        <button className="btn" onClick={this.props.stopTimer}>
          Reset
        </button>
      );
  }

  render() {
    return <div>{this.getButton()}</div>;
  }
}

export default TimerButton;
