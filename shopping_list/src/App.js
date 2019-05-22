import React from 'react';
import logo from './logo.svg';
import ShoppingList from './shoppingList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
        <p>Exercise 2 - Controlled Components</p>
      </header>
      <main>
        <ShoppingList />
      </main>
    </div>
  );
}

export default App;
