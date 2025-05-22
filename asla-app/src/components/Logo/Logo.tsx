import React from "react";
import './Logo.css';

const Logo: React.FC = () => {
    return (
        <div>
            <img
                src="asla-engineering-high-resolution-logo-white-transparent.png"
                alt="Company logo"
                className="logo-img"
            />
        </div>
    );
};

export default Logo