/* Here is where you will configure the store 
    The store needs some reducer slices!
*/
import { configureStore } from '@reduxjs/toolkit'
import forecastsSlice from './forecastsSlice'
import forecastSlice from './singleForecastSlice'
const store = configureStore({
  reducer: {
    forecasts: forecastsSlice,
    forecast: forecastSlice
  },
})

export default store