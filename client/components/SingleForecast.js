import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchForecast, selectSingleForecast } from "../store/singleForecastSlice";

const Forecast = () => {
    const dispatch=useDispatch()
    const {forecastId}=useParams()
   useEffect(()=> {
    dispatch(fetchForecast(forecastId))
},[] )
    const forecast = useSelector(selectSingleForecast)
console.log(forecast)
    return (             
            <div className='forecast' key={forecast.id}>
                {forecast.weekday}
              <div>{forecast.weather} </div>
              <div>{forecast.temp}°F   </div>
              <div>Max Wind Gusts :{forecast.windSpeed}<small>MPH</small></div>
              <div>Real Feel:{forecast.realFeel} </div>

            </div> 
    )
}


export default Forecast