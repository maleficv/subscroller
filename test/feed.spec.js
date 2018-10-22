import React from 'react';
import {shallow, mount} from 'enzyme';

import Feed from '../src/app/components/Feed';
import fetchRedditApi from '../src/app/services/fetchRedditApi';

describe('Default Feed component', () => {
    const feed = mount(<Feed />);

    test('Should have correct initial state', () => {
        const expectedState = {
            after: '',
            posts: [],
            subreddit: 'wallpaper'
        };

        const state = feed.state();

        expect(state).toMatchObject(expectedState);
    });
});