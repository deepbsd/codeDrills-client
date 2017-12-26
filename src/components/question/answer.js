import React from 'react';

import './question.css';


export default class Answer extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault();
    const text = this.props.answerText;
    const correct = this.props.correct;
    const selected = !this.props.chosen;
    if(text){
      console.log('Is this correct? ', correct);
      this.props.selectAnswer(text, correct, selected);
    } else {
      alert("here's an empty value")
    }

  }

render() {

  return (
          <li onClick={this.handleClick}>
            {this.props.answerText}
          </li>
    )
  }

}
