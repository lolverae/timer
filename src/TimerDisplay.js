import React from "react";

const leftPad = (val) => {
  if (val < 10) return `0${val}`;

  return `${val}`;
};

const TimerDisplay = (props) => (
  <div>
    <div>
      <h2>
        {`${leftPad(props.currentTime.get("minutes"))}:${leftPad(
          props.currentTime.get("seconds")
        )}`}
      </h2>
    </div>
  </div>
);

export default TimerDisplay;
