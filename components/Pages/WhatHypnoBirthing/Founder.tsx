import { isImageOrVideoOrYoutube } from '@/components/Functions'
import { VideoCard } from '@/components/Cards'

interface PageProps {
    lngId: number,
    title2: string,
    text5: string,
    fileName4: string,
}

export default function Founder({
    lngId,
    title2,
    text5,
    fileName4
}: PageProps) {
    return (
        <div className='py-[20px] py-[50px] lg:py-[70px] w-full flex justify-center bg-bcg_2 gap-[30px]'>
            <div className='w-full max-w-[1225px] mx-[20px] flex flex-col gap-[20px] md:gap-[30px]'>
                <div className='text-[30px] md:text-[40px] lg:text-[44px] text-center md:text-left font-light italic'>
                    {title2}
                </div>
                <div className='white-space-preline columns-1 md:columns-2 gap-[35px] text-[18px]'>
                    {text5}
                </div>
                <div className='flex justify-center'>
                    <div className='w-full max-w-[800px] min-h-[177px]'>
                        {
                            isImageOrVideoOrYoutube(fileName4) === 'image'
                                ?
                                <img
                                    draggable='false'
                                    src={process.env.FILE_IMAGE_BASE + fileName4}
                                    alt=''
                                    className={`w-full h-full min-h-[200px] object-cover rounded-[10px] lg:rounded-[15px] ${process.env.DEV_MODE && 'blur-lg'}`}
                                />
                                :
                                <div className='w-full'>
                                    <div className='min-h-[200px] max-w-[800px] m-auto'>
                                        <div className='aspect-w-16 aspect-h-9'>
                                            <VideoCard
                                                title=''
                                                videoUrl={fileName4}
                                                style='min-h-[200px] max-h-[480px]'
                                            />
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}