import { UploadButton } from '@/components/Buttons'

export default function AboutMe() {

  return (
    <div className='flex flex-col lg:gap-[40px]'>
      <div className='text-dark flex flex-col gap-[16px]'>
        <div className='text-[24px] lg:text-[28px] font-medium'>About me</div>
        <div className='flex flex-col gap-[16px]'>
          <div className='text-[16px] lg:text-[18px] text-Label transition-all duration-500'>
            To help students learn more about you, your curriculum vitae should include information about your reputation, personal qualities and interests.
          </div>
          <UploadButton text='Add description' />
        </div>
      </div>
    </div>
  )
}