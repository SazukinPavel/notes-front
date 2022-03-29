import { AuthService } from './../../services/AuthService';
import { LoginUserDTO } from './../../types/dto/LoginUser.dto';
import { AuthSliceState } from './../../types/auth';
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from '../../types/user';

const initialState:AuthSliceState={isAuth:false,user:null}

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
        }
    },
    extraReducers:builder=>{
        builder.addCase(loginThunk.pending,(state)=>{
            state.isAuth=false
            state.user=null
        })
        builder.addCase(loginThunk.fulfilled,(state,action:PayloadAction<User>)=>{
            state.isAuth=true
            state.user=action.payload
        })
    }
})

export const {login,logout}=authSlice.actions

export const loginThunk=createAsyncThunk<User,LoginUserDTO>('loginThunk',
async(dto,{rejectWithValue})=>{
    try{
        const res=await AuthService.login(dto)
        localStorage.setItem('token',res.data.token)
        return res.data.user
    }catch(e){
        return rejectWithValue(e)
    }
})
