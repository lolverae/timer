import { Component } from "react";

class TimerSettings extends Component {
  constructor(props) {
    super(props);
    this.handleNames = this.handleNames.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: "" };
  }

  handleChange(ev) {
    const newBaseTime = this.props.baseTime;
    console.log(newBaseTime);
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
    const newExpoName = event.target.value;

    this.props.setExpoName(newExpoName);
  }

  render() {
    return (
      <div>
        <div className="settings-text-input">
          <input
            type="text"
            required
            id="value"
            autoComplete="off"
            defaultValue={this.props.expoName}
            onChange={this.handleNames}
          />

          <label htmlFor="text" className="label-name">
            <span className="content-name">Nombre de la presentación</span>
          </label>
        </div>
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
