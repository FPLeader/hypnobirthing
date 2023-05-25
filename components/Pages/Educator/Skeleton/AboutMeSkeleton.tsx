import { useTranslation } from 'react-i18next'

export default function AboutMeSkeleton() {
    const { t } = useTranslation();

    return (
        <div className='flex flex-col gap-[20px] lg:gap-[40px]'>
            <div className='text-dark flex flex-col gap-[16px]'>
                <div className='text-[24px] lg:text-[28px] font-medium'>
                    {t('About me')}
                </div>
                <div className='flex flex-col gap-[20px]'>
                    <div className='w-full h-2 bg-gray-300 rounded-full shadow animate-pulse'></div>
                    <div className='w-full h-2 bg-gray-300 rounded-full shadow animate-pulse'></div>
                    <div className='w-full h-2 bg-gray-300 rounded-full shadow animate-pulse'></div>
                    <div className='w-full h-2 bg-gray-300 rounded-full shadow animate-pulse'></div>
                    <div className='w-full max-w-[150px] h-2 bg-gray-300 rounded-full shadow animate-pulse'></div>
                </div>
            </div>

            <div className='text-dark flex flex-col gap-[16px]'>
                <div className='text-[24px] lg:text-[28px] font-medium'>
                    {t('My skills')}
                </div>
                <div className='flex flex-wrap gap-[16px]'>
                    {Array.from({ length: 6 }, (_, index: number) => (
                        <div
                            key={`sk-skill-${index}`}
                            className={`w-max py-[2px] px-[8px] animate-pulse bg-gray-300 rounded-[6px]`}
                        >
                            <div className='w-[40px] h-[14px]'></div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}
