import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import TimerSettings from "./TimerSettings";
function TimeLeft() {
  const calculateTimeLeft = () => {
    const difference = +new Date(`$2021-10-1`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
      <h1>Lambda Club</h1>
      <h2>La presentación comenzará en:</h2>
      <p id="displayTimer">
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </p>
    </div>
  );
}

export default TimeLeft;
