import React from "react";
import Forecast from "./Forecast";
import FormattedDate from "./FormattedDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpLong,
  faArrowDownLong,
} from "@fortawesome/free-solid-svg-icons";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="row text-center align-items-center">
        <div className="col-4 main-weather-description">
          <WeatherIcon icon={props.info.mainIcon} />
          <span className="text-capitalize">{props.info.description}</span>
        </div>
        <div className="col-4">
          <span className="main-temp"> {props.info.currentTemperature}</span>
          <span className="main-temp-degrees">°C</span> <br />
        </div>
        <div className="col-4 max-min-temp">
          <FontAwesomeIcon icon={faArrowUpLong} className="arrow-up" />
          {"  "}
          Max {props.info.maxTemperature}°C
          <br />
          <FontAwesomeIcon icon={faArrowDownLong} className="arrow-down" />
          {"  "}
          Min {props.info.minTemperature}°C{"  "}
          {"  "}
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
}
