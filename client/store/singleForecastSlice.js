import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


    export const fetchForecast = createAsyncThunk(
      "forecast", async (forecastId) => {
        try {
          const { data } = await axios.get(`/api/forecasts/${forecastId}`);
          console.log(data)
          return data;
        } catch (err) {
          console.log(err);
        }
      });

const forecastSlice = createSlice({
    name: "forecast",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchForecast.fulfilled, (state, action) => {
          return action.payload;
        })
    },
  });
  export const selectSingleForecast = (state) => {
    return state.forecast;
  };
  export default forecastSlice.reducer;