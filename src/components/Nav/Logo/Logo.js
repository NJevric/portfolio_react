import React from "react";
import './Logo.css';
import logo from '../../../assets/images/logo-n2.png';

const Logo = () => {
    return(
        <div className="logo">
            <a href=""><img src={logo} alt="Nikola Jevric"/></a>
        </div>
    );
}
export default Logo;