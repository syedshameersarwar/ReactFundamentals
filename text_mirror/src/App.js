import React from 'react';
import logo from './logo.svg';
import Mirror from './mirror';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
        <p>Exercise 1 - Controlled Component</p>
      </header>
      <div>
        <Mirror />
      </div>
    </div>
  );
}

export default App;
