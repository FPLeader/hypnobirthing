import { MiddleButton } from '@/components/Buttons'
import { isImageOrVideoOrYoutube } from '@/components/Functions'
import { VideoCard } from '@/components/Cards'
import { useTranslation } from 'react-i18next'

interface PageProps {
    title: string,
    text: string,
    fileName: string,
}

export default function Postpartum({
    title,
    text,
    fileName
}: PageProps) {
    // language option
    const { t } = useTranslation();

    return (
        <div className='flex flex-col gap-[16px]'>
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
                <div className='w-full max-lg:row-start-1 text-dark flex flex-col gap-[12px] md:gap-[16px]'>
                    <div className='text-[30px] md:text-[40px] lg:text-[44px] font-light italic'>
                        {title}
                    </div>
                    <div className='whitespace-pre-line text-[16px] md:text-[18px] lg:text-[20px] md:tracking-wide lg:leading-loose'>
                        {text}
                    </div>
                    <div className='hidden lg:block'>
                        <MiddleButton text={t("List of Doula's")} link='/ourbirthpros' />
                    </div>
                </div>
            </div>
            <div className='block lg:hidden mt-[12px] md:mt-[20px]'>
                <MiddleButton text={t("List of Doula's")} link='/ourbirthpros' />
            </div>
        </div>
    )
}