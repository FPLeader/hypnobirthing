import { isImageOrVideoOrYoutube } from '@/components/Functions'
import { VideoCard } from '@/components/Cards'

interface PageProps {
    title1: string,
    title2: string,
    text1: string,
    text2: string,
    fileName: string,
}

export default function SoftLanding({
    title1,
    title2,
    text1,
    text2,
    fileName
}: PageProps) {
    return (
        <div className='flex flex-col gap-[20px] lg:gap-[30px]'>
            <div className='grid lg:grid-cols-2 items-center gap-[20px] lg:gap-[35px]'>
                <div className='w-full'>
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
                <div className='max-lg:row-start-1 w-full flex flex-col gap-[12px] md:gap-[16px]'>
                    <div className='text-[30px] md:text-[40px] lg:text-[44px] font-light italic'>
                        {title1}
                    </div>
                    <p className='whitespace-preline text-[16px] md:text-[18px] lg:text-[20px] md:tracking-wide'>
                        {text1}
                    </p>
                </div >
            </div>
            <div className='flex flex-col gap-[16px]'>
                <div className='font-medium text-[20px] md:text-[24px]'>
                    {title2}
                </div>
                <div className='grid lg:grid-cols-2 gap-y-[10px] gap-x-[20px] lg:gap-x-[35px]'>
                    {text2.split('\n').map((item: string, index: number) => (
                        <div key={index} className='min-h-[60px] border border-beighe flex rounded-[8px] overflow-hidden'>
                            <div className='w-[30px] md:w-[60px] flex justify-center items-center bg-beighe'>
                                <div className='text-white text-[20px] md:text-[24px]'>{index + 1}</div>
                            </div>
                            <div className='w-full flex items-center'>
                                <div className='w-full px-[16px] py-[8px] text-dark text-[16px]'>{item}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}