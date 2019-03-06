import React, {Component} from 'react';

import Header from './Header';
import Subheader from './Subheader';
import SubsGrid from './SubsGrid';

import subreddits from '../../config/subreddits';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: subreddits
        };
    }


    render() {
        const {posts} = this.state;

        return (
            <React.Fragment>
                <Subheader>Welcome to</Subheader>
                <Header>Subscroller</Header>
                <Subheader>Reddit Subreddits' image gallery</Subheader>
                <SubsGrid posts={posts}/>
            </React.Fragment>
        )
    }
}

export default Home;