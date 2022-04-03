import { NotesService } from './../../services/NotesService';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { NotePaginationSliceState } from './../../types/pagination';
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState:NotePaginationSliceState={page:0,take:5,all:0}

export const notePaginationSlice=createSlice({
    name:'notePaginationSlice',
    initialState,
    reducers:{
        setNotesPage(state,action:PayloadAction<number>){
            state.page=action.payload
        }
    },
    extraReducers:builder=>{
        builder.addCase(setAllNotesThunk.fulfilled,(state,action)=>{
            state.all=action.payload
        })
    }
})

export const setAllNotesThunk=createAsyncThunk<number,null>('setAllNotesThunk',
async(_,{rejectWithValue})=>{
    try{
        const res=await NotesService.getNoteCount()
        return res.data
    }catch(e:any){
        return rejectWithValue(e)
    }
})

export const {setNotesPage}=notePaginationSlice.actions