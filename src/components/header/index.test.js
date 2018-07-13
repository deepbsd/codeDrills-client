import React from 'react';
import {shallow} from 'enzyme';
import store from '../../store';
import {localStorage} from '../../setupTests';
import Header from './';
import {findByTestAttr, checkProps, storeFactory} from '../../testUtils';




describe('Header if NOT loggedIn', () => {

    let wrapper = shallow(<Header store={store} />).dive();

    it('renders without crashing', () => {
       expect(wrapper.length).toBe(1);
    });
   
    it('if loggedIn is false, it does not render logout nav', () => {
        const logoutNav = wrapper.find("[data-test='logout']");
        expect(logoutNav.length).toBe(0);
    });
    
    it('if loggedIn is false, it renders the register nav', () => {
        const registerNav = wrapper.find("[data-test='register']");
        expect(registerNav.length).toBe(1);
    });
    
    it('if loggedIn is false, it renders home nav', () => {
        const homeNav = wrapper.find("[data-test='home']")
        expect(homeNav.length).toBe(1);
    });
    
    it('if loggedIn is false, it renders login nav', () => {
        const loginNav = wrapper.find("[data-test='login']")
        //console.log(wrapper.debug());
        //console.log(wrapper.state());
        expect(loginNav.length).toBe(1);
    });
});

describe('Header Component if LoggedIn is true', () => {

    let wrapper;
    let auth = { authToken: true };
    let initialState = { auth };
    let store;
    beforeEach(() => {
        store = storeFactory(initialState);
        wrapper = shallow(<Header store={store} />).dive();
    })


    it('renders logout nav', () => {
        //console.log(store.getState())
        const logoutNav = findByTestAttr(wrapper, 'logout')
        expect(logoutNav.length).toBe(1);
    });
    
    it('renders home nav', () => {
        const homeNav = findByTestAttr(wrapper, 'home')
        expect(homeNav.length).toBe(1);
    });
    
    it('renders start_quiz nav', () => {
      const startQuizNav = findByTestAttr(wrapper, 'start quiz')
      expect(startQuizNav.length).toBe(1);
    });

    it('renders profile nav', () => {
      const profileNav = findByTestAttr(wrapper, 'profile')
      expect(profileNav.length).toBe(1);
    });

});



