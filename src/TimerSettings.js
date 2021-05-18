import { useState } from "react";
import QuantityPicker from "./QuantityPicker";

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
            autocomplete="off"
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
            autocomplete="off"
            id="presentatorName"
            value={presentatorName}
            onChange={(e) => setPresentatorName(e.target.value)}
          />
          <label htmlFor="text" className="label-name">
            <span className="content-name">Tu nombre</span>
          </label>
        </div>
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
        <QuantityPicker minutes={minutes} seconds={seconds} />
        {/* <button className="btn">Start</button> */}
      </form>
      <p>{expoName}</p>
      <p>{presentatorName}</p>
    </div>
  );
};

export default TimerSettings;
