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


     const setup = (initialState = {}) => {
         const store = storeFactory(initialState);
         const wrapper = shallow(<Landing store={store} />);
         return wrapper;
     }
     
    describe('Test the redirect', () => {

        let wrapper;


//        beforeEach(() => {
//            const initialState = { loggedIn: true };
//            wrapper = setup(initialState);
//        })
//
        it('Redirects to profile if loggedIn is true', () => {
            const initialState = { loggedIn: true };
            wrapper = setup(initialState);
            //console.log("debug: ", wrapper.debug());
            expect(wrapper.find(Redirect)).toHaveLength(1);
        })


       });

    });


   //it("renders Landing when user NOT autheticated", () => {
   //  function setup() {
   //    const enzymeWrapper = shallow(<Landing  />);

   //    return {
   //      enzymeWrapper
   //    };
   //  } 
   //  const { enzymeWrapper } = setup();
   //  enzymeWrapper.loggedIn = jest.fn(() => false);

   //  expect(enzymeWrapper.find(Landing)).toHaveLength(1);
   //});

	//test('test redirect if user is logged in', () => {
	  //const loggedIn = true;
	  //const wrapper = mount(
	  //  <MemoryRouter initialEntries={[ '/profile' ]}>
	  //    <Profile  />
	  //  </MemoryRouter>
	  //);
	  //expect(wrapper.find(LandingPage)).toHaveLength(0);
	  //expect(wrapper.find(Profile)).toHaveLength(1);
	//});



