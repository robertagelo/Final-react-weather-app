import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastSingleDay from "./ForecastSingleDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleForecastData(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  if (loaded) {
    return (
      <div className="row">
        <ul>
          {forecast.map(function (dailyForecast, index) {
            if (index < 6 && index > 0) {
              return (
                <li className="forecast-square rounded shadow col-12 col-sm-6 col-lg-4 col-xl-3">
                  <ForecastSingleDay dailyForecast={dailyForecast} />
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </div>
    );
  } else {
    const apiKey = "96f59ob69a32facbb34b2tdb5d2e7405";
    let apiForecastUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${props.coordinates.lon}&lat=${props.coordinates.lat}&key=${apiKey}&units=metric`;

    axios.get(apiForecastUrl).then(handleForecastData);

    return null;
  }
}
