import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpLong,
  faArrowDownLong,
} from "@fortawesome/free-solid-svg-icons";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div>
      <ul>
        <li className="forecast-square rounded shadow col-12 col-sm-6 col-lg-4 col-xl-3">
          <img
            src="https://basmilius.github.io/weather-icons/production/line/all/clear-day.svg"
            className="forecast-image"
            alt="Forecast"
          />
          Mon, 12.09
          <br />
          Max 25°C{"  "}
          <FontAwesomeIcon icon={faArrowUpLong} className="arrow-up" />
          Min 10°C{"  "}
          <FontAwesomeIcon icon={faArrowDownLong} className="arrow-down" />
        </li>
        <li className="forecast-square rounded shadow col-12 col-sm-6 col-lg-4 col-xl-3">
          <img
            src="https://basmilius.github.io/weather-icons/production/line/all/clear-day.svg"
            className="forecast-image"
            alt="Forecast"
          />
          Mon, 12.09
          <br />
          Max 25°C{"  "}
          <FontAwesomeIcon icon={faArrowUpLong} className="arrow-up" />
          Min 10°C{"  "}
          <FontAwesomeIcon icon={faArrowDownLong} className="arrow-down" />
        </li>
        <li className="forecast-square rounded shadow col-12 col-sm-6 col-lg-4 col-xl-3">
          <img
            src="https://basmilius.github.io/weather-icons/production/line/all/clear-day.svg"
            className="forecast-image"
            alt="Forecast"
          />
          Mon, 12.09
          <br />
          Max 25°C{"  "}
          <FontAwesomeIcon icon={faArrowUpLong} className="arrow-up" />
          Min 10°C{"  "}
          <FontAwesomeIcon icon={faArrowDownLong} className="arrow-down" />
        </li>
        <li className="forecast-square rounded shadow col-12 col-sm-6 col-lg-4 col-xl-3">
          <img
            src="https://basmilius.github.io/weather-icons/production/line/all/clear-day.svg"
            className="forecast-image"
            alt="Forecast"
          />
          Mon, 12.09
          <br />
          Max 25°C{"  "}
          <FontAwesomeIcon icon={faArrowUpLong} className="arrow-up" />
          Min 10°C{"  "}
          <FontAwesomeIcon icon={faArrowDownLong} className="arrow-down" />
        </li>
        <li className="forecast-square rounded shadow col-12 col-sm-6 col-lg-4 col-xl-3">
          <img
            src="https://basmilius.github.io/weather-icons/production/line/all/clear-day.svg"
            className="forecast-image"
            alt="Forecast"
          />
          Mon, 12.09
          <br />
          Max 25°C{"  "}
          <FontAwesomeIcon icon={faArrowUpLong} className="arrow-up" />
          Min 10°C{"  "}
          <FontAwesomeIcon icon={faArrowDownLong} className="arrow-down" />
        </li>
      </ul>
    </div>
  );
}
