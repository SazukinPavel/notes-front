import { createAsyncThunk } from "@reduxjs/toolkit"
import { AuthService } from "../../../services/AuthService"
import { LoginUserDTO } from "../../../types/dto/LoginUser.dto"
import { User } from "../../../types/user"

export const loginThunk=createAsyncThunk<User,LoginUserDTO>('loginThunk',
async(dto,{rejectWithValue})=>{
    try{
        const res=await AuthService.login(dto)
        localStorage.setItem('token',res.data.token)
        return res.data.user
    }catch(e:any){
        return rejectWithValue(e.response.data.message)
    }
})

