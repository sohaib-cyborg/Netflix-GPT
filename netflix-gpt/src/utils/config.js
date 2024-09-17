import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name:"config",
    initialState:{
        selectedlang:"en",
    },
    reducers:{
        changeLanguage:(state,action)=>{
          state.selectedlang=action.payload;
        },
    },
});

export const {changeLanguage} = configSlice.actions;
export default configSlice.reducer;