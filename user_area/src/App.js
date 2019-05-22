import React from 'react';
import logo from './logo.svg';
import UserArea from './userarea';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
        <p>Exercise 1 - All Together</p>
      </header>
      <main>
        <h2 style = {{textAlign:'center',color:'grey'}}>User Game List</h2>
        <br />
        <UserArea />
      </main>
    </div>
  );
}

export default App;
