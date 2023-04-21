
import { isImageOrVideoOrYoutube } from '@/components/Functions'
import { VideoCard } from '@/components/Cards'

interface PageProps {
    lngId: number,
    title: string[],
    text: string[],
    fileName: string,
}

export default function Philosophy({
    lngId,
    title,
    text,
    fileName
}: PageProps) {
    return (
        <div className='grid md:grid-cols-2 gap-[20px] lg:gap-[35px] items-center'>
            <div className='flex flex-col justify-center gap-[15px]'>
                <div className='text-[24px] lg:text-[28px] font-medium'>
                    {title[lngId]}
                </div>
                <div className='whitespace-pre-line text-[16px] lg:text-[18px] font-medium'>
                    {text[lngId]}
                </div>
            </div>
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
    )
}