import React from 'react';

const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});
    function getForecast() {
        let q = null;
        fetch("https://community-open-weather-map.p.rapidapi.com/forecast?q=" + q, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "34b31d56famshea9d26710c2195ap10eb3bjsn380b5003eb65",
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            }
        })
            .then(response => {
                console.log(response);
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