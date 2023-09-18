import React from "react";
import "./MainImages.css";

export default function MainImages() {
  // Current time
  const currentTime = new Date().getHours();

  // Conditionally display different images based on the time
  if (currentTime < 19 && currentTime > 6) {
    return (
      <div className="col-sm-4">
        <img className="main-img" src="/city-day-desk.png" alt="sunny city" />
        <img className="main-img-mobile" src="/city-day.png" alt="sunny city" />
      </div>
    );
  } else {
    return (
      <div className="col-sm-4">
        <img className="main-img" src="/night-desk.png" alt="sunny city" />
        <img
          className="main-img-mobile"
          src="/night-mobile.png"
          alt="night city"
        />
      </div>
    );
  }
}
