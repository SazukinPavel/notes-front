import { notesApi } from './apis/notesApi';
import { authSlice } from './slices/authSlice';
import { configureStore } from "@reduxjs/toolkit";


export const store=configureStore({
    reducer:{
        auth:authSlice.reducer,
        [notesApi.reducerPath]:notesApi.reducer
    },middleware:(defaultFn)=>defaultFn().concat(notesApi.middleware)
})

export type RootState=ReturnType<typeof store.getState>
export type DispatchType=typeof store.dispatch