import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Background from './pages/Background/Background';
import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbar/Navbar';

function App() {
    return (
        <div className="App">
            <Navbar />
            <div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/background" element={<Background/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </div>
            <div className="App-header">
                <img src={"asla-engineering-high-resolution-logo-white-transparent.png"} alt={"Company logo"}/>
            </div>
        </div>
    );
}

export default App;
