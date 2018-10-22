export default function fetchRedditApi(subreddit, after) {
    const host = 'https://proxy.melcma.com';
    const reddit = `https://www.reddit.com/r/${subreddit}/new.json?limit=3&after=${after}`;
    return fetch(`${host}/?url=${reddit}`)
        .then(res => res.json())
        .then(res => ({
            posts: res.data.children
                .filter(wallpaper => wallpaper.data.url.match(/\.(jpg|png|gif)$/g)),
            after: res.data.after
        }))
};