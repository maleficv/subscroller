export default function fetchRedditApi(subreddit, after, limit = 18, type = 'new', timeline = 'all') {
    const host = 'https://proxy.melcma.com';
    const reddit = `https://www.reddit.com/r/${subreddit}/${type}.json?limit=${limit}&after=${after}&t=${timeline}`;
    return fetch(`${host}/?url=${reddit}`)
        .then(res => res.json())
        .then(res => ({
            posts: res.data.children
                .filter(wallpaper => wallpaper.data.url.match(/.(jpg|png|gif)$/g)),
            after: res.data.after
        }))
};