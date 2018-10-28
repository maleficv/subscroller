import React, {Component} from 'react';
import Masonry from 'react-masonry-component';
import sortedUniqBy from 'lodash/sortedUniqBy';

import Header from './Header';
import Thumbnail from './Thumbnail';
import {handleLoadingImages, revealImages} from '../services/handleLoadingImages';
import fetchRedditApi from '../services/fetchRedditApi';
import hasReachedBottomScreen from '../services/hasReachedBottomScreen';

const MasonryStyles = {
    fontSize: 0,
    margin: '0 120px'
};

const MasonryOptions = {
    transitionDuration: 0
};

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            after: '',
            subreddit: props.subreddit,
            loading: false
        };

        this.container = null;
        this.lockLoading = this.lockLoading.bind(this);
        this.unlockLoading = this.unlockLoading.bind(this);
        this.getNewImages = this.getNewImages.bind(this);
        this.loop = this.loop.bind(this);
    }

    componentDidMount() {
        this.getNewImages();
    }

    loop() {
        if ((hasReachedBottomScreen(-window.innerHeight / 2) || this.state.posts.length < 9) && !this.state.loading) {
            return this.getNewImages();
        }

        requestAnimationFrame(this.loop);
    }

    getNewImages() {
        const {subreddit, after} = this.state;

        this.lockLoading()
            .then(() => fetchRedditApi(subreddit, after, 3, 'top'))
            .then(data => this.updatePosts(data))
            .then(() => handleLoadingImages(this.container))
            .then(revealImages)
            .then(this.unlockLoading)
            .then(this.loop);
    }

    lockLoading() {
        return new Promise(resolve => {
            this.setState(() => ({loading: true}), resolve)
        })
    }

    unlockLoading() {
        return new Promise(resolve => {
            this.setState(() => ({loading: false}), resolve)
        })
    }

    updatePosts(data) {
        return new Promise(resolve => {
            this.setState(state => ({
                posts: sortedUniqBy(state.posts.concat(data.posts), 'data.id'),
                after: data.after
            }), resolve);
        })
    }

    render() {
        const {posts} = this.state;

        return (
            <React.Fragment>
                <Header>Welcome to Subscroller!</Header>
                <Masonry style={MasonryStyles} options={MasonryOptions} ref={el => this.container = el}>
                    {posts.map(post =>
                        <Thumbnail key={post.data.id}
                                   src={post.data.url}
                                   previews={post.data.preview.images[0].resolutions}
                                   title={post.data.title}
                                   link={post.data.permalink}
                                   showLightbox={this.props.showLightbox}/>)}
                </Masonry>
            </React.Fragment>
        )
    }

}

Home.defaultProps = {
    subreddit: 'wallpaper'
};

export default Home;