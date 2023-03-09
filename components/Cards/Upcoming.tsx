import { useRouter } from 'next/router'

interface UpcomingCardProps {
  id: number,
  image: string,
  title: number,    // date
  header: string,
  content: string,
  author: string,
}

export default function UpcomingCard({
  id,
  image,
  title = Date.now(),
  header,
  content,
  author
}: UpcomingCardProps) {
  const router = useRouter();
  const moment = require('moment');

  return (
    <div className='max-md:max-w-[385px] max-md:m-auto w-full flex flex-col gap-[10px] lg:gap-[15px]' onClick={() => { router.push(`/blog/${id}`) }}>
      <div className='flex flex-col bg-beighe hover:cursor-pointer rounded-[15px] overflow-hidden'>
        <img draggable='false' src={image} alt='' className='w-full' />
        <div className='text-dark text-[12px] lg:text-[16px] text-center pt-[7.5px] lg:pt-[10px] pb-[6.5px] lg:pb-[9px]'>{moment(title).format('DD/MM/YYYY, dddd, HH:mm')}</div>
      </div>
      <div className='text-dark text-center flex flex-col gap-y-[10px] lg:gap-y-[6px]'>
        <div className='text-[16px] lg:text-[24px] font-medium'>{header}</div>
        <div className='text-[14px] lg:text-[18px]'>{content}</div>
        <div className='text-[14px] lg:text-[18px] opacity-60'>—&nbsp;{author}</div>
      </div>
    </div>
  )
}