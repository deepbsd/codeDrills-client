import React from 'react';
import moxios from 'moxios';
import {shallow, mount, render} from 'enzyme';

import {fetchQuestions} from './actions';
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

    const questions =  {
            number: 1,
            question: "Why is React.js so hard?",
            category: "React.js",
            assetUrl: "http://localhost/images",
            assetType: "image",
            answers: [1,2,3]
        };


    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it('updates store with questions on being mounted', () => {
        let store = storeFactory({});
        const length = Math.floor((Math.random()*40)+1);
        const questionsArray = Array(length).fill(questions)

        console.log(questionsArray.length)

        moxios.wait(() => {
         const request = moxios.requests.mostRecent();
         request.respondWith({
             status: 200,
             response: questionsArray,
         })
        })
        
        //return store.dispatch(fetchQuestions())
        //    .then(() => {
        //        const newState = store.getState();
        //        console.log(newState)
        //        expect(newState.questions.length).toEqual(questionsArray.length)
        //    });
    });
});





//describe('getSecretWord action creator', () => {
//    beforeEach(() => {
//        moxios.install();
//    });
//
//    afterEach(() => {
//        moxios.uninstall();
//    });
//
//    it('correctly adds the secret word to state', () => {
//       const secretWord = 'party';
//       const store = storeFactory();
//
//       moxios.wait(() => {
//           const request = moxios.requests.mostRecent();
//           request.respondWith({
//               status: 200,
//               response: secretWord,
//           });
//       });
//
//       return store.dispatch(getSecretWord())
//           .then(() => {
//               const newState = store.getState();
//               expect(newState.secretWord).toBe(secretWord);
//           });
//
//    });
//});
