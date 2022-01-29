import React, { useEffect } from "react";
// Style
import "../assets/style/Weather.css";

function Weather(props) {
  const { tp, pr, hu, ic, ws, wd } = props.weather;

  useEffect(() => {
    checkWeather(tp, ic);
    changeDirection(wd);
  });

  const checkIcon = (icon) => {
    const arr = [
      ["01d", "sun"],
      ["01n", "moon"],
      ["02d", "cloud-sun"],
      ["02n", "cloud-moon"],
      ["03d", "cloud"],
      ["04d", "clouds"],
      ["09d", "cloud-showers-heavy"],
      ["10d", "cloud-sun-rain"],
      ["10n", "cloud-moon-rain"],
      ["11d", "cloud-bolt"],
      ["13d", "cloud-snow"],
      ["50d", "cloud-fog"],
    ];
    let converted = "";
    arr.forEach((pair) => {
      if (pair.includes(icon)) {
        converted = pair[1];
      }
    });
    return converted;
  };

  const checkWeather = (temp, icon) => {
    const stormIcons = ["09d", "10d", "10n", "11d"];
    const ellipse = document.querySelector(".weather-ellipse");
    if (stormIcons.includes(icon)) {
      ellipse.style.background = "var(--storm)";
    } else {
      if (temp < 10) {
        ellipse.style.background = "var(--cold)";
      } else if (temp < 20) {
        ellipse.style.background = "var(--yellow)";
      } else {
        ellipse.style.background = "var(--orange)";
      }
    }
  };

  const changeDirection = (direction) => {
    document.querySelector(".arrow").style.transform = `rotate(${
      direction - 45
    }deg)`;
  };

  return (
    <div className="Weather">
      <h2 className="subheading">Weather</h2>
      <div className="weather-card">
        <div className="weather-ellipse"></div>
        <div className="temperature">
          <p className="icon">{checkIcon(ic)}</p>
          <p className="temp-value">{tp}&deg;C</p>
        </div>
        <div className="details">
          <div className="detail">
            <h2 className="detail-heading sec-heading">Humidity</h2>
            <p className="detail-value value-regular">{hu}%</p>
          </div>
          <div className="detail">
            <h2 className="detail-heading sec-heading">Wind Speed</h2>
            <p className="detail-value value-regular">{ws} m/s</p>
          </div>
          <div className="detail">
            <h2 className="detail-heading sec-heading">Pressure</h2>
            <p className="detail-value value-regular">{pr} Pa</p>
          </div>
          <div className="detail">
            <h2 className="detail-heading sec-heading">Wind Direction</h2>
            <p className="arrow">location-arrow</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
