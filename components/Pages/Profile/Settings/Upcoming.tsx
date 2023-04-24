import { useState } from 'react'
import { CourseCard } from '@/components/Cards'
import { UploadButton } from '@/components/Buttons'
import { CourseCardsData, CourseCardType } from '@/services/Constants/CardsData'
import { AddSessionModal } from '@/components/Modals'
import { useAppSelector } from '@/services/Hooks'
import { TypeOptions } from '@/services/Constants/SelectOptions'

export default function Upcoming() {
  const { currentUser } = useAppSelector((state) => state.auth);
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
      {
        currentUser.ds_category === TypeOptions[0].value ?
          <>
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
          </>
          :
          <div>
            <div className='text-[14px] lg:text-[16px]'>You can&apos;t see this page, because your &ldquo;Pashut Laledet Certification&ldquo; is "Birth Professional Supports HypnoBirthing&ldquo;. If you want to see this page, please update &ldquo;Pashut Laledet Certification&ldquo;</div>
          </div>
      }
    </div>
  )
}
