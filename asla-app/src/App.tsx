import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Background from './pages/Background/Background';
import Contact from './pages/Contact/Contact';
import Home from "./pages/Home/Home";
import Logo from "./components/Logo/Logo";
import TopCanvas from "./components/TopCanvas/TopCanvas";

function App() {
    return (
        <div className="App">
            <div>
                <div className="top-bar">
                    <Logo />
                    <div className="right-button">
                        <TopCanvas />
                    </div>
                </div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/background" element={<Background/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
