import React from 'react';
import {connect} from 'react-redux';
import {checkQuestion} from '../../actions'

import Answer from './answer';


// import {startQuiz} from '../actions';



import './question.css';

export class Question extends React.Component {

  constructor(props){
    super(props);
    this.startQuiz = this.startQuiz.bind(this);
    this.selectAnswer = this.selectAnswer.bind(this);

    this.state = {
      answeredQuestions: [],
      quizItems: this.startQuiz(this.props.questions)
    }
  }


  selectAnswer(questionNumber, correct, selected){
    if (this.state.answeredQuestions.includes(questionNumber)){
      alert("You already answered this question!");
    } else {
      this.state.answeredQuestions.push(questionNumber);
      this.props.dispatch(checkQuestion(questionNumber, correct, selected));
    }
  }

  startQuiz(testquestions){

    function getQuestions(arr) {
    	let newquestions = []
      let length = arr.length;
    	for (var i = 1; i <= 10; i++){
    		let randnum = Math.round(Math.random()*length);
    		//console.log('Randnum is ',randnum)
    		if (newquestions.includes(randnum)) {
    			console.log('Repeating!  Number: ',randnum,' already in ',newquestions)
    			return getQuestions(arr);
    		} else {
    			newquestions.push(randnum);
    		}
    	}
    	return newquestions;
    }

    let randnums = getQuestions(testquestions);

    let tenQuestions = [];

    randnums.forEach(function(num){
      console.log('Number: ',num);
      if (testquestions[num]){
        tenQuestions.push(testquestions[num]);
      } else if (num === testquestions.length){
        tenQuestions.push(testquestions[testquestions.length-1]);
      } else {
        console.log('Major Boo Boo!  ',num);
      }

    })

    return tenQuestions;
  }



    render() {

      console.log(this.state.quizItems, 'Type is: ', typeof this.state.quizItems);
      const questions = this.state.quizItems.map((question, index1) => {
        let answers = question.answers.map((answer, index2) => {
            return (
              <Answer assetUrl={question.assetUrl} type={question.type}
              questionNumber={question.number}  category={question.category}
               selectAnswer={this.selectAnswer}  key={index2} {...answer} />
            )
          });

        return (
              <ul className="question">
                <li><span class="questionText" key={index1}>{index1+1}. {question.question}</span></li>
                {question.type === 'videoSnippet' ?
                  <iframe width="560" height="315" src={question.assetUrl}
                    title="videoSnippet" frameborder="0" allowfullscreen>
                  </iframe> : question.type === 'image' ?
                  <img src={question.assetUrl} alt="alt text" /> : null }
                {answers}
              </ul>
        )
    });

      return (
              <div class="questionWrap">
                {questions}
                <div>
                <p>Missed:{this.props.missedQuestions}</p>
                <p>Correct:{this.props.correctQuestions}</p>
                </div>
              </div>
      );

  }
}


const mapStateToProps = state => ({
    questions: state.questions,
    missedQuestions: state.missedQuestions,
    correctQuestions: state.correctQuestions

});

export default connect(mapStateToProps)(Question);
