export default function deleteSubFromStorage(sub) {
    const storage = JSON.parse(localStorage.getItem('subreddits')) || [];
    const subreddit = sub;
    if (!storage.includes(subreddit)) return;
    const newStorage = storage.filter(item => item !== subreddit);
    localStorage.setItem('subreddits', JSON.stringify(newStorage));
}