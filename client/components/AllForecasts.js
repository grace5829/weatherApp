import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchForecasts, selectForecasts } from "../store/forecastsSlice";

const Forecasts = () => {

  const forecasts = useSelector(selectForecasts)

  console.log(forecasts)
  return (
    <div>
      <div className='person'>
        <div className='head'> </div>
        <div className='middle'>
          <div className='arm1'> </div>
          <div className='body'> </div>
          <div className='arm2'> </div>
        </div>
        <div className='legs'>
          <div className='leg1'> </div>
          <div className='leg2'> </div>
        </div>
      </div>
      {forecasts && forecasts.length
        ? forecasts.map((forecast) => (
          <div className={'forecasts' + forecast.weather} key={forecast.id}>

            <div className={forecast.weather + ' one'}  > </div>
            {forecast.weather === 'Sunny'?
              <>
                  <div className="thermometer"> 
                  <div className="redStuff"></div>
                  </div>                   
                </>
              : null}

            {forecast.weather === 'Cloudy' || forecast.weather === 'Snowy' ?
              <>
                <div className={forecast.weather + ' two'} > </div>
                <div className={forecast.weather + ' three'} > </div>
                <div className={forecast.weather + ' four'} > </div>
                <div className={forecast.weather + ' five'} > </div>
                <div className={forecast.weather + ' six'} > </div>
                <div className={forecast.weather + ' seven'} > </div>
                <div className={forecast.weather + ' eight'} > </div>
                <div className={forecast.weather + ' nine'} > </div>
                <div className={forecast.weather + ' ten'} > </div>
                <div className={forecast.weather + ' eleven'} > </div>
                <div className={forecast.weather + ' twelve'} > </div>
                <div className={forecast.weather + ' thirteen'} > </div>
                <div className={forecast.weather + ' fourteen'} > </div>
              </>
              : null
            }
            <div className="forecastInfo">
              <Link to={`/forecasts/${forecast.id}`} className='weekday'>
                {forecast.weekday}
              </Link>
              <div >{forecast.weather} </div>
              <div>{forecast.temp}°F   </div>
            </div>

          </div>))
        : null}
    </div>
  )
}


export default Forecasts