import React from 'react';

const conditions = (props) => {
    return (
        <div>
            {props.responseObj.cod === "200" ?

                <p>Sunrise:   {new Date(props.responseObj.city.sunrise * 1000).toLocaleString()}</p>
                : null}
            {props.responseObj.cod === "200" ?

                <p>Sunset: {new Date(props.responseObj.city.sunset * 1000).toLocaleString()}</p>
                : null}
            {props.responseObj.cod === "200" ?

                props.responseObj.list.map(forecast => (

                    < div >
                        <p><strong>{forecast.dt_txt}</strong></p>
                        <p>It is currently {Math.round(10 * forecast.main.temp) / 10} degrees out with {forecast.weather[0].description}.</p>
                        <p>It feels like {Math.round(10 * forecast.main.feels_like) / 10}</p>
                    </div>
                ))
                : null
            }
        </div >
    )
}

export default conditions;