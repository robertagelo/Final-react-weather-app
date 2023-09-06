import React, { useState } from "react";

export default function Temperatures(props) {
  const [unit, setUnit] = useState("celsius");

  function fConversion(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function cConversion(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="col-4">
        <span className="main-temp"> {props.currentTemperature}</span>
        <span className="main-temp-degrees">
          °C |{" "}
          <a href="/" onClick={fConversion}>
            <strong>°F</strong>
          </a>
        </span>{" "}
        <br />
      </div>
    );
  } else {
    let fahrenheitTemp = (props.currentTemperature * 9) / 5 + 32;
    return (
      <div className="col-4">
        <span className="main-temp"> {fahrenheitTemp}</span>
        <span className="main-temp-degrees">
          <a href="/" onClick={cConversion}>
            <strong>°C</strong>
          </a>{" "}
          | °F
        </span>{" "}
        <br />
      </div>
    );
  }
}
