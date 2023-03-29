import { Banner, PromoteBar, UpcomingClassesBar } from '@/components/Sections'
import { ReviewCard, VideoCard } from '../Cards'
import { ReviewCards } from '@/services/Constants/CardsData'

export default function Reviews() {
    const style = {
        ImgStyle: `w-full h-full max-md:max-h-[310px] min-h-[270px] object-cover rounded-[10px] lg:rounded-[15px] ${process.env.DEV_MODE && 'blur-lg'}`,
    }
    return (
        <div className='pt-[70px] md:pt-[90px] w-full'>
            <Banner title='What People Are Saying' image='/img/banner5.png' />
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
                            <img draggable={false} src='/img/review1.png' className={style.ImgStyle} />
                            <ReviewCard
                                title={ReviewCards[1].title}
                                content={ReviewCards[1].content}
                                name={ReviewCards[1].name}
                                address={ReviewCards[1].address}
                                date={ReviewCards[1].date}
                            />
                        </div>
                        <div className='hidden lg:flex flex-col gap-[35px]'>
                            <div className='aspect-w-16 aspect-h-9 min-h-[214px]'>
                                <VideoCard title='what people are saying' code='YGxKPJDzok8' style='w-full' />
                            </div>
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
                            <img draggable={false} src='/img/review2.png' className={style.ImgStyle} />
                            <ReviewCard
                                title={ReviewCards[5].title}
                                content={ReviewCards[5].content}
                                name={ReviewCards[5].name}
                                address={ReviewCards[5].address}
                                date={ReviewCards[5].date}
                            />
                        </div>
                        {/* md window */}
                        <div className='lg:hidden grid gap-[20px]'>
                            <ReviewCard
                                title={ReviewCards[0].title}
                                content={ReviewCards[0].content}
                                name={ReviewCards[0].name}
                                address={ReviewCards[0].address}
                                date={ReviewCards[0].date}
                            />
                            <img draggable={false} src='/img/review1.png' className={style.ImgStyle} />
                            <ReviewCard
                                title={ReviewCards[1].title}
                                content={ReviewCards[1].content}
                                name={ReviewCards[1].name}
                                address={ReviewCards[1].address}
                                date={ReviewCards[1].date}
                            />
                            <div className='aspect-w-16 aspect-h-9'>
                                <VideoCard title='what people are saying' videoUrl='YGxKPJDzok8' style='w-full min-h-[214px]' />
                            </div>
                            <ReviewCard
                                title={ReviewCards[2].title}
                                content={ReviewCards[2].content}
                                name={ReviewCards[2].name}
                                address={ReviewCards[2].address}
                                date={ReviewCards[2].date}
                            />
                        </div>
                        <div className='lg:hidden grid gap-[20px]'>
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
                            <div className='max-md:row-start-1'>
                                <img draggable={false} src='/img/review2.png' className={style.ImgStyle} />
                            </div>
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