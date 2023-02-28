import { SearchButton } from '@/components/Buttons'
import { CategorySelect } from '../Select'
import { SelectData1 } from '@/services/Constants/SelectOptions'
import { CourseCardType, SearchResultType, SearchResult } from '@/services/Constants/CardsData'
import { CourseCard, VideoCard } from '@/components/Cards'

export default function UpcomingCourse() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    return (
        <div className='pb-[60px] md:pb-[92.5px] lg:pb-[160px] w-full flex justify-center pt-[70px] lg:pt-[90px]'>
            <div className='max-w-[1225px] mx-[20px] w-full'>
                <div className='pt-[25px] md:pt-[30px] lg:pt-[50px] text-[32px] md:text-[40px] lg:text-[60px] text-center md:text-left text-dark font-light italic'>
                    Upcoming Childbirth Courses
                </div>
                <div className='mt-[20px] flex flex-col-reverse lg:flex-row md:justify-between md:items-center gap-[20px] md:gap-x-[35px]'>
                    <div className='text-[16px]'>
                        <div>We&apos;d like to invite you and your birth companion to a childbirth preparation class at Pashut Laledet, the Center for HypnoBirthing in Israel. This comprehensive course will prepare you for a gentle and calm birth and help you come to the realization that your body and your baby actually already know how to birth! What often gets in the way is the mind.</div>
                        <br />
                        <div>Pashut Laledet&apos;s course combines practical knowledge with a vast array of tools for relaxing your mind on the birthing day and letting your body do its job. We welcome you to check out our Course Content to learn more about what specific tools and knowledge you will learn. Another important aspect of the HypnoBirthing mission is teaching all of the birthing women and their companions communication tools that will help them have a more relaxed birth and allow them to play an active role in the decision making of their own experience.</div>
                        <br />
                        <div>We recommend starting the course anytime between weeks 22-32 of pregnancy. You can enter your approximate due date and the area you would like to find a class in the search and we can help you find relevant courses.</div>
                        <br />
                        <div>Please note that the course can be either face to face or via zoom. Next to each specific course you will see if it is only face to face, on zoom, or if both options are offered.</div>
                        <br />
                        <div>You can learn more about reimbursement for the childbirth preparation courses through your health insurance “Kupat Holim” here. In general depending on your insurance company and level of insurance you may be able to receive up to a 75% refund on the course.</div>
                    </div>
                    <div className='md:min-w-[385px] h-[217px] border-[4px] border-[#DFD3BC38] rounded-[10px] bg-gradient-to-r from-[#DFD3BC38] to-[#DFD3BC38] overflow-hidden'>
                        <VideoCard title='HypnoBirthing' code='YGxKPJDzok8' />
                    </div>
                </div>
                <div className='mt-[30px] lg:mt-[40px] w-full max-w-[1068px] flex flex-col md:flex-row items-end gap-[10px]'>
                    <CategorySelect category='Area' selectItems={SelectData1} />
                    <CategorySelect category='Estimated date of birth' selectItems={SelectData1} />
                    <CategorySelect category='Teacher' selectItems={SelectData1} />
                    <SearchButton />
                </div>
                <div className='mt-[20px] md:mt-[30px] lg:mt-[40px] flex flex-col gap-[20px] lg:gap-[40px]'>
                    {SearchResult.map((MonthData: SearchResultType, index: number) => (
                        <div key={index} className='flex flex-col gap-[25px]'>
                            <div className='text-dark font-medium text-[28px]'>Month:&nbsp;{months[MonthData.month - 1]}</div>
                            <div className='flex flex-col md:grid md:grid-cols-3 gap-[20px] md:gap-[35px]'>
                                {MonthData.cards.map((card: CourseCardType, index: number) => (
                                    <div key={index}>
                                        <CourseCard date={card.date} title={card.title} location={card.location} teacher={card.teacher} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
