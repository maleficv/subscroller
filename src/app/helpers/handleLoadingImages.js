import ReactDOM from 'react-dom';

function awaitLoadingImage(image) {
    return new Promise(resolve => {
        if (image.complete) {
            image.classList.add('is-ready');
            return resolve();
        }
        image.onload = () => {
            image.classList.add('is-ready');
            resolve();
        };
    })
}

export function revealImages(images) {
    return new Promise(resolve => {
        [...images]
            .filter(image => image.classList.contains('is-ready'))
            .forEach(image => image.classList.add('is-loaded'));
        resolve();
    })
}

export function handleLoadingImages(feed) {
    const container = ReactDOM.findDOMNode(feed);
    const images = container.querySelectorAll('img');
    const promises = [...images].map(image => awaitLoadingImage(image));

    return new Promise(resolve => {
        Promise.all(promises).then(() => resolve(images));
    })
}