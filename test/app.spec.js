import React from 'react';

import {shallow} from 'enzyme';

import App from '../src/app/index';

describe('Root component', () => {
    const app = shallow(<App/>);

    test('App matches snapshot', () => {
        expect(app).toMatchSnapshot();
    });
});