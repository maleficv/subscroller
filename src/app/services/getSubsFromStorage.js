export default function getSubsFromStorage() {
    return JSON.parse(localStorage.getItem('subreddits')) || []
        .map(subreddit => subreddit);
}