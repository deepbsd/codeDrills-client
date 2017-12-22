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
    if(text){
      this.props.selectAnswer(text);
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
