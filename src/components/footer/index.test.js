import React from 'react';
import Style from './style';
import Footer from './index';
import {shallow, mount} from 'enzyme';


describe('<Footer />', () => {
         

   it('Renders without crashing', () => {
       const wrapper = shallow(<Footer />);
       expect(wrapper.length).toBe(1)
   });


});
