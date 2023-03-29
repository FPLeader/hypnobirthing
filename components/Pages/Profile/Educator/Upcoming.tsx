import { CourseCard } from '@/components/Cards'
import { UploadButton } from '@/components/Buttons'
import { CourseCardsData, CourseCardType } from '@/services/Constants/CardsData'

export default function Upcoming() {
  const numberOfCourses = 0;

  return (
    <div className='flex flex-col gap-[16px] text-dark'>
      <div className='text-[24px] lg:text-[28px] font-medium'>Upcoming Sessions ({numberOfCourses})</div>
      <div className='grid md:grid-cols-2 gap-[20px] md:gap-[35px]'>
        {/* {CourseCardsData.slice(0, 1).map((card: CourseCardType, index: number) => (
          <div key={index}>
            <CourseCard date={card.date} title={card.title} location={card.location} teacher={card.teacher} />
          </div>
        ))} */}
        <div className='w-full min-h-[204px] flex justify-center items-center border border-beighe rounded-[10px]'>
          <UploadButton text='add Session' />
        </div>
      </div>
    </div>
  )
}
