import React from 'react';
import {shallow, mount} from 'enzyme';

import {fetchQuestions} from './actions';
import {BrowserRouter as Router } from 'react-router-dom';
import {connect} from 'react-redux';
import Main from './components/main';
import Header from './components/header';
import Footer from './components/footer';




describe('Renders <Main/> and <Footer/>.  <Main/> and <Header/> require store', () => {
    //it('Renders without crashing', () => {
    //    mount(<Header />);
    //});
    it('Renders without crashing', () => {
        mount(<Footer />);
    });

});
