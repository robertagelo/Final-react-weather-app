import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpLong,
  faArrowDownLong,
} from "@fortawesome/free-solid-svg-icons";
import ForecastWeatherIcon from "./ForecastWeatherIcon";

export default function ForecastSingleDay(props) {
  let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let weekDay = new Date(props.dailyForecast.time * 1000).getDay();
  let day = new Date(props.dailyForecast.time * 1000).getDate();

  return (
    <div className="mb-2">
      <ForecastWeatherIcon icon={props.dailyForecast.condition.icon} />
      <span className="forecastDate">
        {weekDays[weekDay]}, {day}
      </span>
      <br />
      <span className="forecast-max-temp">
        {" "}
        <FontAwesomeIcon icon={faArrowUpLong} className="arrow-up" />
        {Math.round(props.dailyForecast.temperature.maximum)}°C{"  "}
      </span>
      {"     "}
      <span className="forecast-min-temp">
        <FontAwesomeIcon icon={faArrowDownLong} className="arrow-down" />
        {Math.round(props.dailyForecast.temperature.minimum)}°C{"  "}
      </span>
    </div>
  );
}
