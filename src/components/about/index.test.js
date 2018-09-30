import React from 'react';
import {connect} from 'react-redux';
import {shallow, mount} from 'enzyme';
import About from './index'


describe('<About/>', () => {

    it('Renders without crashing', () => {
        const wrapper = shallow(<About  />);
        expect(wrapper.length).toBe(1);
    });

});

