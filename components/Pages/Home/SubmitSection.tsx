import { SubmitButton } from '@/components/Buttons'
import { SubmitInput } from '@/components/Inputs'

export default function SubmitSection() {
  return (
    <div className='relative h-full'>
      <img src='/img/submit.png' alt='' className='w-full min-h-[300px]' />
      <div className='absolute w-full top-[30px] lg:top-[75px] flex flex-col items-center gap-y-[20px] md:gap-y-[30px]'>
        <div className='text-dark text-[32px] md:text-[40px] lg:text-[60px] font-light italic'>Free Relaxation Gift</div>
        <div className='flex items-center flex-col md:flex-row gap-[15px]'>
          <SubmitInput placeholder='Enter email address' />
          <SubmitButton text='Submit' />
        </div>
      </div>
    </div>
  )
}
