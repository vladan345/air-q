import React, { useEffect } from "react";

// Style
import "../assets/style/Preview.css";

// Fog iamges
import fog1 from "../assets/img/fog/top.png";
import fog2 from "../assets/img/fog/middle.png";
import fog3 from "../assets/img/fog/bottom.png";

function Preview(props) {
  useEffect(() => {
    let num = props.pollution / 3 / 100;
    document.querySelector(".fog").style.opacity =
      Math.round((num + Number.EPSILON) * 100) / 100;
  });

  return (
    <div className="Preview">
      <div className="fog">
        <img className="fog1" src={fog1} alt="fog 1" />
        <img className="fog2" src={fog2} alt="fog 2" />
        <img className="fog3" src={fog3} alt="fog 3" />
      </div>
      <div className="shadow"></div>
    </div>
  );
}

export default Preview;
