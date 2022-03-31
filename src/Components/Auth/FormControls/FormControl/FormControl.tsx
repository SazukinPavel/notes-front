import { FC, HTMLProps } from "react";
import {UseFormRegisterReturn } from "react-hook-form";
import styles from './FormControl.module.scss'

interface FormControlProps{
    register:UseFormRegisterReturn
}

const FormControl:FC<FormControlProps & HTMLProps<HTMLInputElement>>=({children,placeholder,register,...props})=> {

    return ( 
        <label className={styles.FormControl}>
            {children}
            <input {...props} {...register}></input>
        </label>
     );
}

export default FormControl;