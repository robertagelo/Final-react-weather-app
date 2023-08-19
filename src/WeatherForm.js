import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./WeatherForm.css";

export default function WeatherForm() {
  return (
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
  );
}
