import { FeedbackCard } from '@/components/Cards'
import {
  FeedbackCardType,
  CurrentCourseFeedbackCards
} from '@/services/Constants/Home/FeedbackCardsData'

export default function Feedback() {
  const style = {
    DividerWrapper: 'w-full md:w-0 flex justify-center items-center',
    DividerInner: 'w-full md:w-0 h-full md:max-h-[76px] max-w-[100px] border border-gray_1'
  }

  return (
    <div className='w-full flex justify-center'>
      <div className='w-full max-w-[1225px] mx-[20px]'>
        <div className='w-full h-max mt-[20px] md:mt-[42px] lg:mt-[70px] grid md:grid-cols-3 gap-[20px] md:gap-[20px] lg:gap-[34px]'>
          {CurrentCourseFeedbackCards.map((CardData: FeedbackCardType, index: number) => (
            <div key={index} className='flex flex-col md:flex-row justify-between gap-[20px] md:gap-[20px] lg:gap-[34px]'>
              {index !== 0 && <div className={style.DividerWrapper}>
                <div className={style.DividerInner} />
              </div>}
              <FeedbackCard rating={CardData.rating} content={CardData.title} name={CardData.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
