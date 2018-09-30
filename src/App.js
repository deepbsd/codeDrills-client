import React, { Component } from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchQuestions} from './actions';

import './App.css';

import Main from './components/main';

import Header from './components/header';

import Footer from './components/footer';


class App extends Component {


  componentDidMount() {
      console.log('starting api call ');
      this.props.dispatch(fetchQuestions());
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="flex-content">
            <Header className="header" data-test="component-header" />
            <Main />
          </div>
          <Footer data-test="component-footer" />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  // questions: state.questions
});

export default connect(mapStateToProps)(App);
