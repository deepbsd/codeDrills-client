import React from 'react';
import {connect} from 'react-redux';
import Style from './style.js';
import {shallow, mount} from 'enzyme';
import Main from './index';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Landing from '../landing';
import Register from '../register';
import Profile from '../profile';
import Login from '../login';
import Question from '../question';


describe('<Main />', () => {

    it('Renders without crashing', () => {
        let val = 1;
        shallow(<Main />);
    });

})

