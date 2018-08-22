import React from 'react';
import Style from './style';


export default class Answer extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      answeredQuestions: [],
      selected: 99
    }
  }

  handleClick(index) {
    if(!this.state.answeredQuestions.includes(this.props.questionNumber)) {
      let _index = index.toString();
      this.setState( prevState => ({
        [_index]: 'selected',
        selected: index,
        answeredQuestions: [...prevState.answeredQuestions, this.props.questionNumber]
      }));
      //this.state.answeredQuestions.push(this.props.questionNumber);
      console.log("local questions: ", this.state.answeredQuestions)
      console.log(" questions number: ", this.props.questionNumber)
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

