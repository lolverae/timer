import React, { useEffect } from "react";
import settingsContext from "./settingsContext";

const QuantityPicker = ({ hours = 0, minutes = 1, seconds = 10 }) => {
  const [paused, setPaused] = React.useState(false);
  const [over, setOver] = React.useState(false);

  const [time, setTime] = React.useState({
    hours: parseInt(hours, 10),
    minutes: parseInt(minutes, 10),
    seconds: parseInt(seconds, 10),
  });
  const tick = () => {
    if (paused || over) return;

    if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
      setOver(true);
    } else if (time.minutes === 0 && time.seconds === 0) {
      setTime({
        hours: time.hours - 1,
        minutes: 59,
        seconds: 59,
      });
    } else if (time.seconds === 0) {
      setTime({
        hours: time.hours,
        minutes: time.minutes - 1,
        seconds: 59,
      });
    } else {
      // decrement seconds
      setTime({
        hours: time.hours,
        minutes: time.minutes,
        seconds: time.seconds - 1,
      });
    }
  };

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);

    return () => clearInterval(timerID);
  });

  return (
    <div>
      <settingsContext.Consumer>
        {([presentatorName]) => <h1>{presentatorName} </h1>}
      </settingsContext.Consumer>

      <p>{`${time.minutes.toString().padStart(2, "0")}:${time.seconds
        .toString()
        .padStart(2, "0")}`}</p>
      <div>{over ? "Time's up!" : ""}</div>
      <button className="btn" onClick={() => setPaused(!paused)}>
        {paused ? "Resume" : "Pause"}
      </button>
    </div>
  );
};

export default QuantityPicker;
