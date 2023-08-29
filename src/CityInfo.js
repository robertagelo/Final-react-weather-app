import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./CityInfo.css";

export default function CityInfo(props) {
  return (
    <div className="col-4 city">
      <FontAwesomeIcon icon={faLocationDot} />
      {"  "}
      {props.city}, {props.country}
    </div>
  );
}
