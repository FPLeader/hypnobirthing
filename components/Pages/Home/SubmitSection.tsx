import { SubmitButton } from '@/components/Buttons'
import { SubmitInput } from '@/components/Inputs'

export default function SubmitSection() {
  return (
    <div className='relative h-full'>
      <img draggable='false' src='/img/submit.png' alt='' className='w-full min-h-[300px]' />
      <div className='absolute w-full top-[20px] md:top-[30px] lg:top-[75px] flex flex-col items-center gap-y-[20px] md:gap-y-[30px]'>
        <div className='text-dark text-[32px] md:text-[40px] lg:text-[60px] font-light italic'>Free Relaxation Gift</div>
        <div className='w-full flex items-center flex-col md:justify-center  md:flex-row gap-[20px]'>
          <SubmitInput placeholder='Enter email address' />
          <SubmitButton text='Submit' />
        </div>
      </div>
    </div>
  )
}