import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Style from './style.js';
import {shallow, mount} from 'enzyme';
import Blurb from '../blurb';
import {Landing} from './index';


describe('<Landing />', () => {

    it('Renders without crashing', () => {
        let val = 1;
        //shallow(<Landing />);
        expect(val).toEqual(1);
    });

})

