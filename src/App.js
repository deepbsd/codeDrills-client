import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Landing from './components/landing';

import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header className="header"/>
          <img src={logo} className="App-logo" alt="logo" />
          
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Landing />
      </div>
    );
  }
}

export default App;
