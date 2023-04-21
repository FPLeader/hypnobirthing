export const isImageOrVideoOrYoutube = (value: string): string => {
    if (value !== '' && value !== null) {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/; // match the video ID in the URL
        const match = value.match(regex);
        if (match !== null)
            return 'youtube';
        const isVideo = /\.(ogm|wmv|mpg|webm|ogv|mov|asx|mpeg|mp4|m4v|avi)$/i.test(value.toLowerCase());
        if (isVideo)
            return 'video';
    }
    return 'image';
}