import { useForm } from "react-hook-form";
import { useGetBack } from "../../../hooks/useGetBack";
import { useTypedDispatch } from "../../../hooks/useTypedDispatch";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import {resetAuthErrorMessage } from "../../../store/slices/authSlice";
import { loginThunk } from "../../../store/slices/thunks/loginThunk";
import { LoginUserDTO } from "../../../types/dto/LoginUser.dto";
import Button from "../../UI/Button";
import ModalMessage from "../../UI/ModalMessage";
import ErrorMessage from "../FormControls/ErrorMessage";
import FormControl from "../FormControls/FormControl";
import styles from './Login.module.scss'

function Login() {

    const {register,handleSubmit,formState:{errors,isValid},reset}=useForm<LoginUserDTO>({mode:'onBlur'})
    const {errorMessage}=useTypedSelector((state)=>state.auth)
    const dispatch=useTypedDispatch()
    const getBack=useGetBack()

    const onLogin=(dto:LoginUserDTO)=>{
        dispatch(loginThunk(dto))
        reset()
    }

    const closeModalWindow=()=>{
        dispatch(resetAuthErrorMessage())
    }

    return ( 
        <div className={styles.Login}>
            <form onSubmit={handleSubmit(onLogin)}>
                <FormControl type='text' register={register('usernameOrEmail',
                {required:'Имя пользователя или email обязательны'})}>
                    Имя пользователя или email:
                </FormControl>
                <ErrorMessage message={errors.usernameOrEmail?.message}/>
                <FormControl type='password' register={register('password',
                {required:'Пароль обязателен'})}>
                    Пароль:
                </FormControl>
                <ErrorMessage message={errors.password?.message}/>
                <div className={styles.buttons}>
                    <Button styleType='primary' onClick={getBack}>Назад</Button>
                    <Button styleType='warn' onClick={()=>reset()}>Очистить</Button>
                    <Button styleType='sucess' type="submit" disabled={!isValid}>Войти</Button>
                </div>
            </form>
            {errorMessage&&<ModalMessage onClose={closeModalWindow}>
                <h3>{errorMessage}</h3>    
            </ModalMessage>}
        </div>
     );
}

export default Login;