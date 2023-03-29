import { VideoCard } from '@/components/Cards'
import { CourseOutlines } from '@/services/Constants/Report'

export default function SoftLanding() {
    return (
        <div className='flex flex-col gap-[20px] lg:gap-[30px]'>
            <div className='text-[30px] md:text-[40px] lg:text-[44px] font-light italic'>
                Soft Landing — online postpartum course
            </div>
            <div className='flex flex-col lg:flex-row items-center gap-[20px] lg:gap-[35px]'>
                <div className='w-full lg:w-1/2'>
                    <VideoCard title='Soft Landing' videoUrl='YGxKPJDzok8' style='aspect-w-16 aspect-h-9' />
                </div>
                <div className='w-full lg:w-1/2 flex flex-col gap-[20px]'>
                    <p className='text-[16px] md:text-[18px] lg:text-[20px] md:tracking-wide'>
                        We&apos;ve known for years that women in childbirth need support.Everyone knows that, but what happens next?
                        <br /><br />
                        We are so proud to present something to you that even we didn&apos;t realize how much it was missing until we started working on it.Postpartum preparation, including a full lactation preparation workshop and working with a couples coach, as a bonus.
                    </p>
                </div >
            </div>
            <div className='flex flex-col gap-[16px]'>
                <div className='font-medium text-[20px] md:text-[24px]'>List of course content</div>
                <div className='grid lg:grid-cols-2 gap-y-[10px] gap-x-[20px] lg:gap-x-[35px]'>
                    {CourseOutlines.map((item: string, index: number) => (
                        <div key={index} className='min-h-[60px] border border-beighe flex rounded-[8px] overflow-hidden'>
                            <div className='w-[30px] md:w-[60px] flex justify-center items-center bg-beighe'>
                                <div className='text-white text-[20px] md:text-[24px]'>{index + 1}</div>
                            </div>
                            <div className='w-full flex items-center'>
                                <div className='w-full px-[16px] py-[8px] text-dark text-[16px]'>{item}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}