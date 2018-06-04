import React, { Component } from 'react';
//import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {BrowserRouter as Router } from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchQuestions} from './actions';

import './App.css';

import Main from './components/main';

import Header from './components/header';

import Footer from './components/footer';


class App extends Component {

  // constructor(props){
  //   super(props);
  // }

  componentDidMount() {
      console.log('starting api call ');
      this.props.dispatch(fetchQuestions());
      // this.props.dispatch(fetchUserData("deepbsd"));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="flex-content">
            <Header className="header" />
            <Main />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  // questions: state.questions
});

export default connect(mapStateToProps)(App);
