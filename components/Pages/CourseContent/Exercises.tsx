import { CourseOutlines } from '@/services/Constants/Report'

export default function Exercises() {
    return (
        <div>
            <div className='flex flex-col gap-[10px]'>
                {CourseOutlines.map((item: string, index: number) => (
                    <div className='border border-beighe flex rounded-[8px] overflow-hidden'>
                        <div className='w-[30px] md:w-[60px] flex justify-center items-center bg-beighe'>
                            <div className='text-white text-[20px] md:text-[24px]'>{index + 1}</div>
                        </div>
                        <div className='w-full px-[16px] py-[8px] text-dark text-[16px]'>{item}</div>
                    </div>
                ))}
            </div>
            <div className='mt-[10px] text-dark text-[16px] lg:text-[18px] italic'>Please note, some of our educators add an extra lesson about postpartum care and breastfeeding</div>
        </div>
    )
}