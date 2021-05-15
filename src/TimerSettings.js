import { useState } from "react";

const TimerSettings = () => {
  const [expoName, setExpoName] = useState("");
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
        <p></p>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default TimerSettings;
