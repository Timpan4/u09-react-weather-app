import React from 'react';
import "./Conditions.css";

const conditions = (props) => {
    return (
        <div class="Conditions">
            <h3>{props.responseObj.cod === "200" ? "City: " + props.responseObj.city.name : null}</h3>
            {props.responseObj.cod === "200" ?
                props.responseObj.list.map(forecast => (

                    < div class="smallForecast">
                        <p><strong>{forecast.dt_txt}</strong></p>
                        <p>It is currently {Math.round(10 * forecast.main.temp) / 10} degrees out with {forecast.weather[0].description}.</p>
                        <p>It feels like {Math.round(10 * forecast.main.feels_like) / 10}</p>

                        <p>{"Wind speed: " + forecast.wind.speed}</p>
                        <p>{"Humidity: " + forecast.main.humidity}</p>
                    </div>
                ))
                : null
            }
        </div >
    )
}

export default conditions;