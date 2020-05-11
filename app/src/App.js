import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>
         Example of offline PWA app.
        </p>
        <a
          className="App-link"
          href="https://brainit.agency"
          target="_blank"
          rel="noopener noreferrer"
        >
          Company website
        </a>
      </header>
    </div>
  );
}

export default App;
