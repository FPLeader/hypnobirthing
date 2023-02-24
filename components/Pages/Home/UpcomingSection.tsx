import { RegularButton } from '@/components/Buttons'
import { UpcomingCard } from '@/components/Cards'
import { UpcomingCards, UpcomingCardType } from '@/services/Constants/Home/UpcomingCardsData'
import { HomeTitle } from '@/components/Titles'

export default function UpcomingSection() {
  return (
    <div className='pt-[160px] pb-[60px] md:pb-[9px] lg:pb-[20px] bg-bcg_2 w-full flex justify-center'>
      <div className='max-w-[1536px] mx-[20px] w-full'>
        <div className='md:flex md:justify-between md:items-end w-full'>
          <HomeTitle text='Upcoming Childbirth Classes' />
          <div className='hidden md:block'>
            <RegularButton text='more classes' />
          </div>
        </div>
        <div className='mt-[30px] md:mt-[42px] lg:mt-[70px] flex flex-col md:flex-row justify-between gap-[25px] md:gap-[20px] lg:gap-[34px]'>
          {
            UpcomingCards.map((obj: UpcomingCardType, index: number) => (
              <UpcomingCard key={index} id={obj.id} image={obj.image} title={obj.title} header={obj.header} content={obj.content} author={obj.author} />
            ))
          }
        </div>
        <div className='flex justify-center mt-[25px] block md:hidden'>
          <RegularButton text='more classes' />
        </div>
        <div className='mt-[25px] md:mt-[53px] lg:mt-[104px] text-center md:text-right text-Label text-[14px]'>photos with a Shelley Lawnikanus</div>
      </div>
    </div>
  )
}