import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./sliceCreate"
export const store = configureStore({
    reducer: {
     todos : todoSlice    
    }
})