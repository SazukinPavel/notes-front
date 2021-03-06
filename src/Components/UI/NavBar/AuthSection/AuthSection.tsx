import { NavLink } from "react-router-dom";
import styles from './AuthSection.module.scss'

function AuthSection() {
    return ( 
        <div className={styles.AuthSection}>
            <NavLink to='/notes'>My notes</NavLink>
            <NavLink to='/logout'>Logout</NavLink>
        </div>
     );
}

export default AuthSection;