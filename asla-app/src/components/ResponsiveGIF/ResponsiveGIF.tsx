import React from "react";
import './ResponsiveGIF.css'

interface ResponsiveGifProps {
    src: string;
    header: string;
}

const ResponsiveGIF: React.FC<ResponsiveGifProps> = ({ src, header }) => {
    return (
        <div>
            <div className="gif-caption">{header}</div>
            <div className="gif-container">
                <img
                    src={src}
                    alt="Animated gif"
                    className="responsive-gif"
                />
            </div>
        </div>
    );
};

export default ResponsiveGIF;
