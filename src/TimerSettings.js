import { useState } from "react";
import { Link } from "react-router-dom";

const TimerSettings = () => {
  const [expoName, setExpoName] = useState("");
  const [presentatorName, setPresentatorName] = useState("");
  const [minutes, setMinute] = useState(0);
  const [seconds, setSecond] = useState(0);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="settings-text-input">
          <input
            type="text"
            name="text"
            required
            id="expoName"
            autoComplete="off"
            value={expoName}
            onChange={(e) => setExpoName(e.target.value)}
          />
          <label htmlFor="text" className="label-name">
            <span className="content-name">Nombre de la presentación</span>
          </label>
        </div>

        <div className="settings-text-input">
          <input
            type="text"
            name="text"
            required
            autoComplete="off"
            id="presentatorName"
            value={presentatorName}
            onChange={(e) => setPresentatorName(e.target.value)}
          />
          <label htmlFor="text" className="label-name">
            <span className="content-name">Tu nombre</span>
          </label>
        </div>
        {/* <button className="btn">Start</button> */}
      </form>
      <div></div>
      <input
        className="number-input"
        type="number"
        min="0"
        max="60"
        name="text"
        required
        id="seconds"
        value={minutes}
        onChange={(e) => setMinute(e.target.value)}
      />
      :
      <input
        className="number-input"
        type="number"
        min="0"
        max="60"
        name="text"
        required
        id="seconds"
        value={seconds}
        onChange={(e) => setSecond(e.target.value)}
      />
      <div>
        <Link to="/countdown">
          <button className="btn">Start</button>
        </Link>
      </div>
      <p>{expoName}</p>
      <p>{presentatorName}</p>
    </div>
  );
};

export default TimerSettings;
