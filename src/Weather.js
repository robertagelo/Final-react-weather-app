import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./Weather.css";
import CityInfo from "./CityInfo";
import WeatherInfo from "./WeatherInfo";

export default function WeatherForm(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: response.data.dt,
      icon: response.data.weather[0].icon,
      country: response.data.sys.country,
      currentTemperature: Math.round(response.data.main.temp),
      maxTemperature: Math.round(response.data.main.temp_max),
      minTemperature: Math.round(response.data.main.temp_min),
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      wind: response.data.wind.speed,
      feelsLikeTemp: Math.round(response.data.main.feels_like),
      mainIcon: response.data.weather[0].icon,
      sunset: new Date(response.data.sys.sunset * 1000)
        .toLocaleString("it-IT", { timeZone: "Europe/Rome" })
        .slice(10, 16),
      sunrise: new Date(response.data.sys.sunrise * 1000)
        .toLocaleString("it-IT", { timeZone: "Europe/Rome" })
        .slice(10, 16),
    });
  }

  function search() {
    const apiKey = "1d038ee28ef2727a9f0310860ac10ae9";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function changeCity(event) {
    setCity(event.target.value);
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
          <img
            className="day-main-img-mobile"
            src="/city-day.png"
            alt="sunny city"
          />
        </div>
        <div className="col-sm-8">
          <div className="container weather-container">
            <div className="row">
              <div className="col-8">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="What's the weather like in..."
                    className="text-input"
                    onChange={changeCity}
                  />
                  <button type="submit" className="button-input">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                </form>
              </div>
              <CityInfo city={weatherData.city} country={weatherData.country} />
            </div>
            <WeatherInfo info={weatherData} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
