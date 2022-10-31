import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchForecasts = createAsyncThunk(
    "forecasts", async () => {
      try {
        const { data } = await axios.get(`/api/forecasts`);
        console.log(data)
        return data;
      } catch (err) {
        console.log(err);
      }
    });

const forecastsSlice = createSlice({
    name: "forecasts",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchForecasts.fulfilled, (state, action) => {
          return action.payload;
        })
    },
  });
  export const selectForecasts = (state) => {
    return state.forecasts;
  };
  export default forecastsSlice.reducer;