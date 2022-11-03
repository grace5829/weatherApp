import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { Link } from "react-router-dom";
import { fetchForecasts, selectForecasts } from "../store/forecastsSlice";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger)

const Forecasts = () => {

  const forecasts = useSelector(selectForecasts)

//   const revealRefs=useRef([])
// revealRefs.current=[]

  // useEffect(()=>{

  //   revealRefs.current.forEach((el, index) => {
  //     gsap.fromTo(el, {
  //       autoAlpha:0
  //     },{
  //       duration:1,
  //       autoAlpha:1,
  //       ease:'none',
  //       ScrollTrigger:{
  //         id:`section-${index+1}`,
  //         trigger:el,
  //         start:'top center',
  //         toggleActions: 'play none none reverse',
  //         markers:true 
  //       }
  //     })
  //     })
  // },[])

// const addToRefs= (el)=> {
// if ( el && !revealRefs.current.includes(el)){
//   revealRefs.current.push(el)
// }
// }
  return (
    <div>
 <div className='firstdiv'>
            <div className='intro'>
            Scroll down to see today's history fact!
            </div>
            </div>
      {forecasts && forecasts.length
        ? forecasts.map((forecast) => (
          <div  className={'forecasts' + forecast.weather} key={forecast.id}>

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
              <ul className="activites"  >Fun activites for a {forecast.weather} day!!!
                <li className={forecast.weather+"activity one"}>{forecast.activity1}</li>
                <li  className={forecast.weather+"activity two"}>{forecast.activity2}</li>
                <li  className={forecast.weather+"activity three"}>{forecast.activity3}</li>
              </ul>
          </div>))
        : null}
    </div>
  )
}


export default Forecasts