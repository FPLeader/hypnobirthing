import { CourseCard } from '@/components/Cards'
import { CourseCardsData, CourseCardType } from '@/services/Constants/CardsData'

export default function RelatedCourses() {
  const numberOfCourses = 2;
  return (
    <div className='flex flex-col gap-[16px]'>
      <div className='text-[24px] lg:text-[28px] font-medium'>Related courses ({numberOfCourses})</div>
      <div className='grid md:grid-cols-2 gap-[20px] md:gap-[35px]'>
        {CourseCardsData.map((card: CourseCardType, index: number) => (
          <div key={index}>
            <CourseCard date={card.date} title={card.title} location={card.location} teacher={card.teacher} />
          </div>
        ))}
      </div>
    </div>
  )
}
