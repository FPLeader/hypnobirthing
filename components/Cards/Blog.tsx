import { useRouter } from 'next/router'

interface BlogCardProps {
  id: number;
  image: string;
  title: string;
  header: string;
  content: string;
  author: string;
}

export default function BlogCard({
  id,
  image,
  title,
  header,
  content,
  author
}: BlogCardProps) {
  const router = useRouter();

  return (
    <div className='w-full flex flex-col' onClick={() => { router.push(`/blog/${id}`) }}>
      <div className='flex flex-col bg-beighe hover:cursor-pointer rounded-xl'>
        <img src={image} alt={title} className='w-full rounded-t-xl' />
        <div className='text-dark text-[12px] lg:text-[16px] text-center pt-[7.5px] lg:pt-[10px] pb-[6.5px] lg:pb-[9px]'>{title}</div>
      </div>
      <div className='mt-[10px] px-[5px] lg:px-[15px] lg:mt-[15px] text-dark text-center flex flex-col gap-y-[4px] lg:gap-y-[6px]'>
        <div className='text-[16px] lg:text-[24px] font-bold'>{header}</div>
        <div className='text-[14px] lg:text-[18px] line-clamp-2'>{content}</div>
        <div className='text-[14px] lg:text-[18px] opacity-60'>—&nbsp;{author}</div>
      </div>
    </div>
  )
}