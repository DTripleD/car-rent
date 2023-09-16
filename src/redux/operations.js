import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://648c2bcb8620b8bae7ec606b.mockapi.io";

export const fetchCars = createAsyncThunk("cars/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/advert");
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
