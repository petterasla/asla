import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Background from './pages/Background/Background';
import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Home from "./pages/Home/Home";

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
        </div>
    );
}

export default App;
