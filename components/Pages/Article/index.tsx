import { PromoteBar, UpcomingClassesBar } from '@/components/Sections'
import { OurBlogPostsSection, BirthStoriesSection } from './Sections'

export default function Article() {
    return (
        <>
            <div className='pt-[70px] md:pt-[90px]'>
                <OurBlogPostsSection />
            </div>
            <div className='mt-[20px] md:mt-[30px] lg:mt-[48px]'>
                <BirthStoriesSection />
            </div>
            <div className='mt-[20px] md:mt-[70px] lg:mt-[100px]'>
                <PromoteBar />
            </div>
            <div className='mt-[20px] md:mt-[40px]'>
                <UpcomingClassesBar
                    title='Upcoming Childbirth Classes'
                    buttonText='Learn More'
                    link='\upcomingcourse'
                />
            </div>
        </>
    )
}