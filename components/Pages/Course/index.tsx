import {
  IntroductionSection,
  AboutClassSection,
  SubmitSection,
  FaqSection,
  RelatedCoursesSection,
  MyContactsSection,
  FeedbackSection
} from './Sections'
import { PromoteBar, UpcomingClassesBar } from '@/components/Sections'
import { useEffect } from 'react'

interface PageProps {
  courseId: string,
}

export default function Index({
  courseId = ''
}: PageProps) {

  useEffect(() => {
    if (courseId !== '') {
    }
  }, [courseId])

  return (
    <div className='pt-[70px] md:pt-[90px] w-full'>
      <IntroductionSection />
      <div className='w-full flex justify-center mt-[20px] md:mt-[30px] lg:mt-[70px]'>
        <div className='w-full max-w-[1225px] mx-[20px]'>
          <div className='min-[1260px]:max-w-[805px] lg:max-w-[calc(100vw-460px)] w-full max-md:mt-[520px] max-lg:mt-[240px] flex flex-col gap-[20px] md:gap-[30px] lg:gap-[70px]'>
            <AboutClassSection />
            <SubmitSection
              lngId={0}
            />
            <FaqSection />
            <RelatedCoursesSection />
            <MyContactsSection />
          </div>
        </div>
      </div>
      <div className='mt-[20px] md:mt-[70px] lg:mt-[100px]'>
        <FeedbackSection />
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
    </div>
  )
}