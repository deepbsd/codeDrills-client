import React from 'react';
import {connect} from 'react-redux';

export class RawData extends React.Component {

  render() {

    return (
            <div>
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

export default connect(mapStateToProps)(RawData);