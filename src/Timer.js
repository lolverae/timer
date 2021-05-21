import React, { Component } from "react";
import moment from "moment";
import TimerDisplay from "./TimerDisplay";
import TimerButton from "./TimerButton";
import TimerSettings from "./TimerSettings";
import * as timerStates from "./timerStates";
class Timer extends Component {
  constructor() {
    super();

    this.state = {
      currentTime: moment.duration(0, "minutes"),
      baseTime: moment.duration(0, "minutes"),
      timerState: timerStates.NOT_SET,
      timer: null,
    };

    this.setBaseTime = this.setBaseTime.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.reduceTimer = this.reduceTimer.bind(this);
  }

  setBaseTime(newBaseTime) {
    this.setState({
      baseTime: newBaseTime,
      currentTime: newBaseTime,
    });
  }

  startTimer() {
    this.setState({
      timerState: timerStates.RUNNING,
      timer: setInterval(this.reduceTimer, 1000),
    });
  }

  stopTimer() {
    if (this.state.timer) {
      clearInterval(this.state.timer);
    }

    this.setState({
      timerState: timerStates.NOT_SET,
      timer: null,
      currentTime: moment.duration(this.state.baseTime),
    });
  }

  reduceTimer() {
    if (
      this.state.currentTime.get("minutes") === 0 &&
      this.state.currentTime.get("seconds") === 0
    ) {
      this.completeTimer();
      return;
    }

    const newTime = moment.duration(this.state.currentTime);
    newTime.subtract(1, "second");

    this.setState({
      currentTime: newTime,
    });
  }

  completeTimer() {
    if (this.state.timer) {
      clearInterval(this.state.timer);
    }

    this.setState({
      timerState: timerStates.COMPLETE,
      timer: null,
    });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.timerState !== timerStates.RUNNING &&
            this.state.timerState !== timerStates.COMPLETE && (
              <TimerSettings
                baseTime={this.state.baseTime}
                setBaseTime={this.setBaseTime}
              />
            )}
          {this.state.timerState !== timerStates.NOT_SET &&
            this.state.timerState !== timerStates.COMPLETE && (
              <TimerDisplay
                currentTime={this.state.currentTime}
                timerState={this.state.timerState}
              />
            )}
          {this.state.timerState === timerStates.COMPLETE && (
            <span>
              <h1>¡En un momento comenzamos! 🚀✨</h1>
            </span>
          )}
        </div>

        {this.state.timerState !==
          (timerStates.RUNNING || timerStates.NOT_SET) && (
          <TimerButton
            startTimer={this.startTimer}
            stopTimer={this.stopTimer}
            timerState={this.state.timerState}
          />
        )}
      </div>
    );
  }
}
export default Timer;