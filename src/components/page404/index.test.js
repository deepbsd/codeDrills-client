import React from 'react';
import {shallow, mount} from 'enzyme';
import Page404 from './index';


describe('<Page404 />', () => {

    it('Renders 404 component without crashing', () => {
        shallow(<Page404 />);
    });
});
