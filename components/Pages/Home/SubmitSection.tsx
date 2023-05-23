import { SubmitButton } from '@/components/Buttons'
import { SubmitInput } from '@/components/Inputs'

export default function SubmitSection() {
  return (
    <div className='relative'>
      <div className='w-full h-[400px]'>
        <img draggable='false' src='/img/submit.png' alt='' className={`w-full h-full object-cover`} />
      </div>
      <div className='absolute top-0 w-full h-full flex items-center justify-center'>
        <div className='md:top-[30px] lg:top-[75px] flex flex-col items-center gap-[20px] md:gap-[30px]'>
          <div className='text-dark text-[32px] md:text-[40px] lg:text-[60px] font-light italic'>
            Free Relaxation Gift
          </div>
          <div className='text-dark text-[16px] md:text-[18px] text-center font-normal max-w-[700px] px-[20px]'>
            A daily meditation to connect with your baby, this free audio tract strengthens the deep connection already blossoming between you and your baby. Listening to these positive and relaxing messages has so many benefits for mother and child.
          </div>
          <div className='w-full flex items-center flex-col md:justify-center  md:flex-row gap-[20px]'>
            <SubmitInput placeholder='Enter email address' />
            <SubmitButton text='get my gift' />
          </div>
        </div>
      </div>
    </div>
  )
}