import { HomeTitle } from '@/components/Titles'
import { RegularButton } from '@/components/Buttons'
import { FeedbackCard } from '@/components/Cards'
import { FeedbackCards } from '@/services/Constants/Home/FeedbackCardsData'

export default function FeedbackSection() {

  const style = {
    dividerWrapper: 'w-full md:w-0 flex justify-center items-center',
    dividerInner: 'w-full md:w-0 h-full md:max-h-[76px] max-w-[100px] border-[2px] border-gray_1'
  }

  return (
    <div className='py-[20px] md:py-[80px] lg:py-[120px] mx-[20px] flex justify-center'>
      <div className='max-w-[1225px] w-full'>
        <div className='md:flex md:justify-between md:items-end w-full'>
          <HomeTitle text='What People Are Saying' />
          <div className='hidden md:block'>
            <RegularButton text='Reviews' />
          </div>
        </div>
        <div className='w-full h-max mt-[20px] md:mt-[42px] lg:mt-[70px] flex flex-col md:flex-row justify-between gap-[20px] md:gap-[20px] lg:gap-[34px]'>
          <FeedbackCard rating={FeedbackCards[0].rating} title={FeedbackCards[0].title} name={FeedbackCards[0].name} />
          <div className={style.dividerWrapper} >
            <div className={style.dividerInner} />
          </div>
          <FeedbackCard rating={FeedbackCards[1].rating} title={FeedbackCards[1].title} name={FeedbackCards[1].name} />
          <div className={style.dividerWrapper} >
            <div className={style.dividerInner} ></div>
          </div>
          <FeedbackCard rating={FeedbackCards[2].rating} title={FeedbackCards[2].title} name={FeedbackCards[2].name} />
        </div>
        <div className='flex justify-center mt-[20px] block md:hidden'>
          <RegularButton text='Reviews' />
        </div>
      </div>
    </div>
  )
}