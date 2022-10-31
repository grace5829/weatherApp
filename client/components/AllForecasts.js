import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchForecasts, selectForecasts } from "../store/forecastsSlice";

const Forecasts = () => {

   
    const forecasts = useSelector(selectForecasts)

    console.log(forecasts)
    return (
        <div>
             {forecasts && forecasts.length
          ? forecasts.map((forecast) => (
            <div className='forecast' key={forecast.id}>
              <Link to={`/forecasts/${forecast.id}`}>
                {forecast.weekday}
              </Link>
              <div>Max Wind Gusts :{forecast.windSpeed}<small>MPH</small></div>
              <div>{forecast.temp}°F   </div>
              <div>{forecast.weather} </div>
            </div> ))
          : null}
        </div>
    )
}


export default Forecasts