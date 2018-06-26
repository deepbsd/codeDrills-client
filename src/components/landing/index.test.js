import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {shallow, mount} from 'enzyme';
import Style from './style.js';
import Blurb from '../blurb';
import {Landing} from './index';


describe('<Landing />', () => {

    it('Renders without crashing', () => {
        shallow(<Landing />);
    });

    it('Renders the page title, blurb title, blurb', () => {
        const blurbs = [{title: "title1", blurb: "one"},
        {title: "title2", blurb: "two"},
        {title: "title3", blurb: "three"}];
        const wrapper = mount(<Landing blurbs={blurbs} />);

        console.log('Wrapper: ',wrapper.props().blurbs);

        expect(wrapper.contains(<Style.head3>CodeDrills</Style.head3>)).toEqual(true);

        expect(wrapper.props().blurbs[0]).toEqual({title: 'title1', blurb: 'one'});
        
        expect(wrapper.find(Blurb).exists()).toEqual(true);
    });

    it('Redirects to profile if loggedIn is true', () => {
        //
    });
})

