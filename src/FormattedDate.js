import React from "react";
import "./FormattedDate.css";

export default function FormattedDate(props) {
  let currentDate = new Date(props.rawDate * 1000)
    .toLocaleString("it-IT", {
      timeZone: "Europe/Rome",
    })
    .slice(1, 16);

  return <div className="formatted-date">Last update:{currentDate}</div>;
}
