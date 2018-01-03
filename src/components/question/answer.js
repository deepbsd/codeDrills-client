import React from 'react';

import './question.css';


export default class Answer extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault();
    const answerObj = {
      number: this.props.questionNumber,
      category: this.props.category,
      text: this.props.answerText,
      correct: this.props.correct,
      selected: this.props.chosen
    }

    if(answerObj.text){
      //console.log('Is this correct? ', answerObj.correct);
      this.props.selectAnswer(answerObj);
      this.props.updateCurrent(answerObj.number,answerObj.correct);
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
