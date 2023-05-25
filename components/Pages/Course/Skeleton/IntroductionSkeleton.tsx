interface SectionProps {
    lngId: number,
}

export default function IntroductionSkeleton({
    lngId
}: SectionProps) {
    return (
        <div className='w-full bg-bcg_2 py-[20px] md:py-[30px] lg:py-[50px] lg:pb-[82px]'>
            <div className='w-full flex justify-center'>
                <div className='w-full max-w-[1225px] mx-[20px]'>
                    <div className='lg:mt-[20px]'>
                        <div className='w-full max-w-[250px] h-2 bg-gray-300 rounded-full'></div>
                    </div>
                    <div className='text-[32px] md:text-[40px] lg:text-[44px] italic font-light'>
                        Zoom Prenatal Course
                    </div>
                    <div className='flex flex-col gap-[8px]'>
                        <div className='flex items-center text-[16px] md:text-[18px]'>
                            <div className='text-Label'>
                                Location:&nbsp;
                            </div>
                            <div className='w-full max-w-[300px] h-2 bg-gray-300 rounded-full shadow animate-pulse'></div>
                        </div>
                        <div className={`flex items-center text-center ${lngId === 0 ? 'md:text-left' : 'md:text-right'} md:flex-row text-[16px] md:text-[18px]`}>
                            <div className='text-Label whitespace-nowrap'>
                                Course start date:&nbsp;
                            </div>
                            <div className='w-full max-w-[200px] h-2 bg-gray-300 rounded-full shadow animate-pulse'></div>
                        </div>
                        <div className='w-full max-w-[100px] h-2 bg-gray-300 rounded-full shadow animate-pulse'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
