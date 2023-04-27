import { RegularButton } from '@/components/Buttons'
import { isImageOrVideoOrYoutube } from '@/components/Functions'
import { VideoCard } from '@/components/Cards'
import { useTranslation } from 'react-i18next'

interface PageProps {
    lngId: number,
    title1: string,
    text3: string,
    text4: string,
    fileName3: string,
}

export default function Book({
    lngId,
    title1,
    text3,
    text4,
    fileName3,
}: PageProps) {
    const { t } = useTranslation();

    return (
        <div className='w-full flex justify-center'>
            <div className='w-full max-w-[1225px] mx-[20px]'>
                <div className='text-[32px] max-md:block hidden text-center font-light italic'>
                    {title1}
                </div>
                <div className='flex flex-col items-center md:flex-row max-md:mt-[20px] gap-[20px] md:gap-[35px]'>
                    <div className='w-full md:w-1/3 lg:w-1/2 flex justify-center'>
                        {/* <img draggable='false' src='./img/Book.png' alt='' className={`w-full max-w-[385px] ${process.env.DEV_MODE && 'blur-lg'}`} /> */}
                        {
                            isImageOrVideoOrYoutube(fileName3) === 'image'
                                ?
                                <img
                                    draggable='false'
                                    src={process.env.FILE_IMAGE_BASE + fileName3}
                                    alt=''
                                    className={`w-full h-full min-h-[200px] object-cover rounded-[10px] lg:rounded-[15px] ${process.env.DEV_MODE && 'blur-lg'}`}
                                />
                                :
                                <div className='w-full'>
                                    <div className='min-h-[200px] max-w-[800px] m-auto'>
                                        <div className='aspect-w-16 aspect-h-9'>
                                            <VideoCard
                                                title=''
                                                videoUrl={fileName3}
                                                style='min-h-[200px] max-h-[480px]'
                                            />
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                    <div className='w-full md:w-2/3 md:w-1/2 text-dark flex flex-col gap-[20px] lg:gap-[30px]'>
                        <div className='text-[32px] max-md:hidden md:block md:text-[40px] lg:text-[44px] font-light italic'>
                            {title1}
                        </div>
                        <div className='flex flex-col gap-[16px]'>
                            <div className='whitespace-pre-line text-[16px] lg:text-[20px]'>
                                {text3}
                            </div>
                            <div className='whitespace-pre-line font-light text-[14px] opacity-60'>
                                {text4}
                            </div>
                        </div>
                        <RegularButton text={t('buy the book')} />
                    </div>
                </div>
            </div>
        </div>
    )
}