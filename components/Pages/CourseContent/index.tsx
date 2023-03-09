import { Banner, PromoteBar, UpcomingClassesBar } from '@/components/Sections'
import { RegularTitle } from '@/components/Titles'
import { ExerciseSection, TechniquesSection } from './Sections'

export default function index() {
    return (
        <div className='pt-[70px] md:pt-[90px] w-full'>
            <Banner title='Course Content' image='/img/banner8.png' />
            <div className='w-full flex justify-center'>
                <div className='w-full max-w-[1225px] mx-[20px]'>
                    <div className='mt-[20px] md:mt-[30px] lg:mt-[70px]'>
                        <RegularTitle text='Course Content' />
                    </div>
                    <div className='lg:w-1/2 lg:pr-[15px] text-dark text-[16px] mt-[10px] md:mt-[20px]'>
                        Over the course of 5 weeks, your instructor will lead you through exercises to identify & release your fears regarding birthing and replace those fears with instinctive knowledge, and confidence.
                    </div>
                    <div className='w-full mt-[20px] grid lg:grid-cols-2 gap-[20px] md:gap-[30px] lg:gap-x-[40px] lg:gap-y-[70px]'>
                        <ExerciseSection />
                        <img draggable='false' src='/img/coursecontent1.png' alt='' className='w-full h-full max-lg:max-h-[480px] rounded-[10px] lg:rounded-[15px] object-cover' />
                        <img draggable='false' src='/img/coursecontent2.png' alt='' className='w-full h-full max-lg:max-h-[985px] rounded-[10px] lg:rounded-[15px] object-cover' />
                        <div className='max-lg:row-start-3'>
                            <TechniquesSection />
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