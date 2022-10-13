import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, handleCityChange, selectedCity }) => {
  return (
    <div>
      <Button
        variant={`${selectedCity === null ? "outline-warning" : "warning"}`}
        onClick={() => handleCityChange("current")}
      >
        Current Location
      </Button>
      {cities.map((city) => (
        <Button
          variant={`${selectedCity === null ? "outline-warning" : "warning"}`}
          onClick={() => handleCityChange(city)}
        >
          {city}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
