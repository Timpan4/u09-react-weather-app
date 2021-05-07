import React, { useState } from "react";
import Conditions from "../Conditions/Conditions";
import './Forecast.css';

const Forecast = () => {
    let [responseObj, setResponseObj] = useState({}); let [city, setCity] = useState('');
    let [unit, setUnit] = useState('metric');
    const uriEncodedCity = encodeURIComponent(city);
    function getForecast(e) {
        e.preventDefault();
        let q = uriEncodedCity;
        //uses https://glacial-journey-38121.herokuapp.com/ to bypass cors issue i had its built with https://github.com/Rob--W/cors-anywhere/
        fetch("https://glacial-journey-38121.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?q=" + q + "&appid=d8e34de0dfb02452b0c0b474fbb322ae&units=" + unit,
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
        <div class="Forecast">
            <h2>Find Current Weather Conditions</h2>
            <form onSubmit={getForecast}>
                <input type="text" placeholder="Enter City" maxLength="50" value={city} onChange={(e) => setCity(e.target.value)} />
                <label>
                    <input type="radio" name="units" checked={unit === "imperial"} value="imperial" onChange={(e) => setUnit(e.target.value)} /> Fahrenheit
                </label>
                <label> <input type="radio" name="units" checked={unit === "metric"} value="metric" onChange={(e) => setUnit(e.target.value)} />
                    Celcius
                </label>
                <button type="submit">Get Forecast</button>
            </form>
            <Conditions class="Center" responseObj={responseObj} />
        </div>
    );
};

export default Forecast;
