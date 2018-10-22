import React from 'react';
import {shallow} from 'enzyme';

import Thumbnail from '../src/app/components/Thumbnail';

describe('Single Thumbnail component', () => {
    const thumbnail = shallow(<Thumbnail image="https://i.imgur.com/sjHPrLE.jpg"/>);
    const img = thumbnail.find('img');

    test('Thumbnail matches snapshot', () => {
        expect(thumbnail).toMatchSnapshot();
    });

    test('Thumbnail has an image', () => {
        expect(img).toBeDefined();
    });
});