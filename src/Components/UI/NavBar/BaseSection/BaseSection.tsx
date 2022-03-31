import { NavLink } from "react-router-dom";
import styles from './BaseSection.module.scss'

function BaseSection() {
    return ( 
        <div className={styles.BaseSection}>
            <NavLink to='/notes'>Notes</NavLink>
            <NavLink to='/tags'>Tags</NavLink>
        </div>
     );
}

export default BaseSection;