import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {shallow} from 'enzyme';
import {App} from './App';
import {Provider} from 'react-redux';
import store from './store';
//import localstorage from './local-storage';
import Main from './components/main';
import Header from './components/header';
import Footer from './components/footer';





//Cannot test <Header /> because test framework cannot see the store and fails...

// Start tests proper
describe('<Router />', () => {
		it('Renders without crashing', () => {
	        shallow(<Router  />);
		});
		
		it('Renders Main, and Footer', () => {
 			shallow(<Main  />);
			shallow(<Footer  />);
		});

})




