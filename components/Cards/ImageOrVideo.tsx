import { isImageOrVideoOrYoutube } from '@/components/Functions'
import { VideoCard } from './'

interface ImageOrVideoProps {
    fileName: string,
}

export default function ImageOrVideo({
    fileName
}: ImageOrVideoProps) {
    return (
        <>
            {
                isImageOrVideoOrYoutube(fileName) === 'image'
                    ?
                    <img
                        draggable='false'
                        src={process.env.FILE_IMAGE_BASE + fileName}
                        alt=''
                        className={`w-full h-full min-h-[200px] object-cover rounded-[10px] lg:rounded-[15px] ${process.env.DEV_MODE && 'blur-lg'}`}
                    />
                    :
                    <div className='w-full'>
                        <div className='min-h-[200px] max-w-[800px] m-auto'>
                            <div className='aspect-w-16 aspect-h-9'>
                                <VideoCard
                                    title=''
                                    videoUrl={fileName}
                                    style='min-h-[200px] max-h-[480px]'
                                />
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}
