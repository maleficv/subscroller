import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styled from 'react-emotion';
import Masonry from 'react-masonry-component';
import sortedUniqBy from 'lodash/sortedUniqBy';

import Thumbnail from "./Thumbnail";
import fetchRedditApi from '../services/fetchRedditApi';
import reachedBottomScreen from '../services/reachedBottomScreen';

const Header = styled('h1')`
    text-align: center;
    text-transform: uppercase;
    color: white;
    margin-top: 100px;
    margin-bottom: 100px;
`;

const MasonryStyles = {
    fontSize: 0,
    margin: '0 120px'
};

const MasonryOptions = {
    transitionDuration: 0
};

let isMounted;
let loadingPosts = {};

class Feed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            after: '',
            posts: [],
            subreddit: props.subreddit,
            scrollY: 0
        };

        this.t = null;

        this.pollScrollPosition = this.pollScrollPosition.bind(this);
        this.cancelCalls = this.cancelCalls.bind(this);
        this.waitForImagesToDownload = this.waitForImagesToDownload.bind(this);
    }

    componentDidMount() {
        isMounted = true;
        fetchRedditApi(this.state.subreddit, this.state.after).then(data => this.loadNewImages(data));
    }

    componentWillUnmount() {
        this.cancelCalls();
    }

    static getDerivedStateFromProps(props, state) {
        loadingPosts = {};
        if (state.subreddit !== props.subreddit) {
            return {
                after: '',
                posts: [],
                subreddit: props.subreddit,
                scrollY: 0
            }
        }

        return null;
    }

    loadNewImages(data) {
        if (!isMounted) return;

        this.setState((state) => {
            return {
                posts: sortedUniqBy(state.posts.concat(data.posts), 'data.id'),
                after: data.after
            }
        }, this.waitForImagesToDownload);
    }

    pollScrollPosition() {
        this.poll = () => requestAnimationFrame(this.pollScrollPosition);

        if (reachedBottomScreen()) {
            return fetchRedditApi(this.state.subreddit, this.state.after).then(data => this.loadNewImages(data));
        }

        return this.poll();
    }

    waitForImagesToDownload() {
        if (!isMounted) return;

        const refs = loadingPosts;
        const ids = Object.keys(refs);

        const unLoaded = ids.filter(id => {
            const thumbnail = ReactDOM.findDOMNode(refs[id]);
            const image = thumbnail.querySelector('img');

            return !image.complete;
        });

        if (unLoaded.length > 0 || ids.length === 0) {
            this.t = setTimeout(() => {
                this.waitForImagesToDownload();
            }, 200);
        } else {
            this.pollScrollPosition();
        }
    }

    cancelCalls() {
        isMounted = false;
        cancelAnimationFrame(this.poll);
        clearTimeout(this.t);
    }

    render() {
        const {posts} = this.state;
        return (
            <div>
                <Header>{this.props.subreddit}</Header>
                <Masonry style={MasonryStyles} options={MasonryOptions}>
                    {
                        posts.map(post =>
                            <Thumbnail key={post.data.id}
                                       ref={el => loadingPosts[post.data.id] = el}
                                       image={post.data.url}
                                       title={post.data.title}
                                       link={post.data.permalink}
                                       showLightbox={this.props.showLightbox}/>)
                    }
                </Masonry>
            </div>
        )
    }
}

Feed.defaultProps = {
    subreddit: 'wallpaper'
};

export default Feed;