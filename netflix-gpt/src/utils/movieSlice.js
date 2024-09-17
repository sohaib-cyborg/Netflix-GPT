import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
    name:"Movies",
    initialState:{
    MovieList:null,
    TrailerData:null,
    popular:null,

    },
    reducers:{
        addMovieData:(state,action)=>{
           state.MovieList = action.payload;             
        },
        addPopular:(state,action)=>{
            state.popular = action.payload;
        },
        addTrailerData:(state,action)=>{
           state.TrailerData = action.payload;
        }
    }
})
export const {addMovieData,addTrailerData,addPopular} = movies.actions;
export default movies.reducer;
