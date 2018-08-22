import React from 'react';
import {connect} from 'react-redux';
import Style from './style';


export class Answer extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      selected: 99
    }
  }

  handleClick(index) {
    if(!this.props.answeredQuestions.includes(this.props.questionNumber)) {
      let _index = index.toString();
      this.setState( prevState => ({
        [_index]: 'selected',
        selected: index,
      }));
      console.log("answered questions: ", this.props.answeredQuestions)
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

const mapStateToProps = state => {
    const answeredQuestions = state.reducer.missedQuestions.concat(state.reducer.correctQuestions);
    return {
        answeredQuestions: answeredQuestions
    }
}

export default (connect(mapStateToProps)(Answer));
