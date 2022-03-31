import classNames from 'classnames';
import styles from './ErrorMessage.module.scss'

interface ErrorMessageProps{
    message:string | undefined
}

function ErrorMessage({message}:ErrorMessageProps) {

    const classes=classNames({[styles.ErrorMessage]:true,[styles.active]:message})

    return ( 
        <div className={classes}>
            {message && <p>{message}</p>}
        </div>
     );
}

export default ErrorMessage;