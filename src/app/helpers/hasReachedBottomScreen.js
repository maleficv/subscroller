export default function hasReachedBottomScreen(offset = 0) {
    return window.scrollY + window.innerHeight >= document.body.scrollHeight - offset;
};