import React from "react";
import {NavLink} from 'react-router-dom'
import './Navbar.css'
import Logo from "../Logo/Logo";

const Navbar = () => {
    return (
    <div>
        <div>
            <Logo />
        </div>
        <div className="navBar">
            <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>
                AI Prosjekter
            </NavLink>
            <div className="separator">|</div>
            <NavLink to="/background" className={({isActive}) => isActive ? "active" : ""}>
                Bakgrunn
            </NavLink>
            <div className="separator">|</div>
            <NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""}>
                Kontakt
            </NavLink>
        </div>
    </div>
    );

}
export default Navbar