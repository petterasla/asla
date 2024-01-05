import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook} from "@fortawesome/free-brands-svg-icons";
import './contact.css'

const Contact = () => {
    return <div className="contact">
            <div className="contact-card">
                <img src={"Petter.png"} alt="Petter" />
                <p className="name">Petter F. Asla</p>
                <p className="title">Daglig leder</p>
                <p className="title-company">Asla Engineering AS</p>
                <p className="email">jobb.petter.asla@gmail.com </p>
                <p className="phone">913 75 468</p>
                <div className={"contact-logo"} >
                    <a href="#"><i className="fa fa-dribbble"></i></a>
                    {/*<a href=""><i className="fa fa-twitter"></i></a>*/}
                    <a href="https://www.linkedin.com/in/petter-fagerlund-asla-77970359/"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://www.facebook.com/petter.asla"><FontAwesomeIcon icon={faFacebook} /></a>
                </div>
            </div>
    </div>
}

export default Contact