import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpLong,
  faArrowDownLong,
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./Weather.css";

export default function WeatherForm(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      country: response.data.sys.country,
      currentTemperature: Math.round(response.data.main.temp),
      maxTemperature: Math.round(response.data.main.temp_max),
      minTemperature: Math.round(response.data.main.temp_min),
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      wind: response.data.wind.speed,
      feelsLikeTemp: Math.round(response.data.main.feels_like),
      sunset: new Date(response.data.sys.sunset * 1000)
        .toLocaleString("it-IT", { timeZone: "Europe/Rome" })
        .slice(11, 16),
      sunrise: new Date(response.data.sys.sunrise * 1000)
        .toLocaleString("it-IT", { timeZone: "Europe/Rome" })
        .slice(11, 16),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="row divider">
        <div className="col-sm-4">
          <img
            className="day-main-img"
            src="/city-day-desk.png"
            alt="sunny city"
          />
        </div>
        <div className="col-sm-8">
          <div className="container weather-container">
            <div className="row">
              <div className="col-8">
                <form>
                  <input
                    type="text"
                    placeholder="What's the weather like in...?"
                    className="text-input"
                  />
                  <button type="submit" className="button-input">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                </form>
              </div>
              <div className="col-4 city">
                <FontAwesomeIcon icon={faLocationDot} />
                {"  "}
                {weatherData.city}, {weatherData.country}
              </div>
            </div>
            <div className="row text-center align-items-center">
              <div className="col-4 main-weather-description">
                <img
                  src="/group.png"
                  className="img-current"
                  alt="Current weather icon"
                />{" "}
                <span className="text-capitalize">
                  {weatherData.description}
                </span>
              </div>
              <div className="col-4 main-temp">
                {weatherData.currentTemperature}
                <span className="main-temp-degrees">°C</span>
              </div>
              <div className="col-4 max-min-temp">
                Max {weatherData.maxTemperature}°C{"  "}
                <FontAwesomeIcon icon={faArrowUpLong} className="arrow-up" />
                <br />
                Min {weatherData.minTemperature}°C{"  "}
                <FontAwesomeIcon
                  icon={faArrowDownLong}
                  className="arrow-down"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4 weather-square">
                <img
                  className="weather-icon"
                  src="/humidity.png"
                  alt="Humidity icon"
                />
                {weatherData.humidity}% <br />
                Humidity
              </div>
              <div className="col-4 weather-square">
                {" "}
                <img
                  className="weather-icon"
                  src="/barometer.png"
                  alt="Pressure icon"
                />
                {weatherData.pressure} Bar <br />
                Pressure
              </div>
              <div className="col-4 weather-square">
                {" "}
                <img className="weather-icon" src="/wind.png" alt="Wind icon" />
                {weatherData.wind} km/h <br />
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
                {weatherData.feelsLikeTemp}°C <br />
                Feels like
              </div>
              <div className="col-4 weather-square">
                {" "}
                <img
                  className="weather-icon"
                  src="/sunset.png"
                  alt="Sunset icon"
                />
                {weatherData.sunset}
                <br />
                Sunset
              </div>
              <div className="col-4 weather-square">
                {" "}
                <img
                  className="weather-icon"
                  src="/sunrise.png"
                  alt="Sunrise icon"
                />
                {weatherData.sunrise}
                <br />
                Sunrise
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "1d038ee28ef2727a9f0310860ac10ae9";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=bologna&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
