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
        shallow(<Main />);
    });

    it('/home loads Landing component', () => {

    });

    it('/register loads Register component', () => {

    });

    it('/login loads Login component', () => {

    });

    it('/about loads About component', () => {

    });

    it('/profile loads Profile component', () => {

    });


    it('/startquiz loads Question component', () => {

    });

})
