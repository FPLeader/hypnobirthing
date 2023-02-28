import { RegularButton } from '../Buttons'
import { HomeTitle } from '../Titles'

export default function UpcomingClassesBar() {
  return (
    <div className='w-full py-[20px] md:py-[80px] lg:py-[100px] bg-bcg_2 flex justify-center'>
      <div className='max-w-[1225px] mx-[20px] w-full flex flex-col gap-[20px] lg:flex-row justify-between items-center'>
        <HomeTitle text='Upcoming Childbirth Classes' />
        <RegularButton text='Learn more' />
      </div>
    </div>
  )
}