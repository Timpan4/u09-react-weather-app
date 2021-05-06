import React, { useState } from "react";
import Conditions from "../Conditions/Conditions";

const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});
    let theUnit = "metric";
    function units(unit) {
        theUnit = unit;
        console.log(theUnit)
    }
    function getForecast() {
        let q = "Stockholm";
        //uses https://glacial-journey-38121.herokuapp.com/ to bypass cors issue i had its built with https://github.com/Rob--W/cors-anywhere/
        fetch("https://glacial-journey-38121.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?q=" + q + "&appid=d8e34de0dfb02452b0c0b474fbb322ae&units=" + theUnit,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Origin: "",
                    Host: "api.openweathermap.org",
                },
            }
        )
            .then((response) => response.json())
            .then((response) => {
                setResponseObj(response);
                console.log(response);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    return (
        <div>
            <h2>Find Current Weather Conditions</h2>
            <button onClick={getForecast}>Get Forecast</button>
            <button onClick={() => units("metric")}>Celcius</button>
            <button onClick={() => units("imperial")}>Fahrenheit</button>
            <Conditions responseObj={responseObj} />
        </div>
    );
};

export default Forecast;
