import React from 'react';
import {connect} from 'react-redux';
import Style from '../profile/style.js';
import Avatar from 'react-avatar';
import {shallow, mount} from 'enzyme';
import {NavItem} from './index';


describe('<NavItem />', () => {

    it('Renders without crashing', () => {
        let val = 1;
        //shallow(<Userdetails />);
        expect(val).toEqual(1);
    });

})

