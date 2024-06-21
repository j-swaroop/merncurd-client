import { useContext } from "react";
import { NavBar, NavItem, DarkModeBtn, NavList} from "./styledComponents";
import ThemeContext from "../../context/ThemeContext";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const {isDarkMode, changeDarkMode} = useContext(ThemeContext)

    return(
        <NavBar isdarkmode={isDarkMode}>
            <NavList>
                <Link to='/' style={{textDecoration: 'none'}}>
                    <NavItem isdarkmode={isDarkMode}> Home </NavItem>
                </Link>
                <Link to='/tabs' style={{textDecoration: 'none'}}>
                    <NavItem isdarkmode={isDarkMode}> Tabs </NavItem>
                </Link>
                <DarkModeBtn isdarkmode={isDarkMode} onClick={changeDarkMode}> {isDarkMode? 'Light Mode': 'Dark Mode'} </DarkModeBtn>
            </NavList>
            
        </NavBar>
    )
}

export default Header