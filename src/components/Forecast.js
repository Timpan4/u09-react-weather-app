import React, { useState } from 'react';


const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});
    function getForecast() {
        let q = "Stockholm";


        //uses https://cors-anywhere.herokuapp.com/ to bypass cors issue i had
        fetch("https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?q=" + q + "&appid=d8e34de0dfb02452b0c0b474fbb322ae", {
            "method": "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Origin': '',
                'Host': 'api.openweathermap.org'
            }
        })
            .then(response => response.json())
            .then(response => {
                setResponseObj(response)
            })
            .catch(err => {
                console.error(err);
            });
    }

    return (<div>
        <h2>Find Current Weather Conditions</h2>
        <div>
            {JSON.stringify(responseObj)}
        </div>
        <button onClick={getForecast}>Get Forecast</button>
    </div>
    )
}

export default Forecast;