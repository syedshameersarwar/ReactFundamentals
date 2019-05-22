import React from 'react';
import logo from './logo.svg';
import Game from './Game';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div>
        <Game />
        <Game />
      </div>
    </div>
  );
}

export default App;
