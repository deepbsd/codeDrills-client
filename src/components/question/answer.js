import React from 'react';

import Style from './style';


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
      // not sure why this works: selectAnswer() expects three parameters...
      this.props.selectAnswer(answerObj, answerObj.correct);
      this.props.updateCurrent(answerObj.number, answerObj.correct);
    } else {
      alert("here's an empty value")
    }

  }

render() {

  return (
          <Style.answerLi onClick={this.handleClick}>
            {this.props.answerText}
          </Style.answerLi>
    )
  }

}
