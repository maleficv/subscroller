import React from 'react';

import {shallow} from 'enzyme';

import Navigation from '../src/app/components/Navigation';

describe('Navigation component', () => {
    const nav = shallow(<Navigation/>);

    test('Navigation matches snapshot', () => {
        expect(nav).toMatchSnapshot();
    });
});