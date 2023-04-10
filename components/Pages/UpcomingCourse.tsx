import { useState } from 'react'
import { SearchButton, ExpandButton } from '@/components/Buttons'
import { CategorySelect } from '../Select'
import { SelectData1 } from '@/services/Constants/SelectOptions'
import { CourseCardType, SearchResultType, SearchResult } from '@/services/Constants/CardsData'
import { CourseCard, VideoCard } from '@/components/Cards'
import { RegularTitle } from '../Titles'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export default function UpcomingCourse() {
    const [isOpen1, setIsOpen1] = useState<boolean>(true);

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1280 },
            items: 4,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1280, min: 768 },
            items: 3,
            slidesToSlide: 1
        },
        mobile2: {
            breakpoint: { max: 768, min: 530 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 530, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    return (
        <div className='pt-[70px] lg:pt-[90px] pb-[60px] md:pb-[92.5px] lg:pb-[160px] w-full flex justify-center'>
            <div className='max-w-[1225px] px-[20px] w-full'>
                <div className='w-full mt-[20px] md:mt-[30px] lg:mt-[70px]'>
                    <RegularTitle text='Upcoming Childbirth Courses' />
                </div>
                <div className='w-full mt-[20px] flex flex-col-reverse lg:flex-row md:justify-between lg:items-center gap-[20px] md:gap-x-[35px]'>
                    <div className='flex flex-col gap-[20px]'>
                        <p className={`${isOpen1 ? 'line-clamp-6' : 'line-clamp-0'} transition duration-300 paragraph text-[16px]`}>
                            <div>We&apos;d like to invite you and your birth companion to a childbirth preparation class at Pashut Laledet, the Center for HypnoBirthing in Israel. This comprehensive course will prepare you for a gentle and calm birth and help you come to the realization that your body and your baby actually already know how to birth! What often gets in the way is the mind.</div>
                            <br />
                            <div>Pashut Laledet&apos;s course combines practical knowledge with a vast array of tools for relaxing your mind on the birthing day and letting your body do its job. We welcome you to check out our Course Content to learn more about what specific tools and knowledge you will learn. Another important aspect of the HypnoBirthing mission is teaching all of the birthing women and their companions communication tools that will help them have a more relaxed birth and allow them to play an active role in the decision making of their own experience.</div>
                            <br />
                            <div>We recommend starting the course anytime between weeks 22-32 of pregnancy. You can enter your approximate due date and the area you would like to find a class in the search and we can help you find relevant courses.</div>
                            <br />
                            <div>Please note that the course can be either face to face or via zoom. Next to each specific course you will see if it is only face to face, on zoom, or if both options are offered.</div>
                            <br />
                            <div>You can learn more about reimbursement for the childbirth preparation courses through your health insurance “Kupat Holim” here. In general depending on your insurance company and level of insurance you may be able to receive up to a 75% refund on the course.</div>
                        </p>
                        <div onClick={() => setIsOpen1(!isOpen1)}>
                            <ExpandButton />
                        </div>
                    </div>
                    <div className='w-full lg:min-w-[500px] sm:max-w-[500px]'>
                        <div className='w-full aspect-w-16 aspect-h-9 min-h-[217px]'>
                            <VideoCard title='HypnoBirthing' videoUrl='YGxKPJDzok8' style='w-full' />
                        </div>
                    </div>
                </div>
                <div className='mt-[30px] lg:mt-[40px] w-full max-w-[1068px] flex flex-col md:flex-row items-end gap-[10px]'>
                    {/* <CategorySelect category='Area' selectItems={SelectData1} />
                    <CategorySelect category='Estimated date of birth' selectItems={SelectData1} />
                    <CategorySelect category='Teacher' selectItems={SelectData1} /> */}
                    <SearchButton />
                </div>
                <div className='mt-[20px] md:mt-[30px] lg:mt-[40px] flex flex-col gap-[20px] lg:gap-[40px]'>
                    {SearchResult.map((MonthData: SearchResultType, index: number) => (
                        <div key={index} className='flex flex-col gap-[25px]'>
                            <div className='text-dark font-medium text-[28px]'>Month:&nbsp;{months[MonthData.month - 1]}</div>
                            <Carousel
                                draggable={false}
                                infinite
                                ssr
                                responsive={responsive}
                                containerClass='carousel-container'
                                shouldResetAutoplay={false}
                            >
                                {MonthData.cards.map((card: CourseCardType, index: number) => (
                                    <div key={index} className='min-[530px]:mx-[12.5px]'>
                                        <CourseCard date={card.date} title={card.title} location={card.location} teacher={card.teacher} />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    ))}
                </div>
                <style>{`
                    .react-multiple-carousel__arrow {
                        background: #DFD3BC;
                    }
                    .react-multiple-carousel__arrow--left {
                        left: calc(2% + 1px);
                    }
                    .react-multiple-carousel__arrow--right {
                        right: calc(2% + 1px);
                    }
                    `
                }
                </style>
            </div>
        </div>
    )
}
