import { useTranslation } from 'react-i18next'

interface SectionProps {
    lngId: number,
}

export default function IntroductionSkeleton({
    lngId
}: SectionProps) {
    const { t } = useTranslation();
    return (
        <div className='w-full bg-bcg_2 pt-[20px] md:pt-[30px] lg:pt-[50px] pb-[82px]'>
            <div className='w-full flex justify-center'>
                <div className='w-full max-w-[1225px] mx-[20px] relative'>
                    <div className='min-[1225px]:max-w-[805px] lg:max-w-[calc(100vw-460px)] flex flex-col gap-[8px]'>
                        <div className='lg:mt-[20px] max-md:flex justify-center italic font-light'>
                            <div className='w-full max-w-[150px] h-2 bg-gray-300 rounded-full shadow animate-pulse'></div>
                        </div>
                        <div className='lg:mt-[20px] max-md:flex justify-center'>
                            <div className='w-full max-w-[250px] h-2 bg-gray-300 rounded-full shadow animate-pulse'></div>
                        </div>
                        <div className='flex flex-col gap-[5px]'>
                            <div className='flex flex-col md:flex-row gap-[5px] max-md:justify-center items-center text-[16px] md:text-[18px]'>
                                <div>
                                    {t('Category')}:&nbsp;
                                </div>
                                <div className='w-full max-w-[300px] h-2 bg-gray-300 rounded-full shadow animate-pulse'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
