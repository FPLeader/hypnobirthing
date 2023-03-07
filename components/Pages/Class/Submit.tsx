import { CategoryInput, Textarea } from '@/components/Inputs'
import { RegularButton } from '@/components/Buttons'

export default function Submit() {
  return (
    <div>
      <div className='bg-bcg_2 p-[20px] lg:p-[30px] rounded-[10px] flex flex-col gap-[20px]'>
        <div className='text-center md:text-left text-[24px] lg:text-[28px] font-medium'>Enrollment is needed to participate in the event</div>
        <div className='flex flex-col gap-[10px]'>
          <div className='grid md:grid-cols-2 gap-[10px]'>
            <CategoryInput category='Full name in Hebrew' placeholder='Enter your name' />
            <CategoryInput category='Full name in English' placeholder='Enter your name' />
            <CategoryInput category='Phone number' type='number' placeholder='+972' />
            <CategoryInput category='Email' placeholder='user@example.com' />
          </div>
          <Textarea category='Comments' placeholder='Enter text here' />
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center gap-[20px]'>
          <RegularButton text='submit' />
          <div className='text-center md:text-left text-Label text-[14px]'>By clicking &quot;send&quot; you accept our Terms & Conditions and Privacy Policy</div>
        </div>
      </div>
    </div>
  )
}
