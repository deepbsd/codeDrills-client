import React from 'react';
import {connect} from 'react-redux';
import update from 'immutability-helper';
import {checkQuestion, updateCurrent, updateUserDataDb} from '../../actions';
import requiresLogin from '../profile/requires-login';
//import DevData from './../devdata';
import Answer from './answer';
import {Redirect} from 'react-router-dom';
//import {API_BASE_URL} from '../../config';

import question5 from './img/question5.png';
import question9 from './img/question9.png';
import question16 from './img/question16.png';
import question20 from './img/question20.png';

import './question.css';


import Style from './style.js';

//function addAnswerCount(state, props) {
//  return {
//    answeredQuestions: state.answeredQuestions
//  }
//}

export class Question extends React.Component {

  constructor(props){
    super(props);
    this.startQuiz = this.startQuiz.bind(this);
    this.selectAnswer = this.selectAnswer.bind(this);
    this.updateRemote = this.updateRemote.bind(this);

    this.state = {
      userObj: this.props.user,
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
      },
      user: this.props.user
    }
  }

  //componentDidMount(){
  //  const userObject = this.props.user;
  //}

  shouldComponentUpdate() {
    if(this.props.questions.length < 1 || this.state.answeredQuestions.length >= 10) {
      return true;
    } else {
      return false;
      //console.error('An error occurred when the Question component tried to update.')
    }
  }


  isQuizComplete = (quizLength) => {
    if(quizLength > 9) {
      //console.log('------------\n**COMPLETE**\n------------\nThe current local state object looks like this:\n', this.state);
      this.props.dispatch(updateCurrent(this.state.currentQuiz));

      setTimeout(() => {
        this.updateRemote();
      },500)
    }
  }

  selectAnswer(answerObj, correct){

    if (this.state.answeredQuestions.includes(answerObj.number)){
      alert("You already answered this question!");
    } else {

    this.setState(prevState => ({
      answeredQuestions: [...prevState.answeredQuestions, answerObj.number]
    }));

      this.props.dispatch(checkQuestion(answerObj, correct));


      let categ, categ_right;
      categ = answerObj.category;
      categ_right = answerObj.category+'_right';

      // Handle the categories for questions
      if (correct) {
        let _currentQuiz = {...this.state.currentQuiz};
        _currentQuiz.correct = update(this.state.currentQuiz.correct, {$push: [answerObj.number]});
        _currentQuiz[categ] = update(this.state.currentQuiz[categ], {$push: [answerObj.number]});
        _currentQuiz[categ_right] = update(this.state.currentQuiz[categ_right], {$push: [answerObj.number]});
        this.setState((prevState, props) => ({
          currentQuiz: _currentQuiz
        }), () => {
          this.isQuizComplete(this.state.answeredQuestions.length);
        });
      } else {
        let _currentQuiz = {...this.state.currentQuiz};
        _currentQuiz.incorrect = update(this.state.currentQuiz.incorrect, {$push: [answerObj.number]});
        _currentQuiz[categ] = update(this.state.currentQuiz[categ], {$push: [answerObj.number]});
        this.setState((prevState, props) => ({
          currentQuiz: _currentQuiz
        }), () => {
          this.isQuizComplete(this.state.answeredQuestions.length);
        });
      }
    }
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
    //console.log("STARTQUIZ: authorized-user: ", this.props.user);


    //Once you have the shuffled array, slice it as you have thought
    //before because now you're slicing a shuffled array
    return shuffled.slice(0,10);
  }

  // If Profile has not been called prior to start quiz, historical quiz data
  // will *not* get updated.  Historical data will get *overwritten* with last
  // quiz data.  Therefore, upon completion of this quiz, after updating the DB,
  // this function will call the Profile component again, which will refresh the
  // user's historical data, which has just been updated with the last quiz data.

  updateRemote(){
    const id = this.props.id;
    const user = this.props.user;
    //const username = this.props.user.username;
    const userData = this.props.currentUser.userData;
    const lastQuizData = this.props.currentUser.lastQuizData;
    const updateObj = {
      id: id,
      user: user,
      userData: userData,
      lastQuizData: lastQuizData
    }


    //console.log("### QUESTIONS--updateRemote() with Object: ", updateObj);
    this.props.dispatch(updateUserDataDb(updateObj));
    //console.log("****Redirect???", this.props.redirect);


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
               skey={index2} key={index2} {...answer} />
            )
          });

        if (this.props.redirect){
          return <Redirect key={index1} to="/Profile" />;
        } else {
          return (
                <ul key={index1}>
                  <Style.question><Style.questionText key={index1}>{index1+1}. {question.question}</Style.questionText></Style.question>
                  {question.type === 'videoSnippet' ?
                    <iframe width="100%" height="100%" src={question.assetUrl}
                      title="videoSnippet" frameBorder="0" allowFullScreen>
                    </iframe> : question.type === 'image' ?
                    <img src={this.state.images[question.assetUrl]} alt="alt text" /> : null }
                  {answers}
                </ul>
          )
      }
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



				{/*
                  <DevData currentQuiz={this.state.currentQuiz} answeredQuestions={this.state.answeredQuestions}  />
 */}
           </div>
      );

  }
}



const mapStateToProps = state => {
  //const whatever = state;
  const authorizedUser = state.auth.currentUser;
  //console.log("QUESTIONS Global StateOBJ: ",whatever);
  return {
    redirect: state.reducer.userDataDbUpdated,
    id: state.reducer.id,
    questions: state.reducer.questions,
    missedQuestions: state.reducer.missedQuestions,
    correctQuestions: state.reducer.correctQuestions,
    currentQuiz: state.reducer.currentQuiz,
    currentUser: state.reducer.currentUser,
    user: {"username": `${authorizedUser.username}`, "firstName": `${authorizedUser.firstName}`, "lastName": `${authorizedUser.lastName}`}
  }
};


// export default connect(mapStateToProps)(Question);

export default requiresLogin()(connect(mapStateToProps)(Question));
