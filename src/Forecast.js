import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastSingleDay from "./ForecastSingleDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleForecastData(response) {
    setForecast(response);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div>
        <ul>
          <ForecastSingleDay dailyForecast={forecast.data.daily[0]} />
          <ForecastSingleDay dailyForecast={forecast.data.daily[1]} />
          <ForecastSingleDay dailyForecast={forecast.data.daily[2]} />
          <ForecastSingleDay dailyForecast={forecast.data.daily[3]} />
          <ForecastSingleDay dailyForecast={forecast.data.daily[4]} />
          <ForecastSingleDay dailyForecast={forecast.data.daily[5]} />
        </ul>
      </div>
    );
  } else {
    const apiKey = "96f59ob69a32facbb34b2tdb5d2e7405";
    let apiForecastUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${props.coordinates.lon}&lat=${props.coordinates.lat}&key=${apiKey}&units=metric`;

    axios.get(apiForecastUrl).then(handleForecastData);
  }
}
