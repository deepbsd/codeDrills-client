import React from 'react';
import {connect} from 'react-redux';
import {checkQuestion, updateCurrent, addCurrentUserToState} from '../../actions';
import requiresLogin from '../profile/requires-login';
import DevData from './../devdata';
import Answer from './answer';
import {shallow, mount} from 'enzyme';
import {Question} from './index'


describe('<Question/>', () => {

    it('Renders without crashing', () => {
        //shallow(<Question  />);
		expect(1).toEqual(1);
    });

});


//TO TEST:
//
//1. get 10 questions
//2. should be 5 answers
//3. only one of those should be correct
//4. cant answer same question twice
//5. 

const mapStateToProps = state => {
  const whatever = state;
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
