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
        <div class="form">
          <input
            type="text"
            name="text"
            autocomplete="off"
            required
            id="expoName"
            value={expoName}
            onChange={(e) => setExpoName(e.target.value)}
          />
          <label for="text" class="label-name">
            <span class="content-name">Your Text</span>
          </label>
        </div>

        <div class="form">
          <input
            type="text"
            name="text"
            autocomplete="off"
            required
            id="presentatorName"
            value={presentatorName}
            onChange={(e) => setPresentatorName(e.target.value)}
          />
          <label for="text" class="label-name">
            <span class="content-name">Your Text</span>
          </label>
        </div>

        <QuantityPicker min={0} max={60} />
        <QuantityPicker min={0} max={60} />
        <button>Submit</button>
      </form>
      <p>{expoName}</p>
      <p>{presentatorName}</p>
    </div>
  );
};

export default TimerSettings;
