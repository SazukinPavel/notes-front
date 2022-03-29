import { useForm } from "react-hook-form";
import { useTypedDispatch } from "../../../hooks/useTypedDispatch";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { loginThunk } from "../../../store/slices/authSlice";
import { LoginUserDTO } from "../../../types/dto/LoginUser.dto";

function Login() {

    const {register,handleSubmit}=useForm<LoginUserDTO>({mode:'onBlur'})
    const {}=useTypedSelector((state)=>state.auth)
    const dispatch=useTypedDispatch()

    const onLogin=(dto:LoginUserDTO)=>{
        dispatch(loginThunk(dto))
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit(onLogin)}>
                <label>
                    Username or email:
                    <input {...register('usernameOrEmail',{required:true})}/>
                </label>
                <label>
                    Password:
                    <input {...register('password',{required:true})}/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
     );
}

export default Login;