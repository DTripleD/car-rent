import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "../operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    isLoading: true,
    error: null,
  },
  extraReducers: {
    [fetchCars.pending]: handlePending,
    [fetchCars.fulfilled](state, action) {
      console.log(state);
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchCars.rejected]: handleRejected,
  },
});

export const carsReducer = carsSlice.reducer;
