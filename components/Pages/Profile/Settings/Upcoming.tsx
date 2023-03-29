import { useState } from 'react'
import { CourseCard } from '@/components/Cards'
import { UploadButton } from '@/components/Buttons'
import { CourseCardsData, CourseCardType } from '@/services/Constants/CardsData'
import { AddSessionModal } from '@/components/Modals'

export default function Upcoming() {
  const numberOfCourses = 2;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div className='flex flex-col gap-[16px]'>
      <AddSessionModal
        isOpen={isOpen}
        closeModal={closeModal}
      />
      <div className='text-[24px] lg:text-[28px] font-medium'>Upcoming Sessions ({numberOfCourses})</div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[35px]'>
        {CourseCardsData.slice(0, 2).map((card: CourseCardType, index: number) => (
          <div key={index}>
            <CourseCard isEducator={true} disabled={true} date={card.date} title={card.title} location={card.location} teacher={card.teacher} />
          </div>
        ))}
        <div className='w-full min-h-[204px] flex justify-center items-center border border-beighe rounded-[10px]'
          onClick={openModal}
        >
          <UploadButton
            text='add Session'
          />
        </div>
      </div>
    </div>
  )
}
