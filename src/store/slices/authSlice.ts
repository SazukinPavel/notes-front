import { registerThunk } from './thunks/registerThunk';
import { AuthSliceState } from './../../types/auth';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from '../../types/user';
import { WritableDraft } from 'immer/dist/internal';
import { loginThunk } from './thunks/loginThunk';

const initialState:AuthSliceState={isAuth:false,user:null,errorMessage:undefined}

export const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        login(state,action:PayloadAction<User>){
            state.isAuth=true
            state.user=action.payload
        },
        logout(state){
            state.isAuth=false
            state.user=null
            state.errorMessage=undefined
        },
        resetAuthErrorMessage(state){
            state.errorMessage=undefined
        }
    },
    extraReducers:builder=>{
        builder.addCase(loginThunk.pending,authPending)
        builder.addCase(loginThunk.fulfilled,authFulfilled)
        builder.addCase(loginThunk.rejected,(state,action)=>{
            state.errorMessage=action.payload as string
        })

        builder.addCase(registerThunk.pending,authPending)
        builder.addCase(registerThunk.fulfilled,authFulfilled)
        builder.addCase(registerThunk.rejected,(state,action)=>{
            state.errorMessage=action.payload as string
        })

    }
})

export const {login,logout,resetAuthErrorMessage}=authSlice.actions

const authPending=(state:WritableDraft<AuthSliceState>)=>{
    state.isAuth=false
    state.user=null
}

const authFulfilled=(state:WritableDraft<AuthSliceState>,action:PayloadAction<User>)=>{
    state.isAuth=true
    state.user=action.payload
}
