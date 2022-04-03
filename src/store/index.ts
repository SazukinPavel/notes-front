import { tagsApi } from './apis/tagsApi';
import { notesApi } from './apis/notesApi';
import { authSlice } from './slices/authSlice';
import { configureStore } from "@reduxjs/toolkit";
import { notePaginationSlice } from './slices/notePaginationSlice';


export const store=configureStore({
    reducer:{
        auth:authSlice.reducer,
        [notesApi.reducerPath]:notesApi.reducer,
        notePagination:notePaginationSlice.reducer,
        [tagsApi.reducerPath]:tagsApi.reducer
    },middleware:(defaultFn)=>defaultFn().concat(notesApi.middleware).concat(tagsApi.middleware)
})

export type RootState=ReturnType<typeof store.getState>
export type DispatchType=typeof store.dispatch