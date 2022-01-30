import React, { useEffect } from "react";

//Style
import "../assets/style/Loading.css";

function Loading() {
  useEffect(() => {
    document.querySelector("body").style.overflow = "hidden";
    startLoading();
  }, []);

  const startLoading = () => {
    const percentage = document.querySelector(".percentage");
    const progress = document.querySelector(".progress");
    const loading = document.querySelector(".Loading");
    let start = 0;
    function increment() {
      const timer = setInterval(() => {
        if (start <= 100) {
          percentage.innerHTML = `${start}%`;

          start++;
        } else {
          loading.style.transition = "0.5s";
          loading.style.opacity = 0;
          loading.style.pointerEvents = "none";
          document.querySelector("body").style.overflow = "auto";
          clearInterval(timer);
        }
      }, 30);
    }
    setTimeout(() => {
      increment();
      progress.style.strokeDashoffset = 0;
    }, 1000);
  };

  return (
    <div className="Loading">
      <h1 className="logo">Air Q</h1>
      <div className="outer-circle">
        <svg xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="150" r="125" className="progress" />
        </svg>
        <div className="inner-circle">
          <span className="percentage">0%</span>
        </div>
      </div>
    </div>
  );
}

export default Loading;
