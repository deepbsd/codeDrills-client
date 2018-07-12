import React from 'react';
import {shallow} from 'enzyme';
import store from '../../store';
import {localStorage} from '../../setupTests';
import Header from './';


describe('Header', () => {
    it('renders without crashing', () => {
       const wrapper = shallow(<Header store={store} />);
       expect(wrapper.length).toBe(1);

    });
});




