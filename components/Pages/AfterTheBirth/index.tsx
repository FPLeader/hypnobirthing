import { Banner, UpcomingClassesBar } from '@/components/Sections'
import { IntroductionSection, SoftLandingSection, BreastfeedingSection, CourseSection, PostpartumSection, NewMomSection } from './Sections'

export default function index() {
    return (
        <div className='pt-[70px] md:pt-[90px] w-full'>
            <Banner title='After Birth and Breastfeeding' image='/img/banner10.png' />
            <div className='w-full flex justify-center mt-[20px] md:mt-[30px] lg:mt-[70px]'>
                <div className='w-full max-w-[1225px] mx-[20px] flex flex-col gap-[20px] md:gap-[30px] lg:gap-[70px]'>
                    <IntroductionSection />
                    <SoftLandingSection />
                    <BreastfeedingSection />
                    <CourseSection />
                    <PostpartumSection />
                    <CourseSection />
                    <NewMomSection />
                </div>
            </div>
            <div className='mt-[20px] md:mt-[40px]'>
                <UpcomingClassesBar title='Upcoming Childbirth Classes' buttonText='Learn More' link='\upcomingcourse' />
            </div>
        </div>
    )
}