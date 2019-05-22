import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChatFrame from './chatframe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
          <p>Exercise 2 - All Together</p>
      </header>
      <main className = 'App-main'>
          <ChatFrame />
      </main>
    </div>
  );
}

export default App;
