import { FC, MouseEventHandler, useRef } from "react";
import styles from './ModalMessage.module.scss'

interface ModalMessageProps{
    onClose:()=>void
}

const ModalMessage:FC<ModalMessageProps>=({children,onClose})=> {

    const modalRef=useRef<HTMLDivElement>(null)

    const onCloseModal:MouseEventHandler=(e)=>{
        if(e.target===e.currentTarget){
            onClose()
        }
    }

    return ( 
        <div onClick={onCloseModal} className={styles.ModalMessage}>
            <div ref={modalRef} className={styles.ModalWindow}>
                <span onClick={onClose} className={styles.Close}>X</span>
                {children}
            </div>
        </div>
     );
}

export default ModalMessage;