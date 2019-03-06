import React, {Component} from 'react';
import {Router} from '@reach/router';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Feed from './components/Feed';
import Lightbox from './components/Lightbox';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lightbox: null
        };

        this.showLightbox = this.showLightbox.bind(this);
        this.closeLightbox = this.closeLightbox.bind(this);
    }

    showLightbox(post) {
        this.setState({lightbox: post})
    }

    closeLightbox(e) {
        if (e.button === 0) {
            e.preventDefault();
            this.setState({lightbox: null})
        }

    }

    render() {
        return (
            <React.Fragment>
                <Navigation/>
                <Router>
                    <Home path="/" subreddit="wallpapers" showLightbox={this.showLightbox}/>
                    <Feed path="/subreddit/:subreddit" showLightbox={this.showLightbox}/>
                </Router>
                {this.state.lightbox && <Lightbox post={this.state.lightbox} closeLightbox={this.closeLightbox}/>}
            </React.Fragment>
        )
    };
}

export default App;