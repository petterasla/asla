import React from 'react';
import './App.css';
import {HeaderVariableCSS} from "./index";

function App() {
  return (
    <div className="App">
        <div className="App-header">
          <div className="header-row-1">
            <div style={ {"--i": 1} as HeaderVariableCSS } >A</div>
            <div style={ {"--i": 2} as HeaderVariableCSS } >s</div>
            <div style={ {"--i": 3} as HeaderVariableCSS } >l</div>
            <div style={ {"--i": 4} as HeaderVariableCSS } >a</div>
            <div className="invisible-space" >-</div>
          </div>
          <div className="header-row-2">
            <div style={ {"--i": 6} as HeaderVariableCSS } >E</div>
            <div style={ {"--i": 7} as HeaderVariableCSS } >n</div>
            <div style={ {"--i": 8} as HeaderVariableCSS } >g</div>
            <div style={ {"--i": 9} as HeaderVariableCSS } >i</div>
            <div style={ {"--i": 10} as HeaderVariableCSS } >n</div>
            <div style={ {"--i": 11} as HeaderVariableCSS } >e</div>
            <div style={ {"--i": 12} as HeaderVariableCSS } >e</div>
            <div style={ {"--i": 13} as HeaderVariableCSS } >r</div>
            <div style={ {"--i": 14} as HeaderVariableCSS } >i</div>
            <div style={ {"--i": 15} as HeaderVariableCSS } >n</div>
            <div style={ {"--i": 16} as HeaderVariableCSS } >g</div>
            <div className="invisible-space" >-</div>
          </div>
          <div className="header-row-3">
            <div style={ {"--i": 18} as HeaderVariableCSS } >A</div>
            <div style={ {"--i": 19} as HeaderVariableCSS } >S</div>
          </div>
        </div>
    </div>
  );
}

export default App;
