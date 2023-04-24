import { FullButton } from '@/components/Buttons'
import { isImageOrVideoOrYoutube } from '@/components/Functions'
import { VideoCard } from '@/components/Cards'
import { useTranslation } from 'react-i18next'

interface QuestionProps {
    lngId: number,
    fileName: string,
    title: string[]
}

export default function Question({
    lngId,
    fileName,
    title
}: QuestionProps) {
    // language option
    const { t } = useTranslation();

    return (
        <div className='w-full md:max-w-[385px]'>
            <div className='relative w-full'>
                {
                    isImageOrVideoOrYoutube(fileName) === 'image'
                        ?
                        <img
                            draggable='false'
                            src={process.env.FILE_IMAGE_BASE + fileName}
                            alt=''
                            className={`w-full h-full object-cover rounded-[10px] lg:rounded-[15px] ${process.env.DEV_MODE && 'blur-lg'}`}
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
                {
                    isImageOrVideoOrYoutube(fileName) === 'image' &&
                    <div className={`absolute bottom-[15px] ${lngId === 0 ? 'right-[15px]' : 'left-[15px]'} text-[14px] md:text-[18px] rounded-[10px] text-white opacity-80`}>
                        {title[lngId]}
                    </div>
                }
            </div>
            <div className='mt-[20px] md:mt-[30px] p-[20px] md:p-[25px] border border-beighe rounded-[10px]'>
                <div className='flex flex-col gap-[15px] text-center'>
                    <div className='text-[26px] lg:text-[32px] italic font-light'>
                        {t('Any questions?')}
                    </div>
                    <div className='text-[16px] md:text-[18px]'>
                        {t("If you don't find what you're looking for, please email us and we'll get back to you!")}
                    </div>
                    <FullButton text={t('Contact Form')} />
                </div>
            </div>
        </div>
    )
}
