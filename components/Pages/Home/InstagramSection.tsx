import { InstaCard } from '@/components/Cards'
import { InstagramIcon } from '@/assests/Icons'

export default function InstagramSection() {
  return (
    <div className='grid grid-cols-5 gap-x-[2px] my-[2px]'>
      <InstaCard image='img/insta.png' link='https://asdf.com' />
      <InstaCard image='img/insta.png' link='https://asdf.com' />
      <div className='w-full h-full flex flex-col justify-center items-center gap-y-[10px] bg-bcg_2'>
        <div className='opacity-20'>
          <InstagramIcon width={36} height={36} color='gray' />
        </div>
        <div className='text-dark text-[12px] md:text-[18px] lg:text-[28px] font-light italic'>We're on Instagram</div>
        <div className='text-dark text-[10px] md:text-[12px] lg:text-[14px] font-semibold'>@pashutlaledet</div>
      </div>
      <InstaCard image='img/insta.png' link='https://asdf.com' />
      <InstaCard image='img/insta.png' link='https://asdf.com' />
    </div>
  )
}