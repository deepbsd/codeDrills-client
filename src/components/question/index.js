import React from 'react';
import {connect} from 'react-redux';
import {checkQuestion} from '../../actions';
import {updateCurrent} from '../../actions';

import Answer from './answer';


// import {startQuiz} from '../actions';



import './question.css';

export class Question extends React.Component {

  constructor(props){
    super(props);
    this.startQuiz = this.startQuiz.bind(this);
    this.selectAnswer = this.selectAnswer.bind(this);
    this.updateCurrent = this.updateCurrent.bind(this);

    this.state = {
      answeredQuestions: [],
      currentQuiz: {
        correct: [],
        incorrect: [],
        js: [],
        js_right: [],
        html: [],
        html_right: [],
        css: [],
        css_right: [],
        node: [],
        node_right: [],
        api: [],
        api_right: [],
        mongo: [],
        mongo_right: []
      },
      quizItems: this.startQuiz(this.props.questions)
    }
  }

  updateCurrent(){

    console.log('I see this many questions have been answered: ', this.state.answeredQuestions.length);

      let categ, categ_right;
      this.state.answeredQuestions.map((q_number, index) => {
        categ = this.props.questions[q_number-1].category;
        categ_right = categ+'_right';

        this.state.currentQuiz.correct = this.props.correctQuestions;
        this.state.currentQuiz.incorrect = this.props.missedQuestions;

        if (!this.state.currentQuiz[categ].includes(q_number)) {
          this.state.currentQuiz[categ].push(q_number);
        }
        if ((this.props.correctQuestions.includes(q_number))&&(!this.state.currentQuiz[categ_right].includes(q_number))){
          this.state.currentQuiz[categ_right].push(q_number);
          console.log('Local StateObj: ',this.state.currentQuiz );
        }
      })
    // dispatch statement for updateCurrent() will go here...
    // this.props.dispatch(updateCurrent(this.state.currentQuiz));
  }

  selectAnswer(questionNumber, correct, selected){
    console.log('from selectAnswer() -- ',this.state.answeredQuestions);
    if (this.state.answeredQuestions.includes(questionNumber.number)){
      alert("You already answered this question!");
    } else {
      // this.setState({
      //   answeredQuestions: [...this.state.answeredQuestions, questionNumber.number]
      // })
      this.state.answeredQuestions.push(questionNumber.number);
      this.props.dispatch(checkQuestion(questionNumber, correct, selected));
      if (this.state.answeredQuestions.length > 9){
         this.updateCurrent();
         this.props.dispatch(updateCurrent(this.state.currentQuiz));
         console.log('Updating Current Data, Yo!');
         console.log('Object: ',this.props.currentQuiz);
       }
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
               selectAnswer={this.selectAnswer}  updateCurrent={this.updateCurrent}
               key={index2} {...answer} />
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
                  <p>Missed: {this.props.missedQuestions.join(', ')}</p>
                  <p>Correct: {this.props.correctQuestions.join(', ')}</p>
                </div>
                  <p>Cool Object: {JSON.stringify(this.props.currentQuiz)}</p>
              </div>
      );

  }
}


const mapStateToProps = state => ({
    questions: state.questions,
    missedQuestions: state.missedQuestions,
    correctQuestions: state.correctQuestions,
    currentQuiz: state.currentQuiz

});

export default connect(mapStateToProps)(Question);
