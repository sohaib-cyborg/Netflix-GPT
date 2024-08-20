import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
    name:"Movies",
    initialState:{
    MovieList:null,
    TrailerData:null,    
    },
    reducers:{
        addMovieData:(state,action)=>{
           state.MovieList = action.payload;             
        },
        addTrailerData:(state,action)=>{
           state.TrailerData = action.payload;
        }
    }
})
export const {addMovieData,addTrailerData} = movies.actions;
export default movies.reducer;
