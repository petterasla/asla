import React from "react";
import './Navbar.css'
import Nav from 'react-bootstrap/Nav';

const Navbar = () => {
    return (
        <Nav defaultActiveKey="/" className="flex-column align-items-end sidebar">
            <Nav.Link href="/ai-projects">AI Prosjekter</Nav.Link>
            <Nav.Link href="/" >Bakgrunn</Nav.Link>
            <Nav.Link href="contact">Kontakt</Nav.Link>
        </Nav>
    );

}
export default Navbar