import { TeacherProfileCard } from '@/components/Cards'

export default function Introduction() {
  return (
    <div className='w-full bg-bcg_2 py-[20px] md:py-[30px] lg:pt-[50px] pb-[82px]'>
      <div className='w-full flex justify-center'>
        <div className='w-full max-w-[1225px] mx-[20px] relative'>
          <div className='min-[1225px]:max-w-[805px] lg:max-w-[calc(100vw-460px)] text-dark text-center md:text-left flex flex-col gap-[8px]'>
            <div className='lg:mt-[20px] capitalize text-[18px] underline underline-offset-4 decoration-2 decoration-beighe'>sharon peled</div>
            <div className='text-[32px] md:text-[40px] lg:text-[44px] italic font-light'>Zoom Prenatal Course</div>
            <div className='flex flex-col gap-[5px]'>
              <div className='max-md:flex justify-center text-[16px] md:text-[18px]'>
                <span className='text-Label'>Location:&nbsp;</span>
                <span>Rehovot / Zoom</span>
              </div>
              <div className='flex flex-col text-center md:text-left md:flex-row text-[16px] md:text-[18px]'>
                <div className='text-Label whitespace-nowrap'>Estimated date of birth:&nbsp;</div>
                <div>June 25, 2023, 5:00 pm — September 21, 2023, 7:30 pm</div>
              </div>
            </div>
          </div>
          <div className='max-lg:w-full absolute top-[270px] min-[340px]:top-[200px] md:top-[180px] lg:top-0 right-0'>
            <TeacherProfileCard
              image='/img/teacher.png'
              name='Sharon Peled'
              title='Modern Applied Psychology & Personal Development'
              text='About the teacher'
              date={Date.now()}
            />
          </div>
        </div>
      </div>
    </div>
  )
}