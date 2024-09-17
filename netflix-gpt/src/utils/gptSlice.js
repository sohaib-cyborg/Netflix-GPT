import { createSlice } from "@reduxjs/toolkit";
const gptSlice = createSlice({
  name: "gpt-slice",
  initialState: {
    showGpt: false,
  },
  reducers: {
    togglegpt: (state) => {
      state.showGpt =! state.showGpt;
    },
  },
});
export const {togglegpt} = gptSlice.actions;
export default gptSlice.reducer;