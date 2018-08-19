import React from 'react';

import Style from './style';


export default class Answer extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      selected: 99
    }
  }
  handleClick(index) {
    if(!index) {
      let _index = index.toString();
      this.setState((prevState, props) => ({
        [_index]: 'selected',
        selected: index
      }));
    }
  //handleClick(index) {
  //  let _index = index.toString();
  //  this.setState((prevState, props) => ({
  //    [_index]: 'selected',
  //    selected: index
  //  }));
    const answerObj = {
      number: this.props.questionNumber,
      category: this.props.category,
      text: this.props.answerText,
      correct: this.props.correct,
      selected: this.props.chosen
    }

    if(answerObj.text){
      this.props.selectAnswer(answerObj, answerObj.correct);
    } else {
      alert("here's an empty value")
    }

  }

render() {

  return (
        <Style.answerLi className={(this.props.skey === this.state.selected) ? 'selected' : ''} onClick={(index) => this.handleClick(this.props.skey)}>
          {this.props.answerText}
        </Style.answerLi>
    )
  }

}
