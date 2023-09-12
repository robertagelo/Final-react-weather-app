import React from "react";
import "./FormattedDate.css";

export default function FormattedDate(props) {
  let now = new Date();
  let month = now.getMonth();
  let year = now.getFullYear();
  let minutes = now.getMinutes();
  let hours = now.getHours();
  let day = now.getDate();
  let weekDay = now.getDay();

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let currentDate = `${days[weekDay]}, ${day} ${
    months[month]
  } ${year} at ${hours}:${(minutes < 10 ? "0" : "") + minutes}`;

  return <div className="formatted-date">Updated on {currentDate}</div>;
}
