import { createSlice } from "@reduxjs/toolkit";
const gptSlice = createSlice({
  name: "gpt-slice",
  initialState: {
    showGpt: false,
    movieResult:null,
    movieName:null,
  },
  reducers: {
    togglegpt: (state) => {
      state.showGpt =! state.showGpt;
    },
    setGptResponse:(state,actions)=>{
      const {movieResult,movieName} = actions.payload;
      state.movieResult=movieResult;
      state.movieName=movieName;
    }
  },
});
export const {setGptResponse,togglegpt} = gptSlice.actions;
export default gptSlice.reducer;