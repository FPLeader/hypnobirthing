import { Banner, PromoteBar, UpcomingClassesBar } from '@/components/Sections'
import { FaqData, FaqType } from '@/services/Constants/FaqData'
import { FaqItem, QuestionBox } from './Sections'

export default function Faq() {
    return (
        <div className='pt-[70px] md:pt-[90px]'>
            <Banner image='/img/banner3.png' />
            <div className='w-full flex justify-center'>
                <div className='max-w-[1225px] w-full px-[20px] mt-[20px] md:mt-[30px] lg:mt-[70px]'>
                    <div className='flex flex-col md:flex-row gap-[20px] md:gap-[35px]'>
                        <div className='flex flex-col gap-y-[16px]'>
                            {FaqData.map((obj: FaqType, index: number) => (
                                <FaqItem key={index} title={obj.title} content={obj.content} />
                            ))}
                        </div>
                        <QuestionBox />
                    </div>
                </div>
            </div>
            <div className='mt-[20px] md:mt-[80px] lg:mt-[120px]'>
                <PromoteBar />
            </div>
            <div className='mt-[20px] md:mt-[40px]'>
                <UpcomingClassesBar title='Upcoming Childbirth Classes' buttonText='Learn More' link='\upcomingcourse' />
            </div>
        </div>
    )
}