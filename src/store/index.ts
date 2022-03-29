import { authSlice } from './slices/authSlice';
import { configureStore } from "@reduxjs/toolkit";


export const store=configureStore({
    reducer:{
        auth:authSlice.reducer
    },middleware:(defaultFn)=>defaultFn()
})

export type RootState=ReturnType<typeof store.getState>
export type DispatchType=typeof store.dispatch