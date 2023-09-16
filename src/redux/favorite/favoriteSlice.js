import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "favorite",
  initialState: { data: [] },
  reducers: {
    setFavoritee: (state, { payload }) => {
      state.data.push(payload);
    },
    removeFavorite: (state, { payload }) => {
      state.data = state.data.filter((item) => item.id !== payload.id);
    },
  },
});

export const { setFavoritee, removeFavorite } = filterSlice.actions;

export const favoriteReducer = filterSlice.reducer;
