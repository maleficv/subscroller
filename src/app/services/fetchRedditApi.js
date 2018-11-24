export default function fetchRedditApi(subreddit, after, limit = 18, type = 'new', timeline = 'all') {
    const host = 'https://proxy.subscroller.app';
    const reddit = `https://www.reddit.com/r/${subreddit}/${type}.json?limit=${limit}&after=${after}&t=${timeline}`;
    return fetch(`${host}/?url=${reddit}`)
        .then(res => res.json())
        .then(res => ({
            posts: res.data.children
                .filter(wallpaper => wallpaper.data.url.match(/.(jpg|png|gif)$/g))
                .filter(wallpaper => wallpaper.data.url.match(/^https:\/\//g))
                .filter(wallpaper => wallpaper.data.preview.images[0].resolutions.length),
            after: res.data.after
        }))
};