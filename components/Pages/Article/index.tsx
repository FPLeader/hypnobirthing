import { PromoteBar, UpcomingClassesBar } from '@/components/Sections'
import { OurBlogPostsSection, LatestPostsSection, BirthStoriesSection, MorePostsSection } from './Sections'

export default function Article() {
    return (
        <>
            <div className='pt-[70px] md:pt-[90px]'>
                <OurBlogPostsSection />
            </div>
            <div className='mt-[20px] md:mt-[40px] lg:mt-[60px]'>
                <LatestPostsSection />
            </div>
            <BirthStoriesSection />
            <div className='mt-[20px] md:mt-[40px] lg:mt-[60px]'>
            <MorePostsSection />
            </div>
            <div className='mt-[20px] md:mt-[80px] lg:mt-[120px]'>
                <PromoteBar />
            </div>
            <div className='mt-[20px] md:mt-[40px]'>
                <UpcomingClassesBar title='Upcoming Childbirth Classes' buttonText='Learn More' link='\upcomingcourse' />
            </div>
        </>
    )
}