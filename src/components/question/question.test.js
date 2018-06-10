import React from 'react';
import {connect} from 'react-redux';
import {checkQuestion, updateCurrent, addCurrentUserToState} from '../../actions';
import requiresLogin from '../profile/requires-login';
import DevData from './../devdata';
import Answer from './answer';
import Main from '../main';
import {Redirect} from 'react-router-dom';
import {API_BASE_URL} from '../../config';
import {shallow, mount} from 'enzyme';
import {Question} from './index'


// Start tests proper
//  it('contains the correct number of components', (done) => {
//    const wrapper = mount(<Main />);
//    // wait for the API call has benn resolved
//	setTimeout(function(){
//        wrapper.update();
//        epect(wrapper.find(Question).length).to.equal(status.length);
//        done();
//	}, 100);
//    
//  });



//TO TEST:
//
//1. get 10 questions
//2. should be 5 answers
//3. only one of those should be correct
//4. cant answer same question twice
//5. 
