import React from "react";
import './ResponsiveGIF.css'

const ResponsiveGIF: React.FC = () => {
    return (
        <div>
            <div className="gif-caption">AI video (GIF) created with OpenAI Sora</div>
            <div className="gif-container">
                <img
                    src="/sora-ai-programmer.gif"
                    alt="Animated gif"
                    className="responsive-gif"
                />
            </div>
        </div>
    );
};

export default ResponsiveGIF;
