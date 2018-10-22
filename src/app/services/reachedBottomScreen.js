export default function reachedBottomScreen() {
    return window.scrollY + window.innerHeight >= document.body.scrollHeight - window.innerHeight;
};