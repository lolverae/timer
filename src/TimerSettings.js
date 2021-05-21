import { Component } from "react";

class TimerSettings extends Component {
  constructor() {
    super();
    this.state = { value: "" };
    this.handleNames = this.handleNames.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const newBaseTime = this.props.baseTime;
    if (ev.target.id === "minutes")
      newBaseTime
        .subtract(newBaseTime.get("minutes"), "minutes")
        .add(parseInt(ev.target.value, 10), "minutes");
    if (ev.target.id === "seconds")
      newBaseTime
        .subtract(newBaseTime.get("seconds"), "seconds")
        .add(parseInt(ev.target.value, 10), "seconds");

    this.props.setBaseTime(newBaseTime);
  }
  handleNames(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        {/* <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleNames}
            />
          </label>
          <input type="submit" value="Submit" />
        </form> */}
        <div>
          <input
            className="number-input"
            id="minutes"
            type="number"
            min="0"
            max="60"
            defaultValue={this.props.baseTime.get("minutes")}
            onChange={this.handleChange}
          />
          :
          <input
            className="number-input"
            id="seconds"
            min="0"
            max="60"
            type="number"
            defaultValue={this.props.baseTime.get("seconds")}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default TimerSettings;
