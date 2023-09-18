import React, { useState } from "react";
import Forecast from "./Forecast";
import FormattedDate from "./FormattedDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpLong,
  faArrowDownLong,
} from "@fortawesome/free-solid-svg-icons";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
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
      <div>
        <div className="row text-center align-items-center">
          <div className="col-4 main-weather-description">
            <WeatherIcon icon={props.info.mainIcon} />
            <span className="text-capitalize">{props.info.description}</span>
          </div>
          <div className="col-4">
            <span className="main-temp"> {props.info.currentTemperature}</span>
            <span className="main-temp-degrees">
              °C |{" "}
              <a href="/" onClick={fConversion}>
                °F
              </a>
            </span>{" "}
            <br />
          </div>
          <div className="col-4 max-min-temp">
            Max {props.info.maxTemperature}°C{"  "}
            <FontAwesomeIcon icon={faArrowUpLong} className="arrow-up" />
            <br />
            Min {props.info.minTemperature}°C{"  "}
            <FontAwesomeIcon icon={faArrowDownLong} className="arrow-down" />
          </div>
        </div>
        <div className="row">
          <div className="col-4 weather-square">
            <img
              className="weather-icon"
              src="https://basmilius.github.io/weather-icons/production/line/all/humidity.svg"
              alt="Humidity icon"
            />
            {props.info.humidity}% <br />
            Humidity
          </div>
          <div className="col-4 weather-square">
            {" "}
            <img
              className="weather-icon"
              src="https://basmilius.github.io/weather-icons/production/line/all/barometer.svg"
              alt="Pressure icon"
            />
            {props.info.pressure} Bar <br />
            Pressure
          </div>
          <div className="col-4 weather-square">
            {" "}
            <img
              className="weather-icon"
              src="https://basmilius.github.io/weather-icons/production/line/all/windsock.svg"
              alt="Wind icon"
            />
            {props.info.wind} km/h <br />
            Wind
          </div>
        </div>
        <div className="row">
          <div className="col-4 weather-square">
            {" "}
            <img
              className="weather-icon"
              src="https://basmilius.github.io/weather-icons/production/line/all/thermometer.svg"
              alt="Feels like icon"
            />
            {props.info.feelsLikeTemp}°C <br />
            Feels like
          </div>
          <div className="col-4 weather-square">
            {" "}
            <img
              className="weather-icon"
              src="https://basmilius.github.io/weather-icons/production/line/all/sunset.svg"
              alt="Sunset icon"
            />
            {props.info.sunset}
            <br />
            Sunset
          </div>
          <div className="col-4 weather-square">
            {" "}
            <img
              className="weather-icon"
              src="https://basmilius.github.io/weather-icons/production/line/all/sunrise.svg"
              alt="Sunrise icon"
            />
            {props.info.sunrise}
            <br />
            Sunrise
          </div>
        </div>
        <Forecast coordinates={props.info.coordinates} />
        <div className="row">
          <FormattedDate rawDate={props.info.date} />
        </div>
      </div>
    );
  } else {
    let fahrenheitTemp = Math.round(
      (props.info.currentTemperature * 9) / 5 + 32
    );
    let fahrenheitFeelsLikeTemp = Math.round(
      (props.info.feelsLikeTemp * 9) / 5 + 32
    );
    let maxTemp = Math.round(props.info.maxTemperature * 9) / 5 + 32;
    let minTemp = Math.round(props.info.minTemperature * 9) / 5 + 32;

    return (
      <div>
        <div className="row text-center align-items-center">
          <div className="col-4 main-weather-description">
            <WeatherIcon icon={props.info.mainIcon} />
            <span className="text-capitalize">{props.info.description}</span>
          </div>
          <div className="col-4">
            <span className="main-temp"> {fahrenheitTemp}</span>
            <span className="main-temp-degrees">
              <a href="/" onClick={cConversion}>
                °C
              </a>{" "}
              | °F
            </span>{" "}
            <br />
          </div>
          <div className="col-4 max-min-temp">
            Max {maxTemp}°F{"  "}
            <FontAwesomeIcon icon={faArrowUpLong} className="arrow-up" />
            <br />
            Min {minTemp}°F{"  "}
            <FontAwesomeIcon icon={faArrowDownLong} className="arrow-down" />
          </div>
        </div>
        <div className="row">
          <div className="col-4 weather-square">
            <img
              className="weather-icon"
              src="https://basmilius.github.io/weather-icons/production/line/all/humidity.svg"
              alt="Humidity icon"
            />
            {props.info.humidity}% <br />
            Humidity
          </div>
          <div className="col-4 weather-square">
            {" "}
            <img
              className="weather-icon"
              src="https://basmilius.github.io/weather-icons/production/line/all/barometer.svg"
              alt="Pressure icon"
            />
            {props.info.pressure} Bar <br />
            Pressure
          </div>
          <div className="col-4 weather-square">
            {" "}
            <img
              className="weather-icon"
              src="https://basmilius.github.io/weather-icons/production/line/all/windsock.svg"
              alt="Wind icon"
            />
            {props.info.wind} km/h <br />
            Wind
          </div>
        </div>
        <div className="row">
          <div className="col-4 weather-square">
            {" "}
            <img
              className="weather-icon"
              src="https://basmilius.github.io/weather-icons/production/line/all/thermometer.svg"
              alt="Feels like icon"
            />
            {fahrenheitFeelsLikeTemp}°F <br />
            Feels like
          </div>
          <div className="col-4 weather-square">
            {" "}
            <img
              className="weather-icon"
              src="https://basmilius.github.io/weather-icons/production/line/all/sunset.svg"
              alt="Sunset icon"
            />
            {props.info.sunset}
            <br />
            Sunset
          </div>
          <div className="col-4 weather-square">
            {" "}
            <img
              className="weather-icon"
              src="https://basmilius.github.io/weather-icons/production/line/all/sunrise.svg"
              alt="Sunrise icon"
            />
            {props.info.sunrise}
            <br />
            Sunrise
          </div>
        </div>{" "}
        <Forecast coordinates={props.info.coordinates} />
        <div className="row">
          <FormattedDate rawDate={props.info.date} />
        </div>
      </div>
    );
  }
}
