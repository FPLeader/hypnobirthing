import { Banner, UpcomingClassesBar } from '@/components/Sections'
import { IntroductionSection, FeedbackSection, BookSection, FounderSection, ReportSection } from './Sections'

export default function WhatHypnoBirthing() {
    return (
        <>
            <div className='pt-[70px] md:pt-[90px]'>
                <Banner title='What is HypnoBirthing?' />
            </div>
            <div className='mt-[20px] md:mt-[30px] lg:mt-[70px] flex flex-col gap-[20px] md:gap-[60px] lg:gap-[100px]'>
                <IntroductionSection />
                <FeedbackSection />
                <BookSection />
                <FounderSection />
                <ReportSection />
                <UpcomingClassesBar title='Find a HypnoBirthing class near me' buttonText='Learn More' link='\upcomingcourse' />
            </div>
        </>
    )
}