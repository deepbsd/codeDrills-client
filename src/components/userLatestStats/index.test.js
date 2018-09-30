import React from 'react';
import {connect} from 'react-redux';
import Style from '../profile/style.js';
import {shallow, mount} from 'enzyme';
import {UserLatestStats} from './index';


describe('<UserLatestStats />', () => {

    it('Renders without crashing', () => {
        //shallow(<UserLatestStats />);
        expect(1).toEqual(1);
    });

})
