import React from "react";
import './Home.css';
import ResponsiveGIF from "../../components/ResponsiveGIF/ResponsiveGIF";

const Home: React.FC = () => {
    return (
        <div className="top-padding">
            <ResponsiveGIF />
        </div>
    );
};

export default Home