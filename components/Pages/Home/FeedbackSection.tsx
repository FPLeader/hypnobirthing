import { HomeTitle } from '@/components/Titles'
import { RegularButton } from '@/components/Buttons'
import { FeedbackCard } from '@/components/Cards'
import { FeedbackCardType, FeedbackCards } from '@/services/Constants/Home/FeedbackCardsData'

export default function FeedbackSection() {
  const style = {
    DividerWrapper: 'w-full md:w-0 flex justify-center items-center',
    DividerInner: 'w-full md:w-0 h-full md:max-h-[76px] max-w-[100px] border border-gray_1'
  }

  return (
    <div className='py-[30px] md:py-[80px] lg:py-[120px] mx-[20px] flex justify-center'>
      <div className='max-w-[1225px] w-full'>
        <div className='md:flex md:justify-between md:items-end w-full'>
          <HomeTitle
            text='What People Are Saying'
            link='/reviews'
          />
          <div className='hidden md:block'>
            <RegularButton text='Reviews' />
          </div>
        </div>
        <div className='w-full h-max mt-[20px] md:mt-[42px] lg:mt-[70px] grid md:grid-cols-3 justify-between gap-[20px] md:gap-[20px] lg:gap-[34px]'>
          {FeedbackCards.map((CardData: FeedbackCardType, index: number) => (
            <div key={index} className='flex flex-col md:flex-row justify-between gap-[20px] md:gap-[20px] lg:gap-[34px]'>
              {index !== 0 && <div className={style.DividerWrapper} >
                <div className={style.DividerInner} />
              </div>}
              <FeedbackCard rating={CardData.rating} content={CardData.title} name={CardData.name} />
            </div>
          ))}
        </div>
        <div className='flex justify-center mt-[20px] md:hidden'>
          <RegularButton text='Reviews' />
        </div>
      </div>
    </div>
  )
}