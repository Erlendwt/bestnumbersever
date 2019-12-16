import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  function setSmallHead(x) {
    document.getElementById("head").setAttribute("rx",250*x)
    document.getElementById("head").setAttribute("cx",250*x)
    document.getElementById("head").setAttribute("ry",250*x)
    document.getElementById("head").setAttribute("cy",250*x)
}
  function setSmall() {
    document.getElementById('1').setAttribute("ry", 40.5);
  }
  function setBigMouth() {
    document.getElementById('1').setAttribute("ry", 50);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <svg width="488" height="468" viewBox="0 0 488 468" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.9">
            <ellipse opacity="0.34" cx="244" cy="234" rx="244" ry="234" fill="#F91E1E" />
            <ellipse id="1" cx="245" cy="340.5" rx="88" ry="40.5" fill="white" />
            <ellipse id="2" cx="262" cy="241.5" rx="30" ry="25.5" fill="white" />
            <ellipse id="3" cx="175" cy="241.5" rx="31" ry="25.5" fill="#FCFFFC" />
          </g>
        </svg>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
