import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './TopCanvas.css';
import {Button} from "react-bootstrap";
import Navbar from '../Navbar/Navbar';
import Logo from "../Logo/Logo";

function TopCanvas() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className="menu-button" onClick={handleShow}>
                | | |
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement="top" className="top-canvas">
                <Offcanvas.Header closeButton>
                    <div className="logo-navbar">
                        <Logo />
                    </div>
                </Offcanvas.Header>
                <Offcanvas.Body className="right-navbar">
                    <Navbar />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default TopCanvas;