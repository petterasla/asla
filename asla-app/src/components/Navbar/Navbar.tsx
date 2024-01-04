import React from "react";
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return <div className="navBar">
        <Link to="/">Hjem</Link>
        <div className="separator">|</div>
        <Link to="/background">Bakgrunn</Link>
        <div className="separator">|</div>
        <Link to="/contact">Kontakt</Link>
    </div>

}
export default Navbar