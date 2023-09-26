import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tweetArray: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateTweetArray: (state, action) => {
      state.tweetArray = [...state.tweetArray, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateTweetArray } = appSlice.actions;

export default appSlice.reducer;
