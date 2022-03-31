import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '../../../services/AuthService';
import { User } from '../../../types/user';
import { RegisterUserDTO } from './../../../types/dto/RegisterUser.dto';


export const registerThunk=createAsyncThunk<User,RegisterUserDTO>('registerThunk',
async(dto,{rejectWithValue})=>{
    try{
        const res=await AuthService.register(dto)
        localStorage.setItem('token',res.data.token)
        return res.data.user
    }catch(e:any){
        return rejectWithValue(e.response.data.message)
    }
})