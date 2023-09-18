import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpLong,
  faArrowDownLong,
} from "@fortawesome/free-solid-svg-icons";

export default function ForecastSingleDay(props) {
  return (
    <li className="forecast-square rounded shadow col-12 col-sm-6 col-lg-4 col-xl-3">
      <img
        src="https://basmilius.github.io/weather-icons/production/line/all/clear-day.svg"
        className="forecast-image"
        alt="Forecast"
      />
      Mon, 12.09
      <br />
      Max {Math.round(props.dailyForecast.temperature.maximum)}°C{"  "}
      <FontAwesomeIcon icon={faArrowUpLong} className="arrow-up" />
      Min {Math.round(props.dailyForecast.temperature.minimum)}°C{"  "}
      <FontAwesomeIcon icon={faArrowDownLong} className="arrow-down" />
    </li>
  );
}
