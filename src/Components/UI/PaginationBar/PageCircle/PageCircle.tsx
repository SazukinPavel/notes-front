import styles from './PageCircle.module.scss'

interface PageCircleProps{
    onClick:(num:number)=>void
    number:number
}

function PageCircle({number,onClick}:PageCircleProps) {
    return ( 
        <span className={styles.PageCircle} onClick={()=>onClick(number)}>
            {number+1}
        </span>
     );
}

export default PageCircle;