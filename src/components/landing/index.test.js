import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {shallow, mount} from 'enzyme';
import Style from './style.js';
import Blurb from '../blurb';
import {Landing} from './index';
import {Profile} from '../profile/index';
import {MemoryRouter} from 'react-router';
import {storeFactory} from '../../testUtils';


describe('<Landing />', () => {

    it('Renders without crashing', () => {
        shallow(<Landing />);
    });

    it('Renders the page title, blurb title, blurb', () => {
        const blurbs = [{title: "title1", blurb: "one"},
        {title: "title2", blurb: "two"},
        {title: "title3", blurb: "three"}];
        const wrapper = mount(<Landing blurbs={blurbs} />);

        //console.log('Wrapper: ',wrapper.props().blurbs);

        expect(wrapper.contains(<Style.head3>CodeDrills</Style.head3>)).toEqual(true);

        expect(wrapper.props().blurbs[0]).toEqual({title: 'title1', blurb: 'one'});
        
        expect(wrapper.find(Blurb).exists()).toEqual(true);
    });


     const setup = (initialState = {}, props={}) => {
         const store = storeFactory(initialState);
         const wrapper = shallow(<Landing {...props} store={store} />);
         return wrapper;
     }
     
	// Test the redirect here
    describe('Test the redirect', () => {

        let wrapper;

        it('Redirects to profile if loggedIn is true', () => {
            const initialState = { loggedIn: true };
            wrapper = setup(initialState, initialState);
		    //console.log("debug: ",wrapper.debug());
            expect(wrapper.find(Redirect).length).toEqual(1);
        });

		it('Does NOT redirect if loggedIn is false', () => {
	      const initialState = { loggedIn: false };
		  wrapper = setup(initialState, initialState);
          //console.log("debug: ", wrapper.debug())
          expect(wrapper.find(Redirect).length).toEqual(0);

		});

       });

    });

