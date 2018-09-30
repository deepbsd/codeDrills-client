import React from 'react';
import {connect} from 'react-redux';
import {shallow, mount} from 'enzyme';
import Style from './style';
import Blurb from './index';



describe('<Blurb />', () => {

    it('Renders without crashing', () => {
        shallow(<Blurb  />);
    });

    it('Renders title if it exists', () => {
        const wrapper = mount(<Blurb title="Sample Title" paragraph="one two three"  />);
        expect(wrapper.props().title).toEqual("Sample Title");
        expect(wrapper.props().paragraph).toEqual("one two three");
        expect(wrapper.contains(<Style.head3>Sample Title</Style.head3>)).toEqual(true);
    });

    it('Renders paragraph even if title does not exist', () => {
        const wrapper = mount(<Blurb paragraph="one two three"  />);
        expect(wrapper.props().title).toEqual(undefined);
        expect(wrapper.props().paragraph).toEqual("one two three");
    });

});



