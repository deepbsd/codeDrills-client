import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchQuestions, fetchMockUserData} from './actions';

import './App.css';

import Main from './components/main';

import Header from './components/header';

import Footer from './components/footer';

class App extends Component {
  constructor(props){
    super(props);
  }
  
  componentDidMount() {
      console.log('starting api call IN QUESTIONS COMPONENT...');
      this.props.dispatch(fetchMockUserData());
      this.props.dispatch(fetchQuestions());
  }

  render() {
    return (
      <div className="App">

        <Header className="header" />

        <Main />

        <Footer />
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.questions
});

export default connect(mapStateToProps)(App);
