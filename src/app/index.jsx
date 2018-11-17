import React, {Component} from 'react';
import {Router} from '@reach/router';
import {injectGlobal} from 'react-emotion';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Feed from './components/Feed';
import Lightbox from './components/Lightbox';
import colors from './theme';

injectGlobal`
body {
  margin: 0;
  padding: 0;
  background-color: ${colors.background};
  font-family: 'Lato', sans-serif;
}`;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lightbox: ''
        };

        this.showLightbox = this.showLightbox.bind(this);
        this.closeLightbox = this.closeLightbox.bind(this);
    }

    showLightbox(post) {
        this.setState(() => {
            return {
                lightbox: post
            }
        })
    }

    closeLightbox() {
        this.setState(() => {
            return {
                lightbox: ''
            }
        })
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