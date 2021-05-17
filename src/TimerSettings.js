import { useState } from "react";
import QuantityPicker from "./timeSelector";

const TimerSettings = () => {
  const [expoName, setExpoName] = useState("");
  const [presentatorName, setPresentatorName] = useState("");
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
            id="presentatorName"
            value={presentatorName}
            onChange={(e) => setPresentatorName(e.target.value)}
          />
          <label htmlFor="text" className="label-name">
            <span className="content-name">Tu nombre</span>
          </label>
        </div>

        <QuantityPicker />
        <button className="btn">Start</button>
      </form>
      <p>{expoName}</p>
      <p>{presentatorName}</p>
    </div>
  );
};

export default TimerSettings;
