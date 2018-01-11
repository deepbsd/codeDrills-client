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

  updateCurrent(questionNumber, correct){
    console.log('I see this many questions have been answered: ', this.state.answeredQuestions.length);
    // I've been having a hard time getting the last update
    // to show up in the local state object
    if (correct) {
      this.state.currentQuiz.correct.push(questionNumber);
    } else {
      this.state.currentQuiz.incorrect.push(questionNumber);
    }

    let categ, categ_right;
    this.state.answeredQuestions.map((q_number, index) => {
        categ = this.props.questions[q_number-1].category;
        categ_right = categ+'_right';

        // add the question number to the local state object category
        if (!this.state.currentQuiz[categ].includes(q_number)) {
          this.state.currentQuiz[categ].push(q_number);
        }
        // if the question was answered correctly, also add it to categ_right
        if ((this.props.correctQuestions.includes(q_number))&&(!this.state.currentQuiz[categ_right].includes(q_number))){
          this.state.currentQuiz[categ_right].push(q_number);

          console.log('Local StateObj: ',this.state.currentQuiz );
        }
    })
  }

  selectAnswer(questionNumber, correct){
    if (this.state.answeredQuestions.includes(questionNumber.number)){
      alert("You already answered this question!");
    } else {
      // ** this setState() call wasn't working before, but the arr.push() worked great.
      // this.setState({
      //   answeredQuestions: [...this.state.answeredQuestions, questionNumber.number]
      // })
      this.state.answeredQuestions.push(questionNumber.number);
      this.props.dispatch(checkQuestion(questionNumber, correct));
      if (this.state.answeredQuestions.length > 9){
         this.props.dispatch(updateCurrent(this.state.currentQuiz));
         console.log('**Updating Current Data, Yo!');
         console.log('**Global Object: ',this.props.currentQuiz);
       }
    }
    console.log('After updateCurrentIf: ', this.props.currentQuiz);
    console.log('from selectAnswer() -- ',this.state.answeredQuestions);
  }

  startQuiz(testquestions){

    function getQuestions(arr) {
    	let newquestions = []
      let length = arr.length;
    	for (var i = 1; i <= 10; i++){
    		let randnum = Math.round(Math.random()*length);
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
      // } else if (num === testquestions.length){
      //   tenQuestions.push(testquestions[testquestions.length-1]);
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
                  <p>currentUser:
                    missed questions: {JSON.stringify(this.props.currentUser2.missedQuestions)}<br/>
                    number of Quizzes: {JSON.stringify(this.props.currentUser2.numberOfQuizzes)}<br/>
                    totalQuestions: {JSON.stringify(this.props.currentUser2.totalQuestions)}<br/>
                    total Correct: {JSON.stringify(this.props.currentUser2.totalCorrect)}<br/>
                    jsQuestionsAnswered: {JSON.stringify(this.props.currentUser2.jsQuestionsAnswered)}<br/>
                    jsQuestionsCorrect: {JSON.stringify(this.props.currentUser2.jsQuestionsCorrect)}<br/>
                    cssQuestionsAnswered: {JSON.stringify(this.props.currentUser2.cssQuestionsAnswered)}<br/>
                    cssQuestionsCorrect: {JSON.stringify(this.props.currentUser2.cssQuestionsCorrect)}<br/>
                    htmlQuestionsAnswered: {JSON.stringify(this.props.currentUser2.htmlQuestionsAnswered)}<br/>
                    htmlQuestionsCorrect: {JSON.stringify(this.props.currentUser2.htmlQuestionsCorrect)}<br/>
                    nodeQuestionsAnswered: {JSON.stringify(this.props.currentUser2.nodeQuestionsAnswered)}<br/>
                    nodeQuestionsCorrect: {JSON.stringify(this.props.currentUser2.nodeQuestionsCorrect)}<br/>
                    apiQuestionsAnswered: {JSON.stringify(this.props.currentUser2.apiQuestionsAnswered)}<br/>
                    apiQuestionsCorrect: {JSON.stringify(this.props.currentUser2.apiQuestionsCorrect)}<br/>
                    mongoQuestionsAnswered: {JSON.stringify(this.props.currentUser2.mongoQuestionsAnswered)}<br/>
                    mongoQuestionsCorrect: {JSON.stringify(this.props.currentUser2.mongoQuestionsCorrect)}<br/>
                  </p>
              </div>
      );

  }
}


const mapStateToProps = state => ({
    questions: state.questions,
    missedQuestions: state.missedQuestions,
    correctQuestions: state.correctQuestions,
    currentQuiz: state.currentQuiz,
    currentUser: state.currentUser,
    currentUser2: state.currentUser.userData
});

export default connect(mapStateToProps)(Question);


// <p>{JSON.stringify(this.props.currentUser)}</p>
