import React from 'react';
import {connect} from 'react-redux';
import {checkQuestion, updateCurrent} from '../../actions';
import requiresLogin from '../profile/requires-login';
import DevData from './../devdata';
import Answer from './answer';

import question5 from './img/question5.png';
import question9 from './img/question9.png';
import question16 from './img/question16.png';
import question20 from './img/question20.png';


// import {startQuiz} from '../actions';



// import './question.css';
import Style from './style.js';

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
      images: {
        "question5": question5,
        "question9": question9,
        "question16": question16,
        "question20": question20
      }
    }
  }


  shouldComponentUpdate() {
      return this.state.answeredQuestions.length === 0 || this.state.answeredQuestions.length>=100;
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
        // else return a default value of false
        // return false;
    })
  }

  selectAnswer(questionNumber, correct){
    if (this.state.answeredQuestions.includes(questionNumber.number)){
      alert("You already answered this question!");
    } else {
      this.state.answeredQuestions.push(questionNumber.number);
      this.props.dispatch(checkQuestion(questionNumber, correct));
      if (this.state.answeredQuestions.length > 9){
        console.log('**Updating Current Data, Yo!');
        console.log('**Global Object: ',this.props.currentQuiz);
        this.props.dispatch(updateCurrent(this.state.currentQuiz));
       }
    }
    console.log('After updateCurrentIf: ', this.props.currentQuiz);
    console.log('from selectAnswer() -- ',this.state.answeredQuestions);
  }

  shuffleArray(array) {
      // I'm using _array just to have an immutable
      // array so we don't affect our first result and we apply
      //the reorder over a brand new one.
      let _array = [...array];
      for (var i = _array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = _array[i];
        _array[i] = _array[j];
        _array[j] = temp;
      }
      return _array;
  }


  startQuiz(allQuestions) {
    // First shuffle the array, following the Fisher-Yates algorithm this
    // one picks one random element for each original array element, and
    // then excluding it from the next draw. Just like randomly picking
    // and ordering from a deck of cards.
    let shuffled = this.shuffleArray(allQuestions);
    //Once you have the shuffled array, slice it as you have thought
    //before because now you're slicing a shuffled array
    return shuffled.slice(0,10);
  }


    render() {

      // console.log('NOW RENDERING: ',this.props);
      //Here you will call the startQuiz function, this function will return an array of 10 random questions
      // You will pass into that function the questions that came from the props, the 40 that you had fetched

      const randQuestions = this.startQuiz(this.props.questions);

      const questions = randQuestions.map((question, index1) => {
        let shuffledAnswers = this.shuffleArray(question.answers);
        let answers = shuffledAnswers.map((answer, index2) => {
            return (
              <Answer assetUrl={question.assetUrl} type={question.type}
              questionNumber={question.number}  category={question.category}
               selectAnswer={this.selectAnswer}  updateCurrent={this.updateCurrent}
               key={index2} {...answer} />
            )
          });

        return (
              <ul key={index1}>
                <Style.question><Style.questionText key={index1}>{index1+1}. {question.question}</Style.questionText></Style.question>
                {question.type === 'videoSnippet' ?
                  <iframe width="560" height="315" src={question.assetUrl}
                    title="videoSnippet" frameBorder="0" allowFullScreen>
                  </iframe> : question.type === 'image' ?
                  // <img src={question.assetUrl} alt="alt text" /> : null }
                  <img src={this.state.images[question.assetUrl]} alt="alt text" /> : null }
                {answers}
              </ul>
        )
    });

      return (
              <div>
                {questions}
                <p>

                {/*JSON.stringify(this.state.quizItems) you don't need quizItems
                anymore because you have already the questions coming from your
                props -> this.props.questions */}
                {/*JSON.stringify(randQuestions)*/}
                </p>

                  <DevData currentQuiz={this.state.currentQuiz}  />
              </div>
      );

  }
}



const mapStateToProps = state => {
  const whatever = state;
  console.log("QUESTIONS StateOBJ: ",whatever);
  return {
    questions: state.reducer.questions,
    missedQuestions: state.reducer.missedQuestions,
    correctQuestions: state.reducer.correctQuestions,
    currentQuiz: state.reducer.currentQuiz,
    currentUser: state.reducer.currentUser
  }
};


// export default connect(mapStateToProps)(Question);

export default requiresLogin()(connect(mapStateToProps)(Question));

// <p>{JSON.stringify(this.props.currentUser)}</p>
