import { isImageOrVideoOrYoutube } from '@/components/Functions'
import { VideoCard } from '@/components/Cards'

interface PageProps {
    title: string,
    text1: string,
    text2: string,
    fileName: string,
}

export default function NewMom({
    title,
    text1,
    text2,
    fileName
}: PageProps) {
    return (
        <div className='flex flex-col gap-[20px] lg:gap-[30px]'>
            <div className='grid lg:grid-cols-2 gap-[15px] lg:gap-[35px] items-center'>
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
                <div className='w-full max-lg:row-start-1 text-dark flex flex-col gap-[12px] lg:gap-[16px]'>
                    <div className='text-[30px] md:text-[40px] lg:text-[44px] font-light italic'>
                        {title}
                    </div>
                    <div className='whitespace-pre-line text-[16px] md:text-[18px]'>
                        {text1}
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 gap-[15px]'>
                {text2.split('\n').map((obj: string, index: number) => (
                    <div key={index} className='text-[16px] md:text-[18px] lg:text-[20px] px-[14px] md:px-[18px] lg:px-[24px] py-[12px] md:py-[14px] lg:py-[16px] bg-bcg_2 rounded-[10px]'>
                        {obj}
                    </div>
                ))}
            </div>
        </div>
    )
}
