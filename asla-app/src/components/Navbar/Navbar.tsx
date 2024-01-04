import React from "react";
import {NavLink} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return <div className="navBar">
        <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>
            Hjem
        </NavLink>
        <div className="separator">|</div>
        <NavLink to="/background" className={({isActive}) => isActive ? "active" : ""}>
            Bakgrunn
        </NavLink>
        <div className="separator">|</div>
        <NavLink to="/contact"className={({isActive}) => isActive ? "active" : ""}>
            Kontakt
        </NavLink>
    </div>

}
export default Navbar