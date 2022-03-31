import { useForm } from "react-hook-form";
import { useGetBack } from "../../../hooks/useGetBack";
import { useTypedDispatch } from "../../../hooks/useTypedDispatch";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { resetAuthErrorMessage } from "../../../store/slices/authSlice";
import { registerThunk } from "../../../store/slices/thunks/registerThunk";
import { RegisterUserDTO } from "../../../types/dto/RegisterUser.dto";
import Button from "../../UI/Button";
import ModalMessage from "../../UI/ModalMessage";
import ErrorMessage from "../FormControls/ErrorMessage";
import FormControl from "../FormControls/FormControl";
import styles from './Register.module.scss'

function Register() {
    const dispatch=useTypedDispatch()
    const errorMessage=useTypedSelector((state)=>state.auth.errorMessage)
    const {formState:{errors,isValid},handleSubmit,reset,register}=useForm<RegisterUserDTO>({mode:'onBlur'})
    const getBack=useGetBack()

    const modalClose=()=>{
        dispatch(resetAuthErrorMessage())
    }

    const onSubmit=(dto:RegisterUserDTO)=>{
        dispatch(registerThunk(dto))
    }

    return ( 
        <div className={styles.Register}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl type="text" register={register('username',
                {required:'Имя обязательный параметр'})}>
                   Имя:
                </FormControl>
                <ErrorMessage message={errors.username?.message}/>
                <FormControl type="text" register={register('email',
                {required:'Email обязательный параметр',pattern:{value:/\S+@\S+\.\S+/,message:'Введите валидный email'}})}>
                   Email:
                </FormControl>
                <ErrorMessage message={errors.email?.message}/>
                <FormControl type="text" register={register('password',
                {required:'Пароль обязательный параметр',minLength:{value:8,message:'Минимальная длина пароля 8'}})}>
                   Пароль:
                </FormControl>
                <ErrorMessage message={errors.password?.message}/>
                <FormControl type="text" register={register('bio')}>
                   Биография:
                </FormControl>
                <FormControl type="text" register={register('img')}>
                   Аватарка пользователя:
                </FormControl>
                <div className={styles.buttons}>
                    <Button styleType='primary' onClick={getBack}>Назад</Button>
                    <Button styleType='warn' onClick={()=>reset()}>Очистить</Button>
                    <Button styleType='sucess' type="submit" disabled={!isValid}>Войти</Button>
                </div>
            </form>
            {errorMessage && <ModalMessage onClose={modalClose}/>}
        </div>
     );
}

export default Register;