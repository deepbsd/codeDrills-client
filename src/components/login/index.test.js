import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {shallow, mount} from 'enzyme';
import {LandingPage} from './index';


describe('<LandingPage />', () => {

    it('Renders Login component without crashing', () => {
        shallow(<LandingPage />);
    });
});
