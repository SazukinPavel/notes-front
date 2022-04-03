import { useMemo } from "react";
import PageCircle from "./PageCircle";
import styles from './PaginationBar.module.scss'

export interface PaginationBarProps{
    page:number
    all:number
    take:number
    setPage:(num:number)=>void
}

function PaginationBar({page,setPage,all,take}:PaginationBarProps) {

    const mas=useMemo<number[]>(()=>{
        return new Array(Math.ceil(all/take)).fill(0).map((i,ind)=>ind)
    },[page,all])

    return ( <div className={styles.PaginationBar}>
        {
            mas.map((ind)=><PageCircle number={ind} onClick={setPage}/>)
        }
    </div> );
}

export default PaginationBar;