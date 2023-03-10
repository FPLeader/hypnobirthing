import { HomeTitle } from '@/components/Titles'
import { RegularButton } from '@/components/Buttons'

export default function CommunitySection() {
  return (
    <div className='py-[30px] md:py-[80px] lg:py-[120px] flex justify-center bg-bcg_2'>
      <div className='max-w-[1225px] mx-[20px]'>
        <div className='md:flex md:justify-between md:items-end w-full'>
          <HomeTitle
            text='Our Professional Community'
            link='/ourcommunity'
          />
          <div className='hidden md:block'>
            <RegularButton text='read more' />
          </div>
        </div>
        <div className='mt-[20px] md:mt-[70px] grid md:grid-cols-12 gap-[20px] md:gap-[30px] lg:gap-[70px]'>
          <div className='relative w-full h-max md:h-full max-md:row-start-2 md:col-span-5'>
            <img draggable='false' src='/img/community.png' alt='' className='w-full h-full max-md:max-h-[400px] object-cover' />
            <div className='absolute bottom-[10px] left-[17px] text-white'>photo by Shelley Lawnikanus</div>
          </div>
          <div className='w-full md:col-span-7'>
            <div className='text-dark text-[16px] lg:text-[18px] tracking-wide leading-loose'>
              <div>
                Pashut Laledet is a community of like minded professionals who support families throughout the childbearing year with HypnoBirthing tools and philosophy. We believe that all babies deserve a calm and loving welcome to the world. Their parents should feel supported throughout this amazing time in their lives.
              </div>
              <br />
              <div>
                Giving birth is a natural process. Yet a burden of anxiety and fear of birth has been passed from generation to generation across western societies. This has resulted in a modern medical system that is led by fear. Even women who believe that birth is normal and natural often get caught up in the fear based approach. In many cultures, for thousands of years women have supported women through pregnancy and birth. This custom serves to reduce fear and allows women to connect to their bodies and their intuition. In this tradition, we invite you to join us.
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-[20px] block md:hidden'>
          <RegularButton text='read more' />
        </div>
      </div>
    </div>
  )
}
