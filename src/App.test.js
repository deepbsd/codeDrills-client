import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {shallow} from 'enzyme';
import {App} from './App';
import {Provider} from 'react-redux';



describe('<Router />', () => {
		it('Renders without crashing', () => {
				        shallow(<Router  />);
		});
})




