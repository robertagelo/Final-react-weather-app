import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpLong,
  faArrowDownLong,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import WeatherForm from "./WeatherForm";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App">
      <div className="container-sm app">
        <div className="row divider">
          <div className="col-4">
            <img
              className="day-main-img"
              src="/city-day-desk.png"
              alt="sunny city"
            />
          </div>
          <div className="col-8">
            <div className="container weather-container">
              <div className="row">
                <div className="col-8">
                  <WeatherForm />
                </div>
                <div className="col-4 city">
                  <FontAwesomeIcon icon={faLocationDot} />
                  Bologna, Italy
                </div>
              </div>
              <div className="row text-center align-items-center">
                <div className="col-4 main-weather-description">
                  <img
                    src="/group.png"
                    className="img-current"
                    alt="Current weather icon"
                  />
                  Sunny
                </div>
                <div className="col-4 main-temp">
                  33
                  <span className="main-temp-degrees">°C</span>
                </div>
                <div className="col-4 max-min-temp">
                  Max 35°{"  "}
                  <FontAwesomeIcon icon={faArrowUpLong} className="arrow-up" />
                  <br />
                  Min 20°{"  "}
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
                  50% <br />
                  Humidity
                </div>
                <div className="col-4 weather-square">
                  {" "}
                  <img
                    className="weather-icon"
                    src="/barometer.png"
                    alt="Pressure icon"
                  />
                  1,007 Bar <br />
                  Pressure
                </div>
                <div className="col-4 weather-square">
                  {" "}
                  <img
                    className="weather-icon"
                    src="/wind.png"
                    alt="Wind icon"
                  />
                  23 km/h <br />
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
                  30° <br />
                  Feels like
                </div>
                <div className="col-4 weather-square">
                  {" "}
                  <img
                    className="weather-icon"
                    src="/sunset.png"
                    alt="Sunset icon"
                  />
                  20:00
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
                  6:00
                  <br />
                  Sunrise
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;
