import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import listOne from '../DoublyLinked/script/doubly-linked-list';

class App extends Component {
  render() {
    console.log(listOne);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>

        </div>
      </div>
    );
  }
}

export default App;
