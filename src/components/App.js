import React, { useEffect, useState } from "react";
//Components
import Status from "./Status";
import Weather from "./Weather";
import Preview from "./Preview";
import Loading from "./Loading";

// import { getData } from "../assets/helpers/getData";

// Style
import "../assets/style/App.css";

function App() {
  // const [current, setCurrent] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (!isLoaded) {
      if (localStorage.getItem("theme") === null) {
        localStorage.setItem("theme", "light");
        setTheme("light");
      } else {
        setTheme(localStorage.getItem("theme"));
      }
      // getData().then((resp) => {
      //   console.log(resp);
      //   setCurrent(resp.data.current);
      // });
      setLoaded(true);
    }
  }, [isLoaded]);

  const data = {
    weather: {
      tp: -5,
      pr: 1020,
      hu: 62,
      ws: 2,
      wd: 180,
      ic: "09d",
    },
    pollution: {
      aqius: 256,
      mainus: "p1", //main pollutant for US AQI
    },
  };

  const changeTheme = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };
  const toggleMenu = (event) => {
    if (event.target.innerText === "bars") {
      document.querySelector(".menu-button").classList.toggle("opened");
    }
  };
  return (
    <div className={`App ${theme}`}>
      <header>
        <h1 className="logo">Air Q</h1>
        <div className="menu-button" onClick={toggleMenu}>
          <div
            className={`switch ${theme === "dark" ? "changed" : null}`}
            onClick={changeTheme}
          >
            <p className="switch-button">{theme === "dark" ? "moon" : "sun"}</p>
          </div>
          <p className="menu-icon">bars</p>
        </div>
      </header>
      {/* {current && (
        <div className="container">
          <div className="column">
            <Preview pollution={current.pollution.aqius} />
          </div>
          <div className="column">
            <Status pollution={current.pollution} />
            <Weather weather={current.weather} />
          </div>
        </div>
      )} */}
      {data && (
        <div className="container">
          <div className="column">
            <Preview pollution={data.pollution.aqius} />
          </div>
          <div className="column">
            <Status pollution={data.pollution} />
            <Weather weather={data.weather} />
          </div>
        </div>
      )}
      <footer>
        <a
          className="social"
          href="https://github.com/vladan345"
          target="_blank"
          rel="noreferrer"
        >
          <p className="github-icon">github</p> More on my github profile
        </a>
      </footer>
      {isLoaded && <Loading />}
    </div>
  );
}

export default App;
