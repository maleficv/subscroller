import isProduction from './../../helpers/isProduction';

export default function fetchRedditApi(subreddit, after, limit = 18, type = 'new', timeline = 'all') {
    const host = isProduction() ? 'https://www.melcma.com/proxy' : 'http://localhost:9005';
    const reddit = `https://www.reddit.com/r/${subreddit}/${type}.json?limit=${limit}&after=${after}&t=${timeline}`;
    return fetch(`${host}/?url=${reddit}`)
        .then(res => res.json())
        .then(res => ({
            posts: res.data.children
                .filter(wallpaper => wallpaper.data.url.match(/gfycat|.(jpg|png|gif)$/g))
                .filter(wallpaper => wallpaper.data.url.match(/^https:\/\//g))
                .filter(wallpaper => wallpaper.data.preview && wallpaper.data.preview.images[0].resolutions.length),
            after: res.data.after
        }))
};