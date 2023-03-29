import { BadgeCard, VideoCard } from '@/components/Cards'

export default function Introduction() {
  return (
    <div className='w-full bg-bcg_2 pt-[20px] md:pt-[30px] lg:pt-[50px] pb-[82px]'>
      <div className='w-full flex justify-center'>
        <div className='w-full max-w-[1225px] mx-[20px] relative'>
          <div className='min-[1225px]:max-w-[805px] lg:max-w-[calc(100vw-460px)] text-dark text-center md:text-left flex flex-col gap-[8px]'>
            <div className='lg:mt-[20px] capitalize text-center md:text-left text-[32px] md:text-[40px] lg:text-[44px] italic font-light'>Sharon Peled</div>
            <div className='lg:mt-[20px] capitalize text-center md:text-left text-[18px]'>Modern Applied Psychology & Personal Development</div>
            <div className='flex flex-col gap-[5px]'>
              <div className='flex flex-col md:flex-row gap-[5px] max-md:justify-center max-md:items-center md:items-end text-[16px] md:text-[18px]'>
                <div className='text-Label'>Category:&nbsp;</div>
                <div className='flex gap-[5px]'>
                  <BadgeCard text='educator' />
                  <BadgeCard text='doula' />
                </div>
              </div>
              <div className='flex flex-col text-center md:text-left md:flex-row text-[16px] md:text-[18px]'>
                <div className='text-Label whitespace-nowrap'>Location:&nbsp;</div>
                <div>Odim (near Netanya)</div>
              </div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row lg:flex-col gap-[30px] max-lg:w-full absolute top-[200px] md:top-[180px] lg:top-0 right-0'>
            <div className='max-md:max-w-[385px] max-md:m-auto lg:max-w-[385px] flex flex-col md:flex-row md:items-center overflow-hidden border-[2px] rounded-[15px] border-beighe'>
              <div className='md:max-lg:w-[229px]'>
                <img draggable='false' src='/img/teacher.png' alt='Sharon Peled' className={`max-w-[385px] w-full ${process.env.DEV_MODE && 'blur-lg'}`} />
              </div>
            </div>
            <div className='max-md:max-w-[385px] max-md:w-full max-md:m-auto lg:max-w-[385px] flex flex-col md:flex-row md:items-center '>
              <VideoCard title={`Meghan Markle&apos;s birth preparation course`} videoUrl='YGxKPJDzok8' style='w-full md:h-[233px] lg:h-[213px]' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}