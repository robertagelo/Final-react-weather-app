import React from "react";
import FormattedDate from "./FormattedDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpLong,
  faArrowDownLong,
} from "@fortawesome/free-solid-svg-icons";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="row text-center align-items-center">
        <div className="col-4 main-weather-description">
          <img
            src="/group.png"
            className="img-current"
            alt="Current weather icon"
          />{" "}
          <span className="text-capitalize">{props.info.description}</span>
        </div>
        <div className="col-4">
          <span className="main-temp"> {props.info.currentTemperature}</span>
          <span className="main-temp-degrees">°C</span> <br />
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
            src="/humidity.png"
            alt="Humidity icon"
          />
          {props.info.humidity}% <br />
          Humidity
        </div>
        <div className="col-4 weather-square">
          {" "}
          <img
            className="weather-icon"
            src="/barometer.png"
            alt="Pressure icon"
          />
          {props.info.pressure} Bar <br />
          Pressure
        </div>
        <div className="col-4 weather-square">
          {" "}
          <img className="weather-icon" src="/wind.png" alt="Wind icon" />
          {props.info.wind} km/h <br />
          Wind
        </div>
      </div>
      <div className="row">
        <div className="col-4 weather-square">
          {" "}
          <img
            className="weather-icon"
            src="/humidity.png"
            alt="Feels like icon"
          />
          {props.info.feelsLikeTemp}°C <br />
          Feels like
        </div>
        <div className="col-4 weather-square">
          {" "}
          <img className="weather-icon" src="/sunset.png" alt="Sunset icon" />
          {props.info.sunset}
          <br />
          Sunset <br />
          <FormattedDate rawDate={props.info.date} />
        </div>
        <div className="col-4 weather-square">
          {" "}
          <img className="weather-icon" src="/sunrise.png" alt="Sunrise icon" />
          {props.info.sunrise}
          <br />
          Sunrise
        </div>
      </div>
    </div>
  );
}
