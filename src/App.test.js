import React from 'react';
import {shallow, mount, render} from 'enzyme';

import {BrowserRouter as Router } from 'react-router-dom';
import {connect} from 'react-redux';
import Main from './components/main';
import Header from './components/header';
import Footer from './components/footer';
import {findByTestAttr, storeFactory} from './testUtils';
import App from './App';



describe('App Parent component ', () => {

    let wrapper, store;
    let initialState = {};
    beforeEach(() => {
        store = storeFactory(initialState);
        wrapper = shallow(<App store={store} />).dive();
    })
    
    it('Renders without crashing', () => {
        expect(wrapper.length).toBe(1);
    });

    it('Renders the header', () => {
        const header = findByTestAttr(wrapper, "component-header");
        expect(header.length).toBe(1);
    });

    it('Renders the footer', () => {
        const footer = findByTestAttr(wrapper, "component-footer");
        expect(footer.length).toBe(1);
    });

});

describe('Component dispatches fetchQuestions on mount', () => {

    let wrapper, store;

    const fetchQuestionsMock = jest.fn();
    
	let initialState = {
	  fetchQuestions: fetchQuestionsMock
    }
	
	store = storeFactory(initialState);
    wrapper = shallow(<App store={store} />);
    

    it('Dispatches fetchQuestions on mount', () => {
      wrapper.instance().componentDidMount();
      const fetchQuestionsCallLength = fetchQuestionsMock.mock.calls.length;
      
	  setTimeout(() => {
	    expect(fetchQuestionsCallLength).toBe(1);
	  }, 500);
	});

});
	

	  		




