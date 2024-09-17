import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import config from "./config";
const appstore = configureStore(
    {
     reducer:{
        user: userReducer,
        movie: movieReducer,
        gpt: gptReducer,
        config:config,
     }   
    }
)

export default appstore;