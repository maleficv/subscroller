export function parseImage(url) {
    let formattedUrl = url;

    if (url.includes('mp4')) {
        formattedUrl = formattedUrl.replace('gifv', 'mp4');
    }

    if (url.includes('&amp;')) {
        formattedUrl = formattedUrl.split('&amp;').join('&');
    }

    return formattedUrl;
}

export function extractPreview(images) {
    const length = images.length;
    let preview;

    if (length > 3) {
        preview = images[3].url
    } else {
        preview = images[length - 1].url
    }

    preview = parseImage(preview);

    return preview;
}