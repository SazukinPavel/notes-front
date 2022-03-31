import { User } from "./user"

export interface AuthSliceState{
    isAuth:boolean
    user:User | null
    errorMessage:string | undefined
}

export interface AuthDto{
    token:string
    user:User
}