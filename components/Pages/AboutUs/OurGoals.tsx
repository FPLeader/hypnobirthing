import { OurGoalsData } from '@/services/Constants/Report'

export default function OurGoals() {
    return (
        <div className='w-full flex justify-center'>
            <div className='w-full max-w-[1225px] mx-[20px] text-dark flex flex-col gap-[20px] md:gap-[30px]'>
                <div className='text-[30px] md:text-[40px] lg:text-[44px] text-center font-light italic'>Our goals are:</div>
                <div className='grid md:grid-cols-2 gap-[15px]'>
                    {OurGoalsData.map((obj: string, index: number) => (
                        <div key={index} className='text-[16px] md:text-[18px] lg:text-[20px] px-[14px] md:px-[18px] lg:px-[24px] py-[12px] md:py-[14px] lg:py-[16px] bg-bcg_2 rounded-[10px]'>
                            {obj}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}