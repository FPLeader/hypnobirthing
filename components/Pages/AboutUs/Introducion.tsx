import { isImageOrVideoOrYoutube } from '@/components/Functions'
import { VideoCard } from '@/components/Cards'

interface PageProps {
    lngId: number,
    title: string[],
    text: string[],
    fileName: string,
}

export default function Introduction({
    lngId,
    title,
    text,
    fileName
}: PageProps) {

    return (
        <div className='w-full flex justify-center'>
            <div className='w-full max-w-[1225px] mx-[20px] flex flex-col gap-[15px] lg:gap-[20px]'>
                <div className={`text-dark text-center ${lngId === 0 ? 'md:text-left' : 'md:text-right'} text-[20px] md:text-[24px] lg:text-[28px]`}>
                    {title[lngId]}
                </div>
                <div className='w-full grid lg:grid-cols-2 gap-[35px] items-center'>
                    <span className='whitespace-pre-line text-[18px] text-dark max-lg:row-start-2'>
                        {text[lngId]}
                    </span>
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
                </div>
            </div>
        </div>
    )
}
