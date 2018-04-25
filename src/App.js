import React, { Component } from 'react';
import logo from './general.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header col-sm-6">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
