import React, { useEffect } from "react";
// Style
import "../assets/style/Status.css";

//Icons
import greenFace from "../assets/img/icons/face-green.svg";
import yellowFace from "../assets/img/icons/face-yellow.svg";
import orangeFace from "../assets/img/icons/face-orange.svg";
import redFace from "../assets/img/icons/face-red.svg";

function Status(props) {
  const { aqius, mainus } = props.pollution;

  useEffect(() => {
    checkPollution(aqius);
  });

  const checkPollution = (data) => {
    let tempObj = {};
    const severity = [
      { color: "green", face: greenFace, word: "Good" },
      { color: "yellow", face: yellowFace, word: "Moderate" },
      { color: "orange", face: orangeFace, word: "Unhealthy" },
      { color: "red", face: redFace, word: "Very Unhealthy" },
    ];
    if (data <= 50) {
      tempObj = severity[0];
    } else if (data <= 100) {
      tempObj = severity[1];
    } else if (data <= 200) {
      tempObj = severity[2];
    } else {
      tempObj = severity[3];
    }
    const { color, face, word } = tempObj;

    const statusEllipse = document.querySelector(".status-circle");
    statusEllipse.style.boxShadow = `inset 2px 2px 4px var(--${color}-dark),
    inset -2px -2px 4px var(--${color}-light)`;
    statusEllipse.style.background = `var(--${color})`;

    document.querySelector(".status-text").innerHTML = word;

    const ellipse = document.querySelector(".mood-ellipse");
    ellipse.style.background = `var(--${color})`;
    ellipse.childNodes[0].src = face;
  };

  return (
    <div className="Status">
      <h2 className="subheading">Status</h2>
      <div className="status-card">
        <div className="status-message">
          <div className="status-circle"></div>
          <h3 className="status-text sec-heading">word</h3>
        </div>
        <div className="aqi">
          <h3 className="aqi-heading sec-heading">US aqi</h3>
          <p className="aqi-value value-bold">{aqius}</p>
        </div>
        <div className="pollutant">
          <h3 className="pollutant-heading sec-heading">Main pollutant</h3>
          <p className="pollutant-value value-regular">
            {mainus.toUpperCase()}
          </p>
        </div>
        <div className="mood-ellipse">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Status;
