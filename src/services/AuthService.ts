import { AuthDto } from './../types/auth';
import { RegisterUserDTO } from './../types/dto/RegisterUser.dto';
import { $axios } from '../http';
import { LoginUserDTO } from './../types/dto/LoginUser.dto';



export class AuthService{

    static login(dto:LoginUserDTO){
        return $axios.post<AuthDto>('/users/login',dto)
    }

    static register(dto:RegisterUserDTO){
        return $axios.post<AuthDto>('/users/register',dto)
    }
}