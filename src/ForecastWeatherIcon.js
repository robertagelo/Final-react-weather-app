import React from "react";
import "./ForecastWeatherIcon.css";

export default function ForecastWeatherIcon(props) {
  const forecastCodeMapping = {
    "clear-sky-day": "clear-day",
    "scattered-clouds-day": "overcast-day",
    "broken-clouds-day": "partly-cloudy-day",
    "few-clouds-day": "partly-cloudy-day",
    "shower-rain-day": "rain",
    "rain-day": "rain",
    "snow-day": "snow",
    "mist-day": "fog",
  };

  let forecastIconUrl = `https://basmilius.github.io/weather-icons/production/line/all/${
    forecastCodeMapping[props.icon]
  }.svg`;

  return (
    <img
      src={forecastIconUrl}
      className="img-forecast"
      alt="Forecast weather icon"
    />
  );
}
