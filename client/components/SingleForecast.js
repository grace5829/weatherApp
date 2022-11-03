import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchForecast, selectSingleForecast } from "../store/singleForecastSlice";
import { gsap } from "gsap";
import TypeOverrides from "pg/lib/type-overrides";
gsap.registerPlugin(ScrollTrigger)


const Forecast = () => {
    
    const dispatch=useDispatch()
    const {forecastId}=useParams()
    const ImageRef=useRef(null)

    useEffect(()=> {
        dispatch(fetchForecast(forecastId))
        gsap.from(ImageRef.current, {
      opacity:0,
      scrollTrigger:{
        trigger:'.forecast',
        start:'top top',
        end: 'bottom center',
        scrub:true,
        markers:true
      }
    })

},[] )

    const forecast = useSelector(selectSingleForecast)
    return (             
        <> 
        <div className='firstdiv'>
            <div className='intro'>
            Scroll down to see today's history fact!
            </div>
            </div>

            <div className='forecast' >
                <div > {forecast.weekday}</div> 
              <div >{forecast.weather} </div>
              <div>{forecast.temp}°F   </div>
              <div>Max Wind Gusts :{forecast.windSpeed}<small>MPH</small></div>
              <div>Real Feel:{forecast.realFeel} </div>
                    </div>
                    <div className="history">
                <img ref={ImageRef}className="historyImage" src={forecast.historyImageUrl}/>
                <div className="historyName"> {forecast.historyName}</div>
                <div className="historyDes">{forecast.historyDescription}</div>
                    </div>
        </>
    )
}


export default Forecast