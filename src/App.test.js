import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {shallow} from 'enzyme';
import {App} from './App';
import {Provider} from 'react-redux';
import store from './store';
import Main from './components/main';
import Header from './components/header';
import Footer from './components/footer';



describe('<Router />', () => {
		it('Renders without crashing', () => {
				        shallow(<Router  />);
		});
		
		it('Renders Header, Main, and Footer', () => {
				        shallow(<Header  />);
				        shallow(<Main  />);
				        shallow(<Footer  />);
		});
})




