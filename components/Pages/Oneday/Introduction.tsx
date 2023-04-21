import { MiddleButton } from '@/components/Buttons'
import { useTranslation } from 'react-i18next'
import { isImageOrVideoOrYoutube } from '@/components/Functions'
import { VideoCard } from '@/components/Cards'

interface PageProps {
    lngId: number,
    location: string[],
    startDate: Date,
    endDate: Date,
    fileName: string,
}

export default function Introduction({
    lngId,
    location,
    startDate,
    endDate,
    fileName
}: PageProps) {
    const { t } = useTranslation();
    const moment = require('moment');

    return (
        <div className='flex flex-col-reverse items-center lg:flex-row gap-[15px] lg:gap-[35px]'>
            <div className='w-full lg:w-1/2 text-dark flex flex-col gap-[15px] lg:gap-[20px]'>
                <div className={`hidden lg:block text-[30px] md:text-[40px] lg:text-[44px] text-center ${lngId === 0 ? 'md:text-left' : 'md:text-right'} font-light italic`}>
                    {t('Birth Professionals Support HypnoBirthing — One Day Workshop')}
                </div>
                <div className={`text-[16px] md:text-[18px] lg:text-[20px] text-center ${lngId === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    {t('Learn the philosophy and techniques to Support Families with HypnoBirthing')}
                </div>
                <div className='flex flex-col gap-[5px]'>
                    <div className='max-md:flex justify-center text-[16px] md:text-[18px]'>
                        <span className='text-Label'>{t('Location')}:&nbsp;</span>
                        <span>{location[lngId]}</span>
                    </div>
                    <div className='flex flex-col text-center md:flex-row text-[16px] md:text-[18px]'>
                        <div className='text-Label whitespace-nowrap'>{t('Estimated date')}:&nbsp;</div>
                        <div dir='ltr'>
                            {moment(startDate).format('DD/MM/YYYY, h:mm A')} — {moment(endDate).format('DD/MM/YYYY, h:mm A')}
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-[15px] md:gap-[20px]'>
                    <MiddleButton text='to register' link='/signup?type=1' />
                    <MiddleButton text='contact us' type={1} link='/contact' />
                </div>
            </div>
            <div className='w-full lg:w-1/2 flex flex-col gap-[15px] items-center'>
                <div className='block lg:hidden text-[30px] md:text-[40px] lg:text-[44px] text-center md:text-left font-light italic'>
                    {t('Birth Professionals Support HypnoBirthing — One Day Workshop')}
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
        </div >
    )
}
