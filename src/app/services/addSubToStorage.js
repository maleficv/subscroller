export default function addSubsToStorage(sub) {
    const storage = JSON.parse(localStorage.getItem('subreddits')) || [];
    if (storage.includes(sub)) return;
    storage.push(sub);
    localStorage.setItem('subreddits', JSON.stringify(storage));
}