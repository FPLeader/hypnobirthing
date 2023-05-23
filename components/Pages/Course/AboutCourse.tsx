import { ExpandCard } from '@/components/Cards'
import { ExpandCardsEn } from '@/services/Constants/CardsData'
import { ExpandButton } from '@/components/Buttons'
import { useState } from 'react'

interface SectionProps {
  ds_details: string
}

export default function AboutCourse({
  ds_details
}: SectionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className='flex flex-col gap-[20px] lg:gap-[40px]'>
      <ExpandCard
        key={`expand-card-1`}
        title={ExpandCardsEn[0].title}
        content={ExpandCardsEn[0].content}
      />
      <div className='text-dark flex flex-col gap-[16px]'>
        <div className='text-[24px] lg:text-[28px] font-medium'>
          Payment
        </div>
        <div className='relative'>
          <div className={`text-[16px] lg:text-[18px] ${isOpen ? 'h-full' : 'h-[120px]'} overflow-hidden transition-all duration-500`}>
            The registration fee is a deposit to hold your place in the group.<br />
            The balance of the fee is due by the start of your course, payment for the balance is arranged with your educator.<br />
            Click <a href={'/coursecontent'} target='_blank' rel='noreferrer' className='underline font-bold italic'>here</a> to read more about the course content.<br />
            Click <a href={'/insurance'} target='_blank' rel='noreferrer' className='underline font-bold italic'>here</a> to find out about insurance refunds.
          </div>
          <div className={`z-1 inset-x-0 absolute bottom-0 bg-gradient-to-t from-bcg pt-[50px] pointer-events-none transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
          </div>
        </div>
        <div className='w-max' onClick={() => setIsOpen(!isOpen)}>
          <ExpandButton />
        </div>
      </div>
      <ExpandCard
        key={`expand-card-2`}
        title={ExpandCardsEn[1].title}
        content={ExpandCardsEn[1].content}
      />
    </div >
  )
}