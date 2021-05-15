import { useState } from "react";
import QuantityPicker from "./timeSelector";

const TimerSettings = () => {
  const [expoName, setExpoName] = useState("");
  const [presentatorName, setPresentatorName] = useState("");
  return (
    <div className="timer-settings">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="Presentation Name">
          <input
            id="expoName"
            placeholder="Coloca el nombre de la presentación"
            value={expoName}
            onChange={(e) => setExpoName(e.target.value)}
          />
        </label>
        <label htmlFor="Presentator Name">
          <input
            id="presentatorName"
            placeholder="Tu nombre"
            value={presentatorName}
            onChange={(e) => setPresentatorName(e.target.value)}
          />
        </label>

        <QuantityPicker min={0} max={60} />
        <QuantityPicker min={0} max={60} />
        <p>{expoName}</p>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default TimerSettings;
