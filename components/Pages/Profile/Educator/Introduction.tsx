import { useRouter } from 'next/router'
import { BadgeCard } from '@/components/Cards'
import { UploadButton } from '@/components/Buttons'

export default function Introduction() {
  const router = useRouter()

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
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col max-lg:items-center md:flex-row lg:flex-col gap-[15px] lg:gap-[30px] max-lg:w-full absolute top-[190px] md:top-[160px] lg:top-0 right-0'>
            <div className='aspect-square'>
              <div className='max-md:max-w-[385px] max-md:m-auto lg:max-w-[385px] flex flex-col md:flex-row md:items-center overflow-hidden border-[4px] rounded-[15px] border-beighe'>
                <div className='md:max-lg:w-[229px] relative'>
                  <img draggable='false' src='/img/editphoto1.png' alt='Edit Photo' className='max-w-[385px] w-full bg-white' />
                  <div className='absolute top-0 w-full h-full flex justify-center items-center'>
                    <UploadButton text='add photo' />
                  </div>
                </div>
              </div>
            </div>
            <div className='max-lg:min-w-[260px] max-md:max-w-[385px] max-md:w-full max-md:m-auto lg:max-w-[385px] flex flex-col md:flex-row md:items-center '>
              <div className='border-[4px] border-beighe bg-white rounded-[10px] lg:rounded-[15px] w-full min-h-[233px] lg:h-[213px] flex justify-center items-center' >
                <UploadButton text='Upload video of me' type={2} />
              </div>
            </div>
            <div className='flex flex-col gap-[15px] lg:gap-[30px]'>
              <div className='max-w-[385px] px-[5px] flex flex-col gap-[15px]'>
                <div className='text-[18px]'>To get started with our service Pashut Laledet, please fill in your details:</div>
                <ul className='list-disc pl-[20px]'>
                  <li className='text-[16px] md:text-[18px]'>About me</li>
                  <li className='text-[16px] md:text-[18px]'>Photo</li>
                  <li className='text-[16px] md:text-[18px]'>Upcoming Session</li>
                </ul>
              </div>
              <button
                className={`w-full whitespace-nowrap h-max text-center px-[38px] py-[12.5px] lg:py-[17.5px] text-dark text-[14px] font-medium uppercase bg-beighe hover:bg-bhover active:bg-beighe rounded-[500px] select-none cursor-pointer transition-all duration-300`}
                onClick={() => router.push('/profile/settings')}
              >
                Profile Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}