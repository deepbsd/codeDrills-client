import React from 'react';
import {connect} from 'react-redux';
import {checkQuestion, updateCurrent, fetchQuestions, fetchMockUserData} from '../../actions';
import {RawData} from './../rawdata';


import Answer from './answer';

import question5 from './img/question5.png';
import question9 from './img/question9.png';
import question16 from './img/question16.png';
import question20 from './img/question20.png';


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
      // quizItems: this.startQuiz(this.props.questions)
    }
  }

  componentDidMount() {
      // console.log('starting api call IN QUESTIONS COMPONENT...');
      // this.props.dispatch(fetchMockUserData());
      // this.props.dispatch(fetchQuestions());
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


  // startQuiz(testquestions){
  //
  //   function getQuestions(arr) {
  //   	let newquestions = []
  //     // let length = arr.length-1;
  //     let length = arr.length;
  //   	for (var i = 1; i <= 10; i++){
  //   		// let randnum = Math.round(Math.random()*length);
  //   		let randnum = Math.round(Math.random()*length);
  //   		// if (newquestions.includes(randnum)) {
  //   		// 	console.log('Repeating!  Number: ',randnum,' already in ',newquestions)
  //   		// 	return getQuestions(arr);
  //   		// } else {
  //   		// 	newquestions.push(randnum);
  //   		// }
  //       newquestions.push(randnum);  // for debugging purposes, allow duplicates at this point...
  //   	}
  //   	return newquestions;
  //   }
  //
  //   let randnums = getQuestions(testquestions);
  //
  //   let tenQuestions = [];
  //
  //   randnums.forEach(function(num){
  //     // console.log('Number: ',num, ' question: ', testquestions[num].number);
  //     console.log('Number: ',num, ' question: ', testquestions[num]);
  //     if (testquestions[num]){
  //       tenQuestions.push(testquestions[num]);
  //     } else {
  //       console.log('Major Boo Boo!  ',num);
  //     }
  //
  //   })
  //
  //   return tenQuestions;
  // }



    render() {

      console.log('NOW RENDERING: ',this.props.questions);
      //Here you will call the startQuiz function, this function will return an array of 10 random questions
      // You will pass into that function the questions that came from the props, the 40 that you had fetched




      // the line below is messing up the store
      const randQuestions = this.startQuiz(this.props.questions);
      // comment in the line below and comment out the line above to verify
      // const randQuestions = this.startQuiz({"id":"5a6b407ad1bd382e67366c68","number":1,"category":"html","assetUrl":null,"type":"multipleChoice","answers":[{"answerText":"To have the CSS ready so the page can render properly yet not try to execute the JS until the page elements have fully rendered","chosen":false,"correct":true},{"answerText":"blah","chosen":false},{"answerText":"blah","chosen":false},{"answerText":"blah","chosen":false},{"answerText":"blah","chosen":false}]},{"id":"5a6b407ad1bd382e67366c69","number":4,"category":"css","assetUrl":null,"type":"multipleChoice","answers":[{"answerText":"Use IDs to target one element, styles to target many elements","chosen":false,"correct":true},{"answerText":"blah","chosen":false},{"answerText":"blah","chosen":false},{"answerText":"blah","chosen":false},{"answerText":"blah","chosen":false}]});



      const questions = randQuestions.map((question, index1) => {
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
                <p>
                whatever:
                {/*JSON.stringify(this.state.quizItems) you don't need quizItems
                anymore because you have already the questions coming from your
                props -> this.props.questions */}
                {JSON.stringify(randQuestions)}
                </p>
                {/*
                  because this is its own component, you will need to tweak it some that it works properly – right now it does not render properly although React recognizes it.
                <RawData />
                */}
              </div>
      );

  }
}


const mapStateToProps = state => {
  return ({
      questions: state.questions,
      missedQuestions: state.missedQuestions,
      correctQuestions: state.correctQuestions,
      currentQuiz: state.currentQuiz,
      currentUser: state.currentUser,
      //currentUser2: state.currentUser.userData
  });
}

export default connect(mapStateToProps)(Question);


// <p>{JSON.stringify(this.props.currentUser)}</p>
