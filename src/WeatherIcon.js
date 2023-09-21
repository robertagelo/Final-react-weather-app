import React from "react";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "clear-day",
    "02d": "partly-cloudy-day",
    "03d": "partly-cloudy-day",
    "04d": "overcast-day",
    "09d": "rain",
    "10d": "rain",
    "11d": "thunderstorms-day",
    "13d": "snow",
    "50d": "fog",
    "01n": "clear-night",
    "02n": "partly-cloudy-night",
    "03n": "partly-cloudy-night",
    "04n": "overcast-night",
    "09n": "rain",
    "10n": "rain",
    "11n": "thunderstorms-night",
    "13n": "snow",
    "50n": "fog",
  };

  let iconUrl = `https://basmilius.github.io/weather-icons/production/line/all/${
    codeMapping[props.icon]
  }.svg`;

  return (
    <img src={iconUrl} className="img-current" alt="Current weather icon" />
  );
}
