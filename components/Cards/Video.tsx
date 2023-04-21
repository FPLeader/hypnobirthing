import ReactPlayer from 'react-player'

interface VideoProps {
    title: string,
    videoUrl: string,
    style?: string,
}

// console.log(getVideoIdFromUrl('https://www.youtube.com/watch?v=dQw4w9WgXcQ')); // output: 'dQw4w9WgXcQ'
// console.log(getVideoIdFromUrl('https://youtu.be/dQw4w9WgXcQ')); // output: 'dQw4w9WgXcQ'
// console.log(getVideoIdFromUrl('https://www.youtube.com/embed/dQw4w9WgXcQ')); // output: 'dQw4w9WgXcQ'
// console.log(getVideoIdFromUrl('https://www.youtube.com/watch?feature=youtu.be&v=dQw4w9WgXcQ')); // output: 'dQw4w9WgXcQ'

export default function Video({
    title,
    videoUrl = '',
    style = ''
}: VideoProps) {

    const getVideoIdFromUrl = (url: string): string => {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/; // match the video ID in the URL
        const match = url.match(regex);
        return match ? match[1] : '';
    };

    return (
        <div className={`${style} border-[4px] border-[#DFD3BC38] rounded-[10px] lg:rounded-[15px] bg-gradient-to-r from-[#DFD3BC38] to-[#DFD3BC38] overflow-hidden`}>
            {/* <iframe
                width='100%'
                height='100%'
                src={`https://www.youtube.com/embed/${code}`}
                frameBorder={0}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                title={title}
            /> */}
            {
                getVideoIdFromUrl(videoUrl) === '' ?
                    <ReactPlayer
                        url={process.env.FILE_VIDEO_BASE + videoUrl}
                        width='100%'
                        height='100%'
                        controls={true}
                        playing={false}
                        title={title}
                    />
                    :
                    <iframe
                        width='100%'
                        height='100%'
                        src={`https://www.youtube.com/embed/${getVideoIdFromUrl(videoUrl)}`}
                        frameBorder={0}
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                        title={title}
                    />
            }
        </div>
    )
}