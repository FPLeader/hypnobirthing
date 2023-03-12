import { IntroductionSection, OurGoalsSectioin, TeamSection } from './Sections'
import { PromoteBar, UpcomingClassesBar, Banner } from '@/components/Sections'

export default function AboutUsPage() {
    return (
        <div className='pt-[70px] md:pt-[90px] w-full'>
            <Banner title='About Us' image='/img/banner7.png' />
            <div className='mt-[20px] md:mt-[30px] lg:mt-[70px] flex flex-col gap-[20px] md:gap-[40px] lg:gap-[70px]'>
                <IntroductionSection />
                <OurGoalsSectioin />
                <TeamSection />
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