
import React, { useState } from "react";
import './Weather.css';

const Weather = () => {
    let [responseObj, setResponseObj] = useState({});
    var theUnit;
    var latitude, longitude;
    function setPos(lat, lon) {
        latitude = lat;
        longitude = lon;
    }
    function units(unit) {
        theUnit = unit;
        console.log(theUnit);
        getForecast();
    }
    function getForecast() {
        //uses https://glacial-journey-38121.herokuapp.com/ to bypass cors issue i had its built with https://github.com/Rob--W/cors-anywhere/
        fetch("https://glacial-journey-38121.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=9a3bdf749ae372902a8e0b9c8b0a4925&units=" + theUnit,
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
        < div class="Weather">

            {navigator.geolocation.getCurrentPosition(function (position) {
                setPos(position.coords.latitude, position.coords.longitude);
            }, err => {
                console.warn(`ERROR(${err.code}): ${err.message}`);
            }, {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            })
            }
            <h2>Current Weather Conditions</h2>


            <div class={responseObj.cod == 200 && responseObj !== undefined ? "Current Center" : "Current Hidden"}>
                <h3> {responseObj.cod == 200 && responseObj !== undefined ? "Your city: " + responseObj.name : null} </h3>
                {responseObj.cod == 200 && responseObj !== undefined ?

                    <p>Sunrise:   {new Date(responseObj.sys.sunrise * 1000).toLocaleString()}</p>
                    : null}
                {responseObj.cod == 200 && responseObj !== undefined ?

                    <p>Sunset: {new Date(responseObj.sys.sunset * 1000).toLocaleString()}</p>
                    : null}
                {responseObj.cod == 200 && responseObj !== undefined ?

                    <p>{"Wind speed: " + responseObj.wind.speed}</p>
                    : null}
                {responseObj.cod == 200 && responseObj !== undefined ?

                    <p>{"Humidity: " + responseObj.main.humidity}</p>
                    : null}
                {responseObj.cod == 200 && responseObj !== undefined ?
                    < div >
                        <p>It is currently {Math.round(10 * responseObj.main.temp) / 10} degrees out with {responseObj.weather[0].description}.</p>
                        <p>It feels like {Math.round(10 * responseObj.main.feels_like) / 10}</p>
                    </div>
                    : null}
                <p>
                    {theUnit != undefined ? "Current selected unit: " + theUnit : null}</p>
            </div>
            <p>Choose unit to display current weather. </p>
            <button onClick={() => units("metric")}>Celcius</button>
            <button onClick={() => units("imperial")}>Fahrenheit</button>
        </div >
    );
};

export default Weather;
