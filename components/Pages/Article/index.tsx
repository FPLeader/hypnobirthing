import { PromoteBar, UpcomingClassesBar } from '@/components/Sections'
import { OurBlogPostsSection, BirthStoriesSection, MorePostsSection } from './Sections'

export default function Article() {
    return (
        <>
            <div className='pt-[70px] md:pt-[90px]'>
                <OurBlogPostsSection />
            </div>
            <div className='py-[20px] bg-bcg_2 md:py-[40px] lg:py-[60px] mt-[20px] md:mt-[40px] lg:mt-[60px]'>
                <PromoteBar />
            </div>
            <div className='mt-[20px] md:mt-[30px] lg:mt-[48px]'>
                <BirthStoriesSection />
            </div> 
            <div className='mt-[20px] md:mt-[40px] lg:mt-[60px]'>
                <MorePostsSection />
            </div>
            <div className='mt-[20px] md:mt-[40px]'>
                <UpcomingClassesBar title='Upcoming Childbirth Classes' buttonText='Learn More' link='\upcomingcourse' />
            </div>
        </>
    )
}