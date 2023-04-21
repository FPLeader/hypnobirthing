import { isImageOrVideoOrYoutube } from '@/components/Functions'
import { VideoCard } from '@/components/Cards'

interface PageProps {
    lngId: number,
    title: string[],
    text: string[],
    fileName: string,
}

export default function OurBenefits({
    lngId,
    title,
    text,
    fileName
}: PageProps) {
    return (
        <>
            <div className='text-dark flex flex-col gap-[16px]'>
                <div className='text-[24px] lg:text-[28px] font-medium'>
                    {title[lngId]}
                </div>
                <div className='grid md:grid-cols-2 gap-[15px]'>
                    {text[lngId].split('\n').map((obj: string, index: number) => (
                        <>
                            {
                                obj !== '' &&
                                <div key={index} className='text-[16px] md:text-[18px] lg:text-[20px] px-[14px] md:px-[18px] lg:px-[24px] py-[12px] md:py-[14px] lg:py-[16px] bg-bcg_2 rounded-[10px]'>
                                    {obj}
                                </div>
                            }
                        </>
                    ))}
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
        </>
    )
}