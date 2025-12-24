import { configureStore } from "@reduxjs/toolkit";
import  animalsSlice from "../slice/animalsSlice";

export const store = configureStore({
    reducer: {
        animals: animalsSlice
    }
})