import classNames from "classnames";
import {ButtonHTMLAttributes, FC } from "react";
import styles from './Button.module.scss'

interface ButtonProps{
    styleType:'sucess' | 'warn' | 'primary'
}

const Button:FC<ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps>=({children,styleType='primary',...props})=> {
    const classes=classNames({[styles.Button]:true,[styles[styleType]]:true})
    
    return ( 
        <button className={classes}  {...props}>{children}</button>
     );
}

export default Button;