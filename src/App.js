import React, { Component } from 'react';

import './App.css';

import Main from './components/main';

import Header from './components/header';

class App extends Component {

  render() {
    return (
      <div className="App">
        
        <header className="App-header">

          <Header className="header"/>          
        
        </header>
        
        <Main />
      
      </div>
    );
  }
}

export default App;
