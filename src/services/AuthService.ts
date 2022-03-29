import { User } from './../types/user';
import { $axios } from '../http';
import { LoginUserDTO } from './../types/dto/LoginUser.dto';



export class AuthService{


    static login(dto:LoginUserDTO){
        return $axios.post<{token:string,user:User}>('/users/login',dto)
    }
}