import React from 'react';
import {connect} from 'react-redux';
import {checkQuestion, updateCurrent, addCurrentUserToState} from '../../actions';
import requiresLogin from '../profile/requires-login';
import DevData from './../devdata';
import Answer from './answer';
import {Redirect} from 'react-router-dom';
import {API_BASE_URL} from '../../config';

// import update from 'immutability-helper';


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

  componentDidMount(){
    // this.props.dispatch(addCurrentUserToState(this.state.userObj));
    const userObject = this.props.user;
    // this.props.dispatch(addCurrentUserToState(userObject));
    // console.log("Adding authorized-user to Global State Object...");
  }


  shouldComponentUpdate() {
      return this.state.answeredQuestions.length === 0 || this.state.answeredQuestions.length>=100;
  }

  // This updateCurrent() is for the local state object.
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
        // if ((this.props.correctQuestions.includes(q_number))&&(!this.state.currentQuiz[categ_right].includes(q_number))){
        if ((this.state.currentQuiz.correct.includes(q_number))&&(!this.state.currentQuiz[categ_right].includes(q_number))){
          this.state.currentQuiz[categ_right].push(q_number);
        }
        // else return a default value of false
        // return false;
    })
    console.log("###LOCAL STATE: ",this.state.currentQuiz)
  }

  selectAnswer(questionNumber, correct){
    // This method updates the local state object with current question results.
    if (this.state.answeredQuestions.includes(questionNumber.number)){
      alert("You already answered this question!");
    } else {
      // It's a new question for this go round, so add it to list
      // of answered questions and then see if it's answered correctly.
      this.state.answeredQuestions.push(questionNumber.number);
      this.props.dispatch(checkQuestion(questionNumber, correct));
      // If we've answered 10 questions, then update Global State Object
      if (this.state.answeredQuestions.length > 9){
        console.log('**Updating Global Current Data, Yo!');
        console.log('**Global Object: ',this.props.currentQuiz);
        // Dispatching GLOBAL Method here...
        this.props.dispatch(updateCurrent(this.state.currentQuiz));
        // console.log("## Global State After dispatching updateCurrent from Questions: ", this.props.currentUser);
        // Now we need to update the remote DB with the updated global state object...
        // Also, need to promisify this action here...
        // this.props.dispatch(updateCurrentDb(this.props.currentUser));
        const that = this;
        setTimeout(function(){
          Question.prototype.updateRemote.apply(that);
        }, 2000)

       }
    }
    console.log('QUESTION: --selectAnswer global currentUser Obj', this.props.currentUser);
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
    console.log("STARTQUIZ: authorized-user: ", this.props.user);


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
    const username = this.props.user.username;
    const userData = this.props.currentUser.userData;
    const lastQuizData = this.props.currentUser.lastQuizData;
    const updateObj = {
      id: id,
      user: user,
      userData: userData,
      lastQuizData: lastQuizData
    }

    console.log("### QUESTIONS--updateRemote() with Object: ", updateObj);
    return fetch(`${API_BASE_URL}/userdata/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      mode: 'cors',
      body: JSON.stringify(updateObj)
    })
    .then(response => response.json())
    .catch(err => {
      console.log("Error! Did NOT update database: ", err);
    })
    // Not sure why this redirect is not working...
    //return <Redirect to="/profile" />
    // return updateObj;
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
  const authorizedUser = state.auth.currentUser;
  console.log("QUESTIONS Global StateOBJ: ",whatever);
  return {
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

// <p>{JSON.stringify(this.props.currentUser)}</p>
