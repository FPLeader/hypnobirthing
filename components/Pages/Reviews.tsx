import { Banner, PromoteBar, UpcomingClassesBar } from '@/components/Sections'
import { ReviewCard, VideoCard } from '../Cards'
import { ReviewCards } from '@/services/Constants/CardsData'

export default function Reviews() {

    const style = {
        VideoWrapper: 'w-full flex flex-col gap-[16px]',
        VideoTitle: 'text-center md:text-left font-medium text-[16px] md:text-[24px] text-dark',
    }

    return (
        <div className='pt-[70px] md:pt-[90px] w-full'>
            <Banner title='What People Are Saying' textStyle='center' />
            <div className='w-full mt-[20px] md:mt-[30px] lg:mt-[70px] flex justify-center'>
                <div className='w-full max-w-[1225px] mx-[20px]'>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[35px]'>
                        {/* large window */}
                        <div className='hidden lg:flex flex-col gap-[35px]'>
                            <ReviewCard
                                title={ReviewCards[0].title}
                                content={ReviewCards[0].content}
                                name={ReviewCards[0].name}
                                address={ReviewCards[0].address}
                                date={ReviewCards[0].date}
                            />
                            <img draggable={false} src='/img/review1.png' className='w-full rounded-[10px] lg:rounded-[15px] blur-lg' />
                            <ReviewCard
                                title={ReviewCards[1].title}
                                content={ReviewCards[1].content}
                                name={ReviewCards[1].name}
                                address={ReviewCards[1].address}
                                date={ReviewCards[1].date}
                            />
                        </div>
                        <div className='hidden lg:flex flex-col gap-[35px]'>
                            <VideoCard title='what people are saying' code='YGxKPJDzok8' style='max-h-[214px]' />
                            <ReviewCard
                                title={ReviewCards[2].title}
                                content={ReviewCards[2].content}
                                name={ReviewCards[2].name}
                                address={ReviewCards[2].address}
                                date={ReviewCards[2].date}
                            />
                            <ReviewCard
                                title={ReviewCards[3].title}
                                content={ReviewCards[3].content}
                                name={ReviewCards[3].name}
                                address={ReviewCards[3].address}
                                date={ReviewCards[3].date}
                            />
                        </div>
                        <div className='hidden lg:flex flex-col gap-[35px]'>
                            <ReviewCard
                                title={ReviewCards[4].title}
                                content={ReviewCards[4].content}
                                name={ReviewCards[4].name}
                                address={ReviewCards[4].address}
                                date={ReviewCards[4].date}
                            />
                            <img draggable={false} src='/img/review2.png' className='w-full rounded-[10px] lg:rounded-[15px] blur-lg' />
                            <ReviewCard
                                title={ReviewCards[5].title}
                                content={ReviewCards[5].content}
                                name={ReviewCards[5].name}
                                address={ReviewCards[5].address}
                                date={ReviewCards[5].date}
                            />
                        </div>
                        {/* md window */}
                        <div className='lg:hidden flex flex-col gap-[20px]'>
                            <ReviewCard
                                title={ReviewCards[0].title}
                                content={ReviewCards[0].content}
                                name={ReviewCards[0].name}
                                address={ReviewCards[0].address}
                                date={ReviewCards[0].date}
                            />
                            <img draggable={false} src='/img/review1.png' className='w-full rounded-[10px] lg:rounded-[15px] blur-lg' />
                            <ReviewCard
                                title={ReviewCards[1].title}
                                content={ReviewCards[1].content}
                                name={ReviewCards[1].name}
                                address={ReviewCards[1].address}
                                date={ReviewCards[1].date}
                            />
                            <VideoCard title='what people are saying' code='YGxKPJDzok8' style='max-h-[214px]' />
                            <ReviewCard
                                title={ReviewCards[2].title}
                                content={ReviewCards[2].content}
                                name={ReviewCards[2].name}
                                address={ReviewCards[2].address}
                                date={ReviewCards[2].date}
                            />
                        </div>
                        <div className='max-md:hidden lg:hidden flex flex-col gap-[20px]'>
                            <ReviewCard
                                title={ReviewCards[3].title}
                                content={ReviewCards[3].content}
                                name={ReviewCards[3].name}
                                address={ReviewCards[3].address}
                                date={ReviewCards[3].date}
                            />
                            <ReviewCard
                                title={ReviewCards[4].title}
                                content={ReviewCards[4].content}
                                name={ReviewCards[4].name}
                                address={ReviewCards[4].address}
                                date={ReviewCards[4].date}
                            />
                            <img draggable={false} src='/img/review2.png' className='w-full rounded-[10px] lg:rounded-[15px] blur-lg' />
                            <ReviewCard
                                title={ReviewCards[5].title}
                                content={ReviewCards[5].content}
                                name={ReviewCards[5].name}
                                address={ReviewCards[5].address}
                                date={ReviewCards[5].date}
                            />
                        </div>
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