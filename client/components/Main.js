import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route, Link } from 'react-router-dom'
import { Forecasts, Forecast } from '.'
import { fetchForecasts } from '../store/forecastsSlice'
const Main = () => {
  const dispatch=useDispatch()

  useEffect(()=> {
      dispatch(fetchForecasts())
  }, [])
    return (
      <div>
        <nav>
          <Link to= '/'>Home</Link>
          
        </nav>
        <main>
          <h1 className='heading'> Welcome to my Weather App!</h1>
          <div className='firstdiv'>Scroll down to see this weeks weather!</div>
          <div>
            <Routes>
              <Route path='/' element={<Forecasts />} />
              <Route path='/forecasts/:forecastId' element={<Forecast />} />
            </Routes>
          </div>
        </main>
      </div>
    )
  }
  
  export default Main