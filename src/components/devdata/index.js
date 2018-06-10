import React from 'react';
import {connect} from 'react-redux';

class DevData extends React.Component {

  // constructor(props){
  //   super(props);
  // }



  render() {

    return (
            <div>
              <hr />
              <div>
              {/*
                <p>Missed: {this.props.missedQuestions.join(', ')}</p>
                <p>Correct: {this.props.correctQuestions.join(', ')}</p>
                */}
              </div>
              <div>
                <p>TOTAL: {this.props.answeredQuestions.join(', ')}</p>
                <p>Missed: {this.props.missedQuestions.join(', ')}</p>
                <p>Correct: {this.props.correctQuestions.join(', ')}</p>
                <p>current user:   {this.props.currentUser.username}</p>
                <p>type:  {typeof this.props.currentUser.username}</p>
              </div>
                <p>currentQuiz:
                {/*
                  missed questions: {JSON.stringify(this.props.currentUser.missedQuestions)}<br/>
                  number of Quizzes: {JSON.stringify(this.props.currentUser.numberOfQuizzes)}<br/>
                  totalQuestions: {JSON.stringify(this.props.currentUser.totalQuestions)}<br/>
                  total Correct: {JSON.stringify(this.props.currentUser.totalCorrect)}<br/>
                  jsQuestionsAnswered: {JSON.stringify(this.props.currentUser.jsQuestionsAnswered)}<br/>
                  jsQuestionsCorrect: {JSON.stringify(this.props.currentUser.jsQuestionsCorrect)}<br/>
                  cssQuestionsAnswered: {JSON.stringify(this.props.currentUser.cssQuestionsAnswered)}<br/>
                  cssQuestionsCorrect: {JSON.stringify(this.props.currentUser.cssQuestionsCorrect)}<br/>
                  htmlQuestionsAnswered: {JSON.stringify(this.props.currentUser.htmlQuestionsAnswered)}<br/>
                  htmlQuestionsCorrect: {JSON.stringify(this.props.currentUser.htmlQuestionsCorrect)}<br/>
                  nodeQuestionsAnswered: {JSON.stringify(this.props.currentUser.nodeQuestionsAnswered)}<br/>
                  nodeQuestionsCorrect: {JSON.stringify(this.props.currentUser.nodeQuestionsCorrect)}<br/>
                  apiQuestionsAnswered: {JSON.stringify(this.props.currentUser.apiQuestionsAnswered)}<br/>
                  apiQuestionsCorrect: {JSON.stringify(this.props.currentUser.apiQuestionsCorrect)}<br/>
                  mongoQuestionsAnswered: {JSON.stringify(this.props.currentUser.mongoQuestionsAnswered)}<br/>
                  mongoQuestionsCorrect: {JSON.stringify(this.props.currentUser.mongoQuestionsCorrect)}<br/>
                  */}
                </p>

                {  JSON.stringify(this.props.currentQuiz)  }
            </div>
    );
  }
}


const mapStateToProps = state => {
  return ({
      // currentQuiz is now passed down from question component
      missedQuestions: state.reducer.missedQuestions,
      correctQuestions: state.reducer.correctQuestions,
      //currentQuiz: state.userData.currentQuiz,
      currentUser: state.auth.currentUser

  });
}

export default connect(mapStateToProps)(DevData);
