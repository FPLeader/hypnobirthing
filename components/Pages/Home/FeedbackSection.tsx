import { HomeTitle } from '@/components/Titles'
import { RegularButton } from '@/components/Buttons'
import { FeedbackCard } from '@/components/Cards'
import { FeedbackCards, FeedbackCardType } from '@/services/Constants/Home/FeedbackCardsData'

export default function FeedbackSection() {
  return (
    <div className='py-[160px] mx-[20px] flex justify-center'>
      <div className='max-w-[1536px] w-full'>
        <div className='md:flex md:justify-between md:items-end w-full'>
          <HomeTitle text='What People Are Saying' />
          <div className='hidden md:block'>
            <RegularButton text='Reviews' />
          </div>
        </div>
        <div className='mt-[30px] md:mt-[42px] lg:mt-[70px] flex flex-col md:flex-row justify-between gap-[25px] md:gap-[20px] lg:gap-[34px]'>
          {
            FeedbackCards.map((obj: FeedbackCardType, index: number) => (
              <FeedbackCard key={index} rating={obj.rating} title={obj.title} name={obj.name} />
            ))
          }
        </div>
        <div className='flex justify-center mt-[25px] block md:hidden'>
          <RegularButton text='Reviews' />
        </div>
      </div>
    </div>
  )
}