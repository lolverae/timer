import React from "react";
const leftPad = (val) => {
  if (val < 10) return `0${val}`;

  return `${val}`;
};

const TimerDisplay = (props) => (
  <div>
    <div>
      <h3>{`${props.currentExpoName}`}</h3>
    </div>
    <h1>
      {`${leftPad(props.currentTime.get("minutes"))}:${leftPad(
        props.currentTime.get("seconds")
      )}`}
    </h1>
  </div>
);

export default TimerDisplay;
