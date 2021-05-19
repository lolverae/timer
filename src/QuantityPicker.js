import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import TimerSettings from "./TimerSettings";
const QuantityPicker = ({ hours = 0, minutes = 1, seconds = 10 }) => {
  const [paused, setPaused] = React.useState(false);
  const [over, setOver] = React.useState(false);
  // const [seconds, setSecond] = useState(0);
  // const [minutes, setMinute] = useState(0);

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

  // Resets to original state
  // const reset = () => {
  //   setTime({
  //     hours: parseInt(hours),
  //     minutes: parseInt(minutes),
  //     seconds: parseInt(seconds),
  //   });
  //   setPaused(false);
  //   setOver(false);
  // };

  useEffect(() => {
    // Works similar to componentDidMount
    let timerID = setInterval(() => tick(), 1000);

    // Works similar to componentWillUnmount, do clean up in return function of
    // useEffect
    return () => clearInterval(timerID);

    // there is no second argument to useEffect, so it acts as componentDidUpdate
  });

  return (
    <div>
      {/* <input
        className="number-input"
        type="number"
        min="0"
        max="60"
        name="text"
        required
        id="seconds"
        value={seconds}
        onChange={(e) => setSecond(e.target.value)}
      /> */}
      {/* <input
        className="number-input"
        type="number"
        min="0"
        max="60"
        name="text"
        required
        id="seconds"
        value={minutes}
        onChange={(e) => setMinute(e.target.value)}
      /> */}
      <p>{`${time.minutes.toString().padStart(2, "0")}:${time.seconds
        .toString()
        .padStart(2, "0")}`}</p>
      <div>{over ? "Time's up!" : ""}</div>
      <button className="btn" onClick={() => setPaused(!paused)}>
        {paused ? "Resume" : "Pause"}
      </button>
      {/* <Link to="/countdown">
        <button className="btn" onClick={() => reset()}>
          Restart
        </button>
      </Link> */}
    </div>
  );
};

// const [minutes, setMinute] = useState("00");
// const [seconds, setSecond] = useState("00");
// const [isActive, setIsActive] = useState(false);
// const [counter, setCounter] = useState(0);

// useEffect(() => {
//   let intervalId;

//   if (isActive) {
//     intervalId = setInterval(() => {
//       const secondCounter = counter % 60;
//       const minuteCounter = Math.floor(counter / 60);

//       let computedSecond =
//         String(secondCounter).length === 1
//           ? `0${secondCounter}`
//           : secondCounter;
//       let computedMinute =
//         String(minuteCounter).length === 1
//           ? `0${minuteCounter}`
//           : minuteCounter;

//       setSecond(computedSecond);
//       setMinute(computedMinute);

//       setCounter((counter) => counter + 1);
//     }, 1000);
//   }
//   return () => clearInterval(intervalId);
// }, [isActive, counter]);

// return (
//   <form
//     className="quantity-picker"
//     onSubmit={(e) => {
//       e.preventDefault();
//     }}
//   >
//     <div>
//       <input
//         className="number-input"
//         type="number"
//         min="0"
//         max="100"
//         name="text"
//         required
//         id="seconds"
//         value={seconds}
//         onChange={(e) => setSecond(e.target.value)}
//       />
//       :
//       <input
//         className="number-input"
//         type="number"
//         name="text"
//         required
//         id="seconds"
//         value={minutes}
//         onChange={(e) => setMinute(e.target.value)}
//       />
//       <button onClick={() => setIsActive(!isActive)}>
//         {isActive ? "Pause" : "Start"}
//       </button>
//     </div>
//   </form>
// );
// };

export default QuantityPicker;
