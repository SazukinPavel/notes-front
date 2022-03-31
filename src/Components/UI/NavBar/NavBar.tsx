import { useTypedSelector } from "../../../hooks/useTypedSelector";
import AuthSection from "./AuthSection";
import BaseSection from "./BaseSection";
import NoAuthSection from "./NoAuthSection";
import './NavBar.scss'

function NavBar() {

    const isAuth=useTypedSelector((state)=>state.auth.isAuth)

    return ( <nav className='NavBar'>
        <BaseSection/>
        {isAuth?<AuthSection/>:<NoAuthSection/>}
    </nav> );
}

export default NavBar;