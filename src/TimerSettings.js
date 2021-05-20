import { useState, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import settingsContext from "./settingsContext";

const TimerSettings = () => {
  const [expoName, setExpoName] = useContext(settingsContext);
  // const [minutes, setMinute] = useState(0);
  // const [seconds, setSecond] = useState(0);
  const [presentatorName, setPresentatorName] = useState("");
  const [data, setData] = useState({
    minutes: "",
    seconds: "",
  });

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log(data.min);
    console.log(data.sec);
  };

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
            onBlur={(e) => setExpoName(e.target.value)}
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
            onBlur={(e) => setPresentatorName(e.target.value)}
          />
          <label htmlFor="text" className="label-name">
            <span className="content-name">Tu nombre</span>
          </label>
        </div>
      </form>

      <Fragment>
        <form onSubmit={enviarDatos}>
          <div>
            <input
              className="number-input"
              type="number"
              placeholder="0"
              min="0"
              max="60"
              onChange={handleInputChange}
              name="min"
            ></input>
            :
            <input
              className="number-input"
              type="number"
              min="0"
              max="60"
              placeholder="0"
              onChange={handleInputChange}
              name="sec"
            ></input>
          </div>
          <Link to="/countdown">
            <button className="btn" type="submit">
              Start
            </button>
          </Link>
        </form>
        <div></div>
      </Fragment>
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
      /> */}
    </div>
  );
};

export default TimerSettings;
