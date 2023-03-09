import { useRouter } from 'next/router'

interface BlogCardProps {
  id: number,
  image: string,
  title: string,
  header: string,
  content: string,
  author: string,
}

export default function RegularBlogCard({
  id,
  image,
  title,
  header,
  content,
  author
}: BlogCardProps) {
  const router = useRouter();

  return (
    <div className='max-md:max-w-[385px] max-md:m-auto w-full flex flex-col gap-[10px]' onClick={() => { router.push(`/blog/${id}`) }}>
      <div className='flex flex-col bg-beighe hover:cursor-pointer rounded-[15px] overflow-hidden'>
        <img draggable='false' src={image} alt={title} className='w-full' />
        <div className='text-dark text-[12px] lg:text-[16px] text-center pt-[7.5px] lg:pt-[10px] pb-[6.5px] lg:pb-[9px]'>{title}</div>
      </div>
      <div className='px-[5px] lg:px-[15px] lg:mt-[15px] text-dark text-center flex flex-col gap-[4px] lg:gap-[6px]'>
        <div className='text-[16px] lg:text-[24px] font-medium'>{header}</div>
        <div className='text-[14px] lg:text-[18px] line-clamp-2'>{content}</div>
        <div className='text-[14px] lg:text-[18px] opacity-60'>—&nbsp;{author}</div>
      </div>
    </div>
  )
}