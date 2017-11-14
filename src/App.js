import React, { Component } from 'react';

import './App.css';

import Landing from './components/landing';

import Header from './components/header';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header className="header"/>          
        </header>
        <Landing />
      </div>
    );
  }
}

export default App;
